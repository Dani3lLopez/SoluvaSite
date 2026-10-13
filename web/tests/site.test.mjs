import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { loadEnv } from 'vite';
import { normalizeSiteUrl } from '../config/site.mjs';

const buildRoot = resolve(process.env.SEO_BUILD_DIR || 'dist');
const html = readFileSync(join(buildRoot, 'index.html'), 'utf8');
const site = normalizeSiteUrl(loadEnv('production', process.cwd(), 'SITE_URL').SITE_URL);

test('La navegación y los enlaces locales tienen destinos reales', () => {
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.has(match[1]), 'Ancla sin destino: ' + match[1]);
  }
  for (const match of html.matchAll(/(?:src|href)="(\/[^"]+)"/g)) {
    const asset = match[1].split('?')[0];
    assert.ok(existsSync(join(buildRoot, asset)), 'Asset ausente: ' + asset);
  }
});

test('Los contactos coinciden con la fuente y no hay envío simulado', () => {
  assert.match(html, /https:\/\/wa\.me\/50374692411/);
  assert.match(html, /mailto:info@gruposoluva\.com/);
  assert.doesNotMatch(html, /<form\b/i);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /<html lang="es-SV"/);
  assert.equal((html.match(/class="service"/g) ?? []).length, 7);
});

test('El favicon contiene las resoluciones de pestaña y un recurso ICO real', () => {
  const ico = readFileSync(join(buildRoot, 'favicon.ico'));
  assert.equal(ico.readUInt16LE(0), 0);
  assert.equal(ico.readUInt16LE(2), 1);
  const sizes = [];
  for (let i = 0; i < ico.readUInt16LE(4); i++) sizes.push(ico[6 + i * 16] || 256);
  for (const size of [16, 32, 48, 64, 128, 256]) assert.ok(sizes.includes(size));
});

test('El contenido principal y los metadatos describen los servicios y el país', () => {
  assert.match(html, /<title>SOLUVA \| Seguridad electrónica en El Salvador<\/title>/);
  assert.match(html, /<h1[^>]*>[\s\S]*?Seguridad electrónica\./);
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  assert.ok(description?.includes('Videovigilancia'));
  assert.ok(description?.includes('El Salvador'));
  assert.match(html, /name="twitter:card"/);
  assert.match(html, /property="og:site_name" content="SOLUVA"/);
});

test('Los datos estructurados son válidos y no inventan horarios ni reseñas', () => {
  const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1);
  const schema = JSON.parse(scripts[0][1]);
  assert.equal(schema['@context'], 'https://schema.org');
  const business = schema['@graph'].find((node) => node['@type'] === 'LocalBusiness');
  assert.equal(business.name, 'SOLUVA');
  assert.equal(business.telephone, '+50374692411');
  assert.equal(business.email, 'info@gruposoluva.com');
  assert.equal(business.address.addressLocality, 'San Salvador');
  assert.equal(business.address.addressCountry, 'SV');
  assert.equal(business.hasOfferCatalog.itemListElement.length, 7);
  for (const unsupported of ['aggregateRating', 'review', 'openingHours', 'openingHoursSpecification', 'geo', 'sameAs']) {
    assert.equal(business[unsupported], undefined);
  }
});

test('Canonical, robots, sitemap y datos estructurados usan el mismo dominio confirmado', () => {
  const robots = readFileSync(join(buildRoot, 'robots.txt'), 'utf8');
  const sitemap = readFileSync(join(buildRoot, 'sitemap.xml'), 'utf8');
  assert.match(sitemap, /xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9"/);
  if (site) {
    assert.ok(html.includes('rel="canonical" href="' + site + '"'));
    assert.match(html, /name="robots" content="index, follow, max-image-preview:large"/);
    assert.ok(html.includes('property="og:url" content="' + site + '"'));
    assert.ok(html.includes('property="og:image" content="' + site + 'brand/logo-soluva-social.png"'));
    assert.ok(robots.includes('Allow: /'));
    assert.ok(robots.includes('Sitemap: ' + site + 'sitemap.xml'));
    assert.ok(sitemap.includes('<loc>' + site + '</loc>'));
    const schema = JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)[1]);
    assert.ok(schema['@graph'].every((node) => node.url === site));
  } else {
    assert.doesNotMatch(html, /rel="canonical"/);
    assert.match(html, /name="robots" content="noindex, follow"/);
    assert.equal(robots, 'User-agent: *\nDisallow: /\n');
    assert.doesNotMatch(sitemap, /<loc>/);
  }
  assert.doesNotMatch(sitemap, /localhost|127\.0\.0\.1/);
  assert.doesNotMatch(html, /(?:rel="canonical"|property="og:url")\s+[^>]*(?:localhost|127\.0\.0\.1)/);
});

test('La configuración rechaza direcciones locales, inseguras o con rutas', () => {
  assert.equal(normalizeSiteUrl(''), undefined);
  assert.equal(normalizeSiteUrl(' https://soluva-seo-validation.example.org '), 'https://soluva-seo-validation.example.org/');
  for (const invalid of ['http://example.org', 'https://localhost', 'https://127.0.0.1', 'https://example.org/pagina', 'https://example.org?x=1', 'https://user:pass@example.org']) {
    assert.throws(() => normalizeSiteUrl(invalid));
  }
});

test('El titular React conserva su texto accesible en el HTML sin hidratación', () => {
  const heading = html.match(/<h1\b[^>]*id="hero-heading"[^>]*>([\s\S]*?)<\/h1>/)?.[1];
  assert.ok(heading);
  assert.ok(heading.includes('Seguridad electrónica. Tecnología que conecta.'));
  assert.ok(heading.includes('aria-hidden="true"'));
  assert.doesNotMatch(html, /<astro-island\b|client:only/);
  assert.doesNotMatch(html, /<script\b[^>]*src="[^"]*client\.[^"]*\.js"/);
});


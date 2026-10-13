import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { runInNewContext } from 'node:vm';

const root = resolve(process.env.SEO_BUILD_DIR || 'dist');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const script = readFileSync(new URL('../src/lib/logo-marquee.mjs', import.meta.url), 'utf8').replace('export function', 'function');

function setup(reduced = false) {
  let click, change;
  const preference = { matches: reduced, addEventListener: (_event, handler) => { change = handler; } };
  const label = { textContent: 'Pausar' };
  const button = { hidden: true, attributes: {}, addEventListener: (_event, handler) => { click = handler; }, setAttribute(name, value) { this.attributes[name] = value; } };
  const marquee = { dataset: { paused: 'false' }, querySelector: (selector) => selector === 'button' ? button : label };
  runInNewContext(script + '\ninitLogoMarquees();', { window: { matchMedia: () => preference }, document: { querySelectorAll: () => [marquee] } });
  return { marquee, button, label, click: () => click(), setReduced(value) { preference.matches = value; change(); } };
}

test('El control pausa y reanuda la fila con una etiqueta accesible coherente', () => {
  const state = setup();
  assert.equal(state.button.hidden, false);
  state.click();
  assert.equal(state.marquee.dataset.paused, 'true');
  assert.equal(state.label.textContent, 'Reanudar');
  assert.equal(state.button.attributes['aria-label'], 'Reanudar movimiento de las marcas');
  state.click();
  assert.equal(state.marquee.dataset.paused, 'false');
  assert.equal(state.label.textContent, 'Pausar');
});

test('Movimiento reducido conserva la fila estática y la pausa elegida por el visitante', () => {
  const state = setup(true);
  assert.equal(state.marquee.dataset.ready, 'false');
  assert.equal(state.button.hidden, true);
  state.setReduced(false);
  state.click();
  state.setReduced(true);
  state.setReduced(false);
  assert.equal(state.marquee.dataset.paused, 'true');
  assert.equal(state.marquee.dataset.ready, 'true');
});

test('Los once clientes autorizados aparecen sin testimonios inventados', () => {
  const section = html.match(/<section[^>]*id="clientes"[^>]*>([\s\S]*?)<\/section>/)?.[1];
  assert.ok(section);
  assert.equal((section.match(/class="client-cell"/g) || []).length, 11);
  for (const name of ['Digicel', 'Super Selectos', 'Grupo Q', 'Óptima', 'Acofinges de R.L.', 'Alpha Constructores', 'COBE', 'Briko', 'Ternova', 'Global Parts', 'Constructora El Salvador']) assert.ok(section.includes('aria-label="' + name + '"'));
  assert.doesNotMatch(section, /<blockquote|aggregateRating|reviewRating/);
});

test('Los 22 logos locales son PNG y reservan sus dimensiones correctas', () => {
  const logos = [...html.matchAll(/<img\b[^>]*src="(\/logos\/[^"]+)"[^>]*>/g)];
  const unique = new Set(logos.map((match) => match[1]));
  assert.equal(unique.size, 22);
  for (const path of unique) {
    const png = readFileSync(join(root, path));
    assert.deepEqual(png.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), path);
    assert.equal(png.toString('ascii', 12, 16), 'IHDR', path);
    const metadata = { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
    assert.ok(metadata.width > 0 && metadata.height > 0);
    const tag = logos.find((match) => match[1] === path)[0];
    assert.equal(Number(tag.match(/\bwidth="(\d+)"/)?.[1]), metadata.width, path);
    assert.equal(Number(tag.match(/\bheight="(\d+)"/)?.[1]), metadata.height, path);
  }
  const clone = html.match(/<ul class="logo-group logo-group--clone" aria-hidden="true">([\s\S]*?)<\/ul>/)?.[1];
  assert.ok(clone);
  assert.equal((clone.match(/alt=""/g) || []).length, 11);
  assert.doesNotMatch(clone, /<a\b|<button\b|tabindex/);
});

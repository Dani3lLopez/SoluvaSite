import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { normalizeSiteUrl } from './config/site.mjs';

const { SITE_URL } = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'SITE_URL');

export default defineConfig({
  site: normalizeSiteUrl(SITE_URL),
  output: 'static',
  devToolbar: { enabled: false },
});


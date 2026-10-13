export function normalizeSiteUrl(value) {
  if (!value?.trim()) return undefined;
  const url = new URL(value.trim());
  if (
    url.protocol !== 'https:' ||
    !url.hostname.includes('.') ||
    /^\d+\.\d+\.\d+\.\d+$/.test(url.hostname) ||
    url.hostname.endsWith('.localhost') ||
    url.hostname.endsWith('.local') ||
    url.username || url.password || url.port ||
    url.pathname !== '/' || url.search || url.hash
  ) {
    throw new Error('SITE_URL debe ser el dominio público HTTPS, sin rutas, credenciales, puerto ni parámetros.');
  }
  return url.href;
}


# SEO de SOLUVA

Fecha: 13 de octubre de 2026. Estado: dominio definitivo por definir según respuesta del usuario. El alojamiento actual https://soluvasite.vercel.app/ está accesible; el registro e indexación en Google no se han verificado.

## Resultado

Se mejoraron el título y la descripción para identificar a SOLUVA, sus servicios y El Salvador. El encabezado principal ahora describe seguridad electrónica y el texto inicial enumera servicios reales. Se mantiene un único H1 y los siete servicios siguen presentes en el HTML generado, aunque el usuario los despliegue para leerlos.

Se añadió un bloque JSON-LD con LocalBusiness, WebSite y WebPage. Usa nombre legal, año de fundación, dirección, teléfono, correo y catálogo de servicios del documento. No incluye reseñas, calificaciones, coordenadas, certificaciones ni horarios semanales sin confirmar.

Se prepararon canonical, robots.txt, sitemap.xml, Open Graph y tarjetas sociales. SITE_URL controla las direcciones del dominio oficial. Mientras éste esté pendiente, Open Graph y Twitter usan el alojamiento actual verificado https://soluvasite.vercel.app/ para publicar las direcciones absolutas de la página y del logo HD de 1254×1254. Esto evita omitir la imagen de compartir; no activa canonical ni indexación. Al configurar SITE_URL, las direcciones sociales también usan ese dominio. La imagen compartida es el logo real restaurado, no la fotografía ilustrativa de un supuesto proyecto.

La página conserva salida estática, fotografía WebP de unos 127 KB, imágenes con dimensiones declaradas, carga diferida del logo inferior y tipografía local con font-display: swap.

## Dominio y activación

No se usó el dominio del correo como dirección del sitio: el usuario confirmó que está por definir.

Mientras SITE_URL esté vacío, las compilaciones quedan con noindex, el robots.txt bloquea el rastreo y el sitemap no contiene direcciones. Los archivos están preparados, pero no son un sitemap de producción hasta confirmar el dominio. La vista de desarrollo siempre tiene noindex.

Cuando se confirme el dominio:

1. En web/, copiar .env.example como .env.
2. Asignar SITE_URL a la dirección oficial HTTPS, sólo dominio y sin rutas. El dominio debe pertenecer a SOLUVA y estar aprobado para publicación.
3. Ejecutar npm run check, npm run build y npm test. Esta compilación habilita indexación y genera canonical, sitemap y direcciones sociales.
4. Publicar web/dist/ en el alojamiento acordado. Usar una sola versión oficial del dominio; configurar redirecciones permanentes desde HTTP y las variantes www o sin www a la elegida.
5. Comprobar públicamente que inicio, robots.txt y sitemap.xml devuelvan 200, que canonical corresponda al dominio y que no exista un noindex ni una protección de acceso en producción.
6. Verificar la propiedad en Google Search Console, preferiblemente como propiedad de dominio mediante DNS. Enviar sitemap.xml y revisar la URL de inicio mediante Inspección de URLs.
7. Validar los datos de negocio con Rich Results Test y comprobar las imágenes compartidas en el sitio publicado.

La compilación es específica del dominio: cambiar SITE_URL requiere volver a generar la salida. No publicar la carpeta work/seo-production-check, usada sólo para validación. No subir documentos originales ni skills al directorio público; sólo web/dist/.

## Posicionamiento y contenido

El primer objetivo es que la búsqueda de SOLUVA o SOLUVA El Salvador identifique claramente al negocio. Para búsquedas de servicios, el contenido actual cubre videovigilancia, control de acceso, protección contra incendios, redes, telefonía, electricidad y mantenimiento.

Después de publicar, revisar consultas reales en Search Console para decidir qué servicios necesitan páginas propias con información útil: alcance, equipos, proceso, mantenimiento y proyectos autorizados. No crear páginas repetidas por ciudad ni repetir palabras clave artificialmente. No se inventaron volúmenes de búsqueda ni posiciones actuales.

Para SEO local, confirmar y mantener coherentes nombre, dirección y teléfono en el sitio y en el Perfil de Empresa de Google. Completar o verificar ese perfil con el propietario, días reales de atención, fotografías auténticas y reseñas de clientes reales. No se creó ni modificó ningún perfil externo.

## Validación ejecutada

- Revisión del proyecto: 13 archivos, 0 errores, 0 advertencias y 0 sugerencias.
- Compilación estática y siete pruebas aprobadas en modo sin dominio.
- Compilación de ensayo y las mismas siete pruebas aprobadas con un dominio reservado de ejemplo, en web/work/seo-production-check/. Ese dominio no se guardó como configuración del proyecto.
- Se verificó concordancia de canonical, og:url, imagen social, sitemap, robots y direcciones del grafo JSON-LD.
- Se verificó JSON válido, siete servicios, datos de contacto, ausencia de reseñas y horarios inventados, y rechazo de dominios locales, HTTP, credenciales o rutas.
- Inicio, robots.txt y sitemap.xml locales devuelven HTTP 200.
- La revisión visual nueva se intentó, pero la política de seguridad del navegador bloqueó el acceso de la herramienta. No se afirma una nueva revisión visual de los textos ni un resultado de Lighthouse.
- No se verificó indexación pública, recepción de mensajes, Search Console, resultados enriquecidos en Google ni métricas de usuarios reales; requieren publicar en el dominio confirmado.

La primera posición no está garantizada por estos cambios. Google debe descubrir e indexar el sitio y evaluar la relevancia, competencia y otras señales. Los datos estructurados tampoco garantizan que se muestre una presentación especial.

## Fuentes oficiales

- Guía inicial de Google: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- LocalBusiness: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Robots y noindex: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Información del negocio: https://developers.google.com/search/docs/appearance/establish-business-details
- Configuración de Astro: https://docs.astro.build/en/guides/configuring-astro/
- Imagen, URL, dimensiones y tipo para compartir: https://ogp.me/


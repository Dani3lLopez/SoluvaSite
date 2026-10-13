# Validación local

Fecha: 13 de octubre de 2026.

Recorrido revisado: visitante abre la página, consulta las soluciones, despliega un servicio, navega a Contacto y encuentra los enlaces directos del documento fuente. La página es estática; no existen API, base de datos ni recepción de formularios.

## Comprobaciones
- npm run check: 9 archivos, 0 errores, 0 advertencias, 0 sugerencias.
- npm run build: una página generada en web/dist/, salida estática correcta.
- npm test: 3 pruebas aprobadas. Comprobación de anclas y archivos, datos de contacto y estructura, encabezado y resoluciones del ICO.
- npm install: auditoría automática de 268 paquetes, 0 vulnerabilidades reportadas en ese momento.
- HTTP de página y favicon: 200.
- Navegador: revisión visual a 1440×1000, 768×1000, 390×844 y 320×780. Sin desbordamiento horizontal en esos tamaños.
- Menú móvil: apertura, cierre con Escape, devolución de foco al botón y cierre tras navegar a Contacto comprobados.
- Servicio Control de acceso: apertura y visualización de descripción comprobadas en navegador. Acordeones nativos para servicios, misión y visión.
- Imagen hero y símbolo cargados; logo inferior cargado al llegar a Contacto. Consola de la pestaña revisada sin errores ni advertencias.
- ICO real con imágenes 16, 24, 32, 48, 64, 128 y 256 px; exportaciones PNG de 32 y 180 px integradas en el HTML.
- El CSS respeta movimiento reducido y conserva foco visible. Navegación y contenido existen en HTML; el menú se mejora con JavaScript.

## Límites
Se comprobaron los destinos de WhatsApp, correo y mapa, sin enviar mensajes ni comprobar recepción. No se probó en hardware móvil físico ni se hizo una auditoría completa de accesibilidad. No hay dominio confirmado, canonical, sitemap de producción ni publicación. El logo restaurado es raster de 1254×1254, no un archivo vectorial editable. La fotografía hero es generada e ilustrativa.

Capturas de revisión disponibles como outputs de esta conversación. Los pendientes empresariales están en PENDIENTES.md.

## Actualización de SEO

Se añadieron metadatos completos, datos estructurados, control de indexación, canonical y archivos de rastreo. La revisión inicial descrita arriba precede a estos ajustes de texto. La nueva revisión del proyecto cubre 13 archivos y 7 pruebas, tanto sin dominio como con un dominio reservado sólo para comprobar la compilación. El navegador bloqueó la nueva revisión visual automática. No se ha publicado ni comprobado indexación real. Resultados y procedimiento en SEO.md.

## Revisión para GitHub

El 13 de octubre de 2026 se repitieron npm run check (13 archivos, sin errores ni advertencias), npm run build (página principal, robots.txt y sitemap.xml) y npm test (7 pruebas aprobadas) antes de subir el proyecto al repositorio autorizado Dani3lLopez/SoluvaSite. No se repitió la revisión visual en esta etapa. Se conserva la configuración sin dominio y con noindex; la subida del código a GitHub no publica el sitio web.


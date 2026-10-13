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

## Microinteracciones y React

El 13 de octubre se incorporó Text Reveal de UIArc y movimiento progresivo. npm run check: 17 archivos sin errores, advertencias ni sugerencias. Compilación estática correcta. npm test: 12 pruebas aprobadas; incluyen lógica de entradas, cancelación por movimiento reducido, foco, texto React accesible y SEO. npm install: 276 paquetes auditados, sin vulnerabilidades reportadas en ese momento. La página local responde HTTP 200 y contiene el nuevo titular y el icono del menú. El navegador no se utilizó para una nueva revisión visual por el rechazo anterior de su política de seguridad; no se eludió el bloqueo. Detalles y límites en MOVIMIENTO.md. Estos ajustes permanecen locales.

## Clientes y logos

El 13 de octubre se añadieron once clientes autorizados y once marcas de equipos, con 22 PNG locales. Se revisaron visualmente los archivos y se conservan sus fuentes. npm run check: 20 archivos, sin errores ni advertencias. Compilación estática correcta y 16 pruebas aprobadas, incluyendo datos de clientes, firmas PNG y dimensiones reservadas, pausa/reanudación, cambios de movimiento reducido y clon decorativo sin elementos enfocables. La revisión visual automatizada del conjunto a 1440, 768, 390 y 320 px permanece pendiente por el bloqueo anterior de la política del navegador; no se intentó otra vía de automatización. No se subió esta actualización ni se desplegó el sitio.

## Preparación de las actualizaciones para GitHub

El 13 de octubre de 2026, tras la autorización del usuario para subir los cambios, se repitieron npm run check (20 archivos, sin errores, advertencias ni sugerencias), npm run build y npm test (16 pruebas aprobadas). Se confirmó el repositorio Dani3lLopez/SoluvaSite y la rama main, sin cambios remotos pendientes de integrar antes del commit. Se incluyen microinteracciones, el componente React, clientes, 22 logos PNG, fuentes y documentación. La revisión visual del conjunto continúa pendiente por el bloqueo anterior del navegador. La subida a GitHub no despliega el sitio; el dominio sigue por definir y se conserva noindex.

## Color original durante hover

El 13 de octubre se añadió una transición CSS de 160 ms para recuperar los colores de clientes y equipos al pasar el cursor, con regreso a gris al retirarlo. Se aplica también al clon de la fila y conserva la preferencia de movimiento reducido. Óptima y Ternova usan una superficie oscura sólo durante hover para conservar sus letras blancas. npm run check: 20 archivos sin errores, advertencias ni sugerencias; compilación correcta y 16 pruebas existentes aprobadas. El servidor local entrega el CSS actualizado con HTTP 200. El hover no se comprobó visualmente en navegador por el bloqueo anterior; no se añadieron pruebas que reproduzcan reglas CSS. El usuario autorizó subir este ajuste a GitHub; el despliegue del sitio sigue pendiente.


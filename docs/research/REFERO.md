# Investigación y dirección fijada

Fecha: 13 de octubre de 2026. Investigación realizada con Refero MCP: tres búsquedas de estilos, tres estilos completos y una pantalla completa de contacto. Datos conservados en refero-styles.json y refero-contacto.json.

## Brief
Sitio corporativo de SOLUVA S.A. de C.V. para personas que necesitan seguridad electrónica e infraestructura tecnológica en El Salvador. Objetivo: entender las soluciones y contactar por WhatsApp o correo. Alcance: base local de una página, responsive, con contenido del documento y marca original.

## Referencias
- Principal: NEVERHACK — https://neverhack.com/en — estilo 46e36efe-3ae2-4ea4-b4d0-9b35a8e7201e. Blanco, tipografía compacta, divisores sutiles, hero en dos columnas. Se toman estas cualidades; se omiten colores de estados, ilustraciones de IA y radios grandes.
- Secundaria: Andercore — https://www.andercore.com — estilo 15fd028d-c493-47a9-8e69-0a59c6fdb14b. Se toma únicamente rojo para CTA; se descarta su lienzo oscuro completo y fotografía industrial.
- Secundaria: Factory — https://factory.ai — estilo f1ed1d46-4e76-41fe-a9f8-3017e55dc6ee. Se toman retícula editorial y listas separadas por líneas, sin interfaces de software ni colores de código.
- Patrón de contacto: Sonarworks — https://www.sonarworks.com/company/contacts — pantalla c87c6754-36a7-44d8-b201-9cee6436bf9b. Etiquetas y datos en filas, vínculos directos, sin formularios innecesarios.

## Referencia fijada para construcción directa
El usuario pidió preparar una estructura básica con colores del logo. Se fija una composición clara, hero dividido, tipografía negra grande, rojo en acciones, servicios como lista técnica y bloque de experiencia oscuro. Imagen hero generada e ilustrativa de una cámara, no un proyecto real. No requiere opciones visuales adicionales para esta base inicial.

| Decisión | Fuente | Función conservada | Motivo |
|---|---|---|---|
| Blanco y titulares negros | Logo del usuario + NEVERHACK | Lienzo y jerarquía | Identidad y legibilidad |
| Rojo en CTA | Logo + Andercore | Acciones principales | Acción reconocible |
| Archivo local | Andercore | Tipografía corporativa | Forma técnica y sin solicitudes a Google Fonts |
| Lista técnica de servicios | Factory + DOCX | Retícula y contenido | Evita repetir tarjetas sin sustancia |
| WhatsApp, correo y dirección | DOCX + Sonarworks | Contacto directo | Canales reales disponibles |
| Imagen ilustrativa de CCTV | Área de videovigilancia del DOCX | Contexto visual | No hay fotos propias entregadas |
| Logos de once clientes | DOCX + lista autorizada expresamente por el usuario | Experiencia real indicada | Añadir únicamente las empresas solicitadas, con fuentes de logos documentadas |

## Validación visual
Comparar implementación renderizada con esta dirección en escritorio y móvil. Las referencias proporcionan guía semántica, no un diseño que se clone pixel a pixel.

## Ajustes de contenido por SEO

El 13 de octubre se ajustaron los titulares y el texto inicial para nombrar seguridad electrónica, SOLUVA y El Salvador. Fuente: servicios y ubicación del DOCX, petición directa del usuario y principio de claridad de la guía de copywriting de Refero. Se conserva la dirección visual, la retícula y los colores. La nueva comprobación visual automática quedó bloqueada por la política del navegador; la validación del SEO se hizo sobre HTML compilado.

## Microinteracciones y React

Petición directa del usuario: añadir microinteracciones y animaciones tomando Design Spells y UIArc como referencias. Se revisaron de nuevo los estilos completos de NEVERHACK y Clutch Security en Refero. NEVERHACK sigue siendo la referencia dominante; de Clutch se toma únicamente la respuesta discreta de los enlaces. Se conserva el sistema existente, sin cambiar paleta ni estructura.

| Decisión | Fuente | Adaptación para SOLUVA |
|---|---|---|
| Titular con entrada por palabras | UIArc Text Reveal, componente gratuito MIT | Componente React renderizado como HTML estático; CSS local, un solo H1 y texto accesible completo |
| Flechas y menú responden a la acción | Design Spells, Sidebar icon animation in Granola | Movimiento pequeño, disparado por hover, foco o apertura del menú; sin bucles |
| Servicios expandibles con transición | Design Spells, Smooth sheet transitions in Sudoku a Day + MDN details-content | Mantener details/summary nativos y mejora progresiva en navegadores compatibles |
| Secciones entran una sola vez | Guía motion.md de Refero | Desplazamiento de 12 px y 400 ms; sin ocultar contenido antes de ejecutar JavaScript |
| Movimiento reducido y navegación sin scripts | Guía de Refero + accesibilidad de UIArc | Contenido visible, sin transformaciones ni animaciones cuando el dispositivo lo solicita |

Fuentes: https://designspells.com/spells/sidebar-icon-animation-in-granola, https://designspells.com/, https://uiarc.dev/components/text-reveal, https://uiarc.dev/r/text-reveal.json y https://uiarc.dev/license. Text Reveal se instala manualmente desde su registro público; no se usan componentes Pro. Sus tiempos y colores se adaptan a SOLUVA. La implementación SSR evita enviar un runtime React al navegador para este titular.

## Clientes y fila de logos

El usuario autorizó incorporar los once clientes de su lista y sus logos, animar la fila de marcas tecnológicas y obtener los archivos PNG. Confirmó que Óptima es la financiera y Alpha Constructores corresponde a ALPHA Construyendo historias, de alphainmobiliaria.com.sv.

Refero consultado: estilos completos de NEVERHACK (dirección dominante) y Handhold (da999138-8b32-4c82-8df7-f6d239c01f2f); pantalla completa e imagen de Dub Customers (1e5e79dc-3835-4c40-86cb-3dadc25d898f). De Handhold se toma sólo la presentación discreta de logos sin marcos decorativos. De Dub se toma la jerarquía de un encabezado de clientes seguido por logos. No se toman sus testimonios, cifras ni casos de estudio.

| Decisión | Fuente | Adaptación |
|---|---|---|
| Retícula de clientes con nombres | Lista autorizada del usuario + Dub Customers | Once empresas, sin testimonios ni afirmaciones sobre proyectos específicos |
| Logos de peso visual uniforme | Handhold + imagen aportada por el usuario | Fondo blanco, separación fina y versiones monocromas mediante CSS; PNG originales preservan sus colores |
| Fila tecnológica continua | Petición directa del usuario | Bucle lento y estable, con botón de pausa, pausa por cursor y foco, y alternativa de desplazamiento manual |
| Movimiento reducido y ausencia de scripts | Refero motion.md | Fila estática desplazable; clon decorativo oculto y sin anuncios duplicados |

Se conserva Archivo, los titulares negros, el rojo de SOLUVA en controles y las esquinas pequeñas. PNG derivados por conversión de formato, sin recrear marcas con IA. Procedencia en LOGOS.md.

## Color de logos al pasar el cursor

Petición directa del usuario: todos los logos de clientes y equipos recuperan sus colores originales al pasar el cursor y vuelven a gris al retirarlo. Se revisaron de nuevo NEVERHACK y Handhold; se mantiene el lienzo, la retícula y la presentación discreta. La guía motion.md de Refero aporta la transición breve y las propiedades explícitas; se reutiliza el token de 160 ms y se respeta movimiento reducido. El color se limita al logo bajo el cursor, incluso en el clon de la fila. Óptima y Ternova conservan sus archivos originales con letras blancas: una superficie oscura aparece detrás de esos dos logos durante hover para mantenerlos legibles. No se añaden enlaces ni controles a las imágenes.

## Texto inicial e ingeniería — 15 de octubre de 2026

Fuente de contenido y referencia fijada: captura proporcionada por el usuario en esta conversación. Se transcribe su párrafo en el hero y se añade «Servicio de ingeniería» a la lista técnica existente, conservando la jerarquía de NEVERHACK y las filas separadas por líneas de Factory. La descripción del nuevo servicio se limita a planificación y diseño técnico, actividades ya descritas en el proceso de SOLUVA. Se reutilizan tipografía, espaciado, icono de herramientas y acordeón; no se introduce otra dirección visual.

El usuario pidió después cambiar el icono de ingeniería: se sustituye la llave compartida con mantenimiento por una escuadra de dibujo técnico. La guía icons.md de Refero y el componente Icon existente fijan el lienzo de 24×24, trazo de 1,6 px, extremos redondos, currentColor y SVG decorativo oculto a lectores de pantalla; no se añade una biblioteca ni una imagen raster.


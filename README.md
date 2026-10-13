# SOLUVA

Base local del sitio corporativo de SOLUVA S.A. de C.V. Proyecto preparado el 13 de octubre de 2026.

Repositorio del proyecto: [Dani3lLopez/SoluvaSite](https://github.com/Dani3lLopez/SoluvaSite), rama `main`. Incluye código, documentación, originales, archivos de marca y skills. Las dependencias instaladas, las compilaciones, los archivos temporales y las variables de entorno privadas se excluyen con .gitignore.

## Carpetas
- docs/: originales, contenido extraído, investigación, sistema visual, pendientes y validación.
- marca/: original, logo restaurado y favicon multirresolución.
- web/: página Astro + TypeScript, contenido centralizado y assets locales.
- .agents/skills/: Refero Design, Ponytail, ImageGen y Verification.
- AGENTS.md y TASTE.md: reglas del proyecto y dirección visual vigente.

## Abrir la página
Con Node.js 22.12 o posterior:

```powershell
cd web
npm install
npm run dev
```

Abrir http://localhost:4321. También puede ejecutarse el archivo VER-PAGINA.cmd en la raíz.

## Revisar y generar salida

```powershell
cd web
npm run check
npm run build
npm test
```

La salida estática se guarda en web/dist/. npm run preview sirve esa salida. Puede alojarse como sitio estático; referencias oficiales: https://docs.astro.build/en/install-and-setup/ y https://docs.astro.build/en/guides/deploy/.

Editar textos y datos en web/src/data/company.ts, la composición en web/src/pages/index.astro y estilos en web/src/styles/global.css. La vista local funciona sin .env. Para publicar, configurar el dominio oficial mediante SITE_URL en web/.env, siguiendo docs/SEO.md.

## SEO

Metadatos, datos estructurados LocalBusiness, robots.txt y sitemap.xml preparados. El dominio está por definir: las compilaciones sin SITE_URL quedan con noindex. Al configurar el dominio HTTPS y compilar, se habilita la indexación y se generan canonical y direcciones públicas coherentes. La vista de desarrollo siempre queda con noindex.

## Estado
Página inicial local con servicios, empresa, experiencia y contacto directo. Sin formulario ni almacenamiento de datos. Revisar docs/PENDIENTES.md antes de publicación. El logo original se conserva y la imagen hero generada es ilustrativa.

## Interacciones y React

El titular usa Text Reveal, componente React gratuito de UIArc adaptado a SOLUVA y generado como HTML estático. Botones, enlaces, servicios y menú tienen respuestas breves; las secciones entran una sola vez al recorrer la página. El contenido sigue disponible sin JavaScript y el movimiento se desactiva con la preferencia del dispositivo. Referencias, licencia y límites de validación en docs/MOVIMIENTO.md.

## Clientes y marcas

La sección Clientes incorpora las once empresas solicitadas y sus logos. La fila de marcas tecnológicas utiliza once logos PNG y un movimiento continuo con pausa. Archivos locales en web/public/logos/; fuentes y límites de los originales en docs/LOGOS.md y docs/logos-fuentes.json. El usuario confirmó las identidades de Óptima y ALPHA durante esta revisión.


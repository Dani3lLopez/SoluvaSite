# Procedencia y prompts de imágenes

Se usó ImageGen integrado de Codex. El original de la marca se conservó. Los derivados se copiaron al proyecto y se exportaron en formatos para la web y el favicon. No se usó API/CLI de generación externa.

## Logo restaurado
Entrada: marca/logo-original.jpeg. Salida: marca/logo-soluva-hd.png, 1254×1254, PNG transparente. Exportación con fondo blanco en marca/logo-soluva-fondo-blanco.png. El favicon es una extracción del símbolo, con fondo blanco y siete resoluciones. No es vector editable.

Prompt final:

> Use case: precise-object-edit. Asset type: restored company logo for SOLUVA website. Edit target: attached existing SOLUVA logo. Improve resolution and edge quality ONLY, faithfully reconstructing the existing logo as crisp flat vector-like graphics in a high-resolution transparent PNG. Preserve the exact identity, geometry, proportions, centered layout and custom lettering from the reference. Black circular crescent/swoosh around a black squared rounded S, with the same bright red upper-right swoosh arc. Beneath, exact text SOLUVA, and second line S.A DE C.V, same custom geometric sans letterforms as source. No redesign. Use solid black #202020 and red #e00020. Remove white background to actual alpha transparency including all white negative spaces. Smooth clean precise edges, no JPEG artifacts, no blur, no shadows, no gradients, no mockup, no added text or shapes. Output one high resolution square logo, full stacked logo including all lettering, reasonable transparent margin. Keep black ink black, preserve the original symbol and wordmark.

Resultado revisado sobre fondo blanco y transparencia confirmada. La restauración mejora nitidez; puede presentar variaciones pequeñas de trazos respecto de un vector maestro.

## Hero ilustrativo
Salida original: marca/hero-ilustrativo-original.png. Web: web/public/images/seguridad-ilustrativa.webp, 127324 bytes. No representa un cliente, inmueble ni proyecto realizado por SOLUVA.

Prompt final:

> Asset type: editorial corporate website hero photograph, portrait 4:5 ratio. Primary request: photorealistic close view of one modern white bullet CCTV surveillance camera mounted on a clean white concrete exterior wall, directed diagonally toward the foreground left. High-quality product architectural photography, black lens and white housing, simple technically plausible camera with small mounting arm, no brand name or text. Background right edge shows quiet dark gray tinted glass facade and repeating architectural frames, slightly defocused. Daylight, clean gray black white palette, no colorful lighting. Camera occupies upper-middle left-to-center region, strong considered composition with textured concrete, architectural depth, precise crisp edges. Minimal, premium enterprise security website style, confident and understated. No people, no logos, no labels, no watermark, no collage, no screen UI, no decorative graphics. This is an illustrative security scene, not a claimed project from any real company.


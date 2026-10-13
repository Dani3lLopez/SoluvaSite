# Movimiento y microinteracciones de SOLUVA

Actualización del 13 de octubre de 2026, a petición del usuario. La dirección visual existente sigue vigente: blanco, negro, rojo y Archivo. Investigación y decisiones en research/REFERO.md; estilos completos de esta revisión en research/refero-motion-styles.json.

## Dónde se percibe

- Inicio: el titular aparece por palabras mediante Text Reveal de UIArc. La descripción, las acciones y la imagen entran con un desfase breve.
- Botones: la flecha se desplaza ligeramente al pasar el cursor o enfocar con teclado. La pulsación reduce la escala un 2 %.
- Navegación: una línea roja responde al cursor y al foco. El icono del menú móvil pasa de tres líneas a una cruz al abrirse; el panel entra suavemente.
- Servicios: iconos y títulos responden al cursor. El signo cambia con la apertura. El contenido se expande y desvanece en navegadores compatibles con details-content e interpolate-size; los demás conservan el comportamiento nativo.
- Empresa, experiencia, marcas y contacto: entradas únicas de 12 px y 400 ms al entrar en la vista. No se ocultan previamente por CSS.
- Fila tecnológica: logos PNG desplazándose en un bucle de 44 segundos; pausa por botón, cursor o foco en la fila. Movimiento reducido y ausencia de JavaScript conservan una fila estática que se puede recorrer manualmente. El clon del bucle es decorativo, sin anuncios duplicados ni controles de foco.

## Componente React utilizado

Text Reveal, gratuito y de código abierto: https://uiarc.dev/components/text-reveal. Fuente obtenida de https://uiarc.dev/r/text-reveal.json y presets de https://uiarc.dev/r/arc-motion-tokens.json. Se conservaron la API y los avisos de atribución; CSS adaptado a colores, espaciado y tiempos de SOLUVA. La licencia MIT está en web/src/components/arc/LICENSE.

Astro integra React 19 con @astrojs/react. El componente genera el H1 y su texto accesible durante la compilación; no tiene directiva client:load ni necesita hidratación. La página no referencia el bundle cliente React. Las entradas de secciones usan IntersectionObserver y Web Animations API; no se instaló Motion, GSAP ni Tailwind para esta mejora.

## Referencias

- Design Spells: https://designspells.com/ y https://designspells.com/spells/sidebar-icon-animation-in-granola. Se adapta la idea de respuesta localizada del icono a la acción del usuario, no el producto ni su diseño.
- UIArc Text Reveal: https://uiarc.dev/components/text-reveal/markdown. Animación CSS en el titular, frase completa para lectores de pantalla, palabras visuales con aria-hidden.
- Refero: NEVERHACK conserva la dirección dominante; Clutch Security aporta únicamente respuesta discreta de enlaces. La guía local references/motion.md aporta duraciones, amplitud pequeña y accesibilidad.
- MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/::details-content, mejora progresiva de servicios y misión/visión.

## Accesibilidad y comprobaciones

Movimiento reducido desactiva animaciones y transiciones CSS. Si se activa durante una entrada, se cancela la animación y se muestra el contenido. Los bloques ya recorridos o que tienen foco de teclado no se ocultan para volver a animarse. Sin JavaScript, los enlaces y details/summary permanecen operativos; el titular termina su entrada mediante CSS.

Comprobado: tipos y diagnósticos Astro sin errores, compilación estática, 12 pruebas aprobadas, HTTP 200 local y texto del componente React incluido en HTML. Las pruebas del movimiento verifican entrada única, APIs ausentes, movimiento reducido inicial y activado durante la animación, contenido ya recorrido y foco. Son pruebas de lógica con APIs simuladas; no sustituyen una revisión visual.

La nueva revisión visual automática a 1440, 768, 390 y 320 px queda pendiente: el control del navegador rechazó antes el acceso local por política de seguridad en esta conversación. No se intentó otro navegador ni una vía alternativa de automatización. No se publicaron estos cambios ni se comprobó indexación real.

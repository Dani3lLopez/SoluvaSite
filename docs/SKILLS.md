# Skills integradas y herramientas disponibles

Se reutiliza la organización que ya empleamos en LPS: AGENTS.md, TASTE.md, investigación guardada, sistema visual y skills locales.

## Copias locales
- .agents/skills/refero-design/: investigación y criterio visual. Incluye sus referencias de tipografía, color, accesibilidad, movimiento y calidad.
- .agents/skills/ponytail/: implementación mínima y completa.
- .agents/skills/imagegen/: mejora y creación de imágenes; preservar originales y guardar derivados dentro del proyecto.
- .agents/skills/verification/: verificación del recorrido del usuario y evidencia.

Las skills se copiaron de las instalaciones existentes, sin cambios globales. Estas instrucciones son portables, pero los conectores y la herramienta de imagen dependen del entorno del agente. Copiar una skill no configura credenciales ni concede acceso a Refero.

## Integraciones disponibles en Codex
Refero MCP está conectado y fue utilizado para esta base. Si otro entorno no lo tiene, usar los datos guardados y las referencias incluidas; configurar su conexión desde el gestor de plugins de ese entorno.

Documents se usa para leer DOCX. PDF y Presentations pueden incorporarse si después se piden catálogos o propuestas. React Best Practices se aplica si añadimos componentes React. No se instalan librerías por tener una skill disponible.

Supabase y Vercel quedan como herramientas opcionales: este sitio estático no requiere base de datos, cuentas ni credenciales. La publicación se definirá después de la revisión local.


export const company = {
  name: 'SOLUVA S.A. de C.V.',
  founded: 2015,
  country: 'El Salvador',
  phone: '+503 7469-2411',
  email: 'info@gruposoluva.com',
  address: '3.ª calle Poniente, n.º 3938, colonia Escalón, San Salvador, El Salvador.',
  streetAddress: '3.ª calle Poniente, n.º 3938, colonia Escalón',
  city: 'San Salvador',
  region: 'San Salvador',
  hours: '8:00 a. m. a 5:00 p. m.',
  description: 'Seguridad electrónica, tecnología e infraestructura para proteger y conectar su empresa.',
  about: 'Somos una empresa salvadoreña fundada en 2015, especializada en el suministro, instalación, configuración y mantenimiento de sistemas de seguridad electrónica e infraestructura tecnológica.',
  mission: 'Brindar soluciones integrales de seguridad electrónica e infraestructura tecnológica que contribuyan a proteger a las personas, los bienes y la continuidad operativa de nuestros clientes, mediante un servicio técnico responsable, atención personalizada y compromiso con la calidad.',
  vision: 'Ser una empresa referente en El Salvador en la integración de soluciones de seguridad y tecnología, reconocida por la calidad de sus proyectos, la confianza de sus clientes y el desarrollo continuo de su equipo.',
};

export const whatsappUrl = 'https://wa.me/50374692411?text=' + encodeURIComponent('Hola SOLUVA, me gustaría solicitar una cotización para mi proyecto.');
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(company.address);

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
];

export const services = [
  { id: 'videovigilancia', icon: 'camera', name: 'Videovigilancia', description: 'Suministro e instalación de cámaras IP y analógicas, grabadores, almacenamiento y sistemas de monitoreo local y remoto.', tags: ['Cámaras IP y analógicas', 'Monitoreo local y remoto'] },
  { id: 'acceso', icon: 'access', name: 'Control de acceso y parqueos', description: 'Lectores biométricos, controles de acceso peatonal, cerraduras electromagnéticas, barreras vehiculares y automatización de accesos.', tags: ['Acceso peatonal', 'Barreras vehiculares'] },
  { id: 'incendios', icon: 'fire', name: 'Detección y protección contra incendios', description: 'Sistemas de detección y alarma, estaciones manuales, detectores y dispositivos de notificación. Soluciones de supresión con agente limpio y CO₂, extintores y señalización de seguridad.', tags: ['Detección y alarma', 'Supresión y señalización'] },
  { id: 'redes', icon: 'network', name: 'Redes e infraestructura tecnológica', description: 'Cableado estructurado, redes de datos, Wi-Fi, gabinetes, organización y certificación de puntos de red.', tags: ['Cableado estructurado', 'Redes y Wi-Fi'] },
  { id: 'telefonia', icon: 'phone', name: 'Telefonía y comunicación', description: 'Telefonía IP, plantas telefónicas y sistemas de comunicación empresarial.', tags: ['Telefonía IP', 'Comunicación empresarial'] },
  { id: 'electricidad', icon: 'bolt', name: 'Electricidad y canalización', description: 'Instalaciones eléctricas de alta y baja tensión y canalizaciones para infraestructura tecnológica y sistemas de seguridad.', tags: ['Alta y baja tensión', 'Canalización'] },
  { id: 'soporte', icon: 'tool', name: 'Mantenimiento y soporte técnico', description: 'Servicios preventivos y correctivos, diagnóstico de fallas, configuración y puesta en marcha de equipos y sistemas.', tags: ['Preventivo y correctivo', 'Diagnóstico técnico'] },
];

export const sectors = ['Comercial', 'Corporativo', 'Residencial', 'Industrial', 'Institucional'];
export const brands = ['Hikvision', 'Honeywell', 'Fire-Lite', 'Silent Knight', 'Bosch', 'Edwards', 'Dahua', 'Axis', 'Panduit', 'Ubiquiti', 'Grandstream'];
export const process = [
  { name: 'Entendemos su proyecto', description: 'Levantamos sus necesidades y definimos el alcance de la solución.' },
  { name: 'Diseñamos la propuesta', description: 'Seleccionamos equipos y sistemas según los requerimientos técnicos.' },
  { name: 'Instalamos y configuramos', description: 'Integramos los equipos y realizamos la puesta en marcha.' },
  { name: 'Le acompañamos', description: 'Brindamos capacitación, mantenimiento y soporte técnico.' },
];
export const values = [
  { name: 'Responsabilidad', description: 'Asumimos cada proyecto con seriedad y compromiso.' },
  { name: 'Respeto', description: 'Mantenemos un trato profesional y considerado.' },
  { name: 'Trabajo en equipo', description: 'Coordinamos nuestras capacidades para lograr resultados de calidad.' },
  { name: 'Honestidad', description: 'Comunicamos con claridad los alcances y condiciones.' },
  { name: 'Solidaridad', description: 'Promovemos el apoyo mutuo y la colaboración.' },
  { name: 'Orientación al cliente', description: 'Comprendemos sus necesidades y construimos relaciones duraderas.' },
];


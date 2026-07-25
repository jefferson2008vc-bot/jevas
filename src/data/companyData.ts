import { Service, Project, GalleryItem, Testimonial, FAQItem, ProcessStep, CompanyStat } from '../types';

// Image Assets
import heroWorkshopImg from '../assets/images/jevas_hero_workshop_1784946476989.jpg';
import steelStructureImg from '../assets/images/jevas_steel_structure_1784946489436.jpg';
import gatesStairsImg from '../assets/images/jevas_gates_stairs_1784946499592.jpg';
import weldingDetailImg from '../assets/images/jevas_welding_detail_1784946513818.jpg';

export const COMPANY_INFO = {
  name: 'CONSTRUCCIONES JEVAS',
  tagline: 'Expertos en estructuras metálicas, soldadura industrial y fabricación de alta precisión.',
  phone: '+57 310 892 4510',
  whatsapp: '573108924510',
  email: 'contacto@construccionesjevas.com',
  address: 'Zona Industrial No. 4, Av. Las Industrias Edificio JEVAS, Colombia',
  schedule: 'Lunes a Viernes: 7:00 AM - 6:00 PM | Sábados: 8:00 AM - 1:00 PM',
  social: {
    facebook: 'https://facebook.com/construccionesjevas',
    instagram: 'https://instagram.com/construccionesjevas',
    linkedin: 'https://linkedin.com/company/construccionesjevas',
    whatsapp: 'https://wa.me/573108924510'
  },
  images: {
    hero: heroWorkshopImg,
    structure: steelStructureImg,
    gates: gatesStairsImg,
    welding: weldingDetailImg
  }
};

export const COMPANY_STATS: CompanyStat[] = [
  {
    value: '20+',
    numericTarget: 20,
    label: 'Años de Experiencia',
    subtext: 'Líderes en el sector metalmecánico industrial',
    icon: 'Award'
  },
  {
    value: '1000+',
    numericTarget: 1000,
    label: 'Proyectos Ejecutados',
    subtext: 'Nivel nacional en sector público y privado',
    icon: 'Building2'
  },
  {
    value: '500+',
    numericTarget: 500,
    label: 'Clientes Satisfechos',
    subtext: 'Empresas industriales y particulares',
    icon: 'Users'
  },
  {
    value: '100%',
    numericTarget: 100,
    label: 'Garantía Certificada',
    subtext: 'Normas de soldadura AWS D1.1 e ISO 9001',
    icon: 'ShieldCheck'
  }
];

export const SERVICES_LIST: Service[] = [
  {
    id: 'estructuras-metalicas',
    title: 'Fabricación de Estructuras Metálicas',
    description: 'Diseño, cálculo estructural y armado de vigas, columnas y cerchas de acero de alta resistencia.',
    category: 'estructuras',
    iconName: 'Building2',
    features: ['Cálculo de cargas AWS D1.1', 'Acero ASTM A36 / A572', 'Uniones apernadas y soldadas'],
    popular: true
  },
  {
    id: 'puertas-enrollables',
    title: 'Puertas Enrollables Industriales',
    description: 'Sistemas automatizados y manuales de persianas metálicas para bodegas, garajes y locales comerciales.',
    category: 'puertas',
    iconName: 'DoorClosed',
    features: ['Láminas galvanizadas reforzadas', 'Motores de alto tráfico', 'Aislamiento acustico opcional']
  },
  {
    id: 'puertas-corredizas',
    title: 'Puertas Corredizas de Gran Formato',
    description: 'Portones corredizos de alta seguridad para residencias, plantas industriales y conjuntos cerrados.',
    category: 'puertas',
    iconName: 'Maximize2',
    features: ['Carrileras de acero fundido', 'Cierre automático inteligente', 'Resistencia a intemperie']
  },
  {
    id: 'puertas-garage',
    title: 'Puertas de Garaje Modernas',
    description: 'Puertas seccionales, levadizas y basculantes con acabado en pintura electrostática y automatización.',
    category: 'puertas',
    iconName: 'Warehouse',
    features: ['Apertura a control remoto', 'Diseño personalizado vanguardista', 'Sistemas anti-atrapamiento']
  },
  {
    id: 'escaleras-metalicas',
    title: 'Escaleras Metálicas y de Emergencia',
    description: 'Escaleras caracol, helicoidales, rectas y de incendios diseñadas según normativa de seguridad laboral.',
    category: 'cerrajeria',
    iconName: 'TrendingUp',
    features: ['Peldaños antideslizantes', 'Barandas de contención integradas', 'Estructuras modulares']
  },
  {
    id: 'cubiertas-industriales',
    title: 'Cubiertas Industriales',
    description: 'Instalación de techos autoportantes, tejas termoacústicas y sistemas de ventilación cenital.',
    category: 'coberturas',
    iconName: 'Layers',
    features: ['Protección UV y anticorrosión', 'Canales de desagüe de alto flujo', 'Aislamiento térmico poliuretano'],
    popular: true
  },
  {
    id: 'techos-metalicos',
    title: 'Techos Metálicos y Pergolas',
    description: 'Soluciones estéticas y funcionales en acero estructural y policarbonato para terrazas y parqueaderos.',
    category: 'coberturas',
    iconName: 'Umbrella',
    features: ['Estructuras livianas o pesadas', 'Diseños bioclimáticos', 'Pintura termoendurecida']
  },
  {
    id: 'galpones-industriales',
    title: 'Galpones y Naves Industriales',
    description: 'Construcción llave en mano de bodegas, galpones agrícolas e infraestructura para logística.',
    category: 'estructuras',
    iconName: 'Factory',
    features: ['Amplios luces sin columnas', 'Montaje rápido en campo', 'Cálculo sísmico resistente'],
    popular: true
  },
  {
    id: 'soldadura-mig',
    title: 'Soldadura MIG / MAG',
    description: 'Proceso de soldadura por arco con gas protector para unión continua, rápida y sin escoria.',
    category: 'soldadura',
    iconName: 'Zap',
    features: ['Alta tasa de deposición', 'Ideal para perfiles de espesor medio', 'Acabados homogéneos'],
    popular: true
  },
  {
    id: 'soldadura-tig',
    title: 'Soldadura TIG de Alta Precisión',
    description: 'Soldadura de tungsteno con gas inerte para acero inoxidable, aluminio y uniones estéticas pulidas.',
    category: 'soldadura',
    iconName: 'Sparkles',
    features: ['Cero salpicaduras', 'Cordones estéticos de laboratorio', 'Unión de aleaciones especiales']
  },
  {
    id: 'soldadura-electrica',
    title: 'Soldadura Eléctrica MMA / SMAW',
    description: 'Soldadura por arco con electrodo revestido para trabajos estructurales en campo e intemperie.',
    category: 'soldadura',
    iconName: 'Flame',
    features: ['Electrodos E6010, E7018', 'Apta para vientos y exteriores', 'Penetración garantizada']
  },
  {
    id: 'mantenimiento-industrial',
    title: 'Mantenimiento Industrial & Refuerzo',
    description: 'Inspección, reparación de grietas, cambio de elementos corroídos y refuerzo estructural.',
    category: 'mantenimiento',
    iconName: 'Wrench',
    features: ['Diagnóstico no destructivo (NDT)', 'Turnos nocturnos o de paro', 'Certificación de estanqueidad']
  },
  {
    id: 'cerrajeria-metalica',
    title: 'Cerrajería Metálica Ornamental',
    description: 'Fabricación a medida de cerramientos, divisiones, rejillas y carpintería metálica arquitectónica.',
    category: 'cerrajeria',
    iconName: 'KeyRound',
    features: ['Cortes por fibra láser', 'Detalles minuciosos', 'Acabados mate, satinado o brillante']
  },
  {
    id: 'barandas-seguridad',
    title: 'Barandas y Pasamanos de Acero',
    description: 'Barandales en acero al carbono o acero inoxidable AISI 304 para mezanines, puentes y balcones.',
    category: 'cerrajeria',
    iconName: 'Shield',
    features: ['Cumplimiento de altura y carga', 'Anclajes químicos epóxicos', 'Líneas ergonómicas']
  },
  {
    id: 'rejas-cerramientos',
    title: 'Rejas y Perímetros de Seguridad',
    description: 'Sistemas de seguridad perimetral antiescala para plantas, empresas e instalaciones críticas.',
    category: 'cerrajeria',
    iconName: 'Lock',
    features: ['Pintura anticorrosiva anticorrosiva', 'Tubo estructural reforzado', 'Aptas para sensores']
  },
  {
    id: 'portones-industriales',
    title: 'Portones Industriales de Alto Impacto',
    description: 'Portones basculantes y plegables hidráulicos para maniobra de tractocamiones y carga pesada.',
    category: 'puertas',
    iconName: 'CheckCircle2',
    features: ['Sistemas de apertura acelerada', 'Bisagras industriales lubricas', 'Sistemas de seguridad redundante']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Taller de Fabricación Automatizado JEVAS',
    category: 'Taller',
    image: heroWorkshopImg,
    description: 'Línea de corte y ensamblado de vigas pesadas con personal altamente capacitado.'
  },
  {
    id: 'g2',
    title: 'Estructura de Galpón Industrial 3,500 m²',
    category: 'Galpones',
    image: steelStructureImg,
    description: 'Nave logística con arriostramientos de alta resistencia sísmica.'
  },
  {
    id: 'g3',
    title: 'Escalera Helicoidal Metálica & Portón Garaje',
    category: 'Escaleras',
    image: gatesStairsImg,
    description: 'Combinación de cerrajería arquitectónica fina y acabados mate en negro industrial.'
  },
  {
    id: 'g4',
    title: 'Cordón de Soldadura TIG de Alta Precision',
    category: 'Soldadura',
    image: weldingDetailImg,
    description: 'Inspección por tintas penetrantes para tuberías de presión en acero inoxidable.'
  },
  {
    id: 'g5',
    title: 'Cubierta Techo Termoacústico Comercial',
    category: 'Cubiertas',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    description: 'Aislamiento sándwich de 50mm para óptimo confort térmico y acústico.'
  },
  {
    id: 'g6',
    title: 'Puerta Corrediza Automatizada 12m',
    category: 'Puertas',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    description: 'Sistema vehicular pesado en parque logístico con fotocélulas de presencia.'
  },
  {
    id: 'g7',
    title: 'Célula de Soldadura Robótica Industrial',
    category: 'Taller',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    description: 'Producción en serie de subensambles estructurales con repetibilidad milimétrica.'
  },
  {
    id: 'g8',
    title: 'Oficinas Administrativas & Showroom Metal',
    category: 'Oficinas',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'Instalaciones de ingeniería donde se proyectan y modelan en 3D los cálculos.'
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'p-galpon-andino',
    title: 'Centro Logístico & Nave Industrial Andina',
    description: 'Montaje completo de estructura metálica autoportante de 4.800 m² con puentes grúa de 15 toneladas e iluminación cenital integrada.',
    category: 'Estructuras Metálicas & Galpones',
    location: 'Bogotá, Cundinamarca',
    year: '2025',
    image: steelStructureImg,
    client: 'Grupo Logístico del Norte S.A.S',
    specs: ['Área: 4,800 m²', 'Tonelaje acero: 180 Ton', 'Tiempo récord: 65 días']
  },
  {
    id: 'p-complejo-puertas',
    title: 'Cerramiento y Puertas Automatizadas Megaplanta',
    description: 'Instalación de 14 puertas enrollables de alto tráfico, 6 portones corredizos pesados y barandales de protección en mezzanine.',
    category: 'Puertas & Cerrajería Industrial',
    location: 'Medellín, Antioquia',
    year: '2024',
    image: gatesStairsImg,
    client: 'Manufacturas Industriales Alfa',
    specs: ['14 Puertas enrollables', 'Motores trifásicos 2HP', 'Pintura electrostática exterior']
  },
  {
    id: 'p-cubierta-estadio',
    title: 'Cubierta Espacial y Estructura Volada Techo',
    description: 'Diseño e ingeniería de cerchas voladas en tubería de acero estructural con recubrimiento elastomérico contra la intemperie.',
    category: 'Cubiertas & Soldadura Especializada',
    location: 'Cali, Valle del Cauca',
    year: '2024',
    image: heroWorkshopImg,
    client: 'Consorcio Deportivo del Pacífico',
    specs: ['Luz libre: 32 metros', 'Soldadura AWS D1.1', 'Nivel de precisión: +/- 2mm']
  }
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Diseño e Ingeniería 3D',
    description: 'Modelado BIM/CAD, análisis de cargas, cálculo estructural y planos mecánicos detallados.',
    iconName: 'DraftingCompass',
    details: ['Visualización 3D pre-producción', 'Simulación de cargas de viento y sismo', 'Lista optimizada de corte de material']
  },
  {
    number: '02',
    title: 'Corte y Habilitado de Materiales',
    description: 'Selección de aceros certificados ASTM, corte por plasma/láser y biselado de precisión.',
    iconName: 'Scissors',
    details: ['Limpieza ultrasónica del acero', 'Verificación de trazabilidad del lote', 'Tolerancias milimétricas']
  },
  {
    number: '03',
    title: 'Soldadura de Alta Calidad',
    description: 'Procesos MIG, TIG o Arco Eléctrico ejecutados por soldadores calificados por AWS.',
    iconName: 'Flame',
    details: ['Procedimientos WPS aprobados', 'Ensayos no destructivos (Tintas / Ultrasonido)', 'Limpieza de escoria y pulido']
  },
  {
    number: '04',
    title: 'Tratamiento de Superficie y Pintura',
    description: 'Chorreado abrasivo Sandblasting (Sa 2.5), primario anticorrosivo epóxico y esmalte poliuretano.',
    iconName: 'Paintbrush',
    details: ['Espesor de película medido en micras', 'Alta resistencia química y UV', 'Garantía anticorrosiva extendida']
  },
  {
    number: '05',
    title: 'Transporte e Instalación en Campo',
    description: 'Logística de traslado de elementos de gran longitud y montaje con camión grúa certificado.',
    iconName: 'Truck',
    details: ['Personal con curso de alturas vigente', 'Plan de izaje de cargas pesado', 'Nivelación y torquímetro de pernos']
  },
  {
    number: '06',
    title: 'Inspección Final y Entrega',
    description: 'Pruebas operativas, entrega de dossier de calidad, certificado de garantía e instructivo de uso.',
    iconName: 'CheckCircle',
    details: ['Revisión final de nivel y estanqueidad', 'Firmas de satisfacción del cliente', 'Soporte post-venta continuo']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ing. Carlos Mendoza',
    role: 'Director de Infraestructura',
    company: 'Constructora Urbana Capital',
    rating: 5,
    comment: 'Construcciones JEVAS fabricó y montó la estructura de nuestra bodega de 4.000 m² antes del plazo previsto. La soldadura pasó todas las pruebas ultrasónicas sin un solo defecto.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't2',
    name: 'Dra. María Fernanda Ríos',
    role: 'Gerente Operativa',
    company: 'Logística & Bodegaje Andino',
    rating: 5,
    comment: 'Las puertas enrollables e industriales que instalaron funcionan perfectamente bajo tráfico pesado de tractocamiones. Excelente asesoría y acabados impecables.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't3',
    name: 'Arq. Roberto Valencia',
    role: 'Socio Principal',
    company: 'Estudio Valencia Arquitectos',
    rating: 5,
    comment: 'Su capacidad para interpretar planos complejos de cerrajería ornamental y escaleras helicoidales es excepcional. JEVAS es sinónimo de precisión y confianza.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 't4',
    name: 'Santiago Benítez',
    role: 'Jefe de Mantenimiento',
    company: 'Planta Industrial MetalSur',
    rating: 5,
    comment: 'El equipo de soldadores TIG de JEVAS reparó nuestras tuberías de presión en tiempo récord durante la parada técnica. Cero fugas y profesionalismo total.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq1',
    question: '¿Qué tipo de certificaciones y normas cumplen en sus soldaduras y estructuras?',
    answer: 'Nuestras soldaduras se ejecutan bajo el código de la Sociedad Americana de Soldadura (AWS D1.1 Structural Welding Code - Steel) y AWS D1.2 para aluminio. Adicionalmente, contamos con ingenieros certificados para pruebas no destructivas (NDT) e inspección de pintura SSPC.',
    category: 'Garantía'
  },
  {
    id: 'faq2',
    question: '¿Cómo solicito una cotización y cuánto tiempo tarda el presupuesto?',
    answer: 'Puedes solicitar tu cotización enviando tus planos o descripción a través de nuestro formulario en línea, por WhatsApp directo o llamada telefónica. Presupuestos estándar se entregan en menos de 24 horas; proyectos industriales complejos con cálculo técnico en 48-72 horas.',
    category: 'Cotización'
  },
  {
    id: 'faq3',
    question: '¿Realizan proyectos a nivel nacional o únicamente local?',
    answer: 'Tenemos capacidad logística y equipos móviles para trasladar personal, maquinaria de soldadura y grúas a cualquier región del país para el montaje e instalación de estructuras metálicas y galpones.',
    category: 'Envíos y Tiempos'
  },
  {
    id: 'faq4',
    question: '¿Ofrecen garantía por los trabajos de soldadura y estructuras?',
    answer: 'Sí, todas nuestras estructuras metálicas cuentan con garantía escrita de 10 años en integridad estructural y 2 años en componentes de automatización (motores de puertas y portones), respaldados con dossier técnico de entregables.',
    category: 'Garantía'
  },
  {
    id: 'faq5',
    question: '¿Fabrican puertas y portones automatizados a medida?',
    answer: 'Totalmente. Diseñamos puertas enrollables, corredizas y levadizas personalizadas en dimensiones, espesores de lámina, color en pintura electrostática y sistemas de automatización con control remoto, sensores de presencia o apertura celular.',
    category: 'Servicios'
  },
  {
    id: 'faq6',
    question: '¿Ofrecen servicio de mantenimiento preventivo y correctivo industrial?',
    answer: 'Sí, contamos con cuadrillas de respuesta rápida para emergencias de mantenimiento industrial, reparación de fisuras, refuerzo de vigas fatigadas y servicio a portones automatizados.',
    category: 'Servicios'
  }
];

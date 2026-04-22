// src/data/proyectosData.ts

export interface Proyecto {
  slug: string;
  titulo: string;           // nombre de marca (Hilink, Carpio…)
  tituloNegocio: string;    // título orientado a negocio (para cards)
  descripcion: string;
  problema: string;
  solucion: string;
  cliente: string;
  año: number;
  categoria: string;
  region?: string;          // contexto geográfico (Australia, Perú…)
  imagen: string;
  resultados: string[];
  stack?: string[];
  autor?: string;
  enlaceWeb?: string;
}


export const proyectos: Proyecto[] = [

  // 1. Internacional (Australia)
  {
    slug: "hilink-dashboard",
    titulo: "Hilink",
    tituloNegocio: "Plataforma digital para empresa internacional",
    descripcion:
      "Diseñamos la plataforma completa de una startup internacional de turismo de aventura: app móvil, mapas offline y panel de administración orientado a conversión.",
    problema:
      "Una startup australiana de turismo de aventura necesitaba una plataforma digital completa. Sus usuarios no podían planificar rutas ni orientarse en zonas sin cobertura, y no existía un panel de gestión para los operadores.",
    solucion:
      "Diseñamos una app móvil con mapas completamente offline, planificación de rutas personalizadas y realidad aumentada para orientación en campo. Incluye panel administrativo para gestores de destinos y módulo de comunidad para descubrimiento de nuevas rutas.",
    cliente: "Hilink Solutions",
    año: 2024,
    categoria: "Product Design",
    region: "Australia",
    imagen: "/proyectos/4.png",
    resultados: [
      "Navegación funcional sin conexión a internet",
      "Reducción de incidencias por desorientación en ruta",
      "Panel de gestión claro para administradores de destinos",
      "Módulo de descubrimiento que incrementa retención de usuarios",
    ],
    stack: ["React Native", "Node.js", "Figma"],
    enlaceWeb: "https://travelhk.netlify.app/"
  },

  // 2. Marketplace (Perú)
  {
    slug: "prestopolis-web",
    titulo: "Prestopolis",
    tituloNegocio: "Marketplace de inversión inmobiliaria",
    descripcion:
      "Construimos el marketplace que conecta inversionistas con proyectos inmobiliarios en Perú: gestión de proyectos, depósitos y panel de rendimientos en un solo sistema.",
    problema:
      "Gestores de proyectos inmobiliarios no tenían una plataforma que conectara a inversionistas individuales con sus oportunidades de forma transparente, con trazabilidad de depósitos y rendimientos en tiempo real.",
    solucion:
      "Desarrollamos una plataforma completa de crowdfunding inmobiliario: publicación de proyectos, gestión de depósitos, panel de inversiones por usuario y dashboard administrativo para gestores. Arquitectura robusta con Next.js en frontend, Laravel y NestJS en backend.",
    cliente: "Miguel",
    año: 2024,
    categoria: "Web",
    region: "Perú",
    imagen: "/proyectos/prestopolis.svg",
    resultados: [
      "Plataforma operativa conectando inversionistas con proyectos reales",
      "Panel administrativo completo para gestores e inversionistas",
      "Trazabilidad total de depósitos y estado de cada proyecto",
    ],
    stack: ["Next.js", "Laravel", "MySQL"],
    autor: "Sebastian",
    enlaceWeb: "https://www.prestopolis.com/plataforma"
  },

  // 3. CRM / Sistema
  {
    slug: "carpio-web",
    titulo: "Carpio",
    tituloNegocio: "Sistema CRM para gestión de clientes y ventas",
    descripcion:
      "Sistema CRM a medida que reemplazó hojas de cálculo y centralizó la operación comercial: clientes, inventario de vehículos, oportunidades de venta y reportes.",
    problema:
      "Una concesionaria de vehículos operaba sin sistema centralizado. Los seguimientos de clientes se hacían en hojas de cálculo, las oportunidades se perdían y no había visibilidad del pipeline comercial.",
    solucion:
      "Construimos un CRM interno con módulos de contactos, inventario de vehículos, seguimiento de oportunidades por etapa y reportes de actividad. La plataforma reemplazó los procesos manuales y centralizó la operación completa del equipo de ventas.",
    cliente: "Anthony",
    año: 2024,
    categoria: "Sistema Administrativo",
    region: "Perú",
    imagen: "/proyectos/carpio.png",
    resultados: [
      "Pipeline de ventas visible y estructurado por etapa",
      "Cero pérdida de leads por falta de seguimiento",
      "Gestión de clientes completamente centralizada y auditable",
    ],
    stack: ["Laravel", "Vue", "MySQL"],
    autor: "Sebastian & Julio"
  },

  // 4. Fintech
  {
    slug: "ganahoy-app",
    titulo: "Gana Hoy",
    tituloNegocio: "Plataforma fintech de ahorro personal",
    descripcion:
      "Plataforma de ahorro que permite crear planes personalizados por meta, monitorear movimientos en tiempo real y mantener hábitos financieros sostenidos.",
    problema:
      "Usuarios sin herramientas accesibles para crear y mantener hábitos de ahorro. Las soluciones existentes eran complejas, poco transparentes y no adaptables a objetivos personales distintos.",
    solucion:
      "Diseñamos una plataforma de ahorro con planes flexibles por meta, monitoreo en tiempo real y una interfaz que prioriza confianza y simplicidad para fomentar adopción sostenida.",
    cliente: "Gana Hoy",
    año: 2024,
    categoria: "Product Design",
    region: "Perú",
    imagen: "/proyectos/gana-hoy.png",
    resultados: [
      "Planes de ahorro personalizados y ajustables por objetivo",
      "Monitoreo de metas en tiempo real desde cualquier dispositivo",
      "Alta tasa de adopción en primeras sesiones de uso",
    ],
    stack: ["React", "Node.js", "Figma"],
    enlaceWeb: "https://ganahoy.netlify.app/"
  },
];

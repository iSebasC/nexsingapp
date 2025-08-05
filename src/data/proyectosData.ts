// src/data/proyectosData.ts

export interface Proyecto {
  slug: string;
  titulo: string;
  descripcion: string;
  cliente: string;
  año: number;
  categoria: string;
  imagen: string;
  resultados: string[];
  stack?: string[];       // ← NUEVO: tecnologías/herramientas usadas
  autor?: string;         // ← NUEVO: autor del proyecto (opcional)
  enlaceWeb?: string;     // ← NUEVO: enlace a la web del proyecto (opcional)
}


export const proyectos: Proyecto[] = [
  {
    slug: "hilink-dashboard",
    titulo: "Hilink",
    descripcion:
      "Hilink es una aplicación móvil y plataforma web para senderistas y exploradores de naturaleza. Ofrece mapas offline, planificación de rutas y tecnología de realidad aumentada para guiar a los usuarios incluso sin conexión a internet. La solución está diseñada con un enfoque UX/UI moderno, rendimiento optimizado y funcionalidades enfocadas en seguridad, comunidad y descubrimiento de nuevos destinos.",
    cliente: "Hilink Solutions",
    año: 2024,
    categoria: "Product Design",
    imagen: "/proyectos/4.png",
    resultados: [
      "Diseño intuitivo y visualmente atractivo",
      "Mapas sin conexión para zonas sin cobertura",
      "Tecnología de realidad aumentada para orientación",
      "Sección de descubrimiento de nuevas rutas cada mes",
      "Panel informativo claro para usuarios y administradores"
    ],
    enlaceWeb: "https://travelhk.netlify.app/"
  },
  {
    slug: "carpio-web",
    titulo: "Carpio",
    descripcion:
      "Plataforma administrativa orientada a la gestión de ventas de autos. Se mejoraron funcionalidades tipo CRM para optimizar procesos comerciales.",
    cliente: "Anthony",
    año: 2024,
    categoria: "Sistema Administrativo",
    imagen: "/proyectos/carpio.png",
    resultados: [
      "Sistema CRM para seguimiento de ventas",
      "Gestión de contactos, vehículos y oportunidades",
      "Optimización del flujo de trabajo interno",
    ],
    stack: ["Laravel", "Vue", "MySQL", "cPanel"],
    autor: "Sebastian & Julio"
  }, 
  {
    slug: "ganahoy-app",
    titulo: "Gana Hoy",
    descripcion:
      "GanaHoy es una plataforma diseñada para ayudar a los usuarios a gestionar sus ahorros de forma inteligente, segura y personalizada. La aplicación permite crear planes de ahorro según las metas del usuario, controlar los movimientos en tiempo real y garantizar la seguridad con tecnología moderna. Su diseño UX/UI está centrado en la simplicidad y confianza, facilitando la adopción de buenos hábitos financieros.",
    cliente: "Gana Hoy",
    año: 2024,
    categoria: "Product Design",
    imagen: "/proyectos/gana-hoy.png",
    resultados: [
      "Planes de ahorro personalizados y flexibles",
      "Gestión y monitoreo fácil desde cualquier lugar",
      "Seguridad garantizada para datos y transacciones",
      "Testimonios reales que refuerzan la confianza del usuario",
      "Sección de preguntas frecuentes para resolver dudas comunes"
    ],
    enlaceWeb: "https://ganahoy.netlify.app/"
  },
  {
    slug: "prestopolis-web",
    titulo: "Prestopolis",
    descripcion:
      "Prestopolis es una plataforma de crowdfunding inmobiliario que conecta inversionistas con proyectos gestionados de forma profesional. Permite crear proyectos, realizar depósitos y administrar inversiones. El desarrollo se realizó bajo altos estándares UX/UI y de rendimiento, garantizando una experiencia intuitiva y eficiente para el usuario final.",
    cliente: "Miguel",
    año: 2024,
    categoria: "Crowdfunding Inmobiliario",
    imagen: "/proyectos/prestopolis.svg",
    resultados: [
      "Diseño web atractivo y orientado a inversión",
      "Gestión integral de proyectos, depósitos y estadísticas",
      "Panel administrativo para gestores e inversionistas"
    ],
    stack: ["Next.js", "Laravel", "NestJS", "MySQL"],
    autor: "Sebastian",
    enlaceWeb: "https://www.prestopolis.com/plataforma"
  },
];

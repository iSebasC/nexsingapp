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
}


export const proyectos: Proyecto[] = [
  {
    slug: "hilink-dashboard",
    titulo: "Hilink",
    descripcion:
      "Sistema de gestión de tareas empresariales que ayuda a equipos a organizar y controlar sus flujos de trabajo de manera eficiente.",
    cliente: "Hilink Solutions",
    año: 2024,
    categoria: "Product Design",
    imagen: "/proyectos/4.png",
    resultados: [
      "Dashboard responsivo con KPIs en tiempo real",
      "Integración con Google Calendar y Slack",
      "Diseño centrado en la experiencia del usuario (UX)",
    ],
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
      "Aplicación móvil gamificada para promociones y sorteos. Diseñada para incentivar la participación y fidelización de usuarios.",
    cliente: "Gana Hoy",
    año: 2024,
    categoria: "Product Design",
    imagen: "/proyectos/gana-hoy.png",
    resultados: [
      "Aplicación Android & iOS con Flutter",
      "Sistema de recompensas en tiempo real",
      "Interfaz llamativa, joven y atractiva",
    ],
  },
  {
    slug: "goinmuebles-landing",
    titulo: "Go Inmuebles",
    descripcion:
      "Landing Page profesional para inmobiliaria con foco en la presentación clara de propiedades y contacto directo.",
    cliente: "Go Inmuebles",
    año: 2023,
    categoria: "Website Design",
    imagen: "/proyectos/goinmuebles.png",
    resultados: [
      "Diseño adaptable para dispositivos móviles",
      "Formulario de contacto conectado a CRM",
      "Mapa interactivo y filtros por zona",
    ],
  },
  {
    slug: "prestopolis-web",
    titulo: "Prestopolis",
    descripcion:
      "Plataforma de crowdfunding inmobiliario para conectar inversionistas con proyectos gestionados. Permite crear proyectos, realizar depósitos y administrar inversiones.",
    cliente: "Miguel",
    año: 2024,
    categoria: "Crowdfunding Inmobiliario",
    imagen: "/proyectos/prestopolis.svg",
    resultados: [
      "Diseño web atractivo y enfocado en inversión",
      "Panel administrativo para gestores e inversionistas",
      "Gestión de proyectos, depósitos y estadísticas",
    ],
    stack: ["Next.js", "Laravel", "NestJS", "MySQL"],
    autor: "Sebastian"
  },
];

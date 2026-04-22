// src/data/proyectosData.ts

export interface Proyecto {
  slug: string;
  titulo: string; // nombre de marca (Hilink, Carpio…)
  tituloNegocio: string; // título orientado a negocio (para cards)
  descripcion: string;
  problema: string;
  solucion: string;
  cliente: string;
  año: number;
  categoria: string;
  region?: string; // contexto geográfico (Australia, Perú…)
  imagen: string;
  resultados: string[];
  stack?: string[];
  autor?: string;
  enlaceWeb?: string;
}

export const proyectos: Proyecto[] = [
  {
    slug: "sorenu-crm",
    titulo: "Sorenu",
    tituloNegocio: "CRM básico para seguimiento de clientes y ventas",
    descripcion:
      "Sistema CRM desarrollado para centralizar clientes, consultas y oportunidades comerciales, facilitando el seguimiento del proceso de venta y la gestión diaria del negocio.",
    problema:
      "El negocio necesitaba una forma más ordenada de registrar clientes, hacer seguimiento a consultas y mantener visibilidad del estado comercial de cada contacto. Sin un sistema centralizado, el seguimiento era disperso y dependía demasiado de procesos manuales.",
    solucion:
      "Desarrollamos un CRM básico enfocado en gestión comercial, permitiendo registrar clientes, controlar estados de seguimiento, organizar oportunidades y dar continuidad al proceso de ventas desde una sola plataforma.",
    cliente: "Sorenu",
    año: 2026,
    categoria: "CRM / Sistema de gestión",
    region: "Perú",
    imagen: "/proyectos/sorenu.svg",
    resultados: [
      "Seguimiento más ordenado de clientes y oportunidades comerciales",
      "Centralización de la información de contacto en un solo sistema",
      "Mayor control del estado de cada lead o cliente",
      "Mejora del flujo comercial para ventas y atención",
    ],
    stack: ["Laravel", "Vue"],
    enlaceWeb: "https://sorenu.pe/",
  },

  // 2. Marketplace (Perú)
  {
    slug: "rantti-marketplace",
    titulo: "Rantti",
    tituloNegocio: "Marketplace de negociación en tiempo real",
    descripcion:
      "Marketplace que permite a compradores y vendedores negociar precios en tiempo real, combinando la experiencia de Facebook Marketplace con el modelo dinámico de negociación tipo InDrive.",
    problema:
      "Los usuarios que compran y venden en redes sociales no cuentan con una forma estructurada de negociar precios. El proceso es desordenado, con conversaciones dispersas, precios poco claros y sin control en publicaciones ni modelo de crecimiento.",
    solucion:
      "Desarrollamos una plataforma completa de marketplace con sistema de publicaciones, chat en tiempo real para negociación y lógica inspirada en InDrive. Integra planes de suscripción para controlar publicaciones y monetizar la plataforma.",
    cliente: "Rantti",
    año: 2026,
    categoria: "Sistema / Marketplace",
    region: "Perú",
    imagen: "/proyectos/rantti.png",
    resultados: [
      "Sistema de negociación en tiempo real entre compradores y vendedores",
      "Modelo de monetización implementado mediante planes de publicación",
      "Experiencia estructurada y más eficiente que redes sociales tradicionales",
    ],
    stack: ["Next.js", "Laravel", "MySQL", "Culqi"],
    enlaceWeb: "https://www.rantti.com/",
  },

  // 3. CRM / Sistema
  {
    slug: "sel-story-lessons",
    titulo: "SEL Story Lessons",
    tituloNegocio:
      "Plataforma educativa de lectura digital para colegios y familias",
    descripcion:
      "Plataforma educativa que permite a estudiantes acceder a libros digitales con lectura guiada por profesor o audio integrado, orientada a colegios y padres que buscan fortalecer el aprendizaje y la comprensión lectora.",
    problema:
      "Colegios y familias no contaban con una plataforma centralizada para ofrecer libros digitales con acceso diferenciado, lectura asistida y control de contenido según tipo de suscripción. Además, necesitaban una forma simple de monetizar el acceso premium a más libros.",
    solucion:
      "Desarrollamos una plataforma web educativa con acceso para School y Parent, catálogo de libros en planes free y premium, reproducción mediante lectura guiada o audio, panel administrativo para gestión de contenido y pasarela de pagos con Stripe para suscripciones.",
    cliente: "SEL Story Lessons",
    año: 2026,
    categoria: "EdTech / Plataforma educativa",
    region: "Australia",
    imagen: "/proyectos/logo-sel-story-lessons.png",
    resultados: [
      "Acceso diferenciado para colegios y familias dentro de una sola plataforma",
      "Sistema de suscripción premium para desbloquear más libros",
      "Panel administrativo para gestionar libros free y premium",
      "Experiencia de lectura digital con apoyo de audio y uso guiado en clases",
    ],
    stack: ["Laravel", "Vue", "Stripe"],
    enlaceWeb: "https://selstorylessons.com/",
  },
  // 4. Fintech
  {
    slug: "nowfocus-productividad",
    titulo: "NowFocus",
    tituloNegocio: "Plataforma digital para productividad personal",
    descripcion:
      "Plataforma enfocada en mejorar la concentración y gestión del tiempo mediante herramientas simples como temporizadores tipo Pomodoro, gestión de tareas y seguimiento de sesiones.",
    problema:
      "Los usuarios tienen dificultades para mantener el enfoque en tareas importantes debido a distracciones constantes, mala gestión del tiempo y falta de herramientas claras para organizar su trabajo diario.",
    solucion:
      "Diseñamos una plataforma web minimalista centrada en el enfoque profundo (deep work), integrando temporizadores tipo Pomodoro, gestión de tareas y métricas de productividad para fomentar disciplina y constancia.",
    cliente: "NowFocus",
    año: 2026,
    categoria: "Producto digital / Web App",
    region: "Perú",
    imagen: "/proyectos/nowfocus.svg",
    resultados: [
      "Mejora en la concentración y reducción de distracciones",
      "Incremento en la productividad diaria de los usuarios",
      "Mayor claridad en la planificación de tareas",
      "Retención de usuarios gracias a métricas y progreso visible",
    ],
    stack: ["React", "Tailwind CSS", "shadcn/ui", "Radix UI", "Framer Motion"],
    enlaceWeb: "https://www.nowfocus.dev/landing",
  },
];

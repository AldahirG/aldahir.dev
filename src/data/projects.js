export const projects = [

{
  title: "Reports & Analytics API",
  description: "API REST enterprise para generación de reportes en tiempo real sobre datos institucionales. Filtros dinámicos con JPA Specification, exportación CSV/PDF, JWT auth y documentación OpenAPI.",
  image: "/images/projects/apijava.png",
  github: "https://github.com/AldahirG/reports-api",
  githubNote: null,
  demo: null,
  liveUrl: "/api-docs/reports-api.html",
  status: null,
  tags: ["Java", "Spring Boot", "MySQL", "JWT", "TypeScript"],
  demoType: null,
  features: ["Filtros dinámicos con Specification", "Exportación CSV + PDF (iText)", "JWT access + refresh tokens", "Paginación y ordenamiento", "OpenAPI 3 / Swagger UI", "Desplegado en Railway"],
  arch: {
    frontend: "OpenAPI 3 Docs",
    backend: "Java 17 + Spring Boot 3",
    db: "MySQL 8",
    auth: "JWT + Spring Security",
    deploy: "Railway + GitHub Actions",
  }
},

{
  title: "SICEL CRM",
  description: "CRM universitario que centraliza el seguimiento de +500 prospectos estudiantiles mensuales para el área de Promoción Nacional.",
  image: "/images/projects/sicel.png",
  github: "https://github.com/AldahirG/sicel-front",
  githubNote: "Versión demo — código completo entregado al cliente",
  demo: null,
  liveUrl: null,
  status: "En producción",
  tags: ["Vue 3", "NestJS", "TypeScript", "MySQL"],
  demoType: "crm",
  previewRoute: "/preview/sicel",
  features: ["Gestión de +500 prospectos/mes", "Filtros por carrera, ciclo, campaña", "Roles: promotor / coordinador / admin", "Exportación CSV masiva", "Seguimiento por etapas", "Historial de modificaciones"],
  arch: {
    frontend: "Vue 3 + Pinia + TypeScript",
    backend: "NestJS + TypeScript",
    db: "MySQL",
    auth: "JWT + Roles",
    deploy: "VPS / Nginx",
  }
},

{
  title: "SISA",
  description: "Sistema de gestión de prácticas profesionales que digitaliza y automatiza el flujo de registro y seguimiento de alumnos.",
  image: "/images/projects/sisa.png",
  github: "https://github.com/AldahirG/sisa-front",
  githubNote: "Versión demo — código completo entregado al cliente",
  demo: null,
  liveUrl: null,
  status: "En producción",
  tags: ["Vue 3", "NestJS", "TypeScript", "PostgreSQL"],
  demoType: "sisa",
  previewRoute: "/preview/sisa",
  features: ["Control de períodos académicos", "Asignación empresa–alumno", "Avance por etapas del proceso", "Panel por carrera / coordinador", "Notificaciones de estado", "Reportes de seguimiento"],
  arch: {
    frontend: "Vue 3 + Pinia + TypeScript",
    backend: "NestJS + TypeScript",
    db: "PostgreSQL",
    auth: "JWT + Roles",
    deploy: "VPS / Nginx",
  }
},

{
  title: "Sistema de Solicitudes Internas",
  description: "Herramienta tipo Asana para gestión de requisiciones de materiales con flujo de aprobación, seguimiento por etapas y notificaciones.",
  image: "/images/projects/sisi.png",
  github: "https://github.com/AldahirG",
  githubNote: null,
  demo: null,
  liveUrl: null,
  status: null,
  tags: ["Vue 3", "NestJS", "TypeScript"],
  demoType: "sisi",
  previewRoute: "/preview/sisi",
  features: ["Solicitudes por área/departamento", "Flujo de aprobación multinivel", "Seguimiento por etapas (Kanban)", "Notificaciones en tiempo real", "Dashboard de requisiciones"],
  arch: null
},

{
  title: "Retro Reeves Ecommerce",
  description: "Tienda online de streetwear con catálogo de productos, carrito de compras y pasarela de pago integrada con Stripe.",
  image: "/images/projects/retroweb.png",
  github: "https://github.com/AldahirG/Retro-Reeves",
  githubNote: null,
  demo: "https://retroreeves.com",
  liveUrl: "https://retroreeves.com",
  status: null,
  tags: ["React", "Node.js", "JavaScript", "MySQL", "Stripe", "Redux", "JWT"],
  demoType: null,
  features: ["Catálogo con filtros y búsqueda", "Carrito + Checkout con Stripe", "Auth con JWT", "Panel admin de productos", "Gestión de órdenes"],
  arch: {
    frontend: "React + Redux",
    backend: "Node.js + Express",
    db: "MySQL",
    auth: "JWT",
    deploy: "Producción activa",
  }
},

{
  title: "Quick Favor",
  description: "App de servicios y microtareas entre usuarios, con publicación de favores, sistema de ofertas, pagos y valoraciones en tiempo real.",
  image: "/images/projects/quickfavor.JPG",
  github: "https://github.com/AldahirG",
  githubNote: null,
  demo: null,
  liveUrl: null,
  status: null,
  tags: ["React Native", "Node.js", "MongoDB", "AWS"],
  demoType: null,
  features: ["Publicación de microtareas", "Sistema de ofertas entre usuarios", "Chat en tiempo real", "Pagos integrados", "Valoraciones y reputación", "Almacenamiento en AWS S3"],
  arch: {
    frontend: "React Native (iOS + Android)",
    backend: "Node.js + Express",
    db: "MongoDB",
    auth: "JWT",
    deploy: "AWS EC2 + S3",
  }
},

{
  title: "Cafetería App",
  description: "App de pedidos en tiempo real para cafetería institucional con seguimiento en vivo para clientes y personal de cocina.",
  image: "/images/projects/cafeteriapp.png",
  github: "https://github.com/AldahirG/cafeteriapp",
  githubNote: null,
  demo: null,
  liveUrl: null,
  status: null,
  tags: ["React", "Node.js", "MongoDB"],
  demoType: "cafeteria",
  features: ["Menú digital con categorías", "Pedido en tiempo real", "Vista de cocina (order queue)", "Estado del pedido en vivo", "Historial de órdenes"],
  arch: {
    frontend: "React",
    backend: "Node.js + Socket.io",
    db: "MongoDB",
    auth: "JWT",
    deploy: null,
  }
},

]

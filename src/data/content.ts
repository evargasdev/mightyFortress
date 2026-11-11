export const SERVICES = [
  {
    number: "01",
    title: "Arquitectura de sistemas",
    copy: "Bases resilientes para productos que no pueden darse el lujo de fallar.",
    tag: "NÚCLEO / 01",
  },
  {
    number: "02",
    title: "Software a medida",
    copy: "Herramientas hechas para convertir operaciones complejas en una ventaja.",
    tag: "DESARROLLO / 02",
  },
  {
    number: "03",
    title: "APIs de alto rendimiento",
    copy: "Sistemas rápidos y observables, diseñados para una demanda constante.",
    tag: "ESCALA / 03",
  },
  {
    number: "04",
    title: "Auditoría técnica",
    copy: "Un análisis directo del código, los sistemas y las decisiones que te frenan.",
    tag: "DIAGNÓSTICO / 04",
  },
] as const;

export const PROJECTS = [
  {
    name: "FORJA / 001",
    title: "Kinetic",
    type: "Desarrollo mobile full-stack",
    source: "",
    detail:
      "Aplicación móvil enfocada al seguimiento de entrenamientos físicos, gestión de rutinas personalizadas y geolocalización de gimnasios cercanos.",
    tags: ["React Native", "Expo", "Supabase", "Vue"],
  },
  {
    name: "FORJA / 002",
    title: "Munyaal",
    type: "Prácticas de desarrollo de software",
    source: "",
    detail:
      "Prácticas profesionales donde refactoricé sistemas TPV en Vue/TS, co-desarrollé el frontend operativo de Ayoatl y construí APIs REST contenerizadas en NestJS, Next.js y Docker.",
    tags: ["TypeScript", "NestJS", "Next.js", "Docker"],
  },
  {
    name: "FORJA / 003",
    title: "Mujeres y Turismo",
    type: "Plataforma de investigación y diagnóstico",
    source: "",
    detail:
      "Plataforma web con test interactivo que evalúa condiciones laborales femeninas y genera recomendaciones personalizadas, con un dashboard analítico para que las investigadoras auditen y gestionen los datos.",
    tags: ["Next.js", "NestJS", "Postgres", "Neon"],
  },
] as const;

export const TECH_STACK = [
  ["TypeScript", "typescript"],
  ["Javascript", "javascript"],
  ["HTML", "html5"],
  ["CSS", "css3"],
  ["Node.js", "nodejs"],
  ["Astro", "astro"],
  ["Next.js", "nextjs"],
  ["Nest.js", "nestjs"],
  ["React", "react"],
  ["Vue", "vuejs"],
  ["PostgreSQL", "postgresql"],
  ["Docker", "docker"],
  ["Git", "git"],
  ["GitHub", "github"],
  ["Vercel", "vercel"],
] as const;

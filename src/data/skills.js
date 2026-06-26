const img = (src) => `<img src="${src}" style="width:14px;height:14px;vertical-align:middle" />`
const badge = (text, bg, color = '#fff') => `<span style="background:${bg};color:${color};font-size:9px;font-weight:700;padding:1px 5px;border-radius:3px;line-height:1.4">${text}</span>`

const reactSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.2" fill="#61dafb"/><ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61dafb" stroke-width="1.3" fill="none"/><ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61dafb" stroke-width="1.3" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61dafb" stroke-width="1.3" fill="none" transform="rotate(120 12 12)"/></svg>`

const angularSvg = `<svg width="13" height="13" viewBox="0 0 24 24"><path d="M12 2L2 6.5l1.64 13.27L12 22l8.36-2.23L22 6.5z" fill="#dd0031"/><path d="M12 2v20l8.36-2.23L22 6.5z" fill="#c3002f"/><path d="M12 5.5L7 16h1.9l1-2.5h4.2l1 2.5H17zm0 3.8l1.6 4h-3.2z" fill="white"/></svg>`

const javaSvg = `<svg width="12" height="14" viewBox="0 0 24 28"><path d="M8.5 21.5s-1.5.9.9 1.2c2.8.3 4.2.3 7.3-.3 0 0 .8.5 1.9 1-6.8 2.9-15.3-.2-10.1-1.9z" fill="#f89820"/><path d="M7.5 18.5s-1.7 1.3 1 1.6c3.5.4 6.3.4 11.1-.5 0 0 .6.6 1.5.9-9.8 2.9-20.7.2-13.6-2z" fill="#f89820"/><path d="M13 12.6c2 2.3-1 4.3-1 4.3s5-2.6 2.7-5.8c-2.2-3-3.9-4.4 5.3-9.5 0 0-14.5 3.6-7 11z" fill="#f89820"/></svg>`

const springSvg = `<svg width="14" height="14" viewBox="0 0 24 24"><path d="M21.8 1a10.5 10.5 0 01-1.5 4C17.6 9 12.7 11 8.5 10.5c-2.5-.3-5.3-1.8-6.5-4C1 5 1 3.5 1.5 2.5 2 4 3 5.5 4.5 6.5c2 1.3 4.5 1.5 7 1-2.5.5-5.5 0-7.5-1.5-1-1-1.5-2-1.5-3 .5 3 3 5.5 6 6 3.5.7 7.5-.5 10-3 1.5-1.5 2.5-3.5 3-5.5.3-1.2.3-.5.3-.5z" fill="#6db33f"/></svg>`

export const skillCategories = [
  {
    category: "Frontend",
    color: "#61dafb",
    icon: `<span style="font-size:18px">🖥</span>`,
    skills: [
      { name: "Vue 3",        icon: img('/icons/vue.png') },
      { name: "React",        icon: reactSvg },
      { name: "Angular",      icon: angularSvg },
      { name: "Next.js",      icon: badge('N', '#000') },
      { name: "TypeScript",   icon: badge('TS', '#3178c6') },
      { name: "JavaScript",   icon: img('/icons/js.png') },
      { name: "Tailwind CSS", icon: `<span style="color:#06b6d4;font-size:13px">◈</span>` },
      { name: "HTML / CSS",   icon: img('/icons/html-5.png') },
      { name: "Pinia",        icon: `<span style="font-size:13px">🍍</span>` },
      { name: "Vite",         icon: `<span style="font-size:13px">⚡</span>` },
    ]
  },
  {
    category: "Backend & OOP",
    color: "#6db33f",
    icon: `<span style="font-size:18px">⚙️</span>`,
    skills: [
      { name: "Java",         icon: javaSvg },
      { name: "Spring Boot",  icon: springSvg },
      { name: "NestJS",       icon: badge('N', '#e0234e') },
      { name: "Node.js",      icon: img('/icons/node-js.png') },
      { name: ".NET",         icon: badge('.NET', '#512bd4') },
      { name: "PHP",          icon: `<span style="color:#8892be;font-size:11px;font-weight:700">php</span>` },
      { name: "REST API",     icon: `<span style="font-size:13px">🔌</span>` },
    ]
  },
  {
    category: "Bases de datos",
    color: "#e8a838",
    icon: `<span style="font-size:18px">🗄</span>`,
    skills: [
      { name: "MySQL",      icon: `<span style="color:#00758f;font-size:12px">🐬</span>` },
      { name: "PostgreSQL", icon: `<span style="font-size:12px">🐘</span>` },
      { name: "MongoDB",    icon: `<span style="color:#4db33d;font-size:12px">🍃</span>` },
      { name: "SQL",        icon: `<span style="font-size:12px">🗃</span>` },
    ]
  },
  {
    category: "Mobile & DevOps",
    color: "#bb72e9",
    icon: `<span style="font-size:18px">📱</span>`,
    skills: [
      { name: "React Native", icon: reactSvg },
      { name: "Flutter",      icon: badge('F', '#027dfd') },
      { name: "Docker",       icon: `<span style="font-size:12px">🐳</span>` },
      { name: "AWS",          icon: badge('AWS', '#ff9900', '#000') },
      { name: "Git",          icon: `<span style="color:#f05032;font-size:12px">⑂</span>` },
      { name: "CI/CD",        icon: `<span style="font-size:12px">🔄</span>` },
    ]
  }
]

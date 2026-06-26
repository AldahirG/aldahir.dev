<template>
  <div class="project-card" :class="{ 'has-demo': !!project.previewRoute }">
    <div class="project-image-wrap">
      <img :src="project.image" class="project-image" :alt="project.title" />
      <div class="image-overlay"></div>
      <span v-if="project.status" class="status-badge">{{ project.status }}</span>
      <span v-if="project.previewRoute && !project.liveUrl" class="demo-badge">Demo interactivo</span>
    </div>

    <div class="project-info">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>

      <!-- FEATURES -->
      <ul v-if="project.features" class="features-list">
        <li v-for="f in project.features.slice(0, 4)" :key="f">{{ f }}</li>
      </ul>

      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">
          <span class="tag-icon" v-html="getTagIcon(tag)"></span>
          {{ tag }}
        </span>
      </div>

      <!-- ARCH DIAGRAM -->
      <div v-if="project.arch" class="arch-block">
        <button class="arch-toggle" @click="archOpen = !archOpen">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M5 9v3a4 4 0 0 0 4 4h2M19 9v3a4 4 0 0 1-4 4h-2"/></svg>
          Arquitectura del sistema
          <span class="arch-arrow" :class="{ open: archOpen }">▾</span>
        </button>
        <div v-if="archOpen" class="arch-diagram">
          <div class="arch-row">
            <div class="arch-node node-fe">
              <span class="node-label">Frontend</span>
              <span class="node-val">{{ project.arch.frontend }}</span>
            </div>
            <div class="arch-arrow-h">→</div>
            <div class="arch-node node-be">
              <span class="node-label">Backend</span>
              <span class="node-val">{{ project.arch.backend }}</span>
            </div>
            <div class="arch-arrow-h">→</div>
            <div class="arch-node node-db">
              <span class="node-label">Base de datos</span>
              <span class="node-val">{{ project.arch.db }}</span>
            </div>
          </div>
          <div class="arch-meta">
            <span class="arch-pill">🔑 {{ project.arch.auth }}</span>
            <span v-if="project.arch.deploy" class="arch-pill">🚀 {{ project.arch.deploy }}</span>
          </div>
        </div>
      </div>

      <div class="project-links">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noreferrer"
          class="link-btn link-ver"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Ver proyecto
        </a>
        <router-link
          v-else-if="project.previewRoute"
          :to="project.previewRoute"
          class="link-btn link-demo"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          Ver demo interactivo
        </router-link>
        <span v-else class="link-soon">Próximamente</span>

        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noreferrer"
          class="link-btn link-github"
        >
          <img src="/icons/github.png" alt="GitHub" />
          GitHub
        </a>
      </div>
      <span v-if="project.githubNote" class="github-note">⚠ {{ project.githubNote }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ project: Object })
const archOpen = ref(false)

const TAG_ICONS = {
  'Vue 3':        '<img src="/icons/vue.png" style="width:13px;height:13px;vertical-align:middle" />',
  'React':        '<span style="color:#61dafb;font-size:13px;line-height:1">⬡</span>',
  'React Native': '<span style="color:#61dafb;font-size:13px;line-height:1">⬡</span>',
  'Node.js':      '<img src="/icons/node-js.png" style="width:13px;height:13px;vertical-align:middle" />',
  'NestJS':       '<span style="background:#e0234e;color:#fff;font-size:9px;font-weight:700;padding:1px 4px;border-radius:3px;line-height:1">N</span>',
  'TypeScript':   '<span style="background:#3178c6;color:#fff;font-size:9px;font-weight:700;padding:1px 4px;border-radius:3px;line-height:1">TS</span>',
  'JavaScript':   '<img src="/icons/js.png" style="width:13px;height:13px;vertical-align:middle" />',
  'PostgreSQL':   '<span style="color:#336791;font-size:12px">🐘</span>',
  'MongoDB':      '<span style="color:#4db33d;font-size:12px">🍃</span>',
  'Spring Boot':  '<span style="color:#6db33f;font-size:13px">◆</span>',
  'Docker':       '<span style="color:#0db7ed;font-size:12px">🐳</span>',
  'AWS':          '<span style="background:#ff9900;color:#000;font-size:9px;font-weight:700;padding:1px 4px;border-radius:3px;line-height:1.4">AWS</span>',
  'MySQL':        '<span style="color:#00758f;font-size:12px">🐬</span>',
  'Stripe':       '<span style="background:#635bff;color:#fff;font-size:9px;font-weight:700;padding:1px 4px;border-radius:3px;line-height:1.4">S</span>',
  'Redux':        '<span style="color:#764abc;font-size:12px">◈</span>',
  'JWT':          '<span style="background:#000;color:#fff;font-size:9px;font-weight:700;padding:1px 4px;border-radius:3px;line-height:1.4">JWT</span>',
  'Java':         '<span style="color:#f89820;font-size:12px">☕</span>',
  'Angular':      '<span style="color:#dd0031;font-size:12px;font-weight:700">A</span>',
}

function getTagIcon(tag) {
  return TAG_ICONS[tag] || ''
}
</script>

<style scoped>
.project-card {
  background: var(--gray500);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(227, 100, 110, 0.15);
  border-color: rgba(227, 100, 110, 0.25);
}

.has-demo:hover {
  border-color: rgba(99, 179, 237, 0.3);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 179, 237, 0.12);
}

.project-image-wrap { position: relative; overflow: hidden; }

.project-image {
  width: 100%;
  height: 170px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image { transform: scale(1.04); }

.image-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 60px;
  background: linear-gradient(to top, var(--gray500), transparent);
  pointer-events: none;
}

.status-badge {
  position: absolute;
  top: 10px; right: 10px;
  background: var(--green);
  color: #000;
  font-size: 11px; font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
}

.demo-badge {
  position: absolute;
  top: 10px; left: 10px;
  background: rgba(99, 179, 237, 0.15);
  border: 1px solid rgba(99, 179, 237, 0.4);
  color: #90cdf4;
  font-size: 10px; font-weight: 700;
  padding: 3px 10px;
  border-radius: 999px;
  letter-spacing: 0.03em;
}

.project-info {
  padding: 18px 18px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-info h3 {
  margin-bottom: 8px;
  font-size: 17px; font-weight: 700;
  letter-spacing: -0.2px;
}

.project-info > p {
  color: var(--gray300);
  font-size: 13.5px;
  line-height: 1.55;
}

/* FEATURES */
.features-list {
  margin: 12px 0 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px 10px;
}

@media (max-width: 480px) {
  .features-list { grid-template-columns: 1fr; }
}

.features-list li {
  font-size: 11.5px;
  color: var(--gray300);
  padding-left: 14px;
  position: relative;
  line-height: 1.4;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--green);
  font-size: 10px;
  top: 1px;
  font-weight: 700;
}

.tags {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  color: var(--gray200);
}

.tag-icon { display: inline-flex; align-items: center; }

/* ARCH */
.arch-block {
  margin-top: 14px;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  overflow: hidden;
}

.arch-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 12px;
  background: rgba(255,255,255,0.03);
  border: none;
  color: var(--gray300);
  font-size: 12px; font-weight: 600;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;
}
.arch-toggle:hover { background: rgba(255,255,255,0.07); color: var(--gray100); }

.arch-arrow { margin-left: auto; transition: transform 0.2s; display: inline-block; }
.arch-arrow.open { transform: rotate(180deg); }

.arch-diagram {
  padding: 14px 12px;
  background: rgba(0,0,0,0.2);
  border-top: 1px solid rgba(255,255,255,0.06);
}

.arch-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
}

.arch-node {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid;
  text-align: center;
}

.node-label {
  font-size: 9px; font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.6;
}

.node-val { font-size: 10px; font-weight: 600; }

.node-fe  { background: rgba(65,184,131,0.08);  border-color: rgba(65,184,131,0.25);  color: #68d391; }
.node-be  { background: rgba(237,100,166,0.08); border-color: rgba(237,100,166,0.25); color: #f687b3; }
.node-db  { background: rgba(99,179,237,0.08);  border-color: rgba(99,179,237,0.25);  color: #90cdf4; }

.arch-arrow-h { color: var(--gray300); font-size: 14px; flex-shrink: 0; }

.arch-meta { display: flex; gap: 8px; flex-wrap: wrap; }

.arch-pill {
  font-size: 10.5px;
  color: var(--gray300);
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 3px 10px;
  border-radius: 6px;
}

/* LINKS */
.project-links {
  margin-top: 16px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px; font-weight: 600;
  padding: 8px 16px;
  border-radius: 9px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.link-btn img { width: 16px; height: 16px; }

.link-ver {
  background: linear-gradient(135deg, rgba(227,100,110,0.2), rgba(187,114,233,0.15));
  border: 1px solid rgba(227,100,110,0.35);
  color: #f0a0a6;
}
.link-ver:hover {
  background: linear-gradient(135deg, rgba(227,100,110,0.35), rgba(187,114,233,0.25));
  border-color: rgba(227,100,110,0.6);
  color: #fff;
}

.link-demo {
  background: linear-gradient(135deg, rgba(99,179,237,0.15), rgba(118,169,250,0.1));
  border: 1px solid rgba(99,179,237,0.35);
  color: #90cdf4;
}
.link-demo:hover {
  background: linear-gradient(135deg, rgba(99,179,237,0.28), rgba(118,169,250,0.2));
  border-color: rgba(99,179,237,0.6);
  color: #fff;
}

.link-github {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--gray200);
}
.link-github:hover { background: rgba(255,255,255,0.12); color: white; }

.link-soon {
  font-size: 12px;
  color: var(--gray300);
  font-style: italic;
  padding: 4px 0;
}

.github-note {
  font-size: 11px;
  color: var(--gray300);
  font-style: italic;
  margin-top: 6px;
}
</style>

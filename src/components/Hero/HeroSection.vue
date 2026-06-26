<template>
  <section class="hero">
    <div class="hero-background"></div>
    <div class="hero-noise"></div>

    <div class="hero-container">
      <!-- FOTO -->
      <div class="profile-container">
        <div class="profile-ring">
          <img src="/images/profile.jpg" class="profile" alt="Aldahir Gomez" />
        </div>
        <span class="code-icon">&lt;/&gt;</span>
      </div>

      <!-- DISPONIBLE BADGE -->
      <div class="available-badge">
        <span class="available-dot"></span>
        Disponible para nuevas oportunidades
      </div>

      <!-- GREETING -->
      <p class="intro code">
        Hola, mi nombre es
        <span class="highlight">Aldahir Gomez</span>
      </p>

      <!-- TITULO PRINCIPAL -->
      <h1 class="hero-title">
        Desarrollador<br />
        <span class="gradient-text">Fullstack</span>
      </h1>

      <!-- DESCRIPCION -->
      <p class="hero-description">
        Ingeniero en Software con <strong>+3 años</strong> de experiencia construyendo plataformas digitales
        institucionales, sistemas CRM y APIs REST escalables.<br />
        Especializado en ecosistema <strong>JavaScript</strong> y arquitecturas con <strong>Java Spring Boot</strong>.
      </p>

      <!-- CTA BUTTONS -->
      <div class="hero-cta">
        <a class="cta-primary" href="#projects">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          Ver proyectos
        </a>
        <a class="cta-secondary" href="#contact">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          Contactar
        </a>

        <!-- CV DROPDOWN -->
        <div class="cv-dropdown" @mouseenter="openCv" @mouseleave="closeCv">
          <button class="cta-cv">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
            CV
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-left:2px"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="cv-menu" :class="{ open: cvOpen }" @mouseenter="openCv" @mouseleave="closeCv">
            <a href="/cv/cv-vue.html" target="_blank" class="cv-option">
              <img src="/icons/vue.png" style="width:13px;height:13px" />
              CV — Vue 3 & TypeScript
            </a>
            <a href="/cv/cv-react.html" target="_blank" class="cv-option">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.2" fill="#61dafb"/><ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61dafb" stroke-width="1.3" fill="none"/><ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61dafb" stroke-width="1.3" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="3.5" stroke="#61dafb" stroke-width="1.3" fill="none" transform="rotate(120 12 12)"/></svg>
              CV — React & TypeScript
            </a>
            <a href="/cv/cv-java.html" target="_blank" class="cv-option">
              <span style="color:#f89820;font-size:13px">☕</span>
              CV — Java & Spring Boot
            </a>
          </div>
        </div>
      </div>

      <!-- CONTACTO RAPIDO -->
      <div class="quick-contact">
        <a class="qc-btn qc-wa" href="https://wa.me/527773019146?text=Hola%20Aldahir%2C%20vengo%20de%20tu%20portafolio%20%F0%9F%91%8B" target="_blank" rel="noreferrer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.109 1.516 5.842L0 24l6.335-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.014-1.374l-.36-.214-3.732.875.937-3.62-.236-.373A9.778 9.778 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/></svg>
          WhatsApp
        </a>
        <a class="qc-btn qc-email" href="mailto:aldahir.gomez.g.98@gmail.com?subject=Contacto%20desde%20portafolio&body=Hola%20Aldahir%2C%20vengo%20de%20tu%20portafolio%20%F0%9F%91%8B" target="_blank">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          aldahir.gomez.g.98@gmail.com
        </a>
        <span class="qc-modality">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Remoto · Híbrido · Presencial
        </span>
        <span class="qc-salary">💼 Open to discuss</span>
      </div>

      <!-- STACK COMPACTO -->
      <div class="hero-divider">
        <span class="divider-line"></span>
        <span class="divider-text">Stack principal</span>
        <span class="divider-line"></span>
      </div>

      <div class="tech-stack">
        <div class="tech-pill vue-pill"><img src="/icons/vue.png" alt="Vue 3" />Vue 3</div>
        <div class="tech-pill react-pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61dafb"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" fill="none" transform="rotate(120 12 12)"/></svg>
          React
        </div>
        <div class="tech-pill java-pill">
          <span style="color:#f89820;font-size:14px">☕</span>Java
        </div>
        <div class="tech-pill spring-pill">
          <svg width="14" height="14" viewBox="0 0 24 24"><path d="M21.8 1a10.5 10.5 0 01-1.5 4C17.6 9 12.7 11 8.5 10.5c-2.5-.3-5.3-1.8-6.5-4C1 5 1 3.5 1.5 2.5 2 4 3 5.5 4.5 6.5c2 1.3 4.5 1.5 7 1-2.5.5-5.5 0-7.5-1.5-1-1-1.5-2-1.5-3 .5 3 3 5.5 6 6 3.5.7 7.5-.5 10-3 1.5-1.5 2.5-3.5 3-5.5.3-1.2.3-.5.3-.5z" fill="#6db33f"/><path d="M8 14c-3 1-5 3.5-5 6.5 0 1.5.5 3 1.5 4 .5-1.5 1.5-2.5 3-3-1 1.5-1.5 3-1 4.5 1-1 2-1.5 3.5-1.5-1 .5-1.5 1.5-1.5 2.5h1c1.5 0 3-1 3.5-2.5.5 1 .5 2 0 3 1-.5 2-1.5 2-3 0-.5 0-1-.5-1.5 1 0 2 .5 2.5 1.5.5-2-.5-4-2.5-5-1-.5-2-.5-3-.5C11 18 9 16.5 8 14z" fill="#6db33f"/></svg>
          Spring Boot
        </div>
        <div class="tech-pill ts-pill"><span class="ts-badge">TS</span>TypeScript</div>
        <div class="tech-pill nest-pill"><span class="nest-badge">N</span>NestJS</div>
        <div class="tech-pill"><img src="/icons/node-js.png" alt="Node.js" />Node.js</div>
        <a class="tech-pill" href="https://github.com/AldahirG" target="_blank" rel="noreferrer">
          <img src="/icons/github.png" alt="GitHub" />GitHub
        </a>
        <a class="tech-pill linkedin-pill" href="https://www.linkedin.com/in/aldahir-gomez-garcia-63463928b" target="_blank" rel="noreferrer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
      </div>

      <!-- FLECHA SCROLL -->
      <a class="scroll-indicator" href="#projects" aria-label="Ir a proyectos">
        <span></span>
        <span></span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const cvOpen = ref(false)
let cvCloseTimer = null
function openCv() { clearTimeout(cvCloseTimer); cvOpen.value = true }
function closeCv() { cvCloseTimer = setTimeout(() => { cvOpen.value = false }, 220) }
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  background-image: url("/images/Background_Intro.png");
  background-size: cover;
  background-position: center;
  opacity: 0.45;
  z-index: 0;
}

.hero-noise {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(227, 100, 110, 0.08) 0%, transparent 70%),
              radial-gradient(ellipse 50% 40% at 80% 80%, rgba(187, 114, 233, 0.06) 0%, transparent 60%);
  z-index: 1;
  pointer-events: none;
}

.hero-container {
  position: relative;
  z-index: 2;
  max-width: 860px;
  padding: 24px;
}

/* PROFILE */
.profile-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
}

.profile-ring {
  padding: 3px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--red), var(--purple), var(--blue));
  animation: ringRotate 4s linear infinite;
  background-size: 200% 200%;
}

.profile {
  width: 130px;
  height: 130px;
  border-radius: 999px;
  object-fit: cover;
  display: block;
  border: 3px solid var(--gray600);
}

.code-icon {
  position: absolute;
  transform: translateX(70px);
  bottom: 6px;
  color: var(--green);
  font-weight: 700;
  font-size: 13px;
  font-family: "Inconsolata", monospace;
  background: var(--gray500);
  border: 1px solid rgba(130, 188, 79, 0.3);
  padding: 2px 7px;
  border-radius: 6px;
}

@keyframes ringRotate {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* TEXT */
.intro {
  margin-top: 4px;
  color: var(--gray300);
  font-size: 15px;
  letter-spacing: 0.3px;
}

.highlight { color: var(--red); }

.hero-title {
  font-family: "Asap";
  font-size: 68px;
  line-height: 1.05;
  margin-top: 12px;
  letter-spacing: -2px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--red) 0%, var(--purple) 60%, var(--blue) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  margin-top: 20px;
  color: var(--gray300);
  line-height: 1.7;
  font-size: 16px;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.hero-description strong {
  color: var(--gray100);
  font-weight: 600;
}

/* CTA */
.hero-cta {
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: var(--red);
  color: white;
  font-weight: 700;
  font-size: 15px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(227, 100, 110, 0.3);
}

.cta-primary:hover {
  background: #d94f59;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(227, 100, 110, 0.45);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 28px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--gray100);
  font-weight: 600;
  font-size: 15px;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* DIVIDER */
.hero-divider {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 36px auto 0;
  max-width: 400px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
}

.divider-text {
  font-size: 12px;
  color: var(--gray300);
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
}

/* TECH PILLS */
.tech-stack {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.tech-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 9px 16px;
  border-radius: 999px;
  font-size: 13.5px;
  color: var(--gray100);
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: default;
}

.tech-pill img {
  width: 17px;
  height: 17px;
}

.tech-pill:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

a.tech-pill { cursor: pointer; }

.linkedin-pill {
  background: rgba(10, 102, 194, 0.12);
  border-color: rgba(10, 102, 194, 0.3);
  color: #70a8e0;
}
.linkedin-pill:hover {
  background: rgba(10, 102, 194, 0.24);
  border-color: rgba(10, 102, 194, 0.55);
  color: #93c5fd;
}

.ts-badge {
  background: #3178c6;
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 5px;
  border-radius: 4px;
}

.spring-badge { color: #6db33f; font-size: 15px; line-height: 1; }
.react-badge  { color: #61dafb; font-size: 15px; line-height: 1; }

.nest-badge {
  background: #e0234e;
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
}

.vue-pill    { border-color: rgba(65, 184, 131, 0.25); }
.vue-pill:hover { border-color: rgba(65, 184, 131, 0.5); background: rgba(65, 184, 131, 0.1); }

.react-pill  { border-color: rgba(97, 218, 251, 0.25); }
.react-pill:hover { border-color: rgba(97, 218, 251, 0.5); background: rgba(97, 218, 251, 0.1); }

.angular-pill { border-color: rgba(221, 0, 49, 0.25); }
.angular-pill:hover { border-color: rgba(221, 0, 49, 0.5); background: rgba(221, 0, 49, 0.1); }

.java-pill   { border-color: rgba(248, 152, 32, 0.25); }
.java-pill:hover { border-color: rgba(248, 152, 32, 0.5); background: rgba(248, 152, 32, 0.1); }

.spring-pill { border-color: rgba(109, 179, 63, 0.25); }
.spring-pill:hover { border-color: rgba(109, 179, 63, 0.5); background: rgba(109, 179, 63, 0.1); }

.badge-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.db-badge { display: inline-flex; align-items: center; gap: 5px; }

/* EXTRA BADGES */
.extra-badges {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.09);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  color: var(--gray300);
}

/* SCROLL */
.scroll-indicator {
  margin-top: 52px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  opacity: 0.5;
  animation: scrollAnim 2s infinite;
  text-decoration: none;
}

.scroll-indicator span {
  width: 10px;
  height: 10px;
  border-bottom: 2px solid var(--gray200);
  border-right: 2px solid var(--gray200);
  transform: rotate(45deg);
}

@keyframes scrollAnim {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(8px); }
  100% { transform: translateY(0); }
}

/* QUICK CONTACT */
.quick-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.qc-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.qc-wa {
  background: rgba(37, 211, 102, 0.12);
  border: 1px solid rgba(37, 211, 102, 0.3);
  color: #25d366;
}
.qc-wa:hover { background: rgba(37, 211, 102, 0.22); border-color: rgba(37, 211, 102, 0.6); color: #fff; }

.qc-email {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--gray200);
  font-size: 12px;
}
.qc-email:hover { background: rgba(255,255,255,0.1); color: white; }

.qc-modality {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--gray300);
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.07);
}

.qc-salary {
  font-size: 12px;
  color: var(--yellow);
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(234, 189, 95, 0.25);
  background: rgba(234, 189, 95, 0.07);
}

/* DISPONIBLE BADGE */
.available-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(130, 188, 79, 0.1);
  border: 1px solid rgba(130, 188, 79, 0.3);
  color: var(--green);
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 18px;
  letter-spacing: 0.3px;
}

.available-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse-dot 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(130,188,79,0.5); }
  50%       { opacity: 0.8; box-shadow: 0 0 0 5px rgba(130,188,79,0); }
}

/* CV DROPDOWN */
.cv-dropdown {
  position: relative;
}

.cta-cv {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 13px 20px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--gray100);
  font-weight: 600;
  font-size: 15px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.cta-cv:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,255,255,0.3);
}

.cv-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--gray400);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  overflow: hidden;
  min-width: 210px;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50%) translateY(-6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 10;
}

.cv-menu.open {
  opacity: 1;
  pointer-events: all;
  transform: translateX(-50%) translateY(0);
}

.cv-option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  font-size: 13px;
  color: var(--gray100);
  text-decoration: none;
  transition: background 0.15s;
}

.cv-option:hover {
  background: rgba(255,255,255,0.08);
  color: white;
}

.cv-option + .cv-option {
  border-top: 1px solid rgba(255,255,255,0.07);
}

@media (max-width: 600px) {
  .hero-title { font-size: 42px; letter-spacing: -1px; }
  .profile { width: 110px; height: 110px; }
  .code-icon { transform: translateX(54px); }
  .hero-cta { flex-direction: column; align-items: center; }
}
</style>

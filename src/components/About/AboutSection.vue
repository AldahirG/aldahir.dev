<template>
  <section id="about" class="about">
    <div class="container about-grid">

      <!-- TEXTO -->
      <div class="about-text">
        <p class="section-label">Sobre mí</p>
        <h2 class="section-title">Construyo sistemas que<br /><span class="gradient-text">la gente usa de verdad</span></h2>

        <p class="about-p">
          Soy Aldahir, ingeniero en software de Morelos, México. Llevo más de 3 años construyendo
          plataformas digitales para entornos institucionales reales — no proyectos de práctica,
          sino sistemas que equipos operativos usan todos los días para hacer su trabajo.
        </p>
        <p class="about-p">
          Mi enfoque está en el <strong>impacto medible</strong>: cada plataforma que entrego
          tiene que resolver un problema concreto, reducir fricción y escalar sin romperse.
          Disfruto trabajar en el stack completo — desde el diseño de la API hasta la última
          interacción del usuario — y me adapto rápido a nuevos contextos y tecnologías.
        </p>
        <p class="about-p">
          Fuera del código me interesa la productividad, el diseño de sistemas y entender
          cómo las organizaciones toman decisiones técnicas. Inglés B2 funcional, sin problema
          para reuniones o documentación.
        </p>

        <div class="about-highlights">
          <div class="highlight-item">
            <span class="h-icon">🏗</span>
            <div>
              <strong>Arquitectura práctica</strong>
              <p>Diseño pensando en mantenimiento, no en impresionar</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="h-icon">🚀</span>
            <div>
              <strong>Entrega en producción</strong>
              <p>3 sistemas activos usados por cientos de personas</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="h-icon">🤝</span>
            <div>
              <strong>Trabajo en equipo</strong>
              <p>Coordiné equipos multidisciplinarios de diseño, ops y tech</p>
            </div>
          </div>
          <div class="highlight-item">
            <span class="h-icon">📐</span>
            <div>
              <strong>Adaptación rápida</strong>
              <p>De Vue a React, de NestJS a Spring Boot — el stack no me detiene</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FOTO + DATOS -->
      <div class="about-aside">
        <div class="photo-frame">
          <img src="/images/profile.jpg" alt="Aldahir Gomez" class="about-photo" />
          <div class="photo-badge">
            <span class="dot-green"></span>
            Disponible
          </div>
        </div>

        <div class="aside-info">
          <div class="info-row">
            <span class="info-label">📍 Ubicación</span>
            <span class="info-val">Emiliano Zapata, Morelos</span>
          </div>
          <div class="info-row">
            <span class="info-label">🌐 Modalidad</span>
            <span class="info-val">Remoto · Híbrido · Presencial</span>
          </div>
          <div class="info-row">
            <span class="info-label">💼 Pretensión</span>
            <span class="info-val">Open to discuss</span>
          </div>
          <div class="info-row">
            <span class="info-label">🗣 Idiomas</span>
            <span class="info-val">Español (nativo) · Inglés B2</span>
          </div>
          <div class="info-row">
            <span class="info-label">🎓 Formación</span>
            <span class="info-val">Ing. en Software · UTEZ 2025</span>
          </div>
        </div>

        <div class="aside-cta">
          <a href="https://wa.me/527773019146?text=Hola%20Aldahir%2C%20vengo%20de%20tu%20portafolio%20%F0%9F%91%8B" target="_blank" rel="noreferrer" class="aside-btn aside-wa">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.109 1.516 5.842L0 24l6.335-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.014-1.374l-.36-.214-3.732.875.937-3.62-.236-.373A9.778 9.778 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/></svg>
            Escribir por WhatsApp
          </a>
          <a href="mailto:aldahir.gomez.g.98@gmail.com?subject=Contacto%20desde%20portafolio&body=Hola%20Aldahir%2C%20vengo%20de%20tu%20portafolio" class="aside-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Enviar email
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about { padding: 120px 0; }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 64px;
  align-items: start;
}

.section-label {
  color: var(--red);
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-title {
  font-size: 34px;
  line-height: 1.15;
  margin-bottom: 28px;
  letter-spacing: -0.5px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--red), var(--purple));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-p {
  color: var(--gray300);
  font-size: 15px;
  line-height: 1.75;
  margin-bottom: 16px;
}
.about-p strong { color: var(--gray100); font-weight: 600; }

.about-highlights {
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.highlight-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.h-icon { font-size: 20px; flex-shrink: 0; margin-top: 2px; }

.highlight-item strong {
  font-size: 13.5px;
  color: var(--gray100);
  display: block;
  margin-bottom: 3px;
}

.highlight-item p {
  font-size: 12px;
  color: var(--gray300);
  line-height: 1.4;
  margin: 0;
}

/* ASIDE */
.about-aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.photo-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.about-photo {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  object-position: top;
  display: block;
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.08);
}

.photo-badge {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(13, 14, 17, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(130,188,79,0.35);
  color: var(--green);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 999px;
  white-space: nowrap;
}

.dot-green {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse-dot 2s infinite;
  flex-shrink: 0;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 0 0 rgba(130,188,79,0.5); }
  50%       { box-shadow: 0 0 0 5px rgba(130,188,79,0); }
}

.aside-info {
  background: var(--gray500);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.info-row:last-child { border-bottom: none; padding-bottom: 0; }

.info-label { color: var(--gray300); flex-shrink: 0; }
.info-val { color: var(--gray100); font-weight: 500; text-align: right; }

.aside-cta { display: flex; flex-direction: column; gap: 8px; }

.aside-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--gray100);
}
.aside-btn:hover { background: rgba(255,255,255,0.1); color: white; }

.aside-wa {
  background: rgba(37,211,102,0.1);
  border-color: rgba(37,211,102,0.3);
  color: #25d366;
}
.aside-wa:hover { background: rgba(37,211,102,0.2); color: #fff; }

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-aside { max-width: 380px; }
  .about-highlights { grid-template-columns: 1fr; }
}
</style>

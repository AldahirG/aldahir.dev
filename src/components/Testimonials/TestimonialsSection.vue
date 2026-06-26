<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <p class="section-label">Referencias</p>
      <h2 class="section-title">Quienes han trabajado <span class="gradient-text">conmigo</span></h2>
      <p class="section-sub">Contactos reales con quienes colaboré en proyectos de producción</p>

      <div class="cards-grid">
        <div v-for="t in testimonials" :key="t.name" class="t-card">
          <div class="t-avatar">{{ t.initials }}</div>
          <div class="t-body">
            <p class="t-quote">{{ t.quote }}</p>
            <div class="t-footer">
              <div>
                <strong class="t-name">{{ t.name }}</strong>
                <span class="t-role">{{ t.role }} · {{ t.company }}</span>
              </div>
              <a :href="`https://wa.me/52${t.phone.replace(/\s/g, '')}`" target="_blank" rel="noreferrer" class="t-contact">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.109 1.516 5.842L0 24l6.335-1.485A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.014-1.374l-.36-.214-3.732.875.937-3.62-.236-.373A9.778 9.778 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/></svg>
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>

      <p class="disclaimer">Las referencias están disponibles para verificación directa por parte del reclutador.</p>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Bryan Murga',
    initials: 'BM',
    role: 'Web Master',
    company: 'UNINTER',
    phone: '777 130 1194',
    quote: 'Colaboramos en el desarrollo de sistemas internos para la universidad. Aldahir demostró capacidad técnica sólida y responsabilidad en los entregables.',
  },
  {
    name: 'Jonathan Martínez',
    initials: 'JM',
    role: 'Backend Developer',
    company: 'EGIS',
    phone: '777 264 7932',
    quote: 'Trabajamos juntos en proyectos de backend con NestJS y Spring Boot. Buen manejo de arquitectura y siempre dispuesto a encontrar soluciones eficientes.',
  },
  {
    name: 'Milton Jaimes',
    initials: 'MJ',
    role: 'Jefe de QA',
    company: 'IT Group',
    phone: '56 3424 6958',
    quote: 'Desde QA, trabajar con Aldahir fue directo y eficiente. Entendía el feedback rápido y las correcciones llegaban bien documentadas.',
  },
]
</script>

<style scoped>
.testimonials { padding: 100px 0; }

.section-label {
  color: var(--purple);
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-title {
  font-size: 32px;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--purple), var(--blue, #5b8dee));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-sub {
  color: var(--gray300);
  font-size: 14.5px;
  margin-bottom: 48px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.t-card {
  background: var(--gray500);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.t-card:hover {
  border-color: rgba(187,114,233,0.3);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(187,114,233,0.08);
}

.t-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple), var(--red));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.t-quote {
  color: var(--gray200);
  font-size: 13.5px;
  line-height: 1.65;
  font-style: italic;
  flex: 1;
}

.t-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 14px;
}

.t-name {
  font-size: 13.5px;
  color: var(--gray100);
  display: block;
  margin-bottom: 3px;
}

.t-role {
  font-size: 11.5px;
  color: var(--gray300);
}

.t-contact {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  font-weight: 600;
  color: #25d366;
  text-decoration: none;
  background: rgba(37,211,102,0.08);
  border: 1px solid rgba(37,211,102,0.2);
  padding: 5px 10px;
  border-radius: 7px;
  white-space: nowrap;
  transition: all 0.2s;
  flex-shrink: 0;
}
.t-contact:hover { background: rgba(37,211,102,0.18); }

.disclaimer {
  margin-top: 28px;
  font-size: 12px;
  color: var(--gray300);
  text-align: center;
  font-style: italic;
}

@media (max-width: 900px) {
  .cards-grid { grid-template-columns: 1fr; }
}
</style>

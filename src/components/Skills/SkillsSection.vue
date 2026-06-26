<template>
  <section id="skills" class="skills">
    <div class="container">

      <p class="section-label">Stack tecnológico</p>
      <h2 class="section-title">Tecnologías que domino</h2>

      <div class="categories-grid">
        <div
          v-for="group in skillCategories"
          :key="group.category"
          class="category-card"
          :style="{ '--cat-color': group.color }"
        >
          <div class="category-header">
            <span class="category-icon" v-html="group.icon"></span>
            <h3 class="category-name">{{ group.category }}</h3>
          </div>
          <div class="skills-list">
            <span
              v-for="skill in group.skills"
              :key="skill.name"
              class="skill-chip"
            >
              <span class="skill-icon" v-html="skill.icon"></span>
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { skillCategories } from "../../data/skills"
</script>

<style scoped>
.skills {
  padding: 120px 0;
}

.section-label {
  text-align: center;
  color: var(--red);
  margin-bottom: 10px;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.section-title {
  text-align: center;
  font-size: 32px;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #fff 30%, var(--purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.category-card {
  background: var(--gray500);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 26px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  border-color: color-mix(in srgb, var(--cat-color) 35%, transparent);
  box-shadow: 0 8px 32px color-mix(in srgb, var(--cat-color) 12%, transparent);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.category-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, var(--cat-color) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--cat-color) 30%, transparent);
  font-size: 18px;
  flex-shrink: 0;
}

.category-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--gray100);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 13px;
  color: var(--gray100);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.2s ease;
  cursor: default;
}

.skill-chip:hover {
  background: color-mix(in srgb, var(--cat-color) 15%, transparent);
  border-color: color-mix(in srgb, var(--cat-color) 40%, transparent);
  color: #fff;
  transform: translateY(-1px);
}

.skill-icon {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

.skill-icon img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}

@media (max-width: 700px) {
  .categories-grid { grid-template-columns: 1fr; }
}
</style>

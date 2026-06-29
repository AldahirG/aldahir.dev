<template>
<header class="navbar">
  <div class="container nav-inner">
    <h2 class="logo">Aldahir<span class="logo-accent">.dev</span></h2>

    <!-- Desktop nav -->
    <nav class="nav-links">
      <a href="#about">Sobre mí</a>
      <a href="#projects">Proyectos</a>
      <a href="#skills">Tecnologías</a>
      <a href="#testimonials">Referencias</a>
      <a href="#contact">Contacto</a>
    </nav>

    <!-- Hamburger -->
    <button class="hamburger" @click="open = !open" :class="{ active: open }" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>

  <!-- Mobile menu -->
  <div class="mobile-menu" :class="{ open }">
    <a href="#about"        @click="open = false">Sobre mí</a>
    <a href="#projects"     @click="open = false">Proyectos</a>
    <a href="#skills"       @click="open = false">Tecnologías</a>
    <a href="#testimonials" @click="open = false">Referencias</a>
    <a href="#contact"      @click="open = false">Contacto</a>
  </div>
</header>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: rgba(13,14,17,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
}

.logo { font-size: 18px; font-weight: 800; color: white; }
.logo-accent { color: var(--red); }

/* Desktop links */
.nav-links { display: flex; gap: 8px; }
.nav-links a {
  padding: 6px 12px;
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}
.nav-links a:hover { color: white; background: rgba(255,255,255,0.07); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile dropdown */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: rgba(13,14,17,0.97);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 8px 0 16px;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  padding: 13px 24px;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s, background 0.2s;
}
.mobile-menu a:hover { color: white; background: rgba(255,255,255,0.05); }

@media (max-width: 640px) {
  .nav-links   { display: none; }
  .hamburger   { display: flex; }
}
</style>

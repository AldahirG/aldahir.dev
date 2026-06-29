<template>
  <div class="preview-banner">
    <RouterLink to="/" class="back-link">
      ← Volver al portafolio
    </RouterLink>
    <span class="separator">|</span>
    <span class="system-name">{{ name }}</span>
    <span class="demo-badge">DEMO</span>
    <span class="credentials">
      {{ credEmail }} / {{ credPass }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  credEmail: String,
  credPass: { type: String, default: 'demo1234' }
})
</script>

<style scoped>
.preview-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #1e1e2e;
  border-bottom: 2px solid #e3646e;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #c0c4ce;
  font-family: 'Inconsolata', monospace;
}
.back-link {
  color: #e3646e;
  text-decoration: none;
  font-weight: 700;
}
.back-link:hover { text-decoration: underline; }
.separator { opacity: 0.3; }
.system-name { color: #e2e4e9; font-weight: 600; }
.demo-badge {
  background: #e3646e;
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 4px;
  letter-spacing: 0.05em;
}
.credentials {
  margin-left: auto;
  font-size: 12px;
  opacity: 0.6;
}

@media (max-width: 640px) {
  .preview-banner { padding: 6px 12px; gap: 8px; flex-wrap: nowrap; overflow-x: auto; }
  .separator { display: none; }
  .credentials { display: none; }
  .back-link { font-size: 12px; white-space: nowrap; }
}
</style>

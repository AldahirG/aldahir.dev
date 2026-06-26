<template>

<section id="services" class="services">

<div class="container">

<p class="section-label">

Lo que ofrezco

</p>

<h2 class="section-title">

¿Cómo puedo ayudar a tu negocio?

</h2>

<div class="services-grid">

<ServiceCard
v-for="service in services"
:key="service.title"
:service="service"
/>

</div>

</div>

</section>

</template>

<script setup>

import { services } from "../../data/services"

import ServiceCard from "./ServiceCard.vue"

</script>

<style scoped>

.services{

padding:120px 0;

}

.section-label{

text-align:center;

color:var(--red);

margin-bottom:10px;

font-size:14px;

}

.section-title{

text-align:center;

font-size:28px;

margin-bottom:60px;

}

.services-grid{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:30px;

}

@media(max-width:900px){

.services-grid{

grid-template-columns:1fr;

}

}

</style>
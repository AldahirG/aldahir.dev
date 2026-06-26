<template>

<div class="service-card">

<img :src="service.icon" class="service-icon"/>

<h3 class="service-title">

{{ service.title }}

</h3>

<p class="service-description">

{{ service.description }}

</p>

</div>

</template>

<script setup>

defineProps({
service:Object
})

</script>

<style scoped>

.service-card{

background:transparent;

border:1px solid rgba(255,255,255,0.08);

border-radius:14px;

padding:32px;

text-align:left;

transition:0.3s;

}

.service-card:hover{

border-color:rgba(255,255,255,0.18);

transform:translateY(-4px);

}

.service-icon{

width:36px;

margin-bottom:20px;

}

.service-title{

font-size:18px;

margin-bottom:8px;

}

.service-description{

color:var(--gray300);

font-size:14px;

}

</style>
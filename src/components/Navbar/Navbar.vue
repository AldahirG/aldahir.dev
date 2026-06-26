<template>

<header class="navbar">

<div class="container nav-inner">

<h2 class="logo">Aldahir<span class="logo-accent">.dev</span></h2>

<nav>

<a href="#about">Sobre mí</a>
<a href="#projects">Proyectos</a>
<a href="#skills">Tecnologías</a>
<a href="#testimonials">Referencias</a>
<a href="#contact">Contacto</a>

</nav>

</div>

</header>

</template>

<style scoped>

.navbar{

position:fixed;
top:0;
width:100%;
background:rgba(13,14,17,0.8);
backdrop-filter:blur(10px);

}

.nav-inner{

display:flex;
justify-content:space-between;
align-items:center;

}

nav a{

margin-left:20px;
color:white;
text-decoration:none;

}

.logo-accent {
  color: var(--red);
}

</style>
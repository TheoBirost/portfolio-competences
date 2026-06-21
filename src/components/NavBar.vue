<script setup>
import { ref } from 'vue'
import SocialLinks from './SocialLinks.vue'
const menuOpen = ref(false)
</script>

<template>
  <header class="nav">
    <a href="#accueil" class="logo">TB</a>
    <nav class="nav-desktop">
      <a href="#contexte" class="navlink">Contexte</a>
      <a href="#developper" class="navlink">Développer</a>
      <a href="#entreprendre" class="navlink">Entreprendre</a>
    </nav>
    <SocialLinks cls="desktop-only" />
    <button class="hamburger" aria-label="Menu" @click="menuOpen = !menuOpen">
      <span></span><span></span><span></span>
    </button>
    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a href="#contexte" @click="menuOpen = false">Contexte</a>
      <a href="#developper" @click="menuOpen = false">Développer</a>
      <a href="#entreprendre" @click="menuOpen = false">Entreprendre</a>
      <SocialLinks />
    </div>
  </header>
</template>

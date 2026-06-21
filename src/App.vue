<script setup>
import portfolio from './data/portfolio.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ContexteSection from './components/ContexteSection.vue'
import CompetenceSection from './components/CompetenceSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <HeroSection :hero="portfolio.hero" />
  <ContexteSection :contexte="portfolio.contexte" />
  <CompetenceSection v-for="(c, i) in portfolio.competences" :key="i" :comp="c" />
  <SiteFooter />
</template>

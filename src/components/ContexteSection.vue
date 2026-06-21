<script setup>
import ProjectCard from './ProjectCard.vue'
defineProps({ contexte: { type: Object, required: true } })
</script>

<template>
  <section class="panel" id="contexte">
    <h1 class="section-title">Contexte</h1>
    <p class="section-sub" v-html="contexte.sub"></p>
    <div class="ctx-grid">
      <ProjectCard v-for="(p, i) in contexte.projets" :key="i" :p="p" />
    </div>
  </section>
</template>

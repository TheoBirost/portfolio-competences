<script setup>
import TraceCard from './TraceCard.vue'
defineProps({ comp: { type: Object, required: true } })
</script>

<template>
  <section class="panel" :id="comp.id">
    <h1 class="section-title">{{ comp.titre }}</h1>
    <p class="section-sub" v-html="comp.sousTitre"></p>
    <div class="ac-block">
      <p class="ac-title">Apprentissages — année 3</p>
      <ul class="ac-list"><li v-for="(ac, i) in comp.acList" :key="i">{{ ac }}</li></ul>
    </div>
    <div class="cards">
      <TraceCard v-for="(tr, i) in comp.traces" :key="i" :trace="tr" />
    </div>
  </section>
</template>

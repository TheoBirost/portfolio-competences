<script setup>
defineProps({ p: { type: Object, required: true } })
</script>

<template>
  <div class="ctx-card">
    <div class="role">{{ p.role }}</div>
    <h3>{{ p.nom }}</h3>
    <p>{{ p.description }}</p>
    <div class="ctx-tags"><span v-for="(t, i) in p.tags" :key="i" class="badge">{{ t }}</span></div>
  </div>
</template>

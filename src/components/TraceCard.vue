<script setup>
import { computed } from 'vue'
import TraceMedia from './TraceMedia.vue'
const props = defineProps({ trace: { type: Object, required: true } })
const mediaLabel = computed(() => {
  const t = props.trace.media.type
  return t === 'images' ? 'Image' : t === 'links' ? 'Lien' : 'PDF'
})
</script>

<template>
  <article class="tcard">
    <TraceMedia :media="trace.media" />
    <div class="tcard-body">
      <div class="tcard-badges">
        <span class="badge">{{ trace.competence }} · {{ trace.niveau }}</span>
        <span class="badge">{{ mediaLabel }}</span>
      </div>
      <h3>{{ trace.titre }}</h3>
      <div class="field legende"><div class="lab">Légende</div><p>{{ trace.legende }}</p></div>
      <div class="field comment"><div class="lab">Commentaire</div><p>{{ trace.commentaire }}</p></div>
      <div class="tcard-foot">
        <span class="badge badge--ac">AC · {{ trace.ac }}</span>
        <span v-for="(t, i) in (trace.tags || [])" :key="i" class="badge">{{ t }}</span>
      </div>
    </div>
  </article>
</template>

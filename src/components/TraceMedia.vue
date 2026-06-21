<script setup>
import ImageGallery from './ImageGallery.vue'
defineProps({ media: { type: Object, required: true } })
</script>

<template>
  <div class="tcard-media">
    <ImageGallery v-if="media.type === 'images'" :images="media.images" />

    <div v-else-if="media.type === 'links'" class="media-links">
      <a v-for="(l, i) in media.links" :key="i"
         :href="l.url" target="_blank" rel="noopener"
         class="btn" :class="l.primary ? 'btn--voir' : 'btn--outline'">
        {{ l.label }}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
      </a>
    </div>

    <template v-else-if="media.type === 'docs'">
      <component
        v-for="(d, i) in media.docs" :key="i"
        :is="d.url ? 'a' : 'div'"
        :href="d.url || null"
        :target="d.url ? '_blank' : null"
        :rel="d.url ? 'noopener' : null"
        class="media-doc">
        <span class="doc-tag">PDF</span>
        <span class="doc-t">{{ d.label }}<template v-if="!d.url"> — à insérer</template></span>
      </component>
    </template>
  </div>
</template>

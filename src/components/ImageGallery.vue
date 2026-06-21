<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
const props = defineProps({ images: { type: Array, default: () => [] } })
const active = ref(0)
const current = computed(() => props.images[active.value] || {})

const lightboxOpen = ref(false)
function openLightbox() {
  if (current.value.src) lightboxOpen.value = true
}
function closeLightbox() {
  lightboxOpen.value = false
}
function onKeydown(e) {
  if (e.key === 'Escape') closeLightbox()
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="gallery">
    <div class="gallery-main">
      <img v-if="current.src" :src="current.src" :alt="current.alt || ''" @click="openLightbox">
      <div v-else class="media-ph">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 15 5-5 4 4 3-3 6 6"/><circle cx="8.5" cy="8.5" r="1.5"/></svg>
        <span class="lbl">Capture à insérer — {{ current.alt || 'image' }}</span>
      </div>
    </div>
    <div class="gallery-thumbs" v-if="images.length > 1">
      <button
          v-for="(img, i) in images" :key="i"
          class="gallery-thumb" :class="{ active: i === active }"
          @click="active = i" :aria-label="'Image ' + (i + 1)">
        <img v-if="img.src" :src="img.src" :alt="img.alt || ''">
        <span v-else class="thumb-num">{{ i + 1 }}</span>
      </button>
    </div>

    <Teleport to="body">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click.stop="closeLightbox" aria-label="Fermer">&times;</button>
        <img :src="current.src" :alt="current.alt || ''" @click.stop>
      </div>
    </Teleport>
  </div>
</template>
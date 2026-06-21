<script setup>
defineProps({ hero: { type: Object, required: true } })
</script>

<template>
  <main class="panel panel--hero" id="accueil">
    <div class="hero-inner">
      <p class="hero-kicker">Portfolio de compétences · BUT MMI · 3<sup>e</sup> année</p>
      <h1>{{ hero.nom }}</h1>
      <p class="intro">{{ hero.intro }}</p>
      <div class="btn-row">
        <a href="#developper" class="btn btn--fill">Développer</a>
        <a href="#entreprendre" class="btn btn--outline">Entreprendre</a>
      </div>
    </div>
  </main>
</template>

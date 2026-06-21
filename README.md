# Portfolio de compétences — Théo Birost

Application **Vue 3 + Vite**. Déployable en ligne via **Docker / Dokploy**.

## Développement local
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build de production
```bash
npm run build      # génère le dossier dist/
```

## Où mettre mes contenus ?
- **Tout le contenu** (traces, légendes, commentaires, liens, AC) est dans **`src/data/portfolio.js`**. Tu n'édites que ce fichier.
- **Images** → dossier `public/img/`, puis réfère-les par `/img/mon-image.png` dans `portfolio.js`.
- **PDF** → dossier `public/docs/`, puis `/docs/mon-doc.pdf`.

### Plusieurs images par trace
```js
media: { type: "images", images: [
  { src: "/img/film-liste.png", alt: "Liste de films" },
  { src: "/img/film-fiche.png", alt: "Fiche détaillée" }
]}
```
Dès qu'il y a plus d'une image, une galerie avec miniatures apparaît.

### Liens (ex. Cineaste : front + back)
```js
media: { type: "links", links: [
  { label: "Voir le site", url: "https://cineaste.theo-birost.fr/", primary: true },
  { label: "Code — front", url: "https://github.com/..." },
  { label: "Code — back",  url: "https://github.com/..." }
]}
```

## Déploiement avec Dokploy (Dockerfile)
1. Pousse ce projet sur un dépôt Git (GitHub / GitLab).
2. Dans Dokploy : **Create → Application**.
3. **Source** : ton dépôt Git (branche `main`).
4. **Build Type** : `Dockerfile` (chemin `./Dockerfile`).
5. **Port** : `80`.
6. **Deploy**, puis ajoute ton domaine dans l'onglet **Domains** (Dokploy gère le HTTPS via Let's Encrypt).

### Tester l'image Docker en local
```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
# → http://localhost:8080
```

## Structure
```
src/
  main.js
  App.vue
  assets/main.css
  data/portfolio.js        ← tout le contenu ici
  components/
    NavBar.vue  HeroSection.vue  ContexteSection.vue
    CompetenceSection.vue  TraceCard.vue  TraceMedia.vue
    ImageGallery.vue  ProjectCard.vue  SiteFooter.vue
```

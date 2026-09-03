# Hireburi Dojo - Aïkido de Dinan

Site du dojo d'aïkido de Dinan. Site vitrine avec blog, chronologie, lexique et galerie vidéo.

## Structure

```
Site/
├── index.html                  # Page d'accueil
├── pages/
│   ├── blog/
│   │   ├── index.html          # Liste des articles
│   │   ├── ueshiba.html        # Biographie du fondateur
│   │   ├── saito.html          # Saito, le gardien d'Iwama
│   │   ├── tamura.html         # Tamura Nobuyoshi
│   │   └── disciples.html      # Les grands disciples
│   ├── chronologie.html        # Timeline interactive
│   ├── lexique.html            # Glossaire japonais
│   └── videos.html             # Galerie vidéo YouTube
├── css/
│   ├── style.css               # Styles principaux
│   └── blog.css                # Styles blog / timeline / lexique
├── js/
│   ├── main.js                 # Navigation
│   └── lexique.js              # Recherche dynamique lexique
└── assets/
    └── images/                 # Photos et ressources
```

## Contenu

### Page d'accueil
- Hero, Esprit, Pédagogie, Horaires, Tarif, Contact

### Blog
- Biographie d'O-Sensei Ueshiba (source : article 1932)
- Saito Morihiro, gardien du phare d'Iwama (source : interview Homma 1996)
- Tamura Nobuyoshi, le regard de l'aigle (source : interview longue)
- Les grands disciples : Nocquet, Tissier, Gouttard, Payet, Miyamoto

### Chronologie
- Timeline de 1883 à aujourd'hui : Ueshiba → Iwama → France → Dinan

### Lexique
- ~27 termes japonais avec kanji, kana, définition
- Recherche en temps réel (JS vanilla)

### Vidéos
- Placeholders pour vidéos YouTube du dojo (prochainement)
- Embeds intégrables dans les articles blog

## Design

Esthétique japonaise minimaliste. Hero sombre avec kanji en filigrane. Couleurs terre cuite et tons naturels.

## Prochaines étapes

- [ ] Ajouter les photos d'archive (Ueshiba, Saito, Tamura, dojo)
- [ ] Créer la chaîne YouTube et intégrer les vidéos
- [ ] Page Maurice (en attente de l'interview)
- [ ] SEO : sitemap, meta tags, Open Graph
- [ ] Déploiement (Netlify, Vercel, etc.)

## Déploiement

Site statique, hébergement simple possible (VPS, Netlify, Vercel, etc.).

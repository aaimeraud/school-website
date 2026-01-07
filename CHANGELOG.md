# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/lang/fr/).

## [1.0.0] - 2026-01-07

### Ajouté

- **Hero Section** : Section d'accueil avec titre, sous-titre et boutons CTA
- **Cards formations** : 3 cartes interactives présentant les formations (Web, Mobile, DevOps)
- **Section statistiques** : Affichage des chiffres clés (étudiants, insertion, partenaires)
- **Animations hover** : Effets interactifs sur les cartes et statistiques

### Modifié

- **Palette de couleurs** : Migration vers red-200 pour les accents
- **Design responsive** : Grille adaptative (1/2/3 colonnes selon l'écran)

## [0.2.0] - 2026-01-07

### Ajouté

- **Footer** : Ajout d'un pied de page avec copyright et liens externes

### Corrigé

- **Couleur des liens** : Correction du style des liens dans le footer (couleur amber)

## [0.1.0] - 2026-01-06

### Ajouté

- **Structure du projet** : Initialisation avec HTML/CSS et Tailwind CSS
- **Navigation** : Header avec logo et menu de navigation
- **Hook pre-commit** : Configuration Husky + lint-staged pour vérifier HTML et CSS
- **Linting HTML** : Configuration HTMLHint avec règles de base
- **Linting CSS** : Configuration Stylelint adaptée pour Tailwind CSS
- **Documentation** :
  - `README.md` : Présentation du projet et installation
  - `CONTRIBUTING.md` : Guide de contribution et workflow Git Flow
  - `CODE_OF_CONDUCT.md` : Code de conduite
- **Configuration Git** :
  - `.gitignore` : Exclusion de `node_modules` et `.DS_Store`
  - Workflow Git Flow (`main`, `develop`, `feature/*`, `fix/*`, `docs/*`)

[1.0.0]: https://github.com/aaimeraud/school-website/releases/tag/v1.0.0
[0.2.0]: https://github.com/aaimeraud/school-website/releases/tag/v0.2.0
[0.1.0]: https://github.com/aaimeraud/school-website/releases/tag/v0.1.0

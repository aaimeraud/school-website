# Guide de contribution

Merci de vouloir contribuer au projet ! Ce guide vous aidera à comprendre notre workflow et nos conventions.

---

## Git Flow

Nous utilisons le workflow **Git Flow** avec les branches suivantes :

| Branche     | Description                         |
| ----------- | ----------------------------------- |
| `main`      | Code en production, stable          |
| `develop`   | Branche de développement principale |
| `feature/*` | Nouvelles fonctionnalités           |
| `fix/*`     | Corrections de bugs                 |
| `docs/*`    | Documentation                       |

### Créer une nouvelle branche

```bash
# Pour une nouvelle fonctionnalité
git checkout develop
git pull origin develop
git checkout -b feature/nom-de-la-feature

# Pour une correction de bug
git checkout develop
git pull origin develop
git checkout -b fix/nom-du-fix
```

---

## Commits

### Convention de nommage

Nous utilisons les [Gitmoji](https://gitmoji.dev/) pour préfixer nos messages de commit :

| Emoji | Code         | Description                  |
| ----- | ------------ | ---------------------------- |
| ✨    | `:sparkles:` | Nouvelle fonctionnalité      |
| 🐛    | `:bug:`      | Correction de bug            |
| 🔧    | `:wrench:`   | Configuration                |
| 📝    | `:memo:`     | Documentation                |
| 🎨    | `:art:`      | Style / Formatage            |
| ♻️    | `:recycle:`  | Refactoring                  |
| 🔥    | `:fire:`     | Suppression de code/fichiers |

**Exemple :**

```bash
git commit -m ":sparkles: ajout de la section hero"
```

### Signature des commits (GPG)

Tous les commits doivent être signés avec GPG :

```bash
git commit -S -m ":sparkles: mon message"
```

---

## Hook pre-commit

Un hook `pre-commit` est configuré avec **Husky** et **lint-staged** pour vérifier automatiquement la qualité du code avant chaque commit.

### Outils de linting

| Outil         | Fichiers | Description             |
| ------------- | -------- | ----------------------- |
| **HTMLHint**  | `*.html` | Vérifie la syntaxe HTML |
| **Stylelint** | `*.css`  | Vérifie la syntaxe CSS  |

### Fonctionnement

À chaque `git commit`, le hook exécute automatiquement :

1. **HTMLHint** sur les fichiers HTML modifiés
2. **Stylelint** sur les fichiers CSS modifiés (sauf `output.css`)

Si des erreurs sont détectées, le commit est bloqué et vous devez corriger les problèmes avant de recommiter.

### Règles HTMLHint

- Noms de balises en minuscules
- Attributs en minuscules avec guillemets doubles
- DOCTYPE obligatoire
- Balises correctement fermées
- IDs uniques
- Attribut `src` non vide
- Balise `<title>` obligatoire

### Règles Stylelint

Configuration adaptée pour **Tailwind CSS** :

- Les directives `@tailwind`, `@apply`, `@layer`, `@config`, `@theme` sont autorisées
- Le fichier `output.css` (généré par Tailwind) est ignoré

### Lancer les linters manuellement

```bash
# Linter HTML
npm run lint:html

# Linter CSS
npm run lint:css
```

---

## Pull Requests

1. Créez votre branche à partir de `develop`
2. Développez et commitez vos changements
3. Poussez votre branche sur GitHub
4. Ouvrez une Pull Request vers `develop`
5. Attendez une review et l'approbation d'un membre de l'équipe
6. Une fois approuvée, la PR sera mergée

### Checklist avant PR

- [ ] Le code passe tous les linters (hook pre-commit)
- [ ] Les commits sont signés (SSH)
- [ ] Les messages de commit suivent la convention Gitmoji
- [ ] La branche est à jour avec `develop`

---

## Installation du projet

```bash
# Cloner le dépôt
git clone git@github.com:aaimeraud/school-website.git
cd school-website

# Installer les dépendances (active automatiquement Husky)
npm install
```

---

## Questions ?

Si vous avez des questions, n'hésitez pas à ouvrir une issue sur GitHub.

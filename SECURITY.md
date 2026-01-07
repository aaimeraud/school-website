# Politique de sécurité

Ce document décrit les mesures de sécurité et les bonnes pratiques mises en place dans ce projet.

---

## Protection des branches & Rulesets

### Branches protégées

| Branche | Niveau de protection |
|---------|---------------------|
| `main` | Entièrement protégée - Code en production |
| `develop` | Protégée - Intégration du développement |

### Configuration des règles

Les règles suivantes sont appliquées sur les branches protégées :

- **Revue de pull request obligatoire** : Au moins 1 approbation requise avant le merge
- **Commits signés obligatoires** : Tous les commits doivent être signés avec des clés SSH
- **Vérifications de statut requises** : Les hooks pre-commit doivent passer
- **Pas de force push** : Le force push est désactivé sur les branches protégées
- **Pas de suppression** : Les branches protégées ne peuvent pas être supprimées

---

## Hooks pre-commit

Nous utilisons **Husky** et **lint-staged** pour garantir la qualité du code avant chaque commit.

### Vérifications automatiques

| Outil | Fichiers ciblés | Objectif |
|-------|----------------|----------|
| **HTMLHint** | `*.html` | Valide la syntaxe HTML et les bonnes pratiques |
| **Stylelint** | `*.css` | Valide la syntaxe CSS et les conventions |

### Ce qui est vérifié

#### Règles HTMLHint

- `tagname-lowercase` : Les noms de balises doivent être en minuscules
- `attr-lowercase` : Les attributs doivent être en minuscules
- `attr-value-double-quotes` : Les valeurs d'attributs doivent utiliser des guillemets doubles
- `doctype-first` : Le DOCTYPE doit être déclaré en premier
- `tag-pair` : Les balises doivent être correctement fermées
- `spec-char-escape` : Les caractères spéciaux doivent être échappés
- `id-unique` : Les IDs doivent être uniques
- `src-not-empty` : Les attributs `src` ne peuvent pas être vides
- `attr-no-duplication` : Pas d'attributs en double
- `title-require` : La balise `<title>` est obligatoire

#### Règles Stylelint

- Étend `stylelint-config-standard`
- Directives Tailwind CSS autorisées (`@tailwind`, `@apply`, `@layer`, `@config`, `@theme`)
- Fichiers générés ignorés (`output.css`)

### Contourner les hooks

> ⚠️ **Non recommandé** - À utiliser uniquement dans des circonstances exceptionnelles

```bash
git commit --no-verify -m "votre message"
```

---

## Signature des commits

Tous les commits doivent être signés pour vérifier l'identité de l'auteur.

### Signature avec clé SSH

```bash
# Configurer la signature SSH
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519.pub
git config --global commit.gpgsign true
```

### Vérification des signatures

Les commits signés affichent un badge "Verified" sur GitHub.

---

## Sécurité des dépendances

### Dépendances Node.js

- Les dépendances sont verrouillées via `package-lock.json`
- `node_modules/` est dans le gitignore (jamais commité)
- Exécutez `npm audit` régulièrement pour vérifier les vulnérabilités

```bash
# Vérifier les vulnérabilités
npm audit

# Corriger les vulnérabilités automatiquement
npm audit fix
```

### Pratiques recommandées

- Maintenir les dépendances à jour
- Consulter les changelogs avant les mises à jour majeures
- Utiliser `npm ci` pour des installations reproductibles en CI/CD

---

## Signalement des vulnérabilités

Si vous découvrez une vulnérabilité de sécurité dans ce projet :

1. **NE PAS** ouvrir une issue publique
2. Contacter les mainteneurs en privé via GitHub
3. Fournir des informations détaillées sur la vulnérabilité
4. Laisser un délai raisonnable pour la correction avant divulgation

### Délais de réponse

| Action | Délai |
|--------|-------|
| Accusé de réception | 48 heures |
| Évaluation initiale | 1 semaine |
| Publication du correctif | Selon la gravité |

---

## Checklist de sécurité pour les contributeurs

Avant de soumettre une PR, vérifiez :

- [ ] Pas de données sensibles (clés API, mots de passe) dans le code
- [ ] Pas d'identifiants en dur
- [ ] Dépendances provenant de sources fiables
- [ ] Commits signés
- [ ] Hooks pre-commit passés
- [ ] Pas de `console.log` avec des informations sensibles

---

## Contact

Pour les questions de sécurité, contactez les mainteneurs via le dépôt GitHub.

---

*Dernière mise à jour : Janvier 2026*

# BJJ Path — Académie de Jiu-Jitsu

Application web personnelle d'apprentissage du Jiu-Jitsu Brésilien, organisée selon
une logique pédagogique progressive : **survivre d'abord, position avant soumission**,
ceinture par ceinture (blanche → noire).

> Contenu pédagogique **original**, rédigé indépendamment. L'app s'inspire de la
> *structure de progression* d'enseignement du BJJ (faits/méthodes) et décrit des
> techniques publiquement connues avec ses propres mots. Aucun texte ni image d'un
> ouvrage tiers n'est reproduit. Usage personnel.

## Fonctionnalités

- **Programme** — 40+ techniques classées par ceinture, catégorie et position, avec
  recherche et filtres.
- **Fiches détaillées** — concept, étapes, points clés, erreurs courantes, drills.
- **Concepts fondamentaux** — les principes invisibles (base, cadres, pression, souffle…).
- **Quiz mémoire** — flashcards : retrouve la technique à partir de son principe.
- **Carnet d'entraînement** — journal de sessions (durée, rounds, techniques, notes).
- **Progression** — suivi par ceinture/domaine, anneaux de progression et badges.
- Suivi sauvegardé localement (localStorage), responsive, installable (PWA).

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · React Router (HashRouter).

## Démarrer

```bash
npm install
npm run dev        # serveur de développement
npm run build      # build de production -> dist/
npm run preview    # prévisualiser le build
```

## Structure

```
src/
  data/        belts, concepts, curriculum (contenu), meta
  hooks/       useLocalStorage, useProgress, useTrainingLog
  components/  Layout, TechniqueCard, BeltBadge, ProgressRing
  pages/       Home, Curriculum, TechniqueDetail, Concepts, Flashcards, TrainingLog, Progress
```

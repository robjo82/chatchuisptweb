# ChatChuisPTWeb

## Table des Matières

1. [Introduction](#introduction)
2. [Méthodologie et Développement](#méthodologie-et-développement)
3. [Caractéristiques](#caractéristiques)
4. [Technologies](#technologies)
5. [Installation](#installation)
6. [Déploiement](#déploiement)
7. [Contribuer](#contribuer)
8. [Auteurs](#auteurs)
9. [License](#license)
10. [Contribution futures](#contributions-futures)

---

## Introduction

`ChatChuisPTWeb` est un projet développé par Robin et Izaak pour servir de plateforme de présentation pour `Chat ChuisPT`, une application Flutter humoristique qui génère des réponses aléatoires à des questions sérieuses. Ce projet a un double objectif : nous aider à progresser en développement et nous préparer pour des opportunités professionnelles, chez Google en particulier.

---

## Méthodologie et développement

Nous avons adopté une approche collaborative et agile. Izaak s'est concentré sur le front-end, adoptant les meilleures pratiques en matière de responsive design et d'UI/UX. Robin s'est chargé du back-end et des opérations, avec un accent sur l'intégration continue et le déploiement.

### Étapes clés :

1. **Intégration de Sonar**: Utilisé pour maintenir un niveau élevé de qualité de code.
2. **Déploiement Automatique**: Initialement avec GKE, puis migré vers Heroku pour des raisons budgétaires.
3. **Gestion des Versions**: Utilisation de semantic-release et husky.

---

## Caractéristiques

### Front-end
- Conception moderne et responsive
- Interface utilisateur intuitive
- Utilisation des Google Fonts et d'un thème proche de Material Design 3

### Back-end et Ops
- Intégration continue via Sonar
- Déploiement automatisé
- Gestion automatisée des versions

---

## Technologies

Nous avons utilisé un ensemble de technologies, y compris plusieurs produits Google pour aligner nos compétences avec les technologies souvent utilisées chez Google.

- React
- Vite
- Tailwind CSS
- Docker
- GKE
- GCP
- Heroku
- Sonar
- Semantic-release
- Husky
- Google Fonts

---

## Installation

```bash
git clone https://github.com/votre_compte_github/chatchuisptweb.git
cd chatchuisptweb
npm install
npm run dev
```

---

## Déploiement
```bash
docker build -t chatchuisptweb .
docker run -p 3000:3000 chatchuisptweb
```

---

## Contribuer

Nous sommes des étudiants en soif d'apprendre et de bien faire. La communauté open-source est un excellent moyen d'apprendre et de partager des connaissances. Nous sommes ouverts à toute contribution, qu'elle soit sous forme de **code**, de **documentation** ou de **conseils**.

---

## Auteurs

[![Izaak](src/assets/izaak-30px.png)](https://www.linkedin.com/in/izaak-aubert-m%C3%A9cibah/) **Izaak Aubert-Mecibah** - *Développeur Front-end*

[![Robin](src/assets/robin-30px.png)](https://www.linkedin.com/in/robinjoseph-8259/) **Robin Joseph** - *Développeur Back-end et Ops*


---

## License

Ce projet est sous licence MIT - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

---

### Contributions futures

Nous sommes impatients de remercier tous ceux qui contribueront à l'amélioration de ce projet à l'avenir.
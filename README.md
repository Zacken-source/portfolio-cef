# 🎨 Portfolio John Doe

Portfolio professionnel développé avec React, Vite et Bootstrap.

![Portfolio Preview](./screenshots/preview.png)

## 📋 Description

Portfolio personnel présentant mes compétences, services et réalisations en développement web. Le site est entièrement responsive et optimisé pour le SEO.

## ✨ Fonctionnalités

- ✅ Navigation fluide avec React Router
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Intégration API GitHub
- ✅ Formulaire de contact avec validation
- ✅ Optimisation SEO
- ✅ Validation W3C

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface
- **Vite** - Build tool rapide
- **React Router v6** - Navigation côté client
- **Bootstrap 5** - Framework CSS
- **Axios** - Requêtes HTTP
- **Google Fonts** - Police Nunito Sans

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn**
- Un éditeur de code (VS Code recommandé)

Vérifier les versions :
```bash
node --version  # Doit afficher v16.x.x ou plus
npm --version   # Doit afficher 8.x.x ou plus
```

## 🚀 Installation

### 1. Cloner le repository
```bash
git clone https://github.com/TON-USERNAME/portfolio-john-doe.git
cd portfolio-john-doe
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Configurer les variables d'environnement

Créez un fichier `.env` à la racine :
```env
VITE_GITHUB_USERNAME=votre-username
VITE_API_URL=https://api.github.com
```

### 4. Lancer le serveur de développement
```bash
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

## 📂 Structure du projet

portfolio-john-doe/
├── public/              # Fichiers statiques
│   └── favicon.ico
├── src/
│   ├── assets/          # Images, logos
│   ├── components/      # Composants réutilisables
│   │   ├── common/      # Composants génériques (Card, Button)
│   │   └── layout/      # Layout (Header, Footer)
│   ├── pages/           # Pages du site
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── LegalNotice.jsx
│   ├── styles/          # Fichiers CSS
│   ├── data/            # Données statiques
│   ├── App.jsx          # Composant racine
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── .env                 # Variables d'environnement (à créer)
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

## 🎨 Scripts disponibles
```bash
npm run dev          # Lancer le serveur de développement
npm run build        # Créer la version de production
npm run preview      # Prévisualiser la build de production
npm run lint         # Vérifier le code avec ESLint
```

## 🌐 Déploiement

Le projet peut être déployé sur :

- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**

### Déploiement sur Vercel
```bash
npm install -g vercel
vercel
```

## ✅ Validation W3C

Le code HTML et CSS a été validé avec succès :
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## 📄 Licence

Ce projet est sous licence MIT.

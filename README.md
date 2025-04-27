# EcoCook

EcoCook est une plateforme web écoresponsable qui propose des recettes de cuisine durables tout en minimisant l'impact environnemental du site lui-même. Ce projet est développé avec une approche Green IT.

---

## 🚀 Instructions pour cloner, configurer et exécuter le projet

### Prérequis
- Node.js (version 16 ou supérieure)
- MySQL
- Git

### Étapes

**Cloner le dépôt**
   ```bash
   git clone https://github.com/<votre-utilisateur>/GreenIt.git
   cd GreenIt

**Configurer la base de données**
 - Importez le fichier BDD.txt dans votre instance MySQL pour créer la base de données et les tables nécessaires
- Configurez les fichier .env et server.js avec vos informations MySql

**Configurer le server côté backend**

- Accédez au fichier webapp_serverside : cd webapp_serverside
- Lancez le server : node server.js

**Configurer le server côté frontend**

- Accédez au dossier webapp_clientside : cd ../webapp_clientside
- Lancez le serveur de développement : npm run dev
- Accédez à l'application sur http://localhost:8080

⚠️ ⚠️ Merci de vérifiez que vous êtes bien sur le port 8080

### Contribution

Pour une bonne synchronisation et une bonne organisation du projet, nous avons d'utiliser GitHub et plus
particulièrement GitHub Desktop. Nous avons donc eu la possibilité de pouvoir appliquer tous nos changements depuis
VScode en faisant un commit avec des titres parlant.

### Description des parties du site et fonctionnalités

**1. Accueil**
Présente les engagements écoresponsables d'EcoCook.
Met en avant les recettes de saison.

**2. Catalogue**
Affiche toutes les recettes disponibles.
Permet de filtrer les recettes par saison, empreinte carbone et nombre de personnes.

**3. Recherche**
Permet de rechercher des recettes par mot-clé.

**4. À propos**
Explique la démarche Green IT et les mesures prises pour réduire l'impact environnemental.

**5. Inscription et Connexion**
Les utilisateurs peuvent s'inscrire et se connecter pour accéder à des fonctionnalités personnalisées.

**6. Favoris**
Les utilisateurs connectés peuvent ajouter des recettes à leurs favoris et les consulter ultérieurement.


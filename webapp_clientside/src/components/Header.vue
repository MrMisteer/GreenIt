<template>
    <header>
      <h1>EcoCook</h1>
      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/catalogue">Nos Recettes</RouterLink>
        <RouterLink to="/recherche">Recherche</RouterLink>
        <RouterLink to="/about">À propos</RouterLink>
  
        <!-- 👇 N'affiche l'onglet "Mes Favoris" que si l'utilisateur est connecté -->
        <RouterLink v-if="utilisateurConnecte" to="/favoris">Mes Favoris</RouterLink>
  
        <!-- 👇 Bouton de connexion/déconnexion -->
        <button class="btn" @click="toggleConnexion">
          {{ utilisateurConnecte ? 'Se Déconnecter' : 'Se Connecter' }}
        </button>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    props: ['utilisateurConnecte'],
    emits: ['toggleConnexion'],
    methods: {
      toggleConnexion() {
        this.$emit('toggleConnexion');
      }
    }
  }
  </script>
  
  <style scoped>
  header {
    background-color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
  }
  
  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
  }
  
  .btn {
    background-color: black;
    color: white;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin-left: 10px;
    font-size: 1rem; /* Ajoute cette ligne */

  }
  </style>
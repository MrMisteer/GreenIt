<template>
    <div class="container">
      <h2>Recherche de recettes</h2>
  
      <div class="search-bar">
        <input
          type="text"
          v-model="motCle"
          placeholder="Entrez le nom d'une recette..."
        />
        <button @click="rechercher">Rechercher</button>
      </div>
  
      <div class="results">
        <div
          v-for="recette in resultats"
          :key="recette.id"
          class="recipe-card"
        >
          <img :src="recette.image" :alt="recette.nom" />
          <h3>{{ recette.nom }}</h3>
          <p>{{ recette.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Recherche',
    data() {
      return {
        motCle: '',
        recettes: [
          {
            id: 1,
            nom: 'Salade printanière',
            description: 'Légumes frais et croquants pour le printemps',
            image: 'img/printemps.jpg'
          },
          {
            id: 2,
            nom: "Bruschetta d'été",
            description: 'Tomates, basilic, huile d\'olive sur pain grillé',
            image: 'img/ete.jpg'
          },
          {
            id: 3,
            nom: 'Soupe d\'automne',
            description: 'Soupe de potimarron, carottes et épices',
            image: 'img/automne.jpg'
          }
        ],
        resultats: []
      }
    },
    methods: {
      rechercher() {
        const mot = this.motCle.toLowerCase();
        this.resultats = this.recettes.filter(r =>
          r.nom.toLowerCase().includes(mot)
        );
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding: 40px;
  }
  
  .search-bar {
    display: flex;
    gap: 10px;
    margin-bottom: 30px;
  }
  
  input[type='text'] {
    padding: 10px;
    flex: 1;
    font-size: large;

  }
  
  button {
    padding: 10px 20px;
    margin-bottom: 9px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    font-size: large;

  }
  
  .results {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .recipe-card {
    background: white;
    padding: 15px;
    width: 280px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .recipe-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  </style>
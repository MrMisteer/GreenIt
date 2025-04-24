<template>
    <div class="container">
      <h2>Nos Recettes</h2>
  
      <!-- Filtres -->
      <div class="filters">
        <div class="filter-group">
          <label for="season">Saison :</label>
          <select v-model="filtre.saison" id="season">
            <option value="">-- Toutes --</option>
            <option value="hiver">Hiver</option>
            <option value="printemps">Printemps</option>
            <option value="été">Été</option>
            <option value="automne">Automne</option>
          </select>
        </div>
        <div class="filter-group">
          <label for="personnes">Nombre de personnes :</label>
          <input type="number" v-model="filtre.personnes" id="personnes" placeholder="Ex: 2" min="1">
        </div>
        <div class="filter-group">
          <label for="co2">Quantité de CO2 :</label>
          <select v-model="filtre.co2Max" id="co2">
            <option value="">-- Toutes --</option>
            <option value="faible">Faible</option>
            <option value="moyen">Moyenne</option>
            <option value="elevee">Élevée</option>
          </select>
        </div>
        <div class="filter-group">
  <label style="visibility: hidden">Boutons</label>
  <div style="display: flex; gap: 10px;">
    <button class="btn" @click="appliquerFiltres">Filtrer</button>
    <button class="btn" @click="reinitialiserFiltres">Réinitialiser</button>
  </div>
</div>

      </div>
  
      <!-- Recettes filtrées -->
      <div class="cards">
        <div
          v-for="recette in recettesFiltrees"
          :key="recette.id"
          class="card"
        >
          <img :src="recette.image_url" :alt="recette.nom">
          <h3>{{ recette.nom }}</h3>
          <p>{{ recette.description }}</p>
          <p><strong>Saison :</strong> {{ recette.season }}</p>
          <p><strong>CO2 :</strong> {{ recette.carbon_footprint }}</p>
          <p><strong>Personnes :</strong> {{ recette.personnes }}</p>
          <button class="btn" @click="ajouterFavori(recette)">Ajouter aux favoris</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  import axios from 'axios';

  export default {
    name: 'Catalogue',
    data() {
      return {
        utilisateurConnecte: false,
        filtre: {
          saison: '',
          co2Max: "",
          personnes: null
        },
        recettes: [],
        recettesFiltrees: []
      };
    },
    mounted() {
      this.fetchRecipe();
      this.utilisateurConnecte = localStorage.getItem('utilisateurConnecte') === 'true';
        },
    methods: {
      async fetchRecipe() {
      try {
        const response = await axios.get(`http://localhost:3000/api/recipe`);
        this.recettes = response.data;
        this.recettesFiltrees = [...this.recettes];
      } catch (error) {
        console.error("Error loading recipe:", error);
      }},
      
      ajouterFavori(recette) {
        if (!this.utilisateurConnecte) {
          alert('Vous devez être connecté pour ajouter aux favoris.');
          return;
        }
        const favorisActuels = JSON.parse(localStorage.getItem('mesFavoris')) || [];
        const existeDeja = favorisActuels.some(r => r.id === recette.id);
        if (!existeDeja) {
          favorisActuels.push(recette);
          localStorage.setItem('mesFavoris', JSON.stringify(favorisActuels));
          alert(`Recette "${recette.nom}" ajoutée à vos favoris ✅`);
        } else {
          alert('Cette recette est déjà dans vos favoris.');
        }
      },

      appliquerFiltres() {
    this.recettesFiltrees = this.recettes.filter(recette => {
    const saisonOK = this.filtre.saison === '' || recette.season.toLowerCase() === this.filtre.saison;
    const personnesOK = this.filtre.personnes === null || recette.personnes === this.filtre.personnes;
    const co2OK = this.filtre.co2Max === '' || recette.carbon_footprint.toLowerCase() === this.filtre.co2Max;

    return saisonOK && personnesOK && co2OK;
  });
},

      reinitialiserFiltres() {
        this.filtre.saison = '';
        this.filtre.co2Max = null;
        this.filtre.personnes = null;
        this.recettesFiltrees = [...this.recettes];
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    padding: 40px;
  }

  #season {
  width: 250px;
  font-size: 18px;
  padding: 6px 10px;
  margin-bottom: 9px;
}


  
  .filters {
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  flex-direction: row;
  
}
.filters button {
  height: 40px;
  margin-bottom: 8px;
  
}

  
  .filter-group {
    display: flex;
    flex-direction: column;
    
  }
  
  .cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .card {
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    width: 280px;
  }
  
  .card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
  }
  
  .btn {
    background: black;
    color: white;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    width: 100%;
    font-size: 1.2rem;
  }
  </style>
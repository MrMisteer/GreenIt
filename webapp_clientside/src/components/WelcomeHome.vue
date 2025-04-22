
<template>
 <div> 

      <header>
        <h1>EcoCook</h1>
        <nav>
            <a href="index.html">Accueil</a>
            <a href="catalogue.html">Nos Recettes</a>
            <a href="recherche.html">Recherche</a>
            <a href="about.html">À propos</a>
            <a href="login.html" class="btn">Se Connecter</a>
        </nav>
    </header>

    <div class="container">
        <!-- SECTION : SOYEZ VERTS ! -->
        <section class="section eco-engagements">
            <h2>Soyez Verts ! Nos engagements éco-responsables</h2>
            <p>
                Chez EcoCook, nous pensons qu'une alimentation durable commence dès la recette. C'est pourquoi notre site est conçu pour :
            </p>
            <ul>
                <li>Réduire son impact environnemental 🌱</li>
                <li>Promouvoir la cuisine locale de saison 🥕</li>
                <li>Informer les utilisateurs avec transparence 🤝</li>
            </ul>
        </section>


        <!-- SECTION : CATALOGUE DE SAISON -->
        <section class="section">
            <h2>Catalogue de Saison</h2>
            <div class="seasons">
                <div class="season-card">
                    <img src="https://via.placeholder.com/150" alt="Hiver">
                    <h3>Hiver</h3>
                    <p>Recettes de saison pour l'hiver</p>
                </div>
                <div class="season-card">
                    <img src="https://via.placeholder.com/150" alt="Printemps">
                    <h3>Printemps</h3>
                    <p>Recettes fraîches de printemps</p>
                </div>
                <div class="season-card">
                    <img src="https://via.placeholder.com/150" alt="Été">
                    <h3>Été</h3>
                    <p>Plats légers pour l'été</p>
                </div>
                <div class="season-card">
                    <img src="https://via.placeholder.com/150" alt="Automne">
                    <h3>Automne</h3>
                    <p>Saveurs chaudes de l'automne</p>
                </div>
            </div>
        </section>
    </div> 
    <div v-for="nom in names" :key="nom.id" class="container">
  <p>{{ nom.nom }} - {{ nom.age }} ans - {{ nom.email }}</p>
</div>
  </div>
</template> 


<script>

import axios from "axios";


export default {
  data() {
    return {
      names: [],
    };
  },
  methods: {
    async fetchnames() {
      console.log("Fetching names from API...");
      try {
        const response = await axios.get(`http://localhost:3000/api/test`);
        this.names = response.data;
        console.log("Reçus :", this.names);
      } catch (error) {
        console.error("Erreur lors du fetch :", error);
      }
    },
  },
  mounted() {
    this.fetchnames();
  },
};

</script>


<style scoped>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
        }
        
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
        }
        
        .container {
            padding: 40px;
        }
        
        .section {
            margin-bottom: 50px;
        }
        
        h1,
        h2 {
            color: #222;
        }
        
        .seasons {
            display: flex;
            gap: 20px;
        }
        
        .season-card {
            background: #fff;
            padding: 10px;
            text-align: center;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
            flex: 1;
        }
        
        .season-card img {
            width: 100%;
            height: 150px;
            object-fit: cover;
        }
        /* Section “Soyez Verts!” */
        
        .eco-engagements h2 {
            margin-bottom: 10px;
        }
        
        .eco-engagements ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        
        .eco-engagements h3 {
            margin-top: 30px;
        }
    </style>
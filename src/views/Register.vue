<template>
    <div class="container">
      <h2>Inscription</h2>
      <form @submit.prevent="handleRegister">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" v-model="nom" required>
  
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit" class="btn">S'inscrire</button>
      </form>
      <p>Déjà inscrit ? <router-link to="/login">Connectez-vous ici</router-link>.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Register',
    data() {
      return {
        nom: '',
        email: '',
        password: ''
      }
    },
    methods: {
      handleRegister() {
        // Stockage simple dans localStorage (à remplacer par une vraie BDD dans un vrai projet)
        const utilisateur = {
          nom: this.nom,
          email: this.email,
          password: this.password
        }
        localStorage.setItem('utilisateurInscrit', JSON.stringify(utilisateur));
        alert('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        this.$router.push('/login');
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    padding: 40px;
  }
  
  form {
    background: #fff;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    max-width: 400px;
    margin: auto;
  }
  
  label {
    display: block;
    margin: 10px 0 5px;
  }
  
  input {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  .btn {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    margin-top: 10px;
    cursor: pointer;
    
  }
  </style>
  
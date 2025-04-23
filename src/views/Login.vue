<template>
    <div class="container">
      <h2>Connexion</h2>
      <form @submit.prevent="handleLogin">
        <label for="email">Email :</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit" class="btn">Se connecter</button>
      </form>
      <p>Pas de compte ? <router-link to="/register">Inscrivez-vous ici</router-link>.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        handleLogin() {
  const utilisateur = JSON.parse(localStorage.getItem('utilisateurInscrit'));

  if (
    utilisateur &&
    utilisateur.email === this.email &&
    utilisateur.password === this.password
  ) {
    localStorage.setItem('utilisateurConnecte', 'true');
    this.$router.push('/');
  } else {
    alert('Email ou mot de passe incorrect');
  }
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
  
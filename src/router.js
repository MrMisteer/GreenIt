import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './views/Accueil.vue'
import Catalogue from './views/Catalogue.vue'
import Recherche from './views/Recherche.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Favoris from './views/Favoris.vue'

const routes = [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/catalogue', name: 'Catalogue', component: Catalogue },
    { path: '/recherche', name: 'Recherche', component: Recherche },
    { path: '/about', name: 'About', component: About },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/favoris', name: 'Favoris', component: Favoris }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
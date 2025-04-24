import Vue from 'vue';
import VueRouter from 'vue-router';
import AccueilView from '../views/AccueilView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import AboutView from '../views/AboutView.vue';
import CatalogueView from '../views/CatalogueView.vue';
import FavorisView from '../views/FavorisView.vue';
import RechercheView from '../views/RechercheView.vue';

// Utiliser VueRouter avec Vue
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView,
  },
  {
    path: '/About',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/Catalogue',
    name: 'catalogue',
    component: CatalogueView,
  },
  {
    path: '/Favoris',
    name: 'favoris',
    component: FavorisView,
  },
  {
    path: '/Login',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: '/Recherche',
    name: 'recherche',
    component: RechercheView,
  },
  {
    path: '/Register',
    name: 'register',
    component: RegisterView,
  },
];

const router = new VueRouter({
  mode: 'history', // Utilise l'historique HTML5 pour les URL
  routes,
});

export default router;

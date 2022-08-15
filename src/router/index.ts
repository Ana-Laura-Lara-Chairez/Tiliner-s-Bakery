import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import InicioPage from '../views/Inicio.vue'
import LoginPage from '../views/Login.vue'
import RegistroPage from '../views/Registro.vue'
import ProductosPage from '../views/Productos.vue'
import GaleriaPage from '../views/Galeria.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: InicioPage
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: RegistroPage
  },
  {
    path: '/Productos',
    name: 'Productos',
    component: ProductosPage
  },
  {
    path: '/Galeria',
    name: 'Galeria',
    component: GaleriaPage
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

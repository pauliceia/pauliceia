import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home.vue'
import Sobre from './Sobre.vue'
import Usuario from './usuario/Usuario.vue'
import Dashboard from './usuario/Dashboard.vue'
import Projetos from './projetos/Projetos.vue'
import Dados from './dados/Dados.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/usuario',
      name: 'Usuario',
      component: Usuario,
      children: [
        {
          path: '',
          redirect: {name: 'Dashboard'}
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/dados/:id',
      name: 'Dados',
      component: Dados
    },
    {
      path: '/projetos/:id',
      name: 'Projetos',
      component: Projetos
    }
  ]
})

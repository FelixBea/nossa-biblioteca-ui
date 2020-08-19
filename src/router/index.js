import Vue from 'vue'
import Router from 'vue-router'
import AutoresLista from '../components/Autores/AutoresLista'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/autores'
    },
    {
      path: '/autores',
      name: 'autores',
      component: AutoresLista
    },
    // {
    //   path: '/livros',
    //   name: 'livros',
    //   component: LivrosLista,
    //   children: [
    //     {
    //       path: '/:id',
    //       component: LivrosDetalhes
    //     }
    //   ]
    // }
  ]
})

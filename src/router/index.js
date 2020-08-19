import Vue from 'vue'
import Router from 'vue-router'
import Lista from '../components/UI/Lista'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/livros'
    },
    {
      path: '/livros',
      name: 'livros',
      component: Lista
    }
    // {
    //   path: '/autores',
    //   name: 'autores',
    //   component: Autores,
    //   children: [
    //     {
    //       path: '/:id',
    //       component: AutoresDetalhes
    //     }
    //   ]
    // }
  ]
})

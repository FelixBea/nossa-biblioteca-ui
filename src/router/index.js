import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: 'livros'
    },
    {
      path: '/livros',
      name: 'livros',
      component: HelloWorld
    },
    {
      path: '/autores',
      name: 'autores',
      component: Autores,
      children: [
        {
          path: '/:id',
          component: AutoresDetalhes
        }
      ]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import Home from '../views/Home.vue'
import model from '../views/model.vue'
import news from '../views/news.vue'
import aboutus from '../views/aboutus.vue'
import aboutusbox from '../components/aboutusbox.vue'
import Contactus from '../components/Contactus.vue'
import Requirement from '../components/Requirement.vue'
import modeldetailed from '../components/modeldetailed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/model',
        name: 'model',
        component: model
      },
      {
        path: '/modeldetailed/:id',
        name: 'modeldetailed',
        component: modeldetailed
      },
      {
        path: '/news',
        name: 'news',
        component: news
      },
      {
        path: '/aboutus',
        name: 'aboutus',
        component: aboutus
      },
      {
        path: '/aboutusbox',
        name: 'aboutusbox',
        component: aboutusbox
      },
      {
        path: '/Contactus',
        name: 'Contactus',
        component: Contactus
      },
      {
        path: '/Requirement',
        name: 'Requirement',
        component: Requirement
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Home from '../views/Home.vue'
import model from '../views/model.vue'
import news from '../views/news.vue'
import aboutus from '../views/aboutus.vue'
import aboutusbox from '../components/aboutusbox.vue'
import Contactus from '../components/Contactus.vue'
import Requirement from '../components/Requirement.vue'
import modeldetailed from '../components/modeldetailed.vue'
import newsdetail from '../components/newsdetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Index'
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
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
      },
      {
        path: '/newsdetail/:id',
        name: 'newsdetail',
        component: newsdetail
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

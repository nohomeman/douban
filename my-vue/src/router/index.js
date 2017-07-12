import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Audio from '../pages/Audio/Audio'
import Broadcast from '../pages/Broadcast/Broadcast'
import Group from '../pages/Group/Group'
import Mine from '../pages/Mine/Mine'
import Film from '../components/film'
import Book from '../components/book'
import Tv from '../components/tv'
import City from '../components/city'
import Music from '../components/music'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/Audio',
      name: 'Audio',
      component: Audio,
      children:[
      					{
      						path:'/Audio/film',component:Film
      					},
      					{
      						path:'/Audio/book',component:Book
      					},
      					{
      						path:'/Audio/tv',component:Tv
      					},
      					{
      						path:'/Audio/city',component:City
      					},
      					{
      						path:'/Audio/music',component:Music
      					},
      ]
    },
    {
      path: '/Group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
  ]
})

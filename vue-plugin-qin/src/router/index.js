import Vue from 'vue'
import Router from 'vue-router'
const Tab = resolve => require(['@/components/Tab.vue'], resolve)	
const layer = resolve => require(['@/components/layer.vue'], resolve)	
const topls = resolve => require(['@/components/topls.vue'], resolve)	
const popup = resolve => require(['@/components/popup.vue'], resolve)	
const loding = resolve => require(['@/components/loding.vue'], resolve)	

Vue.use(Router)

export default new Router({
	linkActiveClass:'link',
  routes: [
    {
      path: '/Tab',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/layer',
      name: 'layer',
      component: layer
    },
    {
      path: '/topls',
      name: 'topls',
      component: topls
    },
    {
      path: '/popup',
      name: 'popup',
      component: popup
    },
    {
      path: '/loding',
      name: 'loding',
      component: loding
    }
  ]
})

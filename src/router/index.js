import { createRouter, createWebHistory } from 'vue-router'
import { 
  HomeSection,
  // NavSearch,
 } from '@/views/common'

 import { 
   About,
   WebDevelopment,
   EcommerceDevelopment,
   WebDesign,
   BusinessService,
   SoftwareDevelopment,
   WordPressDevelopment
  // Signup
 } from '@/views/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeSection,
    },
     {
      path: '/about',  
      name: 'about',   
      component: About, 
    },
    {
      path: '/web-development',
      name: 'web-development',
      component: WebDevelopment,
    },
    {
      path: '/ecommerce-development', 
      name: 'ecommerce-development',    
      component: EcommerceDevelopment, 
    },
    {
      path: '/web-design', 
      name: 'web-design',    
      component: WebDesign, 
    },
    {
      path: '/business-service', 
      name: 'business-service',    
      component: BusinessService, 
    },
    {
      path: '/software-development', 
      name: 'software-development',    
      component: SoftwareDevelopment, 
    },
    {
      path: '/wordpress-development', 
      name: 'wordpress-development',    
      component: WordPressDevelopment, 
    },
  
    // //...hosting......
    // {
    //   path: '/shared-host',  
    //   name: 'shared-host',   
    //   component: SharedHost, 
    // },
    // {
    //   path: '/share-hosting',  
    //   name: 'website-shared',   
    //   component: WebsiteShared, 
    // },
    // {
    //   path: '/ecommerce-hosting',  
    //   name: 'ecommerce-host',   
    //   component: EcommerceHost, 
    // },
    // {
    //   path: '/reseller-hosting',  
    //   name: 'reseller-host',   
    //   component: ResellerHost, 
    // },
    // //...server.....
    // {
    //   path: '/rocket-server',  
    //   name: 'rocket-server',   
    //   component: RocketServer, 
    // },
    // {
    //   path: '/vps-server',  
    //   name: 'vps-server',   
    //   component: VpsServer, 
    // },
    // {
    //   path: '/dadicated-server',  
    //   name: 'DedicatedServer',   
    //   component: DedicatedServer, 
    // },
    // //...login file.....
    // {
    //   path: '/contact',  
    //   name: 'contact',   
    //   component: Contact, 
    // },
    //
    // {
    //   path: '/login',  
    //   name: 'login',   
    //   component: Login, 
    // },
    // {
    //   path: '/signup',  
    //   name: 'signup',   
    //   component: Signup, 
    // },
   
  ]
})

export default router

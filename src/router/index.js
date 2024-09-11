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
   WordPressDevelopment,
   LandingPage,
   LaravelWebsite,
   AppDevelopment,
   OrderForm
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
    {
      path: '/landing-page', 
      name: 'landing-page',    
      component: LandingPage, 
    },
    {
      path: '/laravel-website', 
      name: 'laravel-website',    
      component: LaravelWebsite, 
    },
    {
      path: '/app-development', 
      name: 'app-development',    
      component: AppDevelopment, 
    },
    {
      path: '/order-form', 
      name: 'order-form',    
      component: OrderForm, 
    },
  
   
    // {
    //   path: '/signup',  
    //   name: 'signup',   
    //   component: Signup, 
    // },
   
  ]
})

export default router

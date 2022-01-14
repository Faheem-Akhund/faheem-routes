import { createRouter, createWebHistory } from 'vue-router'
import auth from '../middleware/auth';
import Home from '../views/Home.vue'
import Jobs from '../views/jobs/Jobs'
import JobDetails from '../views/jobs/JobDetails'
import NotFound from '../views/NotFound'
import Login from '../views/Login'
import Students from '../views/Students'
import Signup from '../views/Signup'
import log from '../middleware/log'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props:true,
    meta: {
      // Hint: try to switch those two around to see
     // how this affects execution of the callbacks.
      // middleware: [auth, log],
      result: true
   },
    
  },
  {
    path: '/about',
    name: 'About',
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
    meta: {
      // Hint: try to switch those two around to see
     // how this affects execution of the callbacks.
     result: true
   },
  },
  {
    path: '/job',
    name: 'JobDetails',
    component: JobDetails,
    meta: {
      // Hint: try to switch those two around to see
     // how this affects execution of the callbacks.
     result: true
   },
  },
  {
    path: '/login/',
    name: 'Login',
    props:true,
    component: Login,
    meta: {
      // Hint: try to switch those two around to see
     // how this affects execution of the callbacks.
     result: false
     
   },
   
    
  },
  {
    path: '/signup/',
    name: 'Signup',
    component: Signup,
    
  },
  
  {
    path: '/students/',
    name: 'Students',
    component: Students,
    meta: {
      // Hint: try to switch those two around to see
     // how this affects execution of the callbacks.
     result: true
   },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound

  }
  
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


  
  router.beforeEach((to, from, next) => {
    

    if(to.meta.result===true )
    {
       

       if(!localStorage.getItem('token'))
       {
             next('/login')
             
      
              console.log('redirected to login')
       }
       else 
       {

              to.meta.result=!to.meta.result  
                    
              next()
              
             
        
       }
    }
    else if(to.meta.result===false)
    {
      if(!localStorage.getItem('token'))
       {
        
         next()
            
       }
       else
       {
        console.log('Redirected to Home') 
       next('/')
         
       }
    }
    else
    {
      next()
    }
  
 });
  





export default router

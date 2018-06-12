//layouts
import Application from '@/views/layouts/application'

//pages
import About from '@/views/pages/about'
import Login from '@/views/pages/login'
import Register from '@/views/pages/register'
import Valid from '@/views/pages/valid'

//routes
import mapRoutes from '@/router/map'
import dashRoutes from '@/router/dashboard'

const routes = [
    {
      path: '*',
      redirect: '/explore'
    },
    {
      path: '/',
      redirect: '/explore',
      component: Application,
      children: [
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/login', 
          name: 'Login',
          component: Login
        },
        {
          path: '/register', 
          name: 'Register',
          component: Register
        },
        {
          path: '/valid/social', 
          name: 'Valid',
          component: Valid,
          props: {header: true} 
        },
        //routes of map
        ...mapRoutes,
        //routes of dashboard
        ...dashRoutes
      ] 
    }
  ]
  
  export default routes

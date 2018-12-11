//layouts
import Application from '@/views/layouts/application'

//pages
import About from '@/views/pages/about'
import Home from '@/views/pages/home'
import Login from '@/views/pages/login'
import Contact from '@/views/pages/contact'
import Register from '@/views/pages/register'
import ValidSocial from '@/views/pages/validSocial'
import ValidEmail from '@/views/pages/validEmail'
import Tutorial from '@/views/pages/tutorial'

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
          path: '/tutorial',
          name: 'Tutorial',
          component: Tutorial
        },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact
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
          path: '/valid/social/:token', 
          name: 'ValidSocial',
          component: ValidSocial
        },
        {
          path: '/valid/email/:token', 
          name: 'ValidEmail',
          component: ValidEmail
        },
        //routes of map
        ...mapRoutes,
        //routes of dashboard
        ...dashRoutes
      ] 
    }
  ]
  
  export default routes

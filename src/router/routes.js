//layouts
import Application from '@/views/layouts/application'

//pages
import Explore from '@/views/pages/explore'
import About from '@/views/pages/about'
import Login from '@/views/pages/login'

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: Application,
    children: [
      {
        path: '/explore',
        name: 'Explore',
        component: Explore
      },
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
    ] 
  }
]

export default routes
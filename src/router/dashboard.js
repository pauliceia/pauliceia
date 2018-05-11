//layouts
import Dashboard from '@/views/layouts/dashboard'

//pages
import DashHome from '@/views/pages/dashboard/home'
import DashNewLayer from '@/views/pages/dashboard/newLayer'

const dashRoutes = [
    {
        path: '/dashboard',
        redirect: '/dashboard/home',
        component: Dashboard
    },
    {
        path: '/dashboard/home',
        name: 'Home',
        component: DashHome
    },
    {
      path: '/dashboard/newLayer',
      name: 'NewLayer',
      component: DashNewLayer
    }
]

export default dashRoutes;



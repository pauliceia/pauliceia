//layouts
import Dashboard from '@/views/layouts/dashboard'

//pages
import DashHome from '@/views/pages/dashboard/home'
import DashNewLayer from '@/views/pages/dashboard/newLayer'
import DashKeyword from '@/views/pages/dashboard/keywords'
import DashEditLayer from '@/views/pages/dashboard/editLayer'

const dashRoutes = [
    {
        path: '/dashboard',
        redirect: '/dashboard/home',
        component: Dashboard,
        meta: { auth: true }
    },
    {
        path: '/dashboard/home',
        name: 'Home',
        component: DashHome,
        meta: { auth: true }
    },
    {
      path: '/dashboard/newLayer',
      name: 'NewLayer',
      component: DashNewLayer,
      meta: { auth: true }
    },
    {
      path: '/dashboard/editLayer',
      name: 'EditLayer',
      component: DashEditLayer,
      props: {layer_id: 0},
      meta: { auth: true }
    },
    {
      path: '/dashboard/keywords',
      name: 'Keyword',
      component: DashKeyword,
      props: {name: 'Home', layer_id: 0},
      meta: { auth: true }
    }
]

export default dashRoutes;



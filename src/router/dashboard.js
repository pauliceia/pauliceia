//layouts
import Dashboard from '@/views/layouts/dashboard'

//pages
import DashHome from '@/views/pages/dashboard/home'

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
    }
]

export default dashRoutes;



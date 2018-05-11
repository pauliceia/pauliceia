//layouts
import Dashboard from '@/views/layouts/dashboard'

//pages
import DashHome from '@/views/pages/dashboard/home'

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
    }
]

export default dashRoutes;



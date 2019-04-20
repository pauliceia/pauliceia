import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import routes from '@/router/routes'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/portal/',
    routes
})

/* === AUTHENTICATION LEVELS 
 * auth: 'any' => any user
 * auth: 'editor' => editor user
 * auth: 'administrator' => administrator user
 */
router.beforeEach((to, from, next) => {
    if ( (to.name === 'Login' || to.name === 'Register') && store.state.auth.isUserLoggedIn) {
        return next({
            path: '/dashboard'
        })
    }

    if (to.matched.some(record => record.meta.auth)){
        if(!store.state.auth.isUserLoggedIn){
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }

    } else{
        next()
    }
})

export default router;

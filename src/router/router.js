import Vue from 'vue';
import Router from 'vue-router';

import vHomePage from '../components/home/v-home-page'
import vCart from '../components/cart/v-cart'


Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: vHomePage,
            props: true
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
        },
    ]
})

export default router;
import Vue from 'vue';
import Router from 'vue-router';

import vHomePage from '../components/home/v-home-page'
import vCart from '../components/cart/v-cart'
import vCategoryCatalog from '../components/v-category-catalog'
import vPageItem from '../components/v-page-item'

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
        {
            path: '/catalog/:title',
            name: 'catalog',
            component: vCategoryCatalog,
            props: true
        },
        {
            path: '/item/:title',
            name: 'item',
            component: vPageItem,
            props: true
        },
    ]
})

export default router;
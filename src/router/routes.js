import Home from '../pages/Home/home.vue'
import Category from '../pages/Category/index.vue'
import Best from '../pages/Best/index.vue'
import Personal from '../pages/Personal'
import Cart from '../pages/Cart'
export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/best',
        component: Best
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/personal',
        component: Personal,
        meta: {
            isHideFooter: true, // 标识footer是否隐藏
        }
    }
]
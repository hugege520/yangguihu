import Home from '../pages/Home/home.vue'
import Category from '../pages/Category/index.vue'
import Best from '../pages/Best/index.vue'
import Personal from '../pages/Personal'
import Cart from '../pages/Cart'
import Detail from '../pages/detail/index.vue'
import Servech from '../pages/Servech/index.vue'
import Login from '../pages/Login/index.vue'
export default [{
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
    },
    {
        path: '/detail',
        component: Detail,
        meta: {
            isHideFooter: true, // 标识footer是否隐藏
        }
    },
    {
        path: '/servech',
        component: Servech,
    },
    {
        path: '/login',
        component: Login,
        beforeEnter(to, from, next) {
            let pathLogin = to.path;
            console.log(pathLogin)
            if (pathLogin.indexOf('/login')===0) {
                let user = JSON.parse(localStorage.getItem('user-keys'))
                if (user) {
                    next('/')
                } else {
                    next()
                }
            }

        }
    }
]
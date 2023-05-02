import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home/home.vue"
import Staff from "../views/Staff/staff.vue"
import ErrorPage from "../views/Error/errorPage.vue"
/* import Order from "../views/Orders/o" */

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/", component: Home, name: "Home"
        },
        {
            path: "/add_staff", component: Staff, name: "Staff"
        },
        {
            path: '/:pathMatch(.*)*', name: "Error", component: ErrorPage
        }
    ]
})

export default router;
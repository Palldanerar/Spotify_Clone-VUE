import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue"
import LibraryPage from "../pages/LibraryPage.vue"
import SearchPage from "../pages/SearchPage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/library',
            component: LibraryPage
        },
        {
            path: "/search",
            component: SearchPage
        }
    ]
})

export default router
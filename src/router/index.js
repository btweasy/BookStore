import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/RegistrationPage/LoginPage.vue';
import RegistrationPage from '@/components/RegistrationPage/RegistrationPage.vue';
import HomePage from '@/components/HomePage/HomePage.vue';
import BooksPage from '@/components/HomePage/BooksPage.vue';
import BookDetailsPage from '@/components/HomePage/BookDetailsPage.vue';

const routes = [
    { path: '/', redirect: '/register' },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegistrationPage },
    { path: '/home', component: HomePage },
    { path: '/books', component: BooksPage },
    { path: '/book/:id', component: BookDetailsPage, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

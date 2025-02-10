import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/RegistrationPage/LoginPage.vue';
import RegistrationPage from '@/components/RegistrationPage/RegistrationPage.vue';

const routes = [
    { path: '/', component: RegistrationPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegistrationPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('./pages/index.vue')
		},
		{
			props: true,
			name: 'catalog',
			path: '/catalog/:product/',
			component: () => import('./pages/catalog.vue'),
		},
		{ 
			path: '/catalog/:product/:productID', 
			component: () => import('./pages/ProductPage.vue') 
		}
	]
})
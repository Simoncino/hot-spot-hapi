
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
{ path: '/foo', component: Foo },
{ path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for routes: routes
})


new Vue({
	router,
	el: '#app',
	data: {
		user: {},
		varpadre: 'Messaggio da padre'
	},
	components: {
		App
	},
	template: '<App :varfiglio="varpadre" :logUser="user"></App>'
})

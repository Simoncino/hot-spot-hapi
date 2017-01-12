import Login from './components/Login.vue'
import SimpleList from './components/SimpleList.vue'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }


export default [
	{ path: '/login', component: Login },
	{ path: '/simpleList', component: SimpleList },
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar }
]

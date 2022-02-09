import Home from "../views/Home.vue"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/:country",
		name: "Country",
		component: () =>
			import(/* webpackChunkName: "Country" */ "../views/Country.vue")
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router

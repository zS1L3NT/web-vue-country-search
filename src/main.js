import App from "./App.vue"
import router from "./router"
import Vue from "vue"
import { BootstrapVue } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
	router,
	render: createElement => createElement(App)
}).$mount("#app")

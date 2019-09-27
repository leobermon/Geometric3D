import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.config.productionTip = false
Vue.use(Viewer,{
	defaultOptions:{
		inline: false,
		button: false,
		navbar: false,
	 	title: true,
	 	toolbar: true,
	 	tooltip: false,
	 	movable: false,
	 	zoomable: true,
	 	rotatable: false,
	 	scalable: false,
	 	transition: true,
	 	fullscreen: false,
	 	keyboard: true	
	}
	
})


new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')

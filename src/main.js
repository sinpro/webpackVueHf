import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
// css入口
import './style/index.scss';

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
	router,
	store,
	render: c => c(App)
}).$mount(root);
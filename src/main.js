import axios from 'axios';
import { createApp } from 'vue'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://localhost';
axios.defaults.withCredentials = true;

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app')

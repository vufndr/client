import axios from 'axios';
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import 'balm-ui-css';

import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://localhost';
axios.defaults.withCredentials = true;

createApp(App)
    .use(BalmUI)
    .use(BalmUIPlus)
    .use(VueAxios, axios)
    .use(store)
    .use(router)
    .mount('#app');

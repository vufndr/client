import axios from 'axios';
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import BalmUI from 'balm-ui';
import BalmUIPlus from 'balm-ui-plus';
import 'balm-ui-css';

import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.baseURL = process.env.VUE_APP_API_URL;
axios.defaults.withCredentials = true;
axios.interceptors.response
    .use((response) => response, (error) => {
        if (error.response.status === 419) {
            store.dispatch('unauthenticate');
            router.push({ name: 'login'});
            return
        }
        return Promise.reject(error)
    });

createApp(App)
    .use(BalmUI)
    .use(BalmUIPlus)
    .use(VueAxios, axios)
    .use(store)
    .use(router)
    .mount('#app');

import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false;

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import Vuetify from 'vuetify';
import BootstrapVue from 'bootstrap-vue';

import Chart from 'chart.js'
import VueChartkick from 'vue-chartkick'


Vue.use(Vuetify);
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.use(VueChartkick, {adapter: Chart})

new Vue({
    render: h => h(App)
}).$mount('#app')

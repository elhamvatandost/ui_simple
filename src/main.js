import Vue from "vue";
import VueRouter from 'vue-router';
import App from "./App.vue";
import {
  routes
} from './routes.js';
import vuetify from './plugins/vuetify'
import Vuelidate from "vuelidate";
import { store } from "./Store/Store";


Vue.use(VueRouter);
Vue.use(Vuelidate);


const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
});

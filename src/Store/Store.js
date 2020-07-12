import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import student from './Modules/Student';

export const store = new Vuex.Store({
    state : {},
    modules : {
        student
    }
});
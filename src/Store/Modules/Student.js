import Vue from "vue";

const state = {
    list : []
};
const getters = {
    getList(state) {
        return state.list;
    },
};
const mutations = {
    addToList(state, student) {
        state.list.push(student);
    },
    rmvFromList(state , index){
        state.list.splice(index, 1);
    }
};
const actions = {
    add(context , student) {
        context.commit("addToList", student);
    },
    rmv(context , index) {
        context.commit("rmvFromList", index);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
  };
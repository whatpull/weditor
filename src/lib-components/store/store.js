import Vue from 'vue';
import {CONTEXT_MENU_OPEN} from './store_type.js';

const state = Vue.observable({
    context: {
        show: false,
        x: 0,
        y: 0
    }
});

export const mutations = {
    [CONTEXT_MENU_OPEN]: (payload) => {
        if(payload) {
            state.context.show = payload.show;
            state.context.x = payload.x;
            state.context.y = payload.y;
        }
    }
}

export const actions = {
    [CONTEXT_MENU_OPEN]: (payload) => {
        mutations[CONTEXT_MENU_OPEN](payload)
    }
}

export const getters = {
    context: () => state.context,
}
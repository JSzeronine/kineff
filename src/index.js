

import globalPreset from './assets/js/GlobalPreset';
import Vue from 'vue';

import App from './App.vue';

import PIXI_Custom from "./plugins/pixi_custom";
Vue.use(PIXI_Custom);

import Plugins from './plugins/plugins';
Vue.use(Plugins);

// common css
import './assets/css/style.scss';

const initVue = function(){

    new Vue({
        el: '#app',

        components :{App},
        template: '<App/>',

        data(){
            return {
            }
        },

        async created() {}
        // render: h => h(App)
    })
};

window.initVue = initVue;



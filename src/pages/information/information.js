
// polyfill
import insec from '../../assets/js/intersection-observer';
import globalPreset from '../../assets/js/GlobalPreset';

import Vue from 'vue';
import axios from 'axios';

import App from './Information.vue';

import Plugins from '../../plugins/plugins';
Vue.use(Plugins);

// common css
import '../../assets/css/style.scss';

const initVue = function(name){

    new Vue({
        el: '#app',

        components :{App},
        template: '<App v-if="isLoaded" :pageName="pageName"/>',

        data(){
            return {
                contentData:'',
                isLoaded:false,
                pageName:''
            }
        },

        async created() {
            this.isLoaded = true;
            this.pageName = name;
            console.log("this.contentType : ", this.pageName)
        }
        // render: h => h(App)
    })
};

window.initVue = initVue;


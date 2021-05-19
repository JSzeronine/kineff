
import globalPreset from '../../assets/js/GlobalPreset';
import Vue from 'vue';

import App from './Product.vue';

import PIXI_Custom from "../../plugins/pixi_custom";
Vue.use(PIXI_Custom);

import Plugins from '../../plugins/plugins';
Vue.use(Plugins);

// common css
import '../../assets/css/style.scss';
import VueYouTubeEmbed from 'vue-youtube-embed';
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })

const initVue = function(group, name){

    new Vue({
        el: '#app',

        components :{App},
        template: '<App v-if="isLoaded" :groupName="groupName" :pageName="pageName"/>',

        data(){
            return {
                contentData:'',
                isLoaded:false,
                groupName:'',
                pageName:''
            }
        },

        async created() {
            this.isLoaded = true;
            this.groupName = group;
            this.pageName = name;

            GlobalPreset.groupName = this.groupName;
            GlobalPreset.pageName = this.pageName;
        }
        // render: h => h(App)
    })
};

window.initVue = initVue;


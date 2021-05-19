
<template>
    <div class="wrapper main">

        <Header :isMain="true"></Header>

        <div class="container">
            <Main></Main>
        </div>

        <transition name="fade">
            <div class="loading" v-if="(!isLoaded) && !isMobile && !isIE">
                <div class="load-logo ">
                    <Logo></Logo>
                </div>
                <div class="line"></div>
            </div>
        </transition>

        <Store :isMain="true" />
    </div>
</template>


<script>

import { isMobile, isChrome, isIE } from 'mobile-device-detect';
import { EventBus } from "./bus";

import Logo from "./components/icon/Logo"
import Header from './components/common/comp-header';
import Store from "./components/common/comp-store";

import Main from './components/main/comp-main';

export default {
    name: "App",

    data(){
        return {
            isMobile:isMobile,
            isIE:isIE,
            isLoaded:false
        }
    },

    components:{
        Logo, Header, Main, Store
    },

    mounted() {
        if(isMobile || isIE) return;
        EventBus.$on(EventBus.LOAD_COMPLETE_EVENT, this.loadComplete);
    },

    methods: {
        loadComplete(){
            EventBus.$off(EventBus.LOAD_COMPLETE_EVENT, this.loadComplete);
            this.isLoaded = true;
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {

}

.mobile{

}
</style>



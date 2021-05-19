
<template>
    <div :class="'wrapper ' + groupName + ' ' + pageName">
        <Header :isMain="false"></Header>

        <div class="container">
            <component :is="componentProduct"></component>
        </div>

        <transition name="fade">
            <div class="loading" v-if="(!isLoaded) && !isMobile && !isIE">
                <div class="load-logo ">
                    <Logo></Logo>
                </div>
                <div class="line"></div>
            </div>
        </transition>

        <Store />
    </div>
</template>



<script>

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "../../bus";

    import Logo from "../../components/icon/Logo"
    import Header from '../../components/common/comp-header';
    import Store from "../../components/common/comp-store";

    // scroll setting 할시 import 안되어 있으면 에러나서 추가
    import ProductAll from '../../components/product/ProductAll';

    export default {

        props: ['pageName', 'groupName'],

        computed: {
            contentType(){
                let type = this.pageName;
                return type;
            },

            componentProduct() {
                return () => import(`@/components/product/${this.contentType}.vue`);
            }
        },

        name: "Product",

        data(){
            return {
                isMobile:isMobile,
                isIE:isIE,
                isLoaded:false
            }
        },

        components:{
            Header, Logo, Store
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
</style>



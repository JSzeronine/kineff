
<template>
    <div class="scroll-wrap">
        <div>
            <Section_KV :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_KV>

            <Section_A :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_A>
            <Section_B :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_B>
            <Section_C :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_C>
            <Section_D :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_D>
            <Section_E :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_E>
            <Section_F :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_F>
            <Section_G :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_G>
            <Section_H :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_H>

            <!--        <Section_I :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_I>-->
            <!--        <Section_J :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_J>-->
            <!--        <Section_K :isSetComp="isSetComp" :stWrapper="stWrapper"></Section_K>-->

            <Banner :isMain="true" :isSetComp="isSetComp" :stWrapper="stWrapper"></Banner>
            <Footer :isMain="true"></Footer>
        </div>
    </div>
</template>

<script>
    import MixinPage from "../../mixin/mixin-page";

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "../../bus";

    import Footer from "../common/comp-footer";

    import Section_KV from './comp-main-KV';
    import Section_A from './comp-main-A'; //
    import Section_B from './comp-main-B'; // all day care
    import Section_C from './comp-main-C'; // img box scale
    import Section_D from './comp-main-D'; // center product ampoule
    import Section_E from './comp-main-E'; // percent
    import Section_F from './comp-main-F'; // cleansing care
    import Section_G from './comp-main-G'; // 3 col product
    import Section_H from './comp-main-H'; // soothing care
    // import Section_I from "./comp-main-I"; // box move rt
    // import Section_J from "./comp-main-J";
    // import Section_K from "./comp-main-K";
    import Banner from "../common/comp-banner";

    export default {
        name: "comp-main",

        mixins: [
            MixinPage
        ],

        components: {
            Section_KV,
            Section_A, Section_B, Section_C, Section_D, Section_E,
            Section_F, Section_G, Section_H,
            // Section_I, Section_J, Section_K,
            Banner,
            Footer
        },


        mounted() {

        },


        methods: {
            customInit(){

            }
        }
    }


</script>

<style scoped lang="scss">
    .scroll-wrap {

    }

</style>
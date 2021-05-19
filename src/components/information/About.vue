<template>
    <div class="scroll-wrap">
        <AboutKV :isSetComp="isSetComp" :stWrapper="stWrapper"></AboutKV>
<!--        <AboutDesc :isSetComp="isSetComp" :stWrapper="stWrapper"></AboutDesc>-->
        <AboutFeature :isSetComp="isSetComp" :stWrapper="stWrapper"></AboutFeature>

        <Banner :isSetComp="isSetComp" :stWrapper="stWrapper">
            <template #bg-wrap>
                <div class="img-pc bg-img" :style="{backgroundImage: (`url(../images/main/skin-nature_bg_2x.jpg )`)}"></div>
                <div class="img-mb bg-img" :style="{backgroundImage: (`url(../images/main/m-comp-z-bg.png )`)}"></div>
            </template>
        </Banner>

        <Footer></Footer>
    </div>
</template>

<script>
    import MixinPage from "../../mixin/mixin-page";

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "../../bus";

    import Banner from "../common/comp-banner";
    import Footer from "../common/comp-footer";

    import AboutKV from './comp-about-KV'; // kv
    // import AboutDesc from './comp-about-desc'; // desc
    import AboutFeature from './comp-about-feature'; // feature



    export default {
        name: "About",

        mixins: [
            MixinPage
        ],

        components : {
            AboutKV,
            // AboutDesc,
            AboutFeature,
            Banner,
            Footer,

        },

        mounted() {

        },

        methods: {
            customInit(){}
        }
    }
</script>

<style scoped lang="scss">
    .scroll-wrap {
        background-color: #000;

    }

    .mobile {
        .scroll-wrap {

        }
    }

</style>
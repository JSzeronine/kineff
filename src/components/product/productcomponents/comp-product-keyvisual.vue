<template>
    <section class="product-keyvisual">
        <!-- mobile bg line-->
        <div class="bg-wrap" v-if="isMobile">
            <div class="bg-wrap__left">
                <div class="svg-area">
                    <svg height="244" width="244" xmlns="http://www.w3.org/2000/svg">
                        <circle class="shape-left-circle" cx="122" cy="122" r="121"></circle>
                    </svg>
                </div>
            </div>

            <div class="bg-wrap__right">
                <div class="svg-area">
                    <svg height="244" width="1262" xmlns="http://www.w3.org/2000/svg">
                        <circle class="shape-circle" cx="122" cy="122" r="121"></circle>
                        <rect class="shape-rect" x="122" y="1" width="1000" height="242"></rect>
                    </svg>
                </div>
            </div>
        </div>

        <!-- pc bg line-->
        <div class="bg-wrap" v-else>
            <div class="bg-wrap__left">
                <div class="svg-area">
                    <svg height="524" width="524" xmlns="http://www.w3.org/2000/svg">
                        <circle class="shape-left-circle" cx="262" cy="262" r="261"></circle>
                    </svg>
                </div>
            </div>

            <div class="bg-wrap__right">
                <div class="svg-area">
                    <svg height="524" width="1262" xmlns="http://www.w3.org/2000/svg">
                        <circle class="shape-circle" cx="262" cy="262" r="261"></circle>
                        <rect class="shape-rect"  x="262" y="1" width="1000" height="522"></rect>
                    </svg>
                </div>
            </div>
        </div>

        <div class="inner-wrap">
            <div class="contents">
                <div class="key-visual__content">
                    <div class="key-visual__content-info">
                        <dl class="key-visual__content-info__title">
                            <dt><slot name="title-s">all day care</slot></dt>
                            <dd><slot name="title-m"></slot></dd>
                        </dl>

                        <div class="key-visual__content-line"></div>

                        <div class="key-visual__content-info__sub">
                            <dl>
                                <dt><slot name="sub-title"></slot></dt>
                                <dd class="key-visual__content-info__volume"><slot name="sub-volume"></slot></dd>
                                <dd class="key-visual__content-info__price">
                                    <slot name="sub-price"></slot>
                                </dd>
                            </dl>

                            <p><slot name="sub-description"></slot></p>
                        </div>
                    </div>

                    <div class="key-visual__content-product">
                        <slot name="product-img"></slot>
                    </div>
                </div>

                <div class="key-visual__line">
                    <span></span>
                </div>

            </div>
        </div>

        <div class="product-keyvisual__bg">
            <div class="light-bg"  v-if="isEffect">
                <img class="mask-dimmed" :src="'../images/product/common/mask_circle_sub.png'" alt="">
                <kvGodray :isOnStage="isOnStage" :isSubKv="true"></kvGodray>
            </div>

            <div class="bg-img img-pc__ie" :style="{ backgroundImage : `url( ../images/product/common/bg-keyvisual.jpg )` }"></div>
            <div class="bg-img img-mb" :style="{ backgroundImage : `url( ../images/product/common/bg-keyvisual_m.jpg )` }"></div>
        </div>

    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "@/mixin/mixin-contents-sctrigger";
    import {EventBus} from "../../../bus";

    import kvGodray from "../../interactive/comp-KV_godray";
    import SqAmpoule from "../../common/comp-sq-ampoule";

    export default {
        name: "comp-product-keyvisual",

        mixins : [
            MixinContents
        ],

        components: {
            kvGodray
        },

        data(){
            return{
                isMobile : isMobile,
                isOnStage:false,
                isEffect:false

            }
        },

        beforeCreate() {
            this.isEffect = (isMobile || isIE) ? false : true;
        },

        mounted() {
            if( !isIE )
            {
                Gsap.set(this.$el, { alpha:0 });
            }
            this.isEffect = (isMobile || isIE) ? false : true;
        },

        methods: {
            start(){
                Gsap.set(this.$el, {alpha:1});
                const time = 2.0;
                const delay = 0.5;
                let stY = isMobile ? 0 : -50;
                // Gsap.from('.product-keyvisual .bg-wrap', 3, {alpha:0, y:stY, ease:Power2.easeInOut});


                Gsap.fromTo('.product-keyvisual .contents .key-visual__content-product img', 0.5, {alpha:0}, {alpha:1, delay:delay, ease:Linear.easeNone});
                if(isMobile){
                    Gsap.fromTo('.product-keyvisual .contents .key-visual__content-product img', 3, {x:0}, {x:0, delay:delay, ease:Power2.easeOut});
                    Gsap.from('.product-keyvisual .product-keyvisual__bg .bg-img', 2, {delay:1, alpha:0, y:0, ease:Linear.easeNone});
                } else {
                    Gsap.fromTo('.product-keyvisual .contents .key-visual__content-product img', 3, {x:0, scale:0.95}, {x:0, scale:1, delay:delay, ease:Power2.easeOut});

                    Gsap.fromTo('.product-keyvisual .product-keyvisual__bg .light-bg ', time*1, {alpha:0}, {alpha:1, delay:delay*2.5, ease:Power1.easeOut});
                    Gsap.fromTo('.product-keyvisual .product-keyvisual__bg .light-bg .mask-dimmed', time*1.5, {alpha:1, scaleX:1, scaleY:0.7}, {alpha:1, scaleX:1.1, scaleY:1, delay:delay*2.5, ease:Linear.easeNone});
                }

                //line
                Gsap.from('.product-keyvisual .contents .key-visual__content-line', 1.5, {y:0, width:0, delay:delay+0.1, ease:Power2.easeInOut});


                const text = this.$el.querySelectorAll('.key-visual__content-info__title dd p');
                Gsap.from(text, {delay:delay, duration: 1.2, opacity:0, y:50, stagger: 0.2, ease:Power3.easeOut}, "+=0");

                Gsap.fromTo('.product-keyvisual .contents .key-visual__content-info__title dt', 1.5, {y:-0, alpha:0}, {y:0, alpha:1, delay:delay, ease:Power2.easeInOut});
                Gsap.fromTo('.product-keyvisual .contents .key-visual__content-info__sub', 1.5, {y:20, alpha:0}, {y:0, alpha:1, delay:delay+1, ease:Power2.easeOut});
            },

            showMobile(){
                const TL = Timeline({});
                TL.fromTo( ".key-visual__line span", {
                    width : "0%"
                }, {
                    width : "100%",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : this.$el,
                        start : "bottom bottom",
                        end : "bottom top",
                        scrub : true
                    }
                });

                // nav color
                TL.fromTo( ".key-visual__line",
                    {},
                    {
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : this.$el,
                            start : "bottom bottom",
                            end : "66% top",
                            scrub : true,
                            onLeave:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                            },
                            onLeaveBack:() => {
                                // EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                            },
                            onEnter:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                            },
                            onEnterBack:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                            }
                        }
                });

                this.start();
            },

            setScrollTrigger() {
                if( isMobile ){
                    this.showMobile();
                    return;
                }

                const _this = this;

                // nav color
                const Tl_nav = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        trigger:".product-keyvisual .product-keyvisual__bg",
                        scroller: this.stWrapper,
                        start:"top 1%",
                        end:"bottom top",
                        onLeave:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                            _this.isOnStage = false;
                        },
                        onLeaveBack:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                            _this.isOnStage = false;
                        },
                        onEnter:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                            _this.isOnStage = true;
                        },
                        onEnterBack:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                            _this.isOnStage = true;
                        }
                    }
                });

                // contents motion
                const Tl_img = Timeline({
                    scrollTrigger:{
                        scroller: this.stWrapper,
                        trigger:".product-keyvisual",
                        start : "top top",
                        end : "200% bottom",
                        scrub: true,
                    }
                });

                Tl_img.fromTo(".product-keyvisual .bg-wrap__right",
                    {x:0, rotate:0},
                    {x:500, rotate:0, ease:Power1.easeIn,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.product-keyvisual',
                            start : "top top",
                            end : "200% bottom",
                    }}
                );

                Tl_img.fromTo(".product-keyvisual .key-visual__line",
                    { width: "0%" },
                    { width:"100%", ease:Power1.easeIn,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.product-keyvisual',
                            start : "top top",
                            end : "180% bottom",
                        }}
                );

                this.start();
            }
        }
    }
</script>

<style scoped lang="scss">
    section {
        position: relative;
        .product-keyvisual__bg{

            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 822px;
            z-index: 1;
            background-color: black;
            overflow: hidden;
            .bg-img {
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center bottom;

                &.img-pc__ie{
                    display: none;
                }
            }

            .light-bg {
                position: absolute;
                top: 0;
                width: 100%; height: 100%;
                transform-origin: 67% 100%;
                .mask-dimmed {
                    position: absolute;
                    z-index: 1;
                    transform-origin: 67% 100%;
                    transform:  translate3d(-50%,0,0) scaleX(1) scaleY(0.9);

                    left: 50%; bottom: 0;
                }
            }
        }

        .bg-wrap{

            z-index: 2;
            position: absolute;
            width: 100%;
            min-width: $stage-contents-width;
            left: 0;
            top: 0;
            display: flex;
            display: none;

            /*padding-top: 305px;*/
            /*background-color: $color-set-gray;*/

            align-items: flex-end;
            justify-content: space-between;





            /*margin-top: calc(830px - 100vh);*/
            height: 830px;

            .bg-wrap__left{
                width: 524px;
                height: 524px;
                position: relative;
                display: inline-block;

                .svg-area {
                    transform: scaleX(-1) translate3d(50%,0,0);
                }

                .bg-wrap__left-circle{

                    position: absolute;
                    left: 0;
                    transform: translate3d( -55%, 0%, 0 );
                }
            }

            .bg-wrap__right{
                width: 262px;
                height: 524px;
                display: inline-block;
                /*position: absolute;*/
                /*right: 0;*/

                .svg-area {
                    transform: translate3d( -190%,0,0);
                }
            }
            .svg-area {
                opacity: 0.4;

                $circleLen:1700;
                .shape-circle {
                    fill: transparent;
                    stroke-width: 1px;
                    stroke: #000000;
                    animation: 15s draw_circle $vars_easeInOutCubic infinite alternate;
                    transform-origin: 262px 262px;
                }

                .shape-left-circle {
                    fill: transparent;
                    stroke-width: 1px;
                    stroke: #000000;
                    animation: 12s draw_circle_left $vars_easeInOutCubic infinite alternate;
                    transform-origin: 262px 262px;
                }

                $rectLen:3200;
                .shape-rect {
                    fill: transparent;
                    stroke-width: 1px;
                    stroke: #000000;
                    animation: 15s draw_rect $vars_easeInOutCubic infinite alternate;
                }


                @keyframes draw_circle {
                    0% {
                        stroke-dasharray: $circleLen $circleLen;
                        stroke-dashoffset: $circleLen;
                        stroke-width: 1px;
                        transform: rotate(0);
                    }
                    30% {
                        stroke-dasharray: $circleLen;
                        stroke-dashoffset: 0;
                        stroke-width: 1px;
                        transform: rotate(270deg);
                    }
                }

                @keyframes draw_circle_left {
                    0% {
                        stroke-dasharray: $circleLen $circleLen;
                        stroke-dashoffset: $circleLen;
                        stroke-width: 1px;
                        transform: rotate(270deg);
                    }
                    30% {
                        stroke-dasharray: $circleLen;
                        stroke-dashoffset: 0;
                        stroke-width: 1px;
                        transform: rotate(-180deg);
                    }
                }

                @keyframes draw_rect {
                    0% {
                        stroke-dasharray: $rectLen $rectLen;
                        stroke-dashoffset: -$rectLen;
                        stroke-width: 1px;
                    }
                    30% {
                        stroke-dasharray: $rectLen;
                        stroke-dashoffset: 0;
                        stroke-width: 1px;
                    }
                }
            }
        }

        .inner-wrap{
            position: relative;
            width: $stage-min-width;
            margin: 0 auto;
            z-index: 3;

            .contents{
                padding-top: 280px;
                width: $stage-contents-width;
                margin: 0 auto;

                .key-visual__content{
                    display: flex;
                    justify-content: flex-start;
                    margin-bottom: 300px;

                    .key-visual__content-info{
                        width: 570px;
                        padding-top: 0px;
                        margin-top: -40px;
                        .key-visual__content-info__title{
                            //height: 429px;
                            dt{
                                color: #fff;
                                font-size: $font-size-m-lg;

                                font-family: $font-family-sans-serif_light;
                                margin-bottom: 30px;
                                border: 1px solid rgba(#D8D8D8 , 0.5);
                                display: inline-block;
                                padding: 9px 14px 3px;
                                line-height: 26px;
                            }

                            dd{
                                color: #fff;
                                font-size: 94px;
                                line-height: 1;
                                letter-spacing: 2px;
                                font-family: $font-family-sans-serif;
                                p{
                                    white-space:nowrap;
                                    &:last-child {
                                        line-height: 1.05;
                                    }

                                }
                            }
                        }

                        .key-visual__content-line{
                            display: inline-block;
                            width: 435px;
                            height: 1px;
                            background-color: #fff;
                            /*margin-bottom: 30px;*/
                            opacity: 0.5;
                            margin: 25px 0 40px;
                        }

                        .key-visual__content-info__sub{
                            margin-top: 0;
                            line-height: 1.35;
                            dl{
                                margin-bottom: 164px;
                                dt{
                                    color: #fff;
                                    font-size: $h2-font-size;
                                    font-weight: 600;
                                    font-family: $font-family-kr;
                                    line-height: 40px;
                                }

                                .key-visual__content-info__volume{
                                    color: #fff;
                                    font-size: $font-size-m-lg;
                                    font-family: $font-family-sans-serif_light;
                                    margin-top: 4px;
                                    line-height: 32px;
                                }

                                .key-visual__content-info__price{
                                    margin-top: 20px;
                                    color: #fff;
                                    font-size: $font-size-m-lg;
                                    font-family: $font-family-sans-serif_light;
                                    line-height: 32px;
                                }
                            }

                            p{
                                font-size: $h2-font-size;
                                font-family: $font-family-kr;
                                font-weight: 700;
                            }
                        }
                    }

                    .key-visual__content-product{
                        overflow: hidden;
                        margin-top: -95px;
                        height: 637px;
                        img{
                            width: ( 1264 / 2 ) + px;
                        }
                    }
                }

                .key-visual__line{
                    span{
                        display: inline-block;
                        width: 100%;
                        height: 1px;
                        background-color: rgba( 0, 0, 0, 0.3 );
                    }
                }
            }
        }
    }

    .HydrareliefCreamonMask, .HydrareliefCoolingGelCream, .HydracicaCleansingFoam, .HydracicaCalmingMask {
        section {
            .inner-wrap{
                .contents{
                    .key-visual__content{
                        .key-visual__content-info{
                            .key-visual__content-info__title{
                                dd{
                                    font-size: 80px;
                                }
                            }

                            .key-visual__content-info__sub{
                                dl{
                                    margin-bottom: 192px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .mobile {
        section {
            position: relative;
            /*margin-bottom: 253px;*/
            /*padding-bottom: 253px;*/
            /*padding-bottom: 520px;*/
            background-color: #fff;

            .product-keyvisual__bg{
                height: 520px;
            }
            .bg-wrap{
                position: static;
                padding-top: 0;
                min-width: unset;
                align-items: flex-end;
                justify-content: space-between;
                padding-bottom: 10px;
                box-sizing: border-box;
                margin-top: 0;
                height: 480px;

                .bg-wrap__left{
                    width: 122px;
                    height: 244px;
                    position: relative;

                    .svg-area {
                        transform: scaleX(-1) translate3d(60%,0,0);
                    }

                    .bg-wrap__left-circle{
                        position: absolute;
                        left: 0;
                        transform: translate3d( 0, 0%, 0 );

                    }
                }

                .bg-wrap__right{
                    width: 244px;
                    height: 244px;
                    position: relative;

                    .svg-area {
                        transform: translate3d(0%,0,0);
                    }
                }

                .svg-area {
                    opacity: 0.4;

                    .shape-circle {
                        transform-origin: 122px 122px;
                    }

                    .shape-left-circle {
                        transform-origin: 122px 122px;
                    }
                }
            }

            .inner-wrap{
                position: relative;
                top: 0;
                left: 0;
                width: 100%;
                padding: 0 30px;
                box-sizing: border-box;
                background-color: transparent;

                .contents{
                    position: relative;
                    padding-top: 120px;
                    width: 100%;

                    .key-visual__content{
                        position: relative;
                        margin-top: 0;
                        display: flex;
                        justify-content: flex-start;
                        margin-bottom: 0;

                        .key-visual__content-info{
                            position: relative;
                            width: 100%;
                            padding-top: 0;
                            margin-top: 0;
                            .key-visual__content-info__title{
                                /*height: 216px;*/
                                /*margin-bottom: 100px;*/
                                dt{
                                    margin-bottom: 10px;
                                    font-size: $font-size-me;
                                    font-family: $font-family-sans-serif;
                                    padding: 5px 9px 2px;
                                }

                                dd{
                                    /*margin-bottom: 218px;*/
                                    letter-spacing: 0;
                                    font-size: $h2-font-size;
                                    line-height: 40px;
                                    font-family: $font-family-sans-serif_medium;
                                    > p{
                                        /*margin-bottom: 5px;*/
                                    }
                                }
                            }

                            .key-visual__content-line{
                                width: 120px;
                                margin: 100px 0 18px;
                            }

                            .key-visual__content-info__sub{
                                dl{
                                    margin-bottom: 70px;
                                    dt{
                                        margin-bottom: 6px;
                                        font-size: $font-size-m-lg;
                                        line-height: 30px;
                                    }

                                    .key-visual__content-info__volume{
                                        font-size: $font-size-s;
                                        line-height: 18px;
                                        font-family: $font-family-sans-serif;
                                    }

                                    .key-visual__content-info__price{
                                        font-size: $font-size-s;
                                        line-height: 18px;
                                        font-family: $font-family-sans-serif;
                                    }
                                }

                                > span{
                                    display: inline-block;
                                    margin-bottom: 24px;
                                    width: 36px;
                                    height: 1px;
                                    background-color: #000;
                                }

                                p{
                                    margin-bottom: 70px;
                                    font-size: $font-size-me;
                                    font-weight: 700;
                                    line-height: 24px;
                                }

                            }
                        }

                        .key-visual__content-product{
                            position: absolute;
                            top: 55px;
                            right: -30px;
                            width: 245px;
                            margin-top: 0;
                            img{
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }

    .ie{
        section {
            .product-keyvisual__bg{
                .bg-img {
                    &.img-pc__ie{
                        display: block;
                    }
                }

                .light-bg {
                    .mask-dimmed {
                    }
                }
            }

            .bg-wrap{
                .bg-wrap__left{
                    .svg-area {
                    }

                    .bg-wrap__left-circle{
                    }
                }

                .bg-wrap__right{
                    .svg-area {
                    }
                }
                .svg-area {
                    .shape-circle {
                    }

                    .shape-left-circle {
                    }

                    .shape-rect {
                    }
                }
            }

            .inner-wrap{
                .contents{
                    .key-visual__content{
                        .key-visual__content-info{
                            .key-visual__content-info__title{
                                dt{
                                }

                                dd{
                                    p{
                                    }
                                }
                            }

                            .key-visual__content-line{
                            }

                            .key-visual__content-info__sub{
                                dl{
                                    dt{
                                    }

                                    dd{
                                    }
                                }

                                p{
                                }
                            }
                        }

                        .key-visual__content-product{
                            img{
                            }
                        }
                    }

                    .key-visual__line{
                        span{
                        }
                    }
                }
            }
        }

        .HydrareliefCreamonMask, .HydrareliefCoolingGelCream, .HydracicaCleansingFoam, .HydracicaCalmingMask {
            section {
                .inner-wrap{
                    .contents{
                        .key-visual__content{
                            .key-visual__content-info{
                                .key-visual__content-info__title{
                                    dd{
                                    }
                                }

                                .key-visual__content-info__sub{
                                    dl{
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }






</style>
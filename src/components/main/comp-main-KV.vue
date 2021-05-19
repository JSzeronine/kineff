

<template>
    <section class="section-wrap-kv">
        <div class="inner-wrap">
<!--             :style="{ transform: 'translateX('+ pinScrollX +'px)'}"-->
            <div class="product-wrap">
                <div class="product-con">
                    <div class="bg-wrap" v-if="!isEffect">
                        <img class="img-pc" :src="'./images/main/main_bg.jpg'" alt="background image">
                        <img class="img-mb" :src="'./images/main/main_bg_m.jpg'" alt="background image">
                    </div>
                    <div class="img-wrap">
                        <SqAmpoule :isSetComp="isSetComp" :autoCenter="true" :productPer="productPer"></SqAmpoule>
<!--                        <img :src="'./images/main/main_kineff.png'" alt="kineff product">-->
                    </div>
<!--                    <SqAmpoule></SqAmpoule>-->
                </div>

                <div class="light-bg" v-if="isEffect">
                    <img class="mask-dimmed" :src="'./images/main/mask_circle.png'" alt="">
                    <kvGodray :isOnStage="isOnStage"></kvGodray>
                </div>

            </div>

            <div class="text-wrap">
                <div class="title-wrap">
                    <p class="title">the professional standard</p>
                </div>

                <div class="description-wrap">
                    <p>
                        피부 전문가가 사용하는 프로페셔널 케어로
                        피부에 대한 자신감을 빠르게 되찾아드립니다.
                    </p>
                </div>
            </div>


        </div>
    </section>
</template>

<script>

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";

    import SqAmpoule from "../common/comp-sq-ampoule";
    import {EventBus} from "../../bus";

    import kvGodray from "../interactive/comp-KV_godray";


    export default {
        name: "comp-main-KV",
        mixins : [
            MixinContents
        ],

        components: {
            kvGodray,
            SqAmpoule
        },

        data(){
            return {
                Tl:'',
                Tl_img:'',
                productPer:0,
                isOnStage:false,
                isEffect:false
            }
        },

        /*
        watch: {
            'isPin' (to, from) {
                console.log("isPin :", to, saveScrollX)
            }
        },*/

        props: [

        ],

        beforeCreate() {
            this.isEffect = (isMobile || isIE) ? false : true;
        },

        mounted() {
            if( !isIE ){
                Gsap.set(this.$el, {alpha:0});
            }

            this.isEffect = (isMobile || isIE) ? false : true;

            EventBus.$on(EventBus.SCROLL_X_EVENT, this.onScrollX)
        },

        methods: {

            start(){
                Gsap.set(this.$el, {alpha:1});

                const time = 2.0;
                const delay = 0.7;
                Gsap.fromTo('.section-wrap-kv .product-wrap .img-wrap', 0.8, {alpha:0}, {alpha:1, delay:delay*.4, ease:Power1.easeOut});

                if(isMobile){
                    Gsap.fromTo('.section-wrap-kv .text-wrap .title-wrap p', time, {y:50, alpha:0}, {y:0, alpha:1, delay:delay*.5, ease:Power2.easeOut});
                    Gsap.fromTo('.section-wrap-kv .text-wrap .description-wrap p', time, {y:70, alpha:0}, {y:0, alpha:1, delay:delay*.7, ease:Power1.easeOut});
                    Gsap.fromTo('.section-wrap-kv .product-wrap .bg-wrap img', time*3, {alpha:0, scale:1}, {alpha:1, scale:1, delay:delay*.3, ease:Power1.easeOut});
                    Gsap.fromTo('.section-wrap-kv .product-wrap .img-wrap img', time*1.5, {scale:1}, {scale:1, rotate:0, delay:delay*.2, ease:Power1.easeOut});
                } else {
                    Gsap.fromTo('.section-wrap-kv .text-wrap .title-wrap p', time, {y:50}, {y:0, delay:delay*3, ease:Power2.easeOut});
                    Gsap.fromTo('.section-wrap-kv .text-wrap .title-wrap p', time, {alpha:0}, {alpha:1, delay:delay*3, ease:Linear.easeNone});
                    Gsap.fromTo('.section-wrap-kv .text-wrap .description-wrap p', time, {y:70}, {y:0, delay:delay*3, ease:Power1.easeOut});
                    Gsap.fromTo('.section-wrap-kv .text-wrap .description-wrap p', time, {alpha:0}, {alpha:1, delay:delay*3, ease:Linear.easeNone});
                    Gsap.fromTo('.section-wrap-kv .product-wrap .bg-wrap img', time*3, {alpha:0, scale:0.7}, {alpha:1, scale:1, delay:delay*.3, ease:Power1.easeOut});
                    Gsap.fromTo('.section-wrap-kv .product-wrap .img-wrap img', time*1.5, {scale:1.2}, {scale:1, rotate:0, delay:delay*.2, ease:Power1.easeOut});

                    Gsap.fromTo('.section-wrap-kv .product-wrap .light-bg ', time*0.8, {alpha:0, scale:0.5}, {alpha:1, scale:1, delay:delay*2, ease:Power1.easeOut});
                    Gsap.fromTo('.section-wrap-kv .product-wrap .light-bg .mask-dimmed', time, {alpha:1, scaleX:1, scaleY:1}, {alpha:1, scaleX:1.1, scaleY:1.25, delay:delay*2, ease:Power2.easeIn});
                }

            },

            killScrollTrigger() {
                this.Tl.kill();
                this.Tl_img.kill();
            },

            setScrollTrigger() {

                const _this = this;

                if(isMobile) {

                    this.Tl = Timeline({
                        scrollTrigger:{
                            trigger:".section-wrap-kv",
                            start:"top 1%",
                            end:"bottom top",
                            onLeave:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                                _this.$el.classList.add("out-stage");
                                _this.isOnStage = false;
                            },
                            onLeaveBack:() => {
                                // EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                                _this.$el.classList.add("out-stage");
                                _this.isOnStage = false;
                            },
                            onEnter:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                                _this.$el.classList.remove("out-stage");
                                _this.isOnStage = true;
                            },
                            onEnterBack:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                                _this.$el.classList.remove("out-stage");
                                _this.isOnStage = true;
                            }
                        }
                    });

                    // contents motion
                    const TlM = Timeline({
                        scrollTrigger:{
                            scrub: 0.5,
                            trigger:".section-wrap-kv",
                            start:"top top",
                            end:"bottom 0%",
                            onUpdate: self =>
                                _this.productControl(self.progress)
                        }
                    })

                    TlM.fromTo(
                        ".section-wrap-kv .product-wrap .img-wrap",
                        {y:0},
                        {y:"-95vh",x:"5vw", scale:3, rotate:-30, ease:Power1.easeInOut}
                    )

                    TlM.fromTo(".section-wrap-kv .product-wrap .bg-wrap",
                    {opacity:1, y:0},
                        {
                            opacity: 0, y:0, ease:Power2.easeIn,
                            scrollTrigger: {
                                scrub: 0.5,
                                trigger: ".section-wrap-kv",
                                start: "top top",
                                end: "bottom 90%",
                                /*onUpdate: self =>
                                _this.productControl(self.progress)*/
                            }
                        }
                    );

                    this.start();
                    return;
                }



                // section pin
                this.Tl = Timeline({
                    scrollTrigger:{
                        trigger:".section-wrap-kv",
                        pin:".section-wrap-kv .inner-wrap",
                        pinSpacing:false,
                        scroller: this.stWrapper,
                        start:"top top",
                        end:"bottom top",

                        onLeave:() => {
                            this.isPin = false;
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
                            this.isPin = true;
                            EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                            _this.isOnStage = true;
                        },
                        markers:false
                    }
                });

                // contents motion
                this.Tl_img = Timeline({
                    /*scrollTrigger:{
                        scrub: 0,
                        trigger:".section-wrap-kv",
                        scroller: this.stWrapper,
                        start:"top top",
                        end:"bottom top",
                        // start: () => this.$getPos_ttTobt(this.$el, 0),
                        // end: () => this.$getPos_tbTobt(this.$el, 1)
                    }*/
                })

                this.Tl_img.fromTo(".section-wrap-kv .product-wrap .img-wrap",
                    {y:0, scale: 1, rotate:0},
                    {y:-50, scale: 2.5, rotate:-30, ease:Power1.easeIn,
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-kv',
                            start:"0 top",
                            end:"120% bottom",
                            // start: () => this.$getPos_ttTobb(this.$el, 0.0),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.8),
                            onUpdate: self =>
                                _this.productControl(self.progress)
                        }}
                )
                this.Tl_img.fromTo(".section-wrap-kv .product-wrap .img-wrap img",
                    {y:0, x:0, rotate:0},
                    {y:"-70vh", x:100, rotate:5, ease:Power2.easeIn,
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-kv',
                            start:"15% top",
                            end:"120% bottom",
                            markers:false
                            // start: () => this.$getPos_ttTobb(this.$el, 0.5),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.95),


                        }}
                )



                // light
                this.Tl_img.fromTo(".section-wrap-kv .product-wrap .light-bg .mask-dimmed",
                    {opacity:1, y:0},
                    {opacity:1, y:200,
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-kv',
                            start:"10% top",
                            end:"100% bottom",
                            // start: () => this.$getPos_ttTobb(this.$el, 0.1),
                            // end: () => this.$getPos_ttTobb(this.$el, 0.9),
                            markers:false
                        }}
                )

                this.Tl_img.fromTo(".section-wrap-kv .product-wrap .light-bg",
                    {opacity:1, scale:1},
                    {opacity:0, scale:0.8,
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-kv',
                            start:"10% top",
                            end:"100% bottom",
                            // start: () => this.$getPos_ttTobb(this.$el, 0.1),
                            // end: () => this.$getPos_ttTobb(this.$el, 0.9),
                            markers:false
                        }}
                )


                // text
                this.Tl_img.fromTo(".section-wrap-kv .text-wrap .title-wrap",
                    {y:0},
                    {y:"-100vh", ease:Power1.easeIn,
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-kv',
                            start:"10% top",
                            end:"90% bottom",
                            // start: () => this.$getPos_ttTobb(this.$el, 0.22),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.72),
                            markers:false
                        }}
                )

                this.Tl_img.fromTo(".section-wrap-kv .text-wrap .description-wrap",
                    {y:0},
                    {y:"-100vh", ease:Power1.easeIn,
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-kv',
                            start:"10% top",
                            end:"90% bottom",
                            // start: () => this.$getPos_ttTobb(this.$el, 0.20),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.70),
                            markers:false
                        }}
                )

                this.start();
            },

            productControl(per){
                this.productPer = per;
            }
        }
    }
</script>

<style scoped lang="scss">

    section {
        position: relative;
        width: 100%;
        height: 450vh;
        /*padding: 0px 60px;*/
        box-sizing: border-box;
        background-color: #000;

        .inner-wrap {

            .kv-text .path {
                path {
                    stroke-dasharray: 1000;
                    stroke-dashoffset: 1000;
                    animation: dash 5s linear alternate infinite;
                }


            }

            @keyframes dash {
                from {
                    stroke-dashoffset: 2000;
                }
                to {
                    stroke-dashoffset: 0;
                }
            }

            position: relative;

            margin: 0 auto;
            height: 100vh;
            min-height: 700px;
            display: flex;
            align-items: center;


            .product-wrap {
                position: absolute;
                width: 100%; height: 100%;
                overflow: hidden;

                .light-bg {
                    position: absolute;
                    top: 0;
                    width: 100%; height: 100%;
                    transform-origin: 50% 83%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .mask-dimmed {
                        /*opacity: 0;*/
                        position: absolute;
                        z-index: 1;
                        transform-origin: 50% 50%;
                        /*transform:  scaleX(1.2) scaleY(1.25);*/
                        transform:  translate3d(0%,0,0) scaleX(1.1) scaleY(1.25);
                        /*left: 50%;*/
                        /*opacity: 1;*/
                    }

                }

                .product-con {
                    position: relative;
                    z-index: 2;

                    left: 0;
                    width: 100%; height: 100%;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .img-wrap {
                        position: absolute;
                        width: 164px;
                        margin-top: 100px;

                        /*left: 50%; top: 50%;
                        transform: translate3d(-50%,-50%,0);*/
                        img {
                            width: 100%;
                        }
                    }
                    .bg-wrap {
                        position: absolute;
                        width: 100%; height: 100%;
                        transform-origin: 50% 85%;
                        img {
                            position: absolute;
                            top:50%; left: 50%;
                            transform: translate3d(-50%,-50%,0);
                            transform-origin: 50% 85%;
                            /*object-fit: cover;*/
                            /*width: 100%; height: 100%;*/
                        }
                    }
                }


            }

            .text-wrap {
                position: relative;
                height: calc(100% - 160px);
                overflow: hidden;

                width: $stage-contents-width;
                margin: 0 auto;

                color: white;
                display: flex;
                align-items: center;
                justify-content: space-between;
                z-index: 2;

                .title-wrap {
                    width: 30%;
                    font-size: $h1-font-size;
                    text-align: center;
                    line-height: 1.2;
                    p {
                        &.title {

                        }
                        margin-bottom: 50px;
                    }
                }

                .description-wrap {
                    line-height: 1.4;
                    width: 27%;
                    font-size: $h3-font-size;
                    p {
                        font-weight: 600;
                    }

                }
            }


        }
    }


    .mobile {
        section {
            height: auto;
            padding: 0;

            .inner-wrap {
                min-width: unset;
                min-height: unset;
                height: auto;
                padding-bottom: 50vh;
                background-color: black;

                .product-wrap {
                    position: relative;
                    width: 100vw; height: 100vh;

                    .light-bg {
                        position: fixed;
                        pointer-events: none;
                        width: 100%; height: 100vh;

                        .mask-dimmed {
                            transform:  translate3d(-50%,0,0) scaleX(0.4) scaleY(1.3);
                        }
                    }

                    .product-con {
                        position: fixed;
                        pointer-events: none;
                        transform: translate3d(0,0,0);
                        left: 0;
                        width: 100%; height: 100vh;
                        .img-wrap {
                            position: absolute;
                            width: 25vw;
                            height: auto;
                            left: 50%; top: auto; bottom: 2.5%;
                            transform: translate3d(-50%,0%,0);
                            img {
                                object-fit: unset;
                                width: auto;
                                height: 100%;
                            }
                        }
                        .bg-wrap {
                            position: absolute;
                            width: 100%; height: 100vh;
                            left: 0%;

                            img {
                                transform: translate3d(0,0,0);
                                object-fit: unset;
                                left: 0; top:0;
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }


                }

                .text-wrap {
                    position: absolute;
                    display: block;
                    height: auto;
                    overflow: unset;
                    top: 0;
                    width: auto;

                    margin-top: 125px;
                    padding: 0px 30px;
                    box-sizing: border-box;

                    .title-wrap {
                        font-size: $font-size-m-xl;
                        word-break: keep-all;
                        text-align: left;
                        width: 70%;


                        p {
                            &.title {
                                margin-bottom: 0;
                                line-height: 1.2;
                            }
                        }
                    }

                    .description-wrap {
                        width: 70%;
                        word-break: keep-all;
                        font-size: $font-size-m-me;
                        margin-top: 30px;
                        p {
                            font-weight: normal;
                        }

                    }
                }


            }

            &.out-stage {
                z-index: 0;
                pointer-events: none;
            }
        }
    }


    .ie, .tablet{
        section {
            height: 100vh;
            overflow: hidden;
            .inner-wrap {
                .kv-text .path {
                    path {
                    }
                }

                .product-wrap {
                    position: absolute;
                    left: 0;
                    top: 0;
                    .product-con {
                        .img-wrap {
                            //left: 0;
                            //top: 0;
                            //width: 100%;
                            //height: 100%;
                            //display: flex;
                            //align-items: center;
                            //justify-items: center;
                            position: relative;
                            margin-top: 230px;

                            img {
                                width: 136px;
                                height: auto;
                            }
                        }

                        .bg-wrap {
                            left: 0px;
                            top: 0px;
                            img {
                            }
                        }
                    }
                }

                .text-wrap {
                    .title-wrap {
                        p {
                            &.title {
                            }
                        }
                    }

                    .description-wrap {
                    }
                }
            }
        }
    }

</style>
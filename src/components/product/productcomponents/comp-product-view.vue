<template>

    <section class="wrap product-view__section">
        <!--        <svg class="svg_bx" ref="svgBx" style="position: absolute; left: 0; top: 0; opacity: 0;">-->
        <!--        <svg class="svg_bx" viewBox="0, 0, 1000, 1000" ref="svgBx" style="position: absolute; left: 0; top: 0; opacity: 0;" xmlns="http://www.w3.org/2000/svg" version="1.1">-->
        <!--            <defs>-->
        <!--                <clipPath id="product-name__mask">-->
        <!--                    <rect ref="productNameMask" class="product-name__mask-rect" v-bind:x="maskPosition.x" v-bind:y="maskPosition.y" v-bind:width="maskPosition.w" v-bind:height="maskPosition.h"></rect>-->
        <!--                </clipPath>-->
        <!--            </defs>-->
        <!--        </svg>-->

        <div class="inner-wrap">
            <div class="contents">
                <div class="product-view">

                    <div class="product-trigger__pin-0">
                        <div class="product-trigger__pin-0__con">
                            <div class="product-description__front">
                                <div class="product-description__front-text">
                                    <slot name="title"></slot>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-trigger__pin-1">
                        <div class="product-trigger__bg-container">
                            <div class="product-trigger__pin-1__bg">
                                <div class="product-trigger__pin-1__bg-mask">
                                    <slot name="bg"></slot>
                                </div>
                            </div>
                        </div>

                        <div class="product-trigger__pin-1__content">
                            <div class="product-trigger__pin-2">
                                <div class="product-trigger__pin-2__con">
                                    <div class="product-description__back">
                                        <div class="product-description__back-text">
                                            <slot name="title"></slot>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="product-view__container">
                                <div class="product-view__bx">
                                    <div v-if="isText" class="product-view__bx-text">
                                        <p>Centella Asiatica Extract</p>
                                        <dl>
                                            <dt>
                                                스트레스 받은 피부의<br>
                                                진정을 위한<br>
                                                100% 대나무 유래 마스크 시트
                                            </dt>
                                            <dd>
                                                식물유래 대나무 시트가<br>
                                                지치고 자극 받은 피부에 부드럽게 밀착되어<br>
                                                편안한 진정에 도움을 줍니다.
                                            </dd>
                                        </dl>
                                    </div>

                                    <div v-if="!isText" class="product-view__bx-guide">
                                        <div class="product-view__info-left">
                                            <dl>
                                                <dt><slot name="info-left-title"></slot></dt>
                                                <dd><slot name="info-left-sub"></slot></dd>
                                            </dl>
                                        </div>

                                        <div class="product-view__info-img">
                                            <div class="product-view__info-img__bx">
                                                <slot name="product-img"></slot>
                                            </div>

                                            <div class="product-view__info-img__line">
                                                <span></span>
                                            </div>
                                        </div>

                                        <div class="product-view__info-right">
                                            <div class="product-view__info-right__txt">
                                                <slot name="info-right-sub"></slot>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="!isText" class="m-product-view_extract">
                    <div class="extract_txt">
                        <span>
                            <slot name="m-title-s"></slot>
                        </span>
                        <h2>
                            <slot name="m-title"></slot>
                        </h2>
                        <p>
                            <slot name="m-description"></slot>
                        </p>
                    </div>
                    <div class="extract_img">
                        <slot name="m-product-img"></slot>
                    </div>

                    <slot name="m-bg"></slot>
                </div>

                <div v-if="isText" class="m-product-view_extract m-text__type">
                    <div class="extract_txt">
                        <span>
                            <slot name="m-title-s"></slot>
                        </span>
                        <h2>
                            <slot name="m-title"></slot>
                        </h2>
                        <p>
                            <slot name="m-description"></slot>
                        </p>
                    </div>
                    <div class="extract_img">
                        <slot name="m-product-img"></slot>
                    </div>

                    <slot name="m-bg"></slot>
                </div>

                <!-- centella extract -->
            </div>
        </div>
    </section>
</template>

<script>
import { isMobile, isChrome, isIE } from 'mobile-device-detect';
import MixinContents from "../../../mixin/mixin-contents-sctrigger";
import { EventBus } from "../../../bus";

export default {
    name: "comp-product-view",
    mixins : [
        MixinContents
    ],

    data(){
        return{
            maskPosition : {
                w : 266,
                h : 370,
                x : 0,
                y : 0
            }
        }
    },

    props : {
        isText : {
            type : Boolean,
            default : () => false,
        }
    },

    mounted() {

        this.maskPosition.x = ( window.innerWidth - this.maskPosition.w ) / 2;
        this.maskPosition.y = ( window.innerHeight - this.maskPosition.h ) / 2;
    },

    methods : {
        showMobile(){
            const TL = Timeline({});
            const viewContainer = this.$el.querySelector( ".m-product-view_extract" );
            const viewBg = this.$el.querySelector( ".m-product-view__bg" );

            TL.fromTo( ".m-product-view__bg", {
                scale : 1.5,
            },{
                scale : 1,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : this.$el,
                    scrub : 1,
                    start :  "top bottom",
                    end : "bottom top",
                    onEnter : () => viewBg.style.visibility = "visible",
                    onLeave : () => {
                        viewBg.style.visibility = "hidden"
                    },

                    onEnterBack : () => viewBg.style.visibility = "visible",
                    onLeaveBack : () => viewBg.style.visibility = "hidden"
                }
            });

            TL.fromTo( ".product-view__section .m-product-view_extract", {
            }, {
                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : ".product-view__section .m-product-view_extract",
                    start : "top top",
                    end : "bottom top",
                    scrub : true,
                    onLeave:() => {         EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT); },
                    onLeaveBack:() => {     EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT); },
                    onEnter:() => {         EventBus.$emit(EventBus.CHANGE_NAV_WHITE); },
                    onEnterBack:() => {     EventBus.$emit(EventBus.CHANGE_NAV_WHITE); }
                }
            });


            //nav control
            TL.fromTo( ".extract_img", {
                y : 200,
            }, {
                y:0,
                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : ".extract_img",
                    start : "top bottom",
                    end : "top center",
                    scrub : true,
                }
            });
        },

        setScrollTrigger(){
            if( isMobile ){

                this.showMobile();
                return;
            }

            const TL = Timeline({});

            const productViewBx = this.$el.querySelector( ".inner-wrap" );
            const pin0 = this.$el.querySelector( ".product-trigger__pin-0" );
            const pin1 = this.$el.querySelector( ".product-trigger__pin-1" );
            const pin2 = this.$el.querySelector( ".product-trigger__pin-2" );

            const frontTextPosY = this.$el.querySelector( ".product-description__front-text" ).offsetHeight;
            TL.fromTo( ".product-description__front-text", {
                y : (( window.innerHeight - frontTextPosY ) / 2 ) * ( -1 ),
            }, {
                y: "0",
                ease:Linear.easeNone,
                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : ".product-view__section .product-trigger__pin-0",
                    start : "top bottom",
                    end : "bottom bottom",
                    scrub : true,
                }
            });

            TL.fromTo( ".product-trigger__pin-1",
                {},
                {
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-trigger__pin-1",
                        start : "top top",
                        end : "bottom bottom",
                        pin : ".product-trigger__bg-container",
                        pinSpacing : false,
                    }
                }
            );

            TL.fromTo( ".product-trigger__pin-1",
                {},
                {
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-trigger__pin-2",
                        start : "top top",
                        end : "200% bottom",
                        pin : ".product-trigger__pin-2__con",
                    }
                }
            );

            let wW = ( window.innerWidth < 1280 ) ? 1280 : window.innerWidth;
            let wH = window.innerHeight;

            let cX = ( wW - this.maskPosition.w ) / 2;
            let cY = ( wH - this.maskPosition.h ) / 2;
            TL.fromTo( ".product-trigger__pin-1__bg-mask",
                {
                    // x : cX,
                    // y : cY,
                    // width : this.maskPosition.w,
                    // height : this.maskPosition.h,
                },
                {
                    // x : 0,
                    // y : 0,
                    // width : "100%",
                    // height : "100%",
                    scale : 1,
                    ease:Cubic.easeIn,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-trigger__pin-2",
                        start : "top top",
                        end : "200% bottom",
                        scrub : true,
                        onUpdate : ( $self ) => {
                            wW = ( window.innerWidth < 1280 ) ? 1280 : window.innerWidth;
                            wH = window.innerHeight;

                            cX = ( wW - this.maskPosition.w ) / 2;
                            cY = ( wH - this.maskPosition.h ) / 2;

                            let posX = cX - ( cX * $self.progress );
                            let posY = cY - ( cY * $self.progress );

                            let w = this.maskPosition.w + (( wW - this.maskPosition.w ) * $self.progress );
                            let h = this.maskPosition.h + (( wH - this.maskPosition.h ) * $self.progress );

                            Gsap.set( ".product-trigger__pin-1__bg-mask", { x: posX, y:posY, width:w, height:h });
                        }
                    }
                }
            );

            Gsap.set( ".product-trigger__pin-1__bg-mask", { x: cX, y:cY, width:this.maskPosition.w, height:this.maskPosition.h });

            TL.fromTo( ".product-trigger__pin-1__bg-img",
                {
                    scale : 1.2,
                    // x : -cX,
                    // y : -cY,
                },
                {
                    // x : 0,
                    // y : 0,
                    scale : 1,
                    ease:Cubic.easeIn,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-trigger__pin-2",
                        start : "top top",
                        end : "200% bottom",
                        scrub : true,
                        onUpdate : ( $self ) => {
                            let posX = cX - ( cX * $self.progress );
                            let posY = cY - ( cY * $self.progress );

                            Gsap.set( ".product-trigger__pin-1__bg-img", { x: -posX, y:-posY });
                        }
                    }
                }
            );

            Gsap.set( ".product-trigger__pin-1__bg-img", { x: -cX, y:-cY });

            TL.fromTo( ".product-description__front-text",
                {
                    opacity : 1,
                },
                {
                    opacity: 0,
                    ease:Cubic.easeIn,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-trigger__pin-2",
                        start : "top top",
                        end : "130% bottom",
                        scrub : true,
                    }
                }
            );

            TL.fromTo( ".product-description__back-text",
                {
                    opacity : 0,
                },
                {
                    opacity: 1,
                    ease:Cubic.easeIn,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-trigger__pin-2",
                        start : "top top",
                        end : "130% bottom",
                        scrub : true,
                    }
                }
            );

            const productViewInfoBx = this.$el.querySelector( ".product-view__bx" );
            TL.fromTo( ".product-view__info-img__line",
                { width : "0%", },
                {
                    width : "100%",
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-view__section .product-view__bx",
                        start : "-50% top",
                        end : "bottom bottom",
                        scrub : true,
                    }
                }
            );

            TL.fromTo( ".product-view__info-left",
                {
                    y:300,
                    opacity : 0,
                },
                {
                    y:0,
                    opacity : 1,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-view__section .product-view__bx",
                        start : "-50% top",
                        end : "bottom bottom",
                        scrub : true,
                    }
                }
            );

            TL.fromTo( ".product-view__info-right",
                {
                    y:450,
                    opacity : 0,
                },
                {
                    y:0,
                    opacity: 1,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-view__section .product-view__bx",
                        start : "-50% top",
                        end : "bottom bottom",
                        scrub : true,
                    }
                }
            );

            TL.fromTo( ".product-trigger__pin-1__bg",
                {
                    y:"0vh",
                },
                {
                    y:"80vh",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-view__section .product-view__bx",
                        start : "top top",
                        end : "200% bottom",
                        scrub : true,
                    }
                }
            );

            TL.fromTo( ".product-trigger__pin-1__bg", {
            }, {
                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : ".product-view__bx",
                    start : "top bottom",
                    end : "bottom top",
                    onLeave:() => {
                        EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                    },
                    onLeaveBack:() => {
                        EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                    },
                    onEnter:() => {
                        EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                    },
                    onEnterBack:() => {
                        EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                    }
                }
            });

            ScTrigger.create({
                scroller : this.stWrapper,
                animation : TL,
                trigger : ".product-view__section",
                start : "top top",
                end : "bottom bottom",
                pin : ".product-view__section .product-trigger__pin-0",
                pinSpacing: false,
            });
        }
    }
}
</script>

<style scoped lang="scss">
.wrap{
    .inner-wrap{
        .contents{
            .product-view{
                position: relative;

                .product-trigger__pin-0{
                    z-index: 2;
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .product-description__front{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        .product-description__front-text{
                            text-align: center;
                            font-size: 85px;
                            line-height: 85px;
                            font-family: $font-family-sans-serif_thin;
                        }
                    }
                }

                .product-trigger__pin-1{
                    position: relative;
                    z-index: 1;

                    .product-trigger__bg-container{
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100vh;
                        position: absolute;

                        .product-trigger__pin-1__bg{
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100vh;

                            .product-trigger__pin-1__bg-mask{
                                overflow: hidden;
                                position: absolute;

                                .product-trigger__pin-1__bg-img{
                                    z-index: 12;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    width: 100vw;
                                    min-width: 1280px;
                                    height: 100vh;
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }
                            }
                        }
                    }

                    .product-trigger__pin-1__content{
                        position: relative;
                        z-index: 13;
                        .product-trigger__pin-2{
                            width: 100%;
                            height: 100vh;
                            .product-trigger__pin-2__con{
                                width: 100%;
                                height: 100vh;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                .product-description__back{
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    .product-description__back-text{
                                        color: #fff;
                                        opacity: 1;
                                        text-align: center;
                                        font-size: 85px;
                                        line-height: 85px;
                                        font-family: $font-family-sans-serif_thin;
                                    }
                                }
                            }
                        }

                        .product-view__container{
                            width: $stage-contents-width;
                            margin: 0 auto;
                            padding-top: 100vh;

                            .product-view__bx{
                                display: flex;
                                align-items: center;
                                flex-wrap: wrap;
                                width: 100%;
                                height: 100vh;

                                .product-view__bx-text{
                                    display: flex;
                                    justify-content: center;
                                    flex-wrap: wrap;
                                    width: 100%;

                                    p{
                                        width: 100%;
                                        text-align: center;
                                        font-size: $font-size-xl;
                                        font-family: $font-family-sans-serif_light;
                                        line-height: 28px;
                                        color: #fff;
                                        margin-bottom: 54px;
                                    }

                                    dl{
                                        dt{
                                            margin-bottom: 83px;
                                            width: 100%;
                                            text-align: center;
                                            font-size: 55px;
                                            line-height: 65px;
                                            font-weight: 700;
                                            color: #fff;
                                            border-bottom: 1px solid white;
                                            padding-bottom: 60px;
                                        }

                                        dd{
                                            width: 100%;
                                            text-align: center;
                                            font-size: $font-size-xl;
                                            line-height: 32px;
                                            font-weight: 300;
                                            color: #fff;
                                        }
                                    }
                                }

                                .product-view__bx-guide{
                                    width: 100%;
                                    display: flex;
                                    justify-content: space-between;

                                    .product-view__info-left{
                                        margin-top: 114px;
                                        display: flex;
                                        justify-content: flex-start;
                                        position: relative;
                                        width: 352px;
                                        dl{
                                            dt{
                                                margin-bottom: 25px;
                                                font-size: $font-size-lg;
                                                line-height: 24px;
                                                font-family: $font-family-sans-serif;
                                                color: #fff;
                                            }

                                            dd{
                                                font-size: $h2-font-size;
                                                line-height: 42px;
                                                color: #fff;
                                                letter-spacing: -1px;
                                                font-weight: 700;
                                                font-family: $font-family-kr;
                                            }
                                        }

                                        .product-view__line{
                                            position: absolute;
                                            font-size: 0;
                                            right: -1px;
                                            top: 84px;
                                            span{
                                                display: inline-block;
                                                width: 198px;
                                                height: 1px;
                                                background-color: #fff;
                                            }
                                        }
                                    }

                                    .product-view__info-img{
                                        position: relative;
                                        width: 497px;

                                        .product-view__info-img__bx{
                                            width: 100%;
                                            position: relative;
                                            z-index: 2;
                                            img{
                                                width: 100%;
                                            }
                                        }

                                        .product-view__info-img__line{
                                            position: absolute;
                                            z-index: 1;
                                            left: 0;
                                            top: 199px;
                                            width: 100%;
                                            span{
                                                display: block;
                                                width: 100%;
                                                height: 1px;
                                                background-color: #fff;
                                            }
                                        }
                                    }

                                    .product-view__info-right{
                                        width: 351px;
                                        display: flex;
                                        justify-content: flex-end;
                                        position: relative;
                                        margin-top: 157px;

                                        .product-view__line{
                                            position: absolute;
                                            left: -2px;
                                            top: 41px;
                                            font-size: 0;
                                            span{
                                                display: inline-block;
                                                width: 160px;
                                                height: 1px;
                                                background-color: #fff;
                                            }
                                        }

                                        .product-view__info-right__txt{
                                            font-size: $font-size-xl;
                                            line-height: 32px;
                                            font-weight: 300;
                                            color: #fff;
                                            letter-spacing: -1px;
                                            font-family: $font-family-kr;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .m-product-view_extract {
                display: none;
            }
        }
    }
}

.mobile {
    .wrap{
        z-index: 1;
        .svg_bx { display: none; }
        .inner-wrap{
            .contents{
                .product-view{
                    z-index: 1;
                    position: relative;
                    background-color: white;
                    //padding: 0 30px 120px 30px;
                    padding: 0 0 120px 0;
                    box-sizing: border-box;
                    .product-trigger__pin-0{
                        height: auto;
                        .product-description__front{
                            .product-description__front-text{
                                font-size: $h2-font-size;
                                line-height: 38px;
                                width: 82%;
                                font-family: $font-family-sans-serif_light;
                            }
                        }
                    }

                    .product-trigger__pin-1{
                        display: none;
                        .product-trigger__bg-container{
                            .product-trigger__pin-1__bg{
                                .product-trigger__pin-1__bg-mask{
                                    .product-trigger__pin-1__bg-img{
                                    }
                                }
                            }
                        }

                        .product-trigger__pin-1__content{
                            .product-trigger__pin-2{
                                .product-trigger__pin-2__con{
                                    .product-description__back{
                                        .product-description__back-text{
                                        }
                                    }
                                }
                            }

                            .product-view__container{
                                .product-view__bx{
                                    .product-view__bx-text{
                                        p{
                                        }

                                        dl{
                                            dt{
                                            }

                                            dd{
                                            }
                                        }
                                    }

                                    .product-view__bx-guide{
                                        .product-view__info-left{
                                            dl{
                                                dt{
                                                }

                                                dd{
                                                }
                                            }

                                            .product-view__line{
                                                span{
                                                }
                                            }
                                        }

                                        .product-view__info-img{
                                            .product-view__info-img__bx{
                                                img{
                                                }
                                            }

                                            .product-view__info-img__line{
                                                span{
                                                }
                                            }
                                        }

                                        .product-view__info-right{
                                            .product-view__line{
                                                span{
                                                }
                                            }

                                            .product-view__info-right__txt{
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
















                }

                /* mobile 추가 */
                .m-product-view_extract {
                    position: relative;
                    padding: 70px 0;
                    box-sizing: border-box;
                    font-size: 0;

                    &.m-text__type{
                        width: 100%;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-items: center;
                        .extract_txt{
                            padding: 0 50px;
                            width: 100%;
                            text-align: center;

                            span{
                            }

                            h2{
                                border-bottom: 1px solid white;
                                padding-bottom: 24px;
                            }

                            p{
                            }
                        }

                        .extract_img {
                            display: none;
                        }

                    }

                    .extract_txt {

                        padding: 0 30px;
                        z-index: 2;
                        position: relative;
                        color: #fff;
                        span {
                            display: block;
                            margin-bottom: 20px;
                            font-size: $font-size-lg;
                            line-height: 24px;
                            font-family: $font-family-sans-serif;
                        }

                        h2 {
                            margin-bottom: 24px;
                            font-size: $font-size-m-lg;
                            line-height: 30px;
                            font-weight: 700;
                            font-family: $font-family-kr;
                        }

                        p {
                            margin-bottom: 64px;
                            font-size: $font-size-xs;
                            line-height: 24px;
                            font-weight: 400;
                            font-family: $font-family-kr;
                        }
                    }

                    .extract_img {
                        z-index: 3;
                        position: relative;
                        width: 100%;
                        margin: 0 auto;
                        img { width: 100%; }
                    }

                    .m-product-view__bg{
                        visibility: hidden;
                        z-index: 0;
                        position: fixed;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100vh;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                }

                .m-product-view_extract {
                    display: block;
                    //display: none;
                }
            }
        }
    }
}

.ie, .tablet{
    .wrap{
        .inner-wrap{
            .contents{
                .product-view{
                    .product-trigger__pin-0{
                        height: 55vh;
                        align-items: flex-start;
                        .product-description__front{
                            .product-description__front-text{
                            }
                        }
                    }

                    .product-trigger__pin-1{
                        width: 100%;
                        height: 100vh;
                        position: relative;
                        .product-trigger__bg-container{
                            position: relative;
                            .product-trigger__pin-1__bg{
                                .product-trigger__pin-1__bg-mask{
                                    overflow: initial;
                                    left: 0;
                                    top: 0;
                                    width: 100%;
                                    height: 100%;
                                    .product-trigger__pin-1__bg-img{
                                    }
                                }
                            }
                        }

                        .product-trigger__pin-1__content{
                            z-index: 50;
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            .product-trigger__pin-2{
                                display: none;
                                .product-trigger__pin-2__con{
                                    .product-description__back{
                                        .product-description__back-text{
                                            display: none;
                                        }
                                    }
                                }
                            }

                            .product-view__container{
                                position: relative;
                                top: 0;
                                left: 0;
                                height: 100%;
                                padding-top: 0;
                                .product-view__bx{
                                    .product-view__bx-guide{
                                        .product-view__info-left{
                                            dl{
                                                dt{
                                                }

                                                dd{
                                                }
                                            }

                                            .product-view__line{
                                                span{
                                                }
                                            }
                                        }

                                        .product-view__info-img{
                                            .product-view__info-img__bx{
                                                img{
                                                }
                                            }

                                            .product-view__info-img__line{
                                                span{
                                                }
                                            }
                                        }

                                        .product-view__info-right{
                                            .product-view__line{
                                                span{
                                                }
                                            }

                                            .product-view__info-right__txt{
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .m-product-view_extract {
                }
            }
        }
    }
}

.windows{
    .wrap{
        .inner-wrap{
            .contents{
                .product-view{
                    .product-trigger__pin-0{
                        .product-description__front{
                            .product-description__front-text{
                            }
                        }
                    }

                    .product-trigger__pin-1{
                        .product-trigger__bg-container{
                            .product-trigger__pin-1__bg{
                                .product-trigger__pin-1__bg-mask{
                                    .product-trigger__pin-1__bg-img{
                                    }
                                }
                            }
                        }

                        .product-trigger__pin-1__content{
                            .product-trigger__pin-2{
                                .product-trigger__pin-2__con{
                                    .product-description__back{
                                        .product-description__back-text{
                                        }
                                    }
                                }
                            }

                            .product-view__container{
                                .product-view__bx{
                                    .product-view__bx-text{
                                        p{
                                        }

                                        dl{
                                            dt{
                                            }

                                            dd{
                                            }
                                        }
                                    }

                                    .product-view__bx-guide{
                                        .product-view__info-left{
                                            dl{
                                                dt{
                                                }

                                                dd{
                                                    font-size: 29px;
                                                }
                                            }

                                            .product-view__line{
                                                span{
                                                }
                                            }
                                        }

                                        .product-view__info-img{
                                            .product-view__info-img__bx{
                                                img{
                                                }
                                            }

                                            .product-view__info-img__line{
                                                span{
                                                }
                                            }
                                        }

                                        .product-view__info-right{
                                            .product-view__line{
                                                span{
                                                }
                                            }

                                            .product-view__info-right__txt{
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .m-product-view_extract {
                }
            }
        }
    }

}


</style>

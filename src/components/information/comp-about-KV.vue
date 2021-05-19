
<template>
    <section class="about-main-wrap">
        <div class="inner-wrap">
            <div class="about-keyvisual">
                <div class="about-keyvisual__inner">
                    <div class="about-keyvisual__bx">
                        <div class="about-keyvisual__step about-keyvisual__step-0">
                            <div class="about-keyvisual__step-0__bx">
                                <h2>
                                    <span>the skin effect</span>
                                </h2>
                                <span class="about-keyvisual__step-0__line"></span>
                                <p>
                                    피부를 위한<br>
                                    효과
                                </p>
                            </div>
                        </div>

                        <div class="about-keyvisual__step about-keyvisual__step-1">
                            <div class="about-keyvisual__step-1__bx">
                                자극적인 시술로 인해 붉어진 얼굴과<br class="pc-br">
                                각종 유해환경으로 인한<br class="pc-br">
                                피부 트러블 때문에
                            </div>
                        </div>

                        <div class="about-keyvisual__step about-keyvisual__step-2">
                            <div class="about-keyvisual__step-2__bx">
                                나의 모습에 자신을 잃었던 경험은<br class="pc-br">
                                누구나 공감할 수 있을 것입니다.
                            </div>
                        </div>

                        <div class="about-keyvisual__step about-keyvisual__step-3">
                            <div class="about-keyvisual__step-3__bx">
                                키네프 “skin effect”,<br>
                                즉 “피부를 위한 효과”라는 의미를 담은<br>
                                이름처럼 고민이 있는 피부에<br>
                                도움을 주기 위해 존재합니다.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="about-main__video-pc bg-pc">
                    <video class="img-pc" :src="`../images/about/about_bg.mp4`" autoplay loop playsinline muted></video>
                    <video class="img-mb" :src="`../images/about/about_bg_m.mp4`" autoplay loop playsinline muted></video>
                </div>
            </div>
        </div>

        <!--        <div class="img-wrap bg-m" :style="{backgroundImage:'url(../images/about/m-about-main-bg.jpg)'}"></div>-->
    </section>
</template>

<script>
import { isMobile, isChrome, isIE } from 'mobile-device-detect';
import MixinContents from "../../mixin/mixin-contents-sctrigger";
import {EventBus} from "../../bus";

export default {
    name: "section-about-kv",
    mixins : [
        MixinContents
    ],

    mounted() {

    },

    methods : {
        start(){

            let subPosX = 220;
            let lineW = 184;
            let delay = 0.5;

            if( isMobile ){
                subPosX = 0;
                delay = 0;
                lineW = 50;
            }

            let step0 = this.$el.querySelector( ".about-main-wrap .about-keyvisual__step-0" );
            let step1 = this.$el.querySelector( ".about-main-wrap .about-keyvisual__step-1" );
            let step2 = this.$el.querySelector( ".about-main-wrap .about-keyvisual__step-2" );
            let step3 = this.$el.querySelector( ".about-main-wrap .about-keyvisual__step-3" );

            let title = step0.querySelector( "h2" );
            let line = step0.querySelector( ".about-keyvisual__step-0__line" );
            let sub = step0.querySelector( "p" );

            setTimeout( function(){
                Gsap.to( title, 1, { opacity:1, y:0, ease:Cubic.easeInOut });
                Gsap.to( line, 1.2, { width:lineW, ease:Cubic.easeInOut, delay:0.9 });
                Gsap.to( sub, 1.2, { x:0, opacity:1, ease:Cubic.easeInOut, delay:0.9 });

                if( isMobile ){
                    Gsap.to( step1, 1, { opacity : 1, y:0, ease:Cubic.easeInOut, delay:.9 });
                    Gsap.to( step2, 1, { opacity : 1, y:0, ease:Cubic.easeInOut, delay:.9 });
                    Gsap.to( step3, 1, { opacity : 1, y:0, ease:Cubic.easeInOut, delay:.9 });

                    Gsap.set( step1, { y:20 });
                    Gsap.set( step2, { y:20 });
                    Gsap.set( step3, { y:20 });
                }

            }, 1000 * delay );

            Gsap.set( title, { opacity : 0, y:20 });
            Gsap.set( sub, { opacity : 0, x:subPosX });
        },

        showMobile(){
            this.start();

            const TL = Timeline({});

            TL.fromTo( ".about-main-wrap .about-main__video-pc video", {
                opacity: 1,
            }, {
                opacity : 0,
                ease:Linear.easeNone,
                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : ".about-main-wrap .about-keyvisual__inner",
                    start : "bottom bottom",
                    end : "bottom 40%",
                    scrub : true,
                }
            });
        },

        setScrollTrigger() {
            if( isMobile ){
                this.showMobile();
                return;
            }

            this.start();

            const TL = Timeline({});

            TL.fromTo( ".about-main-wrap .about-keyvisual", {

            }, {

                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : ".about-main-wrap .about-keyvisual",
                    start : "top top",
                    end : "bottom top",
                    pin : ".about-main-wrap .about-keyvisual",
                    pinSpacing : false,
                    // markers : true,
                }
            });

            TL.fromTo( ".about-main-wrap .about-main__video-pc video", {
                scale : 1,
            }, {
                scale : 1.05,
                ease:Cubic.easeOut,
                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : ".about-main-wrap .about-keyvisual__inner",
                    start : "bottom bottom",
                    end : "bottom top",
                    scrub : 0.35,
                }
            });

            TL.fromTo( ".about-main-wrap .about-main__video-pc video", {
                opacity: 1,
            }, {
                opacity : 0,
                ease:Linear.easeNone,
                scrollTrigger : {
                    scroller : this.stWrapper,
                    trigger : ".about-main-wrap .about-keyvisual__inner",
                    start : "bottom bottom",
                    end : "bottom 42%",
                    scrub : true,
                }
            });


            let inner = this.$el.querySelector( ".about-main-wrap .about-keyvisual__inner" );
            TL.fromTo( ".about-keyvisual__step-0",
                {
                    y : "50vh",
                    opacity : 1,
                },
                {
                    y : "30vh",
                    opacity : 0,
                    ease:Power1.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0 ),
                        end : () => this.$getPos_ttTobb( inner, 0.14 ),
                        scrub : true,
                        onUpdate : ( $self ) => {
                        }
                    }
                }
            );

            TL.fromTo( ".about-keyvisual__step-0 .about-keyvisual__step-0__bx",
                { y : "0vh" },
                {
                    y: "-5vh",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0 ),
                        end : () => this.$getPos_ttTobb( inner, 0.14 ),
                        scrub : true,
                    }
                }
            )

            TL.fromTo( ".about-keyvisual__step-1",
                {
                    y : "70vh",
                    opacity : 0,
                },
                {
                    y : "50vh",
                    opacity : 1,
                    ease:Power1.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.14 ),
                        end : () => this.$getPos_ttTobb( inner, 0.28 ),
                        scrub : true,
                    }
                }
            )

            TL.fromTo( ".about-keyvisual__step-1 .about-keyvisual__step-1__bx",
                { y : "5vh" },
                {
                    y: "-5vh",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.18 ),
                        end : () => this.$getPos_ttTobb( inner, 0.38 ),
                        scrub : true,
                    }
                }
            )

            TL.fromTo( ".about-keyvisual__step-1",
                {
                    y : "50vh",
                    opacity : 1,
                },
                {
                    y: "30vh",
                    opacity : 0,
                    ease:Power1.easeIn,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.28 ),
                        end : () => this.$getPos_ttTobb( inner, 0.42 ),
                        scrub : true,
                    }
                }
            );

            TL.fromTo( ".about-keyvisual__step-2",
                {
                    y : "70vh",
                    opacity : 0,
                },
                {
                    y : "50vh",
                    opacity : 1,
                    ease:Power1.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.42 ),
                        end : () => this.$getPos_ttTobb( inner, 0.57 ),
                        scrub : true,
                    }
                }
            )

            TL.fromTo( ".about-keyvisual__step-2 .about-keyvisual__step-2__bx",
                { y : "5vh" },
                {
                    y: "-5vh",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.47 ),
                        end : () => this.$getPos_ttTobb( inner, 0.67 ),
                        scrub : true,
                    }
                }
            )

            TL.fromTo( ".about-keyvisual__step-2",
                {
                    y : "50vh",
                    opacity : 1,
                },
                {
                    y: "30vh",
                    opacity : 0,
                    ease:Power1.easeIn,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.57 ),
                        end : () => this.$getPos_ttTobb( inner, 0.71 ),
                        scrub : true,
                    }
                }
            );

            TL.fromTo( ".about-keyvisual__step-3",
                {
                    y : "70vh",
                    opacity : 0,
                },
                {
                    y : "50vh",
                    opacity : 1,
                    ease:Power1.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.71 ),
                        end : () => this.$getPos_ttTobb( inner, 0.85 ),
                        scrub : true,
                    }
                }
            )

            TL.fromTo( ".about-keyvisual__step-3 .about-keyvisual__step-3__bx",
                { y : "5vh" },
                {
                    y: "-5vh",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.75 ),
                        end : () => this.$getPos_ttTobb( inner, 0.95 ),
                        scrub : true,
                    }
                }
            )

            TL.fromTo( ".about-keyvisual__step-3",
                {
                    y : "50vh",
                    opacity : 1,
                },
                {
                    y: "30vh",
                    opacity : 0,
                    ease:Power1.easeIn,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : inner,
                        start : () => this.$getPos_ttTobb( inner, 0.85 ),
                        end : () => this.$getPos_ttTobb( inner, 1 ),
                        scrub : true,
                    }
                }
            );

            Gsap.set( ".about-keyvisual__step-1", { opacity : 0 });
            Gsap.set( ".about-keyvisual__step-2", { opacity : 0 });
            Gsap.set( ".about-keyvisual__step-3", { opacity : 0 });
        },

        killScrollTrigger() {

        }
    }
}
</script>

<style scoped lang="scss">

.about-main-wrap {
    background-color: rgba( 0, 0, 0, 1 );
    .inner-wrap{
        .about-keyvisual{
            width: 100%;
            height: 550vh;
            .about-keyvisual__inner{
                position: relative;
                z-index: 2;
                width: 1280px;
                height: 550vh;
                margin: 0 auto;
                .about-keyvisual__bx{
                    position: relative;
                    width: 1200px;
                    height: 100vh;
                    margin: 0 auto;
                    .about-keyvisual__step{
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        position: absolute;
                        left: 0;
                        top: 0;

                        > div{
                            font-size: 30px;
                            line-height: 40px;
                            font-weight: 700;
                            color: #fff;
                        }

                        //&.about-keyvisual__step-0{ opacity: 1; }
                        //&.about-keyvisual__step-1{ opacity: 0; }
                        //&.about-keyvisual__step-2{ opacity: 0; }
                        //&.about-keyvisual__step-3{ opacity: 0; }

                        &.about-keyvisual__step-0{
                            .about-keyvisual__step-0__bx{
                                display: flex;
                                justify-content: flex-start;
                                h2{
                                    opacity: 0;
                                    overflow: hidden;
                                    font-size: 34px;
                                    color: #fff;
                                    font-family: $font-family-sans-serif_medium;
                                    line-height: 41px;
                                    margin-right: 31px;
                                }

                                .about-keyvisual__step-0__line{
                                    position: relative;
                                    top: 15px;
                                    width: 0px;
                                    height: 1px;
                                    background-color: #fff;
                                    margin-right: 29px;
                                    opacity: 0.8;
                                }

                                p{
                                    font-size: 40px;
                                    line-height: 47px;
                                    font-weight: 700;
                                    color: #fff;
                                    opacity: 0;
                                }
                            }
                        }

                        &.about-keyvisual__step-1{

                        }

                        &.about-keyvisual__step-2{

                        }

                        &.about-keyvisual__step-3{

                        }
                    }
                }
            }

            .about-main__video-pc{
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                width: 100%;
                height: 100vh;
                background-color: #000;

                video{
                    position: absolute;
                    min-width: 100%;
                    min-height: 100%;
                    left: 50%;
                    top: 50%;
                    transform: translate3d( -50%, -50%, 0 );
                }
            }
        }
    }
}

.mobile, .tablet {
    .about-main-wrap {
        .inner-wrap{
            .about-keyvisual{
                height: auto;
                .about-keyvisual__inner{
                    width: 100%;
                    height: auto;
                    .about-keyvisual__bx{
                        width: 100%;
                        height: auto;
                        position: relative;
                        .about-keyvisual__step{
                            position: relative;

                            > div{
                                font-size: 20px;
                                line-height: 30px;
                            }

                            &.about-keyvisual__step-0{
                                height: 100vh;
                                align-items: flex-start;
                                justify-content: flex-start;
                                box-sizing: border-box;
                                padding-top: 203px;
                                .about-keyvisual__step-0__bx{
                                    padding-left: 30px;
                                    padding-bottom: 50px;
                                    box-sizing: border-box;
                                    display: block;

                                    h2{
                                        font-size: 30px;
                                        line-height: 30px;
                                    }

                                    .about-keyvisual__step-0__line{
                                        width: 0px;
                                        display: inline-block;
                                        margin: 20px 0 16px;
                                        top: 0;
                                    }

                                    p{
                                        text-align: left;
                                        font-size: 26px;
                                        line-height: 31px;
                                    }
                                }
                            }

                            &.about-keyvisual__step-1{
                                opacity: 0;
                                justify-content: flex-start;
                                align-items: flex-start;
                                height: 60vh;
                                .about-keyvisual__step-1__bx{
                                    padding-left: 30px;
                                    width: 210px;
                                }
                            }

                            &.about-keyvisual__step-2{
                                opacity: 0;
                                justify-content: flex-start;
                                align-items: flex-start;
                                height: 60vh;
                                .about-keyvisual__step-2__bx{
                                    padding-left: 30px;
                                    width: 200px;
                                }
                            }

                            &.about-keyvisual__step-3{
                                opacity: 0;
                                justify-content: flex-start;
                                padding-bottom: 353px;
                                .about-keyvisual__step-3__bx{
                                    padding-left: 30px;
                                    width: 320px;
                                }
                            }
                        }
                    }
                }

                .about-main__video-pc{
                    position: fixed;
                    overflow: hidden;
                    video{
                        width: 100%;
                        height: 100vh;
                        object-fit: cover;
                    }
                }
            }
        }
    }
}

.ie {
    .about-main-wrap {
        .inner-wrap{
            .about-keyvisual{
                height: auto;
                .about-keyvisual__inner{
                    height: auto;
                    .about-keyvisual__bx{
                        height: auto;
                        .about-keyvisual__step{
                            position: relative;
                            width: 100%;
                            height: 100vh;
                            > div{
                            }

                            &.about-keyvisual__step-0{
                                .about-keyvisual__step-0__bx{
                                    h2{
                                        opacity: 1;
                                    }

                                    .about-keyvisual__step-0__line{
                                        width: 184px;
                                        opacity: 1;
                                    }

                                    p{
                                        opacity: 1;
                                    }
                                }
                            }

                            &.about-keyvisual__step-1{

                            }

                            &.about-keyvisual__step-2{

                            }

                            &.about-keyvisual__step-3{

                            }
                        }
                    }
                }

                .about-main__video-pc{
                    position: fixed;
                    video{
                    }
                }
            }
        }
    }

}

</style>
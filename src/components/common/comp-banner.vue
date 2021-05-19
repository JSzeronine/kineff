
<template>
    <section class="section-banner skin-nature-bg">
        <div class="inner-wrap">
            <div class="contents">
                <div class="skin-nature-txt">
                    <div class="title-wrap">
                        <Logo :isWhite="true" :logoW="'100%'" class="logo"></Logo>
                    </div>
                    <div class="subtitle-wrap">
                        <p>
                            피부 깊은 곳에서 숨쉬는 신비로운 효과, 키네프
                        </p>
                    </div>
                </div>

                <div class="product-wrap">
                    <img class="img-pc" :src="convertLink('./images/main/banner_kineff.png')" alt="">
                    <img class="img-mb" :src="convertLink('./images/main/banner_kineff_m.png')" alt="">
                </div>
            </div>

            <div class="bg-wrap">
                <div class="img-pc bg-img" :style="{ backgroundImage: 'url('+convertLink('./images/main/skin-nature_bg.jpg')+')' }"></div>
                <div class="img-mb bg-img" :style="{ backgroundImage: 'url('+convertLink('./images/main/skin-nature_bg_m.jpg')+')' }"></div>
            </div>
        </div>
    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";

    import Logo from "../icon/Logo"

    import {EventBus} from "../../bus";

    export default {
        name: "comp-main-banner",
        mixins: [
            MixinContents
        ],

        props: ["isMain"],

        components:{
            Logo
        },

        methods : {

            showMobile(){
                const TL = Timeline({});
                // img-mb

                const imgMb = this.$el.querySelector( ".bg-wrap" ).querySelector( ".img-mb" );


                TL.fromTo( imgMb, {
                    y:100,
                    scale : 1.1,
                }, {
                    y:0,
                    scale : 1,
                    transformOrigin : "top center",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : this.$el,
                        start : "center bottom",
                        end : "center 30%",
                        scrub : true,
                    }
                })


            },

            setScrollTrigger() {
                const Tl = Timeline({})

                if(isMobile) {
                    // this.showMobile();

                    // nav control
                    Tl.fromTo(
                        '.section-banner',
                        { },
                        { scrollTrigger: {
                                scrub: 0,
                                scroller: this.stWrapper,
                                trigger: '.section-banner',
                                start:"top top",
                                end:"bottom top",
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
                            }},
                    );
                    return;
                }



                // nav control
                Tl.fromTo(
                    '.section-banner',
                    { },
                    { scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-banner',
                            start:"top top",
                            end:"bottom top",
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
                        }},
                );

                Tl.fromTo(
                    '.section-banner .contents .skin-nature-txt div',
                    { y: "20vh", scale:1.1, opacity:0},
                    { ease: Power2.easeOut,
                        y: "0", scale:1, opacity:1, stagger:0.2,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-banner',
                            start:"0% bottom",
                            end:"130% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.5)
                        }},
                );

                Tl.fromTo(
                    '.section-banner .contents .product-wrap',
                    { y: "10vh", scale:0.95, opacity:1},
                    { ease: Linear.easeNone,
                        y: "0", scale:1, opacity:1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-banner',
                            start:"0% bottom",
                            end:"80% top",
                            // start: () => this.$getPos_tbTobt(this.$el, 0),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.8)
                        }},
                );

                Tl.fromTo(
                    '.section-banner .bg-wrap div',
                    { y: "-10vh", scale:1.2, opacity:0},
                    { ease: Power2.easeInOut,
                        y: "0", scale:1, opacity:1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-banner',
                            start:"0% bottom",
                            end:"100% top",
                            // start: () => this.$getPos_tbTobt(this.$el, 0),
                            // end: () => this.$getPos_tbTobt(this.$el, 1)
                        }},
                );

            },

            killScrollTrigger() {

            },

            // get
            convertLink(link){
                let convert = link;
                if(!this.isMain){
                    convert = "."+link;
                }
                return convert;
            }
        }
    }
</script>

<style scoped lang="scss">
    section{

        .inner-wrap{
            width: 100%;
            height: 100vh;
            margin: 0 auto;
            position: relative;
            overflow: hidden;

            .contents{
                position: relative;
                width: $stage-contents-width;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                /*padding: 259px 0 489px 0;*/
                z-index: 3;
                height: 100%;
                .skin-nature-txt {
                    text-align: center;
                    width: 100%;
                    margin-bottom: 190px;
                    position: relative;
                    z-index: 3;


                    .title-wrap {
                        width: 290px;
                        margin: 0 auto;
                        margin-bottom: 40px;
                    }

                    .subtitle-wrap {
                        font-size: $h3-font-size;
                        line-height: 1.3;
                        color: white;
                        margin: 0 auto;
                        margin-bottom: 30px;
                        width: 70%;
                    }

                    .desc-wrap {
                        font-size: $h3-font-size;
                        font-family: $font-family-sans-serif_light;
                    }
                }

                .product-wrap {
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: 0;
                    font-size: 0;
                    img{
                        width: 100%;
                    }
                }
            }

            .bg-wrap {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                overflow: hidden;
                background-color: #000;
                z-index: 2;

                .bg-img{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center bottom;
                }
            }
        }
    }

    .mobile {
        section {
            .inner-wrap {
                position: relative;
                width: 100%;
                height: 630px;
                margin: 0 auto;

                .contents {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    display: flex;
                    align-items: center;

                    .skin-nature-txt {
                        text-align: center;
                        width: 80%;
                        margin-bottom: 0px;

                        .title-wrap {
                            width: 160px;
                            margin-bottom: 20px;
                        }

                        .subtitle-wrap {
                            font-size: $font-size-xs;
                            line-height: 1.7;
                            margin-bottom: 30px;
                            width: 50%;
                        }

                        .desc-wrap {
                            font-size: $font-size-xs;
                            word-break: keep-all;
                        }
                    }
                }

                .bg-wrap {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    overflow: hidden;
                    background-color: $color-set-green;

                    .bg-img{
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-color: #00916D;
                        background-position: center bottom;
                    }
                }
            }
        }
    }

    .ie{
        section{
            .inner-wrap{
                .contents{
                    .skin-nature-txt {
                        .title-wrap {
                        }

                        .subtitle-wrap {
                        }

                        .desc-wrap {
                        }
                    }
                }

                .bg-wrap {
                    .bg-img{
                        //background-size: cover;
                    }
                }
            }
        }
    }

</style>
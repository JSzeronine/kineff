<template>
    <section class="section-wrap-f">

        <div class="inner-wrap">
            <div class="text-wrap">
                <div class="text-con">
                    <div class="text-title-con">Cleansing Care</div>
                    <div class="text-desc-con">
                        <p>4종 병풀 추출물과 판테놀 성분이</p>
                        <p>민감한 피부를 진정시키고 깨끗한 세안을 도와줍니다.</p>
                    </div>
                </div>
            </div>

            <div class="bg-wrap">
                <div class="img-pc bg-img" :style="{backgroundImage: (`url(./images/main/cleansing_care_bg_b.jpg )`)}"></div>
                <div class="img-mb bg-img" :style="{backgroundImage: (`url(./images/main/m_cleansing_care_bg_b.jpg )`)}"></div>
            </div>
        </div>

    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";
    import {EventBus} from "../../bus";

    export default {
        name: "comp-main-F",
        mixins: [
            MixinContents
        ],

        mounted() {

        },

        methods : {

            setScrollTrigger() {

                if(isMobile) {
                    const TlM = Timeline({
                        scrollTrigger: {
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger: ".section-wrap-f",
                            start: "top bottom",
                            end: "top 0%"
                        }
                    })

                    TlM.fromTo(
                        '.section-wrap-f .text-wrap',
                        { y: "50", opacity:0},
                        { y: "0", opacity:1, ease: Power2.easeInOut}
                    )
                    return;

                }

                const Tl = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-f",
                        pin:".section-wrap-f .inner-wrap",
                        pinSpacing:false,
                        start:"top top",
                        end:"bottom top",
                        onLeave:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                        },
                        onLeaveBack:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                        },
                        onEnter:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                        },
                        onEnterBack:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                        }
                        // start: () => this.$getPos_ttTobt(this.$el, 0),
                        // end: () => this.$getPos_ttTobb(this.$el, 1)
                    }
                })


                // scene 2 - text split show
                Tl.fromTo(
                    '.section-wrap-f .text-wrap',
                    { y: "60vh"},
                    { ease: Power1.easeOut,
                        y: "0",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-f',
                            start:"0 top",
                            end:"80% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.3)
                        }},
                );

                // scene 2 - text split hide
                Tl.fromTo(
                    '.section-wrap-f .text-wrap',
                    { y: "0vh"},
                    { ease: Power1.easeInOut,
                        y: "-100vh",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-f',
                            start:"80% 100%",
                            end:"150% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.7),
                            // end: () => this.$getPos_ttTobt(this.$el, 1.0)
                        }},
                );

                const textChars = this.$setSplitText(this.$el.querySelector('.text-title-con'));
                const descChars = this.$setSplitRowText(this.$el.querySelector('.text-desc-con'));

                const TlText = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger: '.section-wrap-f',
                        start:"0% top",
                        end:"80% bottom",
                        // start: () => this.$getPos_tbTobt(this.$el, 0.21),
                        // end: () => this.$getPos_ttTobt(this.$el, 0.6)
                    }
                })

                TlText.fromTo(
                    '.section-wrap-f .text-wrap .text-con',
                    { y: "10vh"},
                    { ease: Linear.easeNone,
                        y: "-5vh",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-f',
                            start:"0% top",
                            end:"85% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.2),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.8)
                        }},
                );

                TlText.from(textChars, {duration: 0.4, opacity:0, y:0, stagger: 0.2}, "+=0");
                TlText.from(descChars, {duration: 0.2, opacity:0, y:0, stagger: 0.1}, "+=0");


                // bg img fixed show
                Tl.fromTo(
                    '.section-wrap-f .bg-wrap .bg-img',
                    { y: "-100vh"},
                    { ease: Linear.easeNone,
                        y: "0",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-f',
                            start:"0% bottom",
                            end:"25% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_ttTobt(this.$el, 0)
                        }},
                );


                // bg img fixed hide
                /*Tl.fromTo(
                    '.section-wrap-f .bg-wrap .bg-img',
                    { y: "0vh"},
                    { ease: Linear.easeNone,
                        y: "100vh",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-f',
                            start:"100% bottom",
                            end:"125% bottom"
                            // start: () => this.$getPos_ttTobb(this.$el,1),
                            // end: () => this.$getPos_ttTobt(this.$el, 1)
                        }},
                );*/

                Tl.fromTo(
                    '.section-wrap-f .bg-wrap .bg-img',
                    { scale: 1},
                    { ease: Linear.easeNone,
                        scale: 1.1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-f',
                            start:"-50% bottom",
                            end:"120% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_ttTobt(this.$el, 1)
                        }},
                );








            },

            killScrollTrigger() {

            }
        }
    }
</script>

<style scoped lang="scss">

    section {
        position: relative;
        width: 100%;
        height: 400vh;
        background-color: #fff;

        .inner-wrap {
            width: 100%;
            height: 100vh;
            margin: 0 auto;

            .text-wrap {
                position: relative;
                width: $stage-contents-width;
                margin: 0 auto;
                height: 100vh;
                z-index: 1;


                .text-con {
                    height: 100%;
                    display: flex; justify-content: center; align-items: center;
                    flex-direction: column;
                    text-align: center;

                    .text-title-con {
                        width: 60%;
                        font-family: $font-family-sans-serif_light;
                        font-size: 170px;
                        line-height: 155px;
                    }

                    .text-desc-con {
                        width: 45%;
                        margin-top: 60px;
                        font-size: $font-size-xl;
                        font-family: $font-family-kr;
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

                .bg-img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    transform-origin: 50% 100%;
                }


                img {
                    width: 100%;
                }
            }


        }

    }


    .mobile {
        section {
            height: auto;
            //height: 100vh;

            .inner-wrap {
                width: 100%;
                margin: 0 auto;
                padding: 227px 50px;
                box-sizing: border-box;
                height: auto;
                display: block;


                .text-wrap {
                    width: 100%;
                    height: auto;

                    .text-con {
                        height: 100%;
                        display: flex; justify-content: center; align-items: center;
                        flex-direction: column;
                        text-align: center;
                        color: black;

                        .text-title-con {
                            width: 100%;
                            font-size: $font-size-3xl;
                            line-height: 60px;
                        }

                        .text-desc-con {
                            width: 100%;
                            margin-top: 32px;
                            font-size: $font-size-xs;
                            line-height: 24px;
                        }
                    }
                }

                .bg-wrap {

                    img {
                        object-fit: cover;
                        object-position: -60px 140px;
                        width: 100%; height: 100%;
                    }
                }
            }
        }
    }

    .ie, .tablet{
        section {
            height: 100vh;
            .inner-wrap {
                .text-wrap {
                    .text-con {
                        .text-title-con {
                        }

                        .text-desc-con {
                            width: 100%;
                        }
                    }
                }

                .bg-wrap {
                    .bg-img {
                    }

                    img {
                    }
                }
            }
        }
    }

    .windows{
        section {
            .inner-wrap {
                .text-wrap {
                    .text-con {
                        .text-title-con {
                        }

                        .text-desc-con {
                            font-size: 22px;
                        }
                    }
                }

                .bg-wrap {
                    .bg-img {
                    }

                    img {
                    }
                }
            }
        }
    }




</style>
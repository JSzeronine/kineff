
<template>
    <section class="section-wrap-c">

        <div class="inner-wrap">

            <div class="box-img-wrap">
                <div class="img-con">
                    <img class="img-pc" :src="'./images/main/main_all_day_care.jpg'" alt="all day care background">
                    <img class="img-mb" :src="'./images/main/main_all_day_care-m.jpg'" alt="all day care background">
                </div>
            </div>

        </div>

    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";

    export default {
        name: "comp-main-c",
        mixins : [
            MixinContents
        ],

        mounted() {

        },

        methods : {

            setScrollTrigger() {
                if(isMobile) {
                    const TlM = Timeline({
                        scrollTrigger:{
                            scrub: 0.2,
                            scroller: this.stWrapper,
                            trigger:".section-wrap-c",
                            start:"top 80%",
                            end:"bottom 50%"
                        }
                    })

                    TlM.fromTo(
                        '.section-wrap-c .box-img-wrap',
                        { scale: 1, y:-50},
                        { ease: Power2.easeInOut,
                            scale: 0.8, y:50
                        }
                    )

                    TlM.fromTo(
                        '.section-wrap-c .box-img-wrap .img-con img',
                        { scale: 1, y:-100},
                        { ease: Linear.easeNone, scale: 1.5, y:100,
                            scrollTrigger:{
                                scrub: 0.2,
                                scroller: this.stWrapper,
                                trigger:".section-wrap-c",
                                start:"top bottom",
                                end:"bottom top"
                            }
                        }
                    )
                    return;
                }

                const TlImgBox = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-c",
                        // pin:".section-wrap-c .inner-wrap",
                        // pinSpacing:false,
                        start:"0% top",
                        end:"bottom bottom"
                        // start:"0% bottom",
                        // end:"100% bottom",
                        // markers:true
                        // start: () => this.$getPos_tbTobt(this.$el, 0),
                        // end: () => this.$getPos_tbTobt(this.$el, 1),
                    }
                });


                // scene 3 - box img
                TlImgBox.fromTo(
                    '.section-wrap-c .box-img-wrap',
                    { scale: 1, y:"-10vh"},
                    { ease: Linear.easeNone,
                        scale: 1, y:'10vh',
                        scrollTrigger: {
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-c',
                            start:"0% bottom",
                            end:"120% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.15),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.9)
                        }},
                );






                TlImgBox.fromTo(
                    '.section-wrap-c .box-img-wrap .img-con',
                    { scale: 1, y:0},
                    { ease: Power3.easeInOut,
                        scale: 0.3, y:0,
                        scrollTrigger: {
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-c',
                            start:"50% bottom",
                            end:"150% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.2),
                            // end: () => this.$getPos_tbTobt(this.$el, 1.0)
                        }},
                );

                TlImgBox.fromTo(
                    '.section-wrap-c .box-img-wrap .img-con img',
                    { scale: 1, y:0},
                    { ease: Linear.easeNone,
                        scale: 1.5, y:0,
                        scrollTrigger: {
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-c',
                            start:"40% bottom",
                            end:"160% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 1.0)
                        }},
                );

                // Gsap.set('.section-wrap-c .box-img-wrap', {y:"-20vh"});


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
        height: 100vh;

        /*background-color: #a0a5a8;*/

        .inner-wrap {
            width: 100%;
            margin: 0 auto;
            height: 100vh;
            display: flex;
            /*align-items: center;*/
            justify-content: center;
            flex-direction: column;
            position: relative;

            .box-img-wrap {
                /*opacity: 0.5;*/
                position: absolute;
                top: 0;
                width: 100%;
                .img-con {
                    overflow: hidden;
                    height: 100vh;
                    transform-origin: 50% 40%;
                    img {
                        object-fit: cover;
                        width: 100%; height: 100%;
                    }
                }
            }
        }
    }

    .mobile {
        section {
            height: auto;
            .inner-wrap {
                width: 100%;
                margin: 0 auto;
                height: 100vw;
                display: block;

                padding: 100px 0;

                .box-img-wrap {
                    position: relative;
                    height: 100vw;

                    .img-con {
                        overflow: hidden;
                        height: 100vw;

                    }
                }
            }
        }
    }

    .ie, .tablet{
        section {
            height: 100vh;
            .inner-wrap {
                .box-img-wrap {
                    .img-con {
                        img {
                        }
                    }
                }
            }
        }
    }

</style>
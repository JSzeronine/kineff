<template>
    <section class="section-wrap-b">

        <div class="product-wrap">
            <div class="img-con">
<!--                <img :src="'./images/main/sample_img_01.png'" alt="">-->
                <SqImage :isSetComp="isSetComp" :productPer="productPer"></SqImage>
            </div>
        </div>
        <div class="inner-wrap" >

<!--            :style="{ transform: 'translateX('+ pinScrollX +'px)'}"-->

            <div class="text-wrap">
                <div class="text-con">
                    <div class="text-title-con">All Day Care</div>
                    <div class="text-desc-con">
                        <p>TECA 성분과 유산균 ALL-프로 바이옴이</p>
                        <p>손상된 피부를 진정시켜주고 무너진 피부의 밸런스를 바로 맞춰줍니다.</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";
    import SqImage from "../common/comp-sq-cream";
    import {EventBus} from "../../bus";

    export default {
        name: "comp-main-B",
        mixins : [
            MixinContents
        ],
        components: {
            SqImage
        },

        data(){
            return {
                productPer:0
            }
        },


        mounted() {

            EventBus.$on(EventBus.SCROLL_X_EVENT, this.onScrollX)
        },

        methods: {

            killScrollTrigger() {

            },

            setScrollTrigger() {


                const _this = this;

                if(isMobile) {
                    const TlM = Timeline({
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".section-wrap-b",
                            start:"top bottom",
                            end:"bottom 70%",
                            onUpdate: self =>
                                _this.productControl(self.progress)
                        }
                    })

                    TlM.fromTo(
                        '.section-wrap-b .product-wrap',
                        { y: "-20vh", rotate:'0deg'},
                        { ease: Power1.easeInOut,
                            y: "0vh", rotate:'-0deg'
                            }
                    )
                    return;
                }



                // sq control
                const Tl_sq = Timeline({
                    scrollTrigger:{
                        scrub: scScrub,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-b .product-wrap",
                        start:"top bottom",
                        end:"bottom top",
                        onUpdate: self =>
                            _this.productControl(self.progress)
                    }
                })



                const Tl = Timeline({
                    scrollTrigger:{
                        scrub: scScrub,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-b",
                        pin:".section-wrap-b .inner-wrap",
                        pinSpacing:false,
                        start:"top top",
                        end:"bottom bottom",
                        onLeave:() => {
                            this.isPin = false;
                        },
                        onLeaveBack:() => {
                            this.isPin = false;
                            console.log("onLeaveBack")

                        },
                        onEnter:() => {
                            this.isPin = true;
                        },
                        onEnterBack:() => {
                            this.isPin = true;
                        },
                    }
                })


                // scene 1 - kineff product
                Tl.fromTo(
                    '.section-wrap-b .product-wrap',
                    { y: "-10vh", rotate:'0deg'},
                    { ease: Linear.easeNone,
                        y: "70vh", rotate:'0deg',
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-b',
                            start:"0 bottom",
                            end:"50% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.5)
                        }},
                )


                // scene 2 - text split show
                Tl.fromTo(
                    '.section-wrap-b .text-wrap',
                    { y: "60vh"},
                    { ease: Power1.easeOut,
                        y: "0",
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-b',
                            start:"0 top",
                            end:"70% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.05),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.45)
                        }},
                );

                // scene 2 - text split hide
                Tl.fromTo(
                    '.section-wrap-b .text-wrap',
                    { y: "0vh"},
                    { ease: Power1.easeInOut,
                        y: "-100vh",
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-b',
                            start:"85% bottom",
                            end:"130% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.6),
                            // end: () => this.$getPos_ttTobt(this.$el, 1.0)
                        }},
                );

                Gsap.set('.section-wrap-b .text-wrap', {y:'60vh'});




                const textChars = this.$setSplitText(this.$el.querySelector('.text-title-con'));
                const descChars = this.$setSplitRowText(this.$el.querySelector('.text-desc-con'));

                const TlText = Timeline({
                    scrollTrigger:{
                        scrub: scScrub,
                        scroller: this.stWrapper,
                        trigger: '.section-wrap-b',
                        start:"0% top",
                        end:"80% bottom",
                        markers:false
                        // start: () => this.$getPos_tbTobt(this.$el, 0.27),
                        // end: () => this.$getPos_ttTobt(this.$el, 0.65)
                    }
                })

                TlText.fromTo(
                    '.section-wrap-b .text-wrap .text-con',
                    { y: "10vh"},
                    { ease: Linear.easeNone,
                        y: "-5vh",
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-b',
                            start:"0% top",
                            end:"85% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.27),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.65)
                        }},
                );

                TlText.from(textChars, {duration: 0.4, opacity:0, y:0, stagger: 0.2}, "+=0");
                TlText.from(descChars, {duration: 0.2, opacity:0, y:0, stagger: 0.1}, "+=0");

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
        background-color: white;

        .product-wrap {
            z-index: 2;
            position: absolute;
            width: 100%;
            /*height: 100vh;*/
            display: flex; justify-content: center;

            .img-con {
                width: 436px;
                img{
                    width: 100%;
                }
            }

        }

        .inner-wrap {
            position: relative;
            /*width: $stage-contents-width;*/
            width: 100%;
            margin: 0 auto;
            /*height: 100vh;*/
            display: block;

            /*align-items: center;*/
            /*justify-content: center;*/
            /*flex-direction: column;*/



            .text-wrap {
                z-index: 1;
                position: absolute;
                width: 100%;
                height: 100vh;


                .text-con {
                    width: $stage-contents-width;
                    margin: 0 auto;
                    height: 100%;
                    display: flex; justify-content: center; align-items: center;
                    flex-direction: column;
                    text-align: center;

                    .text-title-con {
                        font-size: 170px;
                    }

                    .text-desc-con {
                        width: 60%;
                        margin: 0 auto;
                        font-size: $font-size-xl;
                        text-align: center;
                        /*color: white;*/
                    }
                }
            }
        }
    }

    .mobile {
        section {
            position: relative;
            width: 100%;
            height: auto;
            /*height: 100vh;*/

            .product-wrap {
                position: relative;
                height: 30vh;

                .img-con {
                    margin-top: 80px;
                    width: 50%;
                }

            }

            .inner-wrap {
                position: relative;
                /*width: $stage-contents-width;*/
                width: 100%;
                height: auto;
                display: block;



                .text-wrap {
                    position: relative;
                    height: auto;
                    box-sizing: border-box;

                    padding: 75px 0 80px;


                    .text-con {
                        width: 100%;
                        display: block;

                        .text-title-con {
                            text-align: center;
                            margin-bottom: 34px;
                            font-family: $font-family-sans-serif_light;
                            font-size: 60px;
                            line-height: 55px;
                        }

                        .text-desc-con {
                            padding: 0 30px;
                            width: 260px;
                            margin: 0 auto;
                            font-size: $font-size-xs;
                            line-height: 24px;
                        }
                    }
                }
            }
        }
    }


    .ie, .tablet{
        section {
            height: auto;
            padding-top: 200px;
            padding-bottom: 200px;
            .product-wrap {
                position: relative;
                height: auto;
                margin-bottom: 80px;
                .img-con {
                    img{
                    }
                }
            }

            .inner-wrap {
                height: auto;

                .text-wrap {
                    position: relative;
                    height: auto;
                    .text-con {
                        .text-title-con {
                        }

                        .text-desc-con {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

    .windows{
        section {
            .product-wrap {
                .img-con {
                    img{
                    }
                }
            }

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
            }
        }
    }

</style>
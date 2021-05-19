
<template>
    <section class="section-wrap-d">

        <div class="inner-wrap">

            <div class="product-wrap">
                <div class="img-con">
                    <img class="shadow" :src="'./images/main/ampo_shadow.jpg'" alt="Hydracica Ampoule shadow">
                    <SqAmpoule :isSetComp="isSetComp" :productPer="productPer"></SqAmpoule>
<!--                    <img :src="'./images/main/main_kineff_shadow.png'" alt="">-->
                </div>
            </div>
            <div class="detail-wrap">
                <div class="detail-con fir-con">
                    <div class="word-wrap">
                        <div class="word-title">
                            <p>Hydracica<br>Ampoule</p></div>
                    </div>
                    <div class="deco-wrap">
                        <div class="word-description">
                            <p>
                                스트레스 받은 피부의 진정과<br>
                                컨디션 케어를 돕는 집중 케어 앰플
                            </p>
                        </div>
                        <div class="word-description word-desc-bold">
                            <p>
                                주름개선 <span>/</span>
                            </p>
                            <p>
                                미백 <span>/</span>
                            </p>
                            <p>
                                2중 기능성
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";
    import SqAmpoule from "../common/comp-sq-ampoule";

    export default {
        name: "comp-main-D",
        mixins : [
            MixinContents
        ],

        components: {
            SqAmpoule
        },

        data(){
            return {
                productPer:0
            }
        },

        mounted() {


        },

        methods: {

            killScrollTrigger() {

            },

            setScrollTrigger() {
                const _this = this;

                if(isMobile) {
                    const Tl_sq = Timeline({
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: ".section-wrap-d",
                            start: "top 70%",
                            end: "bottom 20%",
                            onUpdate: self =>
                                _this.productControl(self.progress)
                        }
                    })

                    const TlM = Timeline({
                        scrollTrigger: {
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger: ".section-wrap-d",
                            start: "top bottom",
                            end: "bottom 90%"
                        }
                    })



                    TlM.from(
                        '.section-wrap-d .detail-wrap .word-wrap',
                        { y: "50", autoAlpha:0, ease: Power2.easeInOut, delay:0.2}
                    )
                        .from(
                            '.section-wrap-d .product-wrap',
                            { y: "50", autoAlpha:0, ease: Power2.easeInOut}
                        )
                        .from(
                            '.section-wrap-d .detail-wrap .deco-wrap',
                            { y: "50", autoAlpha:0, ease: Power2.easeInOut}
                        )



                    return;

                }











                const Tl = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-d",
                        start:"0% bottom",
                        end:"100% top",
                        // pin:".section-wrap-d .inner-wrap",
                        // pinSpacing:false,
                        // start: () => this.$getPos_tbTobt(this.$el, 0),
                        // end: () => this.$getPos_tbTobt(this.$el, 1),
                        onUpdate: self =>
                            _this.productControl(self.progress)
                    }
                })


                // scene 1 - kineff product
                Tl.fromTo(
                    '.section-wrap-d .product-wrap',
                    { y: "-15vh", rotate:'0deg'},
                    { ease: Power1.easeInOut,
                        y: "15vh", rotate:'0deg',
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-d',
                            start:"0% bottom",
                            end:"100% top",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 1)
                        }},
                )

                Tl.fromTo(
                    '.section-wrap-d .detail-wrap .word-wrap',
                    { y: "-0vh", rotate:'0deg'},
                    { ease: Power1.easeInOut,
                        y: "0vh", rotate:'0deg',
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-d',
                            start:"0% bottom",
                            end:"100% top",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 1)
                        }},
                )

                Tl.fromTo(
                    '.section-wrap-d .detail-wrap .deco-wrap',
                    { y: "-0vh", rotate:'0deg'},
                    { ease: Power1.easeInOut,
                        y: "0vh", rotate:'0deg',
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-d',
                            start:"0% bottom",
                            end:"100% top",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 1)
                        }},
                )









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
        height: 100vh;

        /*background-color: #a0a5a8;*/

        .inner-wrap {
            width: $stage-contents-width;
            margin: 0 auto;
            height: 100%;
            display: flex;
            /*align-items: center;*/
            /*justify-content: center;*/
            flex-direction: column;
            position: relative;


            .product-wrap {
                position: absolute;
                width: 100%; height: 100vh;
                display: flex; justify-content: center; align-items: center;

                .img-con {
                    width: 132px;
                    /*filter: drop-shadow(35px 35px 25px #c6f8ad);*/
                    img{
                        width: 100%;
                    }
                    .shadow {
                        position: absolute;
                        width: 204px;
                    }
                }

            }

            .detail-wrap {
                width: 100%;
                position: relative;


                .detail-con {
                    width: 100%;
                    height: 100vh;

                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    position: absolute;

                    .word-wrap {
                        width: 35%;
                        line-height: 1.2;
                        text-align: right;
                        .word-title {
                            font-size: $h1-font-size;
                        }

                    }

                    .deco-wrap {
                        width: 35%;

                        .word-description {

                            margin-top: 30px;
                            font-size: $font-size-xl;

                            > p{
                                font-weight: 700;
                            }

                            span{
                                display: none;
                            }

                            &.word-desc-bold {
                                font-size: $font-size-me;
                                p {
                                    position: relative;
                                    display: inline-block;
                                    font-weight: bold;
                                    margin-right: 20px;
                                    &:after {
                                        content: '';
                                        position: absolute;
                                        width: 100%; height: 2px;
                                        background-color: black;
                                        left:0; bottom: 0;
                                        pointer-events: none;
                                    }
                                    &:last-child {
                                        margin-right: 0px;
                                    }
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
            height: auto;

            .inner-wrap {
                width: 100%;
                margin: 0 auto;
                padding: 110px 0 0;
                box-sizing: border-box;
                height: auto;
                position: relative;

                .product-wrap {
                    position: absolute;
                    width: 100%; height: auto;
                    display: flex; justify-content: center; align-items: center;

                    .img-con {
                        width: 100px;
                        margin-top: 100px;
                        img{
                            width: 100%;
                        }
                        .shadow {
                            position: absolute;
                            width: 128px;
                        }
                    }

                }

                .detail-wrap {
                    position: relative;
                    .detail-con {
                        position: relative;
                        display: block;
                        height: auto;
                        text-align: center;

                        .word-wrap {
                            position: relative;
                            top: 0px;
                            left: 0;
                            width: 100%;
                            text-align: center;

                            .word-title {
                                font-size: $font-size-m-xl;
                                font-family: $font-family-sans-serif_medium;
                                line-height: 30px;
                            }
                        }

                        .deco-wrap {
                            width: 100%;
                            margin-top: 490px;

                            .word-description {
                                font-size: $font-size-m-me;
                                line-height: 26px;
                                span{
                                    display: inline;
                                }

                                > p{
                                    font-weight: 400;
                                }

                            }

                            .word-desc-bold {
                                margin-top: 22px;
                                p {
                                    font-size: $font-size-m-me;
                                    font-weight: bold;
                                    margin: 0;
                                    &:after{
                                        display: none;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    .ie, .tablet{
        section {
            padding-top: 200px;
            height: 55vh;
            .inner-wrap {
                .product-wrap {
                    height: 55vh;
                    .img-con {
                        img{
                        }
                        .shadow {
                        }
                    }
                }

                .detail-wrap {
                    height: auto;
                    position: relative;
                    .detail-con {
                        height: 55vh;
                        .word-wrap {
                            .word-title {
                            }
                        }

                        .deco-wrap {
                            .word-description {
                                letter-spacing: -1.3px;
                                &.word-desc-bold {
                                    p {
                                        &:after {
                                        }
                                        &:last-child {
                                        }
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
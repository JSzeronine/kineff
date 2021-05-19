<template>
    <section class="section-wrap-j">
        <div ref="mission0" class="inner-wrap">
            <div class="mission-bx">
                <div class="mission-bx__container mission-bx__pin">
                    <div class="text-wrap">
                        <div class="mission-title">
                            professional
                        </div>

                        <div class="mission-desc">
                            <ul>
                                <li>우리는 전문가답게,<br>
                                    정확하고 숙련된 기술을<br>
                                    바탕으로 제품을 연구합니다.</li>
                                <li>
                                    불필요한 성분은 줄이고<br>
                                    필수 성분으로만 이루어진<br>
                                    제품을 만들어 나갑니다.
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div class="mission-bg"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";

    export default {
        name : "comp-section-J",
        mixins : [
            MixinContents
        ],

        data(){
            return{

            }
        },

        mounted() {

        },

        methods : {
            setScrollTrigger(){
                if(isMobile) return;

                const vm = this;

                let TL0 = Gsap.timeline({});
                let TL1 = Gsap.timeline({});

                // text show
                TL0.fromTo( ".section-wrap-j .inner-wrap .mission-bx .mission-bx__container .text-wrap",
                    { y : "15vh", opacity: 0 },
                    {
                        y: "-5vh", opacity:1,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            trigger : ".section-wrap-j .inner-wrap .mission-bx",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0.1 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.5 ),
                        }
                    }
                );

                // img scale
                TL0.fromTo( ".section-wrap-j .inner-wrap .mission-bx .mission-bx__container .mission-bg",
                    { scale : 2.0 },
                    {
                        scale : 1,
                        ease:Power2.easeOut,
                        scrollTrigger : {
                            trigger : ".section-wrap-j .inner-wrap .mission-bx .mission-bx__container",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.5 ),
                            // markers : true,
                        }
                    }
                );

                // box hide
                TL0.fromTo( ".section-wrap-j .inner-wrap .mission-bx .mission-bx__container",
                    { scale : 1 },
                    {
                        ease:Cubic.easeInOut,
                        scale : 0.8,
                        transformOrigin : "top right",
                        scrollTrigger : {
                            trigger : ".section-wrap-j .inner-wrap .mission-bx",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0.3 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.83 ),
                            // markers : true,
                        }
                    }
                );

                TL0.fromTo( ".section-wrap-j .inner-wrap .mission-bx .mission-bx__container",
                    { y : 0 },
                    {
                        ease:Power2.easeIn,
                        y : "-40vh",
                        transformOrigin : "top right",
                        scrollTrigger : {
                            trigger : ".section-wrap-j .inner-wrap .mission-bx",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0.3 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.85 ),
                            // markers : true,
                        }
                    }
                );

                // box hide img
                TL0.fromTo( ".section-wrap-j .inner-wrap .mission-bx .mission-bx__container .mission-bg",
                    { y : 0 },
                    {
                        ease:Cubic.easeInOut,
                        y : "15vh",
                        transformOrigin : "top right",
                        scrollTrigger : {
                            trigger : ".section-wrap-j .inner-wrap .mission-bx",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0.6 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.99 ),
                            // markers : true,
                        }
                    }
                );

                ScTrigger.create({
                    animation : TL0,
                    trigger : ".section-wrap-j .inner-wrap .mission-bx",
                    start : () => vm.$getPos_ttTobb( this.$el, 0 ),
                    end : () => vm.$getPos_ttTobb( this.$el, 1 ),
                    pin : true,
                    pinSpacing : false,
                    scroller: this.stWrapper
                });
            },

            killScrollTrigger(){

            }
        }
    }
</script>

<style scoped lang="scss">

    section {
        .inner-wrap{
            .mission-bx{
                width: 100%;
                height: 500vh;
                .mission-bx__container{
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 100vh;

                    display: flex;
                    align-items: center;

                    .text-wrap {
                        /*padding-top: 200px;*/
                        position: relative;
                        z-index: 2;

                        width: $stage-contents-width;
                        margin: 0 auto;

                        .mission-title{
                            font-family: $font-family-sans-serif_thin;

                            font-size: 130px;
                            color: #000;

                            span {
                                display: inline-block;
                            }
                        }

                        .mission-desc{
                            margin-top: 20px;

                            ul {
                                li {
                                    position: relative;
                                    margin-top: 30px;
                                    &:first-child {
                                        margin-top: 0px;
                                        padding-bottom: 30px;

                                        &:after {
                                            content: '';
                                            position: absolute;
                                            width: 60px; height: 1px;
                                            background-color: black;
                                            left:0; bottom: 0;
                                            transition: background-color 0.2s, opacity 0.2s;
                                        }
                                    }
                                }
                            }

                        }


                    }

                    .mission-bg{
                        z-index: 1;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100vh;
                        background-image: url("../../../static/images/main/comp-j_bg.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: center;
                    }


                }
            }
        }
    }

    .mobile {
        section {
            .inner-wrap {

                .mission-bx {
                    width: 100%;
                    height: 630px;

                    .mission-bx__container{
                        height: 100%;

                        .text-wrap {
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            .mission-title{
                                font-family: $font-family-sans-serif_light;
                                font-size: 44px;
                                padding-top: 0;
                            }

                            .mission-desc{
                                text-align: center;
                                font-size: 15px;

                                ul {
                                    li {
                                        position: relative;
                                        margin-top: 30px;
                                        &:first-child {
                                            margin-top: 0px;
                                            padding-bottom: 0px;

                                            &:after {
                                                display: none;
                                            }
                                        }
                                    }
                                }

                            }

                        }


                        .mission-bg{
                            height: 100%;
                            background-image: url("../../../static/images/main/comp-j_bg_m.jpg");
                        }
                    }

                }
            }
        }
    }




</style>
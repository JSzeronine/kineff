<template>
    <section class="section-wrap-i">
        <div ref="mission0" class="inner-wrap our-mission0">
            <div class="mission-bx">
                <div class="mission-bx__container mission-bx__pin">
                    <div class="mission-title">
                        <span>our</span>
                        <span>mission</span>
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
        name : "comp-section-I",
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
                TL0.fromTo( ".section-wrap-i .our-mission0 .mission-bx .mission-bx__container .mission-title",
                    { y : "30vh", opacity: 0 },
                    {
                        y: 0, opacity:1,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            trigger : ".section-wrap-i .our-mission0 .mission-bx",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0.1 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.5 ),
                            // markers : true,
                        }
                    }
                );

                // img scale
                TL0.fromTo( ".section-wrap-i .our-mission0 .mission-bx .mission-bx__container .mission-bg",
                    { scale : 2.0 },
                    {
                        scale : 1,
                        ease:Power2.easeOut,
                        scrollTrigger : {
                            trigger : ".section-wrap-i .our-mission0 .mission-bx .mission-bx__container",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.5 ),
                            // markers : true,
                        }
                    }
                );

                // box hide
                TL0.fromTo( ".section-wrap-i .our-mission0 .mission-bx .mission-bx__container",
                    { scale : 1 },
                    {
                        ease:Cubic.easeInOut,
                        scale : 0.8,
                        transformOrigin : "top right",
                        scrollTrigger : {
                            trigger : ".section-wrap-i .our-mission0 .mission-bx",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0.3 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.83 ),
                            // markers : true,
                        }
                    }
                );

                TL0.fromTo( ".section-wrap-i .our-mission0 .mission-bx .mission-bx__container",
                    { y : 0 },
                    {
                        ease:Power2.easeIn,
                        y : "-40vh",
                        transformOrigin : "top right",
                        scrollTrigger : {
                            trigger : ".section-wrap-i .our-mission0 .mission-bx",
                            scrub : 0,
                            scroller: this.stWrapper,
                            start : () => vm.$getPos_tbTobt( this.$el, 0.3 ),
                            end : () => vm.$getPos_tbTobt( this.$el, 0.85 ),
                            // markers : true,
                        }
                    }
                );

                // box hide img
                TL0.fromTo( ".section-wrap-i .our-mission0 .mission-bx .mission-bx__container .mission-bg",
                    { y : 0 },
                    {
                        ease:Cubic.easeInOut,
                        y : "15vh",
                        transformOrigin : "top right",
                        scrollTrigger : {
                            trigger : ".section-wrap-i .our-mission0 .mission-bx",
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
                    trigger : ".section-wrap-i .our-mission0 .mission-bx",
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

<style lang="scss" scoped>

    section{
        .inner-wrap{

            .mission-bx{
                width: 100%;
                height: 500vh;
                .mission-bx__container{
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: 100vh;

                    .mission-title{
                        font-family: $font-family-sans-serif_thin;
                        position: relative;
                        z-index: 2;
                        text-align: center;
                        font-size: 130px;
                        color: #fff;
                        padding-top: 240px;
                        span {
                            display: inline-block;
                        }
                    }

                    .mission-bg{
                        z-index: 1;
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100vh;
                        background-image: url( "../../../static/images/main/comp-i_bg.jpg" );
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

                        .mission-title{
                            padding-top: 109px;
                            font-family: $font-family-sans-serif_light;
                            font-size: $font-size-3xl;
                            line-height: 72px;
                            span {
                                display: block;
                            }
                        }

                        .mission-bg{
                            height: 100%;
                            background-image: url("../../../static/images/main/comp-i_bg_m.jpg");
                        }
                    }

                }
            }
        }
    }


</style>
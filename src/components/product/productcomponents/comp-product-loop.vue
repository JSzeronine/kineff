<template>
    <section class="wrap product-loop">
        <div class="inner-wrap">
            <div class="contents">
                <div class="move-text-con">
                    <div class="move-text move-text_01">
                        <div><p><span> EXPERTISE</span> COMFORT</p><div class="move-text-img_01"><img :src="'../images/product/common/move-text-img_01.png'" alt="calming cream"></div><p>UNCOMPROMISING </p></div>
                        <div><p><span> EXPERTISE</span> COMFORT</p><div class="move-text-img_01"><img :src="'../images/product/common/move-text-img_01.png'" alt="calming cream"></div><p>UNCOMPROMISING </p></div>
                        <div><p><span> EXPERTISE</span> COMFORT</p><div class="move-text-img_01"><img :src="'../images/product/common/move-text-img_01.png'" alt="calming cream"></div><p>UNCOMPROMISING </p></div>
                        <div><p><span> EXPERTISE</span> COMFORT</p><div class="move-text-img_01"><img :src="'../images/product/common/move-text-img_01.png'" alt="calming cream"></div><p>UNCOMPROMISING </p></div>
                    </div>

                    <div class="move-text move-text_02">
                        <div><p>CONCENTRATED <span>EMPOWERED</span> EXPERTISE COMFORT UNCOMPROMISING</p></div>
                        <div><p>CONCENTRATED <span>EMPOWERED</span> EXPERTISE COMFORT UNCOMPROMISING</p></div>
                        <div><p>CONCENTRATED <span>EMPOWERED</span> EXPERTISE COMFORT UNCOMPROMISING</p></div>
                        <div><p>CONCENTRATED <span>EMPOWERED</span> EXPERTISE COMFORT UNCOMPROMISING</p></div>
                    </div>

                    <div class="move-text move-text_03">
                        <div>
                            <p> PEACE</p>
                            <div class="move-text-img_02"><img :src="'../images/product/common/move-text-img_02.png'" alt="cleansing oil"></div>
                            <p>
                                OF MIND
                                <span>CONCENTRATED</span> EMPOWERED
                            </p>
                        </div>
                        <div>
                            <p> PEACE</p>
                            <div class="move-text-img_02"><img :src="'../images/product/common/move-text-img_02.png'" alt="cleansing oil"></div>
                            <p>
                                OF MIND
                                <span>CONCENTRATED</span> EMPOWERED
                            </p>
                        </div>
                        <div>
                            <p> PEACE</p>
                            <div class="move-text-img_02"><img :src="'../images/product/common/move-text-img_02.png'" alt="cleansing oil"></div>
                            <p>
                                OF MIND
                                <span>CONCENTRATED</span> EMPOWERED
                            </p>
                        </div>
                        <div>
                            <p> PEACE</p>
                            <div class="move-text-img_02"><img :src="'../images/product/common/move-text-img_02.png'" alt="cleansing oil"></div>
                            <p>
                                OF MIND
                                <span>CONCENTRATED</span> EMPOWERED
                            </p>
                        </div>
                        <div>
                            <p> PEACE</p>
                            <div class="move-text-img_02"><img :src="'../images/product/common/move-text-img_02.png'" alt="cleansing oil"></div>
                            <p>
                                OF MIND
                                <span>CONCENTRATED</span> EMPOWERED
                            </p>
                        </div>

<!--                        <div><p> PEACE</p><div class="move-text-img_02"><img :src="'../images/product/common/move-text-img_02.png'" alt=""></div><p>OF MIND<span class="move-text-bold">CONCENTRATED</span><span class="move-text-bold2">CONCENTRATED</span> EMPOWERED</p></div>-->
<!--                        <div><p> PEACE</p><div class="move-text-img_02"><img :src="'../images/product/common/move-text-img_02.png'" alt=""></div><p>OF MIND<span class="move-text-bold">CONCENTRATED</span><span class="move-text-bold2">CONCENTRATED</span> EMPOWERED</p></div>-->
<!--                        <div><p> PEACE</p><div class="move-text-img_02"><img :src="'../images/product/common/move-text-img_02.png'" alt=""></div><p>OF MIND<span class="move-text-bold">CONCENTRATED</span><span class="move-text-bold2">CONCENTRATED</span> EMPOWERED</p></div>-->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../../mixin/mixin-contents-sctrigger";
    export default {
        name: "comp-product-loop",
        mixins : [
            MixinContents
        ],

        data(){
            return{
                frame : 0,
                // direction( 초기값 ) : true -> 왼쪽, false -> 오른쪽
                isUp : [
                    true, false, true
                ],

                isDown : [
                    false, true, false
                ],

                persents : [
                    {
                        value : 0,
                        direction : true,
                    },
                    {
                        value : -100,
                        direction : false,
                    },
                    {
                        value: 0,
                        direction: true,
                    }
                ],

                velocity : 1,
                p : 100,
            }
        },

        mounted() {

        },

        methods : {
            showMobile(){


                const TL = Timeline({});

                TL.fromTo( ".product-loop .move-text_01", {
                    x : 0,
                }, {
                    x : "-100%",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-loop .move-text-con",
                        start : "start bottom",
                        end : "bottom top",
                        scrub : 0.35,
                        // markers : true,
                    }
                });
                TL.fromTo( ".product-loop .move-text_02", {
                    x : "-100%"
                }, {
                    x : "0%",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-loop .move-text-con",
                        start : "start bottom",
                        end : "bottom top",
                        scrub : 0.35,
                        // markers : true,
                    }
                });
                TL.fromTo( ".product-loop .move-text_03", {
                    x : 0,
                }, {
                    x : "-100%",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-loop .move-text-con",
                        start : "start bottom",
                        end : "bottom top",
                        scrub : 0.35,
                        // markers : true,
                    }
                });
            },

            setScrollTrigger() {

                if( isMobile ) {
                    this.showMobile();
                    return;
                }

                const TL = Timeline({});
                const innerWrap = this.$el.querySelector(".inner-wrap");
                const moveText = this.$el.querySelectorAll( ".move-text" );

                TL.fromTo(".product-loop .move-text_01", {
                    x: 0
                }, {
                    x: "-100%",
                    scrollTrigger: {
                        scroller: this.stWrapper,
                        trigger: ".product-loop .inner-wrap",
                        // start: () => this.$getPos_tbTobt(innerWrap, 0),
                        // end: () => this.$getPos_tbTobt(innerWrap, 1),
                        start : "top bottom",
                        end : "bottom top",
                        scrub: true,
                    }
                });

                TL.fromTo(".product-loop .move-text_02", {
                    x: "-100%"
                }, {
                    x: "0%",
                    scrollTrigger: {
                        scroller: this.stWrapper,
                        trigger: ".product-loop .inner-wrap",
                        // start: () => this.$getPos_tbTobt(innerWrap, 0),
                        // end: () => this.$getPos_tbTobt(innerWrap, 1),
                        start : "top bottom",
                        end : "bottom top",
                        scrub: true,
                    }
                });

                TL.fromTo(".product-loop .move-text_03", {
                    x: "0%"
                }, {
                    x: "-100%",
                    scrollTrigger: {
                        scroller: this.stWrapper,
                        trigger: ".product-loop .inner-wrap",
                        // start: () => this.$getPos_tbTobt(innerWrap, 0),
                        // end: () => this.$getPos_tbTobt(innerWrap, 1),
                        start : "top bottom",
                        end : "bottom top",
                        scrub: true,
                    }
                });
            },

            getVelocity( $value, $velocity, $direction ){

                console.log( $direction );

                if( $direction ){
                    $value -= $velocity;
                }else{
                    $value += $velocity;
                }

                if( $value > 0 ){
                    $value = -100;
                }else if( $value < -100){
                    $value = 0;
                }

                return $value;
            }


        },

        destroyed() {
            clearInterval( this.frame );
        }
    }
</script>

<style scoped lang="scss">
    .wrap{
        .inner-wrap{
            padding-bottom: 400px;
            .contents{
                .move-text-con {
                    font-size: 90px;
                    line-height: 150px;
                    text-transform: uppercase;
                    white-space: nowrap;
                    font-family: $font-family-sans-serif_bold;
                    .move-text {
                        display: flex;
                        height: 150px;

                        > div {
                            display: inline-flex;
                            align-items: center;
                            margin-right: 28px;
                        }

                        &.move-text_01 {
                            .move-text-img_01 {
                                display: flex;
                                align-items: center;
                                width: 173px;
                                margin: 0 75px 0 75px;
                            }
                        }

                        &.move-text_03 {
                            .move-text-img_02 {
                                display: flex;
                                align-items: center;
                                width: 81px;
                                margin: 0 81px 0 81px;
                            }
                        }
                        p {
                            position: relative;
                            display: inline-block;
                            text-shadow: #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px,
                            #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px;
                            color: #fff;
                            span {
                                color: #000;
                                &.move-text-bold {
                                    text-shadow: #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px,
                                    #000 0px 0px 1px, #000 0px 0px 1px, #000 0px 0px 1px;
                                    color: #fff;
                                    margin: 0 0 0 25px;
                                }

                                &.move-text-bold2 {
                                    position: absolute;
                                    top: -10px;
                                    left: 391px;
                                    margin: 0 0 0 25px;
                                }
                            }
                        }
                    }

                    & img {
                        width: 100%;
                    }
                }
            }
        }
    }

    .mobile{
        .wrap{
            .inner-wrap{
                padding-bottom: 120px;
                .contents{
                    .move-text-con {
                        font-size: $font-size-m-xl;
                        .move-text {
                            height: 50px;

                            > div{
                                margin-right: 10px;
                            }

                            &.move-text_01 {
                                .move-text-img_01 {
                                    width: 50px;
                                    margin: 0 24px;
                                }
                            }

                            &.move-text_03 {
                                .move-text-img_02 {
                                    width: 23px;
                                    margin: 0 19px;
                                }
                            }
                            p {
                                text-shadow: #292929 0px 0px 0px, #292929 0px 0px 0px, #292929 0px 0px 0px,
                                #292929 0px 0px 1px, #292929 0px 0px 1px, #292929 0px 0px 1px;
                                span {
                                    &.move-text-bold {
                                        display: none;
                                    }

                                    &.move-text-bold2 {
                                        position: static;
                                        margin: 0 0 0 6px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .ie{
        .wrap{
            .inner-wrap{
                .contents{
                    .move-text-con {
                        .move-text {
                            > div {
                                min-width: 100%;
                            }

                            &.move-text_01 {
                                position: relative;
                                .move-text-img_01 {
                                    min-width: 173px;
                                }

                                > div{
                                    &:first-child{
                                        position: relative;
                                        left: -78px;
                                    }
                                }
                            }

                            &.move-text_02{
                                > div{
                                    &:first-child{
                                        position: relative;
                                        left: -280px;
                                    }
                                }
                            }

                            &.move-text_03 {
                                > div{
                                    &:first-child{
                                        position: relative;
                                        left: 41px;
                                    }

                                }
                                .move-text-img_02 {
                                    min-width: 81px;
                                    position: relative;
                                    top: 10px;
                                }
                            }
                            p {
                                span {
                                    &.move-text-bold {
                                    }

                                    &.move-text-bold2 {
                                    }
                                }
                            }
                        }

                        & img {
                        }
                    }
                }
            }
        }
    }

    .windows{
        .wrap{
            .inner-wrap{
                .contents{
                    .move-text-con {
                        .move-text {
                            > div {
                            }

                            &.move-text_01 {
                                .move-text-img_01 {
                                }
                            }

                            &.move-text_03 {
                                .move-text-img_02 {
                                    position: relative;
                                    top: 46px;
                                }
                            }
                            p {
                                span {
                                    &.move-text-bold {
                                    }

                                    &.move-text-bold2 {
                                    }
                                }
                            }
                        }

                        & img {
                        }
                    }
                }
            }
        }
    }

</style>
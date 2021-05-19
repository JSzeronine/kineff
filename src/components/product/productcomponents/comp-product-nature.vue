<template>
    <section class="wrap skin-nature-bg">
        <div class="inner-wrap">
            <div class="contents">
                <div class="skin-nature-txt">
                    <div class="skin-nature-logo">
                        <img :src="'../images/product/common/skin-nature_logo.png'" alt="kineff logo">
                    </div>
                    <p>
                        피부 깊은 곳에서 숨쉬는 신비로운 효과, 키네프
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-pc" :style="{backgroundImage:'url(../images/product/common/skin-nature_bg.jpg)'}"></div>
        <div class="bg-m" :style="{backgroundImage:'url(../images/product/common/m-skin-nature_bg.jpg)'}"></div>
    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../../mixin/mixin-contents-sctrigger";
    export default {
        name: "comp-product-nature",
        mixins : [
            MixinContents
        ],

        mounted() {

        },

        methods : {
            setScrollTrigger(){
                if( isMobile ) return;

                const container = this.$el;
                const TL = Timeline({});

                TL.fromTo( ".skin-nature-bg .skin-nature-txt", {
                    opacity : 0,
                    y : 200,
                }, {
                    opacity : 1,
                    y : 0,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".skin-nature-bg",
                        scrub : true,
                        start : () => this.$getPos_tbTobb( container, 0.2 ),
                        end : () => this.$getPos_tbTobb( container, 1 ),
                        // markers : true
                    }
                });

                TL.fromTo( ".skin-nature-bg .bg-pc", {
                    y : 500,
                }, {
                    y : 0,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".skin-nature-bg",
                        scrub : true,
                        start : () => this.$getPos_tbTobb( container, 0 ),
                        end : () => this.$getPos_tbTobb( container, 2 ),
                        // markers : true
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap{
        position: relative;
        overflow: hidden;
        background-color: $color-set-green;

        .bg-pc{
            background-repeat: no-repeat;
            background-position: center bottom;
            background-size: cover;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: 1;
            background-color: rgba( 255, 0, 0, 0.5 );
        }

        .inner-wrap{
            position: relative;
            z-index: 2;
            width: $stage-min-width;
            margin: 0 auto;
            .contents{
                width: $stage-contents-width;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 259px 0 489px 0;
                .skin-nature-txt {
                    text-align: center;
                    .skin-nature-logo {
                        width: 291px;
                        height: 93px;
                        margin: 0 auto;
                        margin-bottom: 40px;
                        img{
                            width: 100%;
                        }
                    }
                    > p {
                        line-height: 34px;
                        font-size: $font-size-2xl;
                        font-family: $font-family-sans-serif_light;
                    }
                }
            }
        }
    }

    .mobile {
        .wrap {
            .bg-m{
                background-repeat: no-repeat;
                background-position: center bottom;
                background-size: cover;
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                z-index: 1;
                background-color: rgba( 255, 0, 0, 0.5 );
            }

            .inner-wrap{
                position: relative;
                z-index: 2;
                width: 100%;
                margin: 0 auto;
                .contents{
                    width: 100%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 121px 0 273px 0;
                    .skin-nature-txt {
                        text-align: center;
                        .skin-nature-logo {
                            width: 131px;
                            height: 41px;
                            margin: 0 auto;
                            margin-bottom: 20px;
                            img{
                                width: 100%;
                            }
                        }
                        > p {
                            line-height: 20px;
                            font-size: $font-size-s;
                            font-family: $font-family-sans-serif;
                        }
                    }
                }
            }
        }
    }

</style>
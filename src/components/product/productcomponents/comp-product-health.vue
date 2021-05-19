<template>
    <section class="wrap product-health">
        <div class="inner-wrap">
            <div class="contents">
                <div class="health-info__line">
                    <span></span>
                </div>
                <div class="health-bx">
                    <div class="health-info__bx">
                        <dl>
                            <dt><slot name="title"></slot></dt>
                            <dd class="health-info__en"><slot name="title-en"></slot></dd>
                            <dd class="health-info__txt"><slot name="description"></slot></dd>
                        </dl>

                        <p class="health-info__important">
                            상기 내용은 원료적 특성에 한함
                        </p>
                    </div>

                    <div class="health-img__bx">
                        <ul>
                            <slot name="list"></slot>
                        </ul>
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
        name: "comp-product-health",
        mixins : [
            MixinContents
        ],

        methods : {
            showMobile(){
                const TL = Timeline({});

                const container = this.$el.querySelector( ".health-img__bx" );
                const list = container.querySelectorAll( "li" );

                list.forEach(( $item ) => {
                    let img = $item.querySelector( "img" );

                    TL.fromTo( img, {
                        y: -160,
                    }, {
                        y:0,
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : $item,
                            start : "top bottom",
                            end : "bottom top",
                            scrub : true,
                        }
                    })
                });
            },

            setScrollTrigger() {
                if (isMobile) {
                    this.showMobile();
                    return;
                }

                const contents = this.$el.querySelector( ".inner-wrap" );
                const TL = Timeline({});

                const bxLength = this.$el.querySelectorAll( ".inner-wrap .health-img__bx ul li" ).length;
                let bxTgY = bxLength == 1 ? 280 : 1100;

                // frame img move
                TL.fromTo( ".product-health .inner-wrap .contents .health-img__container img",
                    {
                        y:-300,
                    },
                    {
                        y:0,
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-health",
                            start: "top bottom",
                            end: "bottom top",
                            scrub : 0.5,
                        }
                    }
                );

                TL.fromTo( ".product-health .inner-wrap .contents .health-info__bx",
                    {
                        y:"0"
                    },
                    {
                        y: bxTgY, ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-health",
                            start: "top 40%",
                            end: "bottom 90%",
                            // start : () => this.$getPos_tbTobb( contents, 0.40 ),
                            // end : () => this.$getPos_tbTobt( contents, 0.7 ),
                            scrub : true,
                        }
                    }
                );

                //
                // ScTrigger.create({
                //     scroller : this.stWrapper,
                //     animation : TL,
                //     trigger : ".product-health .contents",
                //     start : () => this.$getPos_tbTobb( contents, 0 ),
                //     end : () => this.$getPos_tbTobb( contents, 1 ),
                //     scrub : true
                // });

            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap{
        /*padding-bottom: 100vh;*/
        .inner-wrap{
            width: $stage-min-width;
            margin: 0 auto;

            padding-bottom: 250px;

            /*padding-bottom: 150vh;*/

            .contents{
                width: $stage-contents-width;
                margin: 0 auto;

                .health-bx{
                    display: flex;
                    justify-content: space-between;
                    .health-info__bx{
                        dl{
                            margin-bottom: 40px;
                            dt{
                                margin-bottom: 20px;
                                font-size: $h2-font-size;
                                font-weight: 700;
                                line-height: 42px;
                                font-family: $font-family-kr;
                                span{
                                    font-weight: 700;
                                    color: $color-set-green;
                                }
                            }

                            dd{
                                &.health-info__en{
                                    margin-bottom: 48px;
                                    font-size: $font-size-lg;
                                    line-height: 35px;
                                    font-family: $font-family-sans-serif;
                                }

                                &.health-info__txt{
                                    font-size: $font-size-me;
                                    line-height: 28px;
                                    font-weight: 300;
                                    font-family: $font-family-kr;
                                }
                            }
                        }

                        .health-info__important{
                            display: inline-block;
                            padding: 7px 12px 4px;
                            border: 1px solid #979797;
                            font-size: 12px;
                        }
                    }

                    .health-img__bx{
                        ul{
                            li{
                                margin-bottom: 150px;
                                &:last-child{ margin-bottom: 0; }
                            }
                        }
                    }
                }
            }
        }
    }

    .mobile {
        .wrap{
            .inner-wrap{
                width: 100%;
                padding: 0 30px 120px;
                box-sizing: border-box;
                .contents{
                    width: 100%;
                    .health-info__line{
                        width: 100%;
                        margin-bottom: 80px;
                        overflow: hidden;
                        span{
                            display: inline-block;
                            width: 100%;
                            height: 1px;
                            background-color: #000;
                        }
                    }
                    .health-bx{
                        flex-direction: column;
                        .health-info__bx{
                            margin-bottom: 100px;
                            dl{
                                margin-bottom: 20px;
                                dt{
                                    margin-bottom: 15px;
                                    font-size: $font-size-m-lg;
                                    line-height: 30px;
                                    font-weight: 700;
                                    span{
                                        font-size: $font-size-m-lg;
                                        line-height: 30px;
                                        font-weight: 700;
                                    }
                                }

                                dd{
                                    &.health-info__en{
                                        margin-bottom: 24px;
                                        font-size: $font-size-s;
                                        line-height: 19px;
                                    }

                                    &.health-info__txt{
                                        font-size: $font-size-xs;
                                        line-height: 24px;
                                    }
                                }
                            }
                        }

                        .health-img__bx{
                            li {
                                margin-bottom: 80px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
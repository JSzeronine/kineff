<template>
    <section class="wrap product-how">
        <div class="inner-wrap">
            <div class="contents">
                <div class="how-to-use">
                    <div class="use-tit">
                        <span class="use-tit-ko">제품 사용 방법</span>
                        <span class="use-tit-bold">how to use</span>
                    </div>

                    <div v-if="views.isList" class="use-explain">
                        <div class="use-explain__list-container">
                            <slot name="list"></slot>
                        </div>

                        <div class="use-explain__important">
                            <slot name="important"></slot>
                        </div>
                    </div>

                    <div v-if="views.isCenter" class="use-explain__type-center">
                        <p>
                            <slot name="center"></slot>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MixinContents from "../../../mixin/mixin-contents-sctrigger";
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    export default {
        name: "comp-product-how",
        mixins : [
            MixinContents
        ],

        props : {
            views : Object
        },

        mounted() {

        },

        methods : {
            showMobile(){
                const TL = Timeline({});

                if( this.views.isList ){

                    let list = this.$el.querySelectorAll( ".use-explain__item" );
                    list.forEach(( $item ) => {
                        let num = $item.querySelector( "span" );
                        let txt = $item.querySelector( "p" );

                        TL.fromTo( num, {
                            opacity : 0,
                        }, {
                            opacity:1,
                            ease:Linear.easeNone,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                start : "center bottom",
                                end : "center center",
                                scrub : true,
                            }
                        });

                        TL.fromTo( txt, {
                            opacity : 0,
                        }, {
                            opacity:1,
                            ease:Linear.easeNone,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                start : "center bottom",
                                end : "center center",
                                scrub : true,
                            }
                        });
                    })
                }

                if( this.views.isCenter ){

                    let centerContainer = this.$el.querySelector( ".use-explain__type-center" );
                    let centerContent = centerContainer.querySelector( "p" );

                    TL.fromTo( centerContent, {
                        opacity : 0,
                    }, {
                        opacity:1,
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : centerContainer,
                            start : "center bottom",
                            end : "center center",
                            scrub : true,
                        }
                    });

                }

            },

            setScrollTrigger(){
                if( isMobile ) {
                    this.showMobile();
                    return;
                }

                const TL = Timeline({});

                if( this.views.isList ){
                    TL.fromTo( ".use-explain .use-explain__item", {
                        opacity : 0,
                    }, {
                        opacity:1,
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-how .use-explain__list-container",
                            // start : () => this.$getPos_tbTobb( this.$el, 0 ),
                            // end : () => this.$getPos_ttTobb( this.$el, 0.5 ),
                            start : "top bottom",
                            end : "center center",
                            scrub : true,
                        }
                    })
                }

                if( this.views.isList ){
                    TL.fromTo( ".use-explain .use-explain__important", {
                        opacity : 0,
                    }, {
                        opacity:1,
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-how .use-explain__list-container",
                            // start : () => this.$getPos_tbTobb( this.$el, 0 ),
                            // end : () => this.$getPos_ttTobb( this.$el, 0.5 ),
                            start : "top bottom",
                            end : "center center",
                            scrub : true,
                        }
                    })
                }


                if( this.views.isCenter ){
                    TL.fromTo( ".use-explain__type-center p", {
                        y : 0,
                        opacity : 0,
                    }, {
                        y:0,
                        opacity : 1,
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-how .use-explain__type-center",
                            // start : () => this.$getPos_tbTobb( this.$el, 0.4 ),
                            // end : () => this.$getPos_ttTobb( this.$el, 0.7 ),
                            start : "top bottom",
                            end : "center center",
                            scrub : true,
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap{
        .inner-wrap{
            width: $stage-min-width;
            margin: 0 auto;
            .contents{
                width: $stage-contents-width;
                margin: 0 auto;
                .how-to-use {
                    padding: 0 0 280px;
                    display: flex;
                    flex-direction: column;

                    .use-tit {
                        margin-bottom: 21px;
                        span {
                            display: block;

                            &.use-tit-ko {
                                line-height: 30px;
                                font-weight: 600;
                                font-size: $font-size-s;
                                font-family: $font-family-kr;
                            }

                            &.use-tit-bold {
                                font-size: $font-size-m-3xl;
                                font-family: $font-family-sans-serif_bold;
                            }
                        }
                    }

                    .use-explain {
                        width: 100%;
                        border: 1px solid #000;
                        margin: 0 auto;
                        padding: 40px 0 38px;

                        .use-explain__list-container{
                            overflow: hidden;
                            width: 100%;

                            display: flex;
                            justify-content: flex-start;
                            align-items: flex-start;
                        }

                        .use-explain__important{
                            > p{
                                text-align: center;
                                margin-top: 32px;
                                font-size: $font-size-xs;
                                line-height: 25px;
                            }
                        }
                    }

                    .use-explain__type-center{
                        width: 100%;
                        height: 150px;
                        display: flex;
                        align-items: center;
                        border: 1px solid #000;
                        box-sizing: border-box;
                        margin: 0 auto;
                        overflow: hidden;
                        > p{
                            width: 100%;
                            text-align: center;
                            line-height: 24px;
                            font-size: $font-size-s;
                            font-weight: 400;
                            font-family: $font-family-kr;
                        }
                    }
                }
            }
        }
    }

    .mobile {
        .wrap {
            .inner-wrap{
                width: 100%;
                padding: 0 30px;
                box-sizing: border-box;
                .contents{
                    width: 100%;
                    .how-to-use {
                        padding: 0 0 100px 0;
                        display: flex;
                        flex-direction: column;

                        .use-tit {
                            margin-bottom: 24px;
                            span {
                                &.use-tit-ko {
                                    font-weight: 400;
                                    font-size: $font-size-xs;
                                }

                                &.use-tit-bold {
                                    font-size: $font-size-m-xl;
                                }
                            }
                        }

                        .use-explain {
                            border: none;
                            .use-explain__list-container{
                                flex-direction: column;
                                padding: 0;

                                height: auto;
                                //border-bottom: 1px solid rgba(0,0,0,.2);
                            }

                            .use-explain__important{
                                > p{
                                    padding-bottom: 32px;
                                    border-bottom: 1px solid rgba(0,0,0,.2);
                                }
                            }
                        }

                        .use-explain__type-center{
                            height: auto;
                            padding: 28px 0;
                            border: none;
                            border-top: 1px solid rgba(0,0,0,.2);
                            border-bottom: 1px solid rgba(0,0,0,.2);
                            box-sizing: border-box;
                            > p{
                                font-size: $font-size-xs;
                                line-height: 25px;
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
                    .how-to-use {
                        .use-tit {
                            span {
                                &.use-tit-ko {
                                }

                                &.use-tit-bold {
                                }
                            }
                        }

                        .use-explain {
                            .use-explain__list-container{
                            }

                            .use-explain__important{
                                > p{
                                }
                            }
                        }

                        .use-explain__type-center{
                            > p{
                            }
                        }
                    }
                }
            }
        }
    }





</style>
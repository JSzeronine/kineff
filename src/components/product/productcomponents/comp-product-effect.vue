<template>
    <section class="wrap product-effect">
        <div class="inner-wrap">
            <div class="contents">
                <div class="effect-container">
                    <div class="effect-container__bx">
                        <div class="effect-list">
                            <div class="effect-list__important-top">
                                <span>
                                    <slot name="important"></slot>
                                </span>
                            </div>

                            <ul><slot name="list"></slot></ul>
                        </div>

                        <div class="effect-info">
                            <h3><slot name="title"></slot></h3>

                            <dl class="effect-info__description-bx">
                                <dt>
                                    <slot name="title-s"></slot>
                                    <div class="effect-info__line">
                                        <span></span>
                                    </div>
                                </dt>
                                <dd><slot name="sub"></slot></dd>
                            </dl>
                        </div>
                    </div>
                </div>

                <div v-if="views.isPatent" class="effect-info__patent img-mb" :class="{ 'on-bottom-line' : views.isPatentBottomLine }">
                    <div class="effect-info__patent-img">
                        <img :src="`../images/product/common/img-sooding-patent.jpg`" alt="수딩쿨러 특허">
                    </div>

                    <div class="effect-info__patent-txt">
                        <dl>
                            <dt>수딩쿨러 특허</dt>
                            <dd>
                                *특허 제 10-1793098 호<br>
                                알로에베라잎추출물, 참마뿌리추출물, <br class="pc-br">
                                다시마추출물, 당느릅나무뿌리추출물, <br class="pc-br">
                                제비꽃추출물
                            </dd>
                        </dl>
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
        name: "comp-product-effect",
        mixins : [
            MixinContents
        ],

        data(){
            return{

            }
        },

        props : {
            views : Object,
        },

        mounted() {
            // console.log( this.views.isPatent );
        },

        methods : {
            showMobile(){
                const TL = Timeline({});
                const infoContainer = this.$el.querySelector( ".effect-info" );

                TL.fromTo( ".effect-info__line", {
                    width : "0%",
                }, {
                    width : "100%",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".effect-info__line",
                        start : "top bottom",
                        end : "top center",
                        scrub : true,
                    }
                });

                TL.fromTo( infoContainer, {
                    y:50,
                    opacity : 0
                }, {
                    y:0, opacity:1,
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : infoContainer,
                        start : "top bottom",
                        end : "top center",
                        scrub : true,
                    }
                });

                const effectList = this.$el.querySelectorAll( ".effect-list ul li" );


                effectList.forEach(( $item ) => {
                    let img = $item.querySelector( ".effect-list__img img" );
                    let text = $item.querySelector( "dl" );

                    TL.fromTo( $item, {
                        y: 70,
                    }, {
                        y:0,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : $item,
                            start : "top bottom",
                            end : "top center",
                            scrub : 0.5,
                        }
                    });

                    TL.fromTo( img, {
                        y:-170,
                    }, {
                        y:0,
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : $item,
                            start : "top bottom",
                            end : "bottom top",
                            scrub : 0,
                        }
                    });

                    TL.fromTo( text, {
                        y: 70,
                    }, {
                        y:0,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : $item,
                            start : "top bottom",
                            end : "top center",
                            scrub : 1,
                        }
                    });

                    TL.fromTo( text, {
                        y: 20,
                    }, {
                        y:0,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : $item,
                            start : "top bottom",
                            end : "top center",
                            scrub : 1,
                        }
                    });
                });
            },

            setScrollTrigger(){
                if( isMobile ){
                    this.showMobile();
                    return;
                }

                const contents = this.$el.querySelector( ".contents" );
                const TL = Timeline({});

                let listH = this.$el.querySelectorAll(".effect-list ul li").length
                listH = 312 * (listH-1);



                TL.fromTo( ".product-effect .effect-list .effect-list__important-top",
                    { y:150, },
                    {
                        ease:Linear.easeNone,
                        y:-250,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-effect .contents",
                            // start : () => this.$getPos_tbTobb( contents, 0 ),
                            // end : () => this.$getPos_ttTobb( contents, 0.8 ),
                            start : "top bottom",
                            end : "80% bottom",
                            scrub : true,
                        }
                    },
                )

                TL.fromTo( ".product-effect .effect-list .effect-list__important-top",
                    { opacity:0, },
                    {
                        ease:Linear.easeNone,
                        opacity:1,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-effect .contents",
                            // start : () => this.$getPos_tbTobb( contents, 0.1 ),
                            // end : () => this.$getPos_tbTobt( contents, 0.3 ),
                            start : "10% bottom",
                            end : "30% bottom",
                            scrub : true,
                        }
                    },
                )

                TL.fromTo( ".product-effect .effect-list",
                    { y:0, },
                    {
                        ease:Linear.easeNone,
                        y:-listH,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-effect .contents",
                            // start : () => this.$getPos_ttTobb( contents, 0 ),
                            // end : () => this.$getPos_ttTobb( contents, 1 ),
                            start : "top top",
                            end : "bottom bottom",
                            scrub : true,
                        }
                    },
                )

                TL.fromTo( ".product-effect .effect-list ul li",
                    { y:300},
                    {
                        ease:Power2.easeInOut,
                        y:0,
                        stagger:0.1,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-effect .contents",
                            // start : () => this.$getPos_tbTobb( contents, 0 ),
                            // end : () => this.$getPos_tbTobb( contents, 1 ),
                            start : "top bottom",
                            end : "bottom bottom",
                            scrub : true,
                        }
                    },
                )

                const effectInfo = this.$el.querySelector( ".effect-info" );
                TL.fromTo( ".product-effect .effect-info h3", {
                    y:50,
                    opacity : 0,
                }, {
                    ease:Linear.easeNone,
                    y:0, opacity:1,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-effect .effect-info",
                        // start : () => this.$getPos_tbTobb( effectInfo, 0 ),
                        // end : () => this.$getPos_tbTobt( effectInfo, 0.5 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( ".product-effect .effect-info__description-bx dt", {
                    y:100,
                    opacity: 0,
                }, {
                    ease:Linear.easeNone,
                    y:0, opacity:1,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-effect .effect-info",
                        // start : () => this.$getPos_tbTobb( effectInfo, 0 ),
                        // end : () => this.$getPos_tbTobt( effectInfo, 0.5 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( ".product-effect .effect-info__description-bx dt .effect-info__line", {
                    width : "0%",
                }, {
                    width : "100%",
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-effect .effect-info",
                        // start : () => this.$getPos_tbTobb( effectInfo, 0 ),
                        // end : () => this.$getPos_tbTobt( effectInfo, 0.5 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });


                TL.fromTo( ".product-effect .effect-info__description-bx dd", {
                    y:200,
                    opacity: 0,
                }, {
                    ease:Linear.easeNone,
                    y:0, opacity:1,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-effect .effect-info",
                        // start : () => this.$getPos_tbTobb( effectInfo, 0 ),
                        // end : () => this.$getPos_tbTobt( effectInfo, 0.5 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( ".product-effect .effect-info__patent", {
                    y:200,
                    opacity: 0,
                }, {
                    ease:Linear.easeNone,
                    y:0, opacity:1,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-effect .effect-info",
                        // start : () => this.$getPos_tbTobb( effectInfo, 0 ),
                        // end : () => this.$getPos_tbTobt( effectInfo, 0.5 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( ".product-effect .effect-list ul li .effect-list__img img",
                    {
                        y:-300},
                    {
                        ease:Linear.easeNone,
                        y:0,
                        stagger:0.1,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-effect .contents",
                            // start : () => this.$getPos_tbTobb( contents, 0 ),
                            // end : () => this.$getPos_tbTobt( contents, 1.2 ),
                            start : "top bottom",
                            end : "bottom top",
                            scrub : true,
                        }
                    },
                )

                TL.fromTo( ".product-effect .effect-list ul li > dl",
                    { y:50, opacity:0},
                    {
                        ease:Power2.easeInOut,
                        y:0, opacity:1,
                        stagger:0.1,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-effect .contents",
                            // start : () => this.$getPos_tbTobb( contents, 0 ),
                            // end : () => this.$getPos_tbTobb( contents, 1 ),
                            start : "top bottom",
                            end : "bottom bottom",
                            scrub : true,
                        }
                    },
                )

                // TL.fromTo( ".product-effect .effect-info",
                //     { y:0, },
                //     {
                //         ease:Linear.easeNone,
                //         y:0,
                //         scrollTrigger : {
                //             scroller: this.stWrapper,
                //             trigger : ".product-effect .contents",
                //             start : () => this.$getPos_ttTobb( contents, 0 ),
                //             end : () => this.$getPos_ttTobb( contents, 1 ),
                //             scrub : true,
                //         }
                //     },
                // )

                ScTrigger.create({
                    scroller: this.stWrapper,
                    animation : TL,
                    trigger : ".product-effect .contents",
                    // start : () => this.$getPos_ttTobb( contents, 0 ),
                    // end : () => this.$getPos_ttTobb( contents, 1 ),
                    start : "top top",
                    end : "bottom bottom",
                    pin : ".product-effect .effect-container__bx",
                    pinSpacing : false,
                });
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
                height: 250vh;

                .effect-container{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    height: 100vh;
                    align-items: center;

                    .effect-container__bx{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;

                        .effect-list{
                            position: relative;
                            width: 50%;
                            transform: translate3d( 0, 0, 0 );
                            .effect-list__important-top{
                                position: absolute;
                                top: 100px;
                                left: 259px;

                                span{
                                    display: inline-block;
                                    padding: 7px 12px 4px;
                                    border: 1px solid #979797;
                                    font-size: 12px;
                                }
                            }

                            ul{
                                position: absolute;
                                margin-top: 142px;

                                left: 0;
                                top: 0;
                                li{
                                    margin-bottom: 85px;
                                }
                            }
                        }

                        .effect-info{
                            width: 50%;
                            height: auto;
                            padding-left: 50px;
                            box-sizing: border-box;
                            h3{
                                margin-bottom: 15px;
                                font-size: 50px;
                                font-family: $font-family-sans-serif_medium;
                                color: $color-set-green;
                                line-height: 60px;
                                span{
                                    position: relative;
                                    top: -17px;
                                    font-size: $font-size-m-xl;
                                    font-family: $font-family-sans-serif_bold;
                                }
                            }

                            > dl{
                                dt{
                                    margin-bottom: 47px;
                                    font-size: $h2-font-size;
                                    font-weight: 700;
                                    line-height: 42px;
                                    font-family: $font-family-kr;
                                    > span{
                                        display: inline-block;
                                        padding-left: 59px;
                                    }

                                    .effect-info__line{
                                        overflow: hidden;
                                        width: 100%;
                                        margin-top: 0;
                                        span{
                                            display: inline-block;
                                            width: 100%;
                                            height: 1px;
                                            background-color: #000;
                                        }
                                    }
                                }

                                dd{
                                    font-size: $font-size-me;
                                    line-height: 28px;
                                    font-weight: 300;
                                    font-family: $font-family-kr;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .mobile{
        .wrap{
            position: relative;
            .inner-wrap{
                width: 100%;
                padding: 120px 30px;
                box-sizing: border-box;
                .contents{
                    width: 100%;
                    height: auto;

                    .effect-container{
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        height: 100%;
                        align-items: center;

                        .effect-container__bx{
                            flex-direction: column-reverse;
                            height: 100%;

                            .effect-list{
                                margin-top: 0;
                                position: relative;
                                width: 100%;
                                transform: translate3d( 0, 0, 0 );

                                .effect-list__important-top{
                                    position: relative;
                                    left: 157px;
                                    top: 0;

                                    span{
                                        font-size: 11px;
                                        padding: 8px 9px 4px;
                                    }
                                }

                                ul{
                                    position: static;
                                    margin-top: 20px;
                                    li{
                                        margin-bottom: 40px;
                                        &:last-child {
                                            margin-bottom: 0;
                                        }
                                    }
                                }
                            }

                            .effect-info{
                                width: 100%;
                                padding-left: 0;
                                height: auto;
                                margin-bottom: 40px;
                                h3{
                                    margin-bottom: 16px;
                                    line-height: 43px;
                                    font-size: $font-size-m-3xl;
                                    span{
                                        position: relative;
                                        top: -17px;
                                        font-size: $font-size-lg;
                                    }
                                }

                                > dl{
                                    dt{
                                        padding-bottom: 0;
                                        margin-bottom: 30px;
                                        font-size: $font-size-m-lg;
                                        line-height: 30px;
                                        > span{
                                            display: inline-block;
                                            padding-left: 42px;
                                        }

                                        .effect-info__line{
                                            margin-top: 13px;
                                        }
                                    }

                                    dd{
                                        font-size: $font-size-xs;
                                        line-height: 24px;
                                        br{
                                            display: none;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .effect-info__patent{
                        margin-top: 50px;
                        width: 100%;
                        //background-color: #F6F6F6;
                        padding: 0px 0px 50px 12px;
                        box-sizing: border-box;
                        display: flex;

                        &.on-bottom-line{
                            border-bottom: 1px solid #979797;
                        }

                        .effect-info__patent-img{
                            min-width: 106px;
                            width: 106px;
                            margin-right: 34px;
                            img{
                                width: 100%;
                            }
                        }

                        .effect-info__patent-txt{
                            padding-top: 18px;
                            dl{
                                dt{
                                    margin-bottom: 8px;
                                    font-size: $font-size-me;
                                    font-weight: 400;
                                    line-height: 26px;
                                    font-family: $font-family-kr;
                                }

                                dd{
                                    font-size: $font-size-m-s;
                                    line-height: 1.5;
                                    font-weight: 300;
                                    font-family: $font-family-kr;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .ie, .tablet{
        .wrap{
            padding-top: 250px;
            padding-bottom: 180px;
            .inner-wrap{
                .contents{
                    height: auto;
                    .effect-container{
                        height: auto;

                        .effect-container__bx{
                            .effect-list{
                                margin-top: 0px;
                                .effect-list__important-top{
                                    span{
                                        top: 11px;
                                        padding-top: 4px;
                                    }
                                }

                                ul{
                                    position: relative;
                                    li{
                                    }
                                }
                            }

                            .effect-info{
                                padding-left: 0;
                                width: 56%;
                                h3{
                                    span{
                                    }
                                }

                                > dl{
                                    dt{
                                        > span{
                                        }

                                        .effect-info__line{
                                            span{
                                            }
                                        }
                                    }

                                    dd{
                                    }
                                }


                                .effect-info__patent{
                                    .effect-info__patent-img{
                                        img{
                                        }
                                    }

                                    .effect-info__patent-txt{
                                        dl{
                                            dt{
                                            }

                                            dd{
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
    }

    .windows{
        .wrap{
            .inner-wrap{
                .contents{
                    .effect-container{
                        .effect-container__bx{
                            .effect-list{
                                .effect-list__important-top{
                                    span{
                                    }
                                }

                                ul{
                                    li{
                                    }
                                }
                            }

                            .effect-info{
                                h3{
                                    span{
                                    }
                                }

                                > dl{
                                    dt{
                                        font-size: 28px;
                                        > span{
                                        }

                                        .effect-info__line{
                                            span{
                                            }
                                        }
                                    }

                                    dd{
                                        font-size: 16px;
                                    }
                                }


                                .effect-info__patent{
                                    .effect-info__patent-img{
                                        img{
                                        }
                                    }

                                    .effect-info__patent-txt{
                                        dl{
                                            dt{
                                            }

                                            dd{
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
    }

</style>
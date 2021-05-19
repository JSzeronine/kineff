<template>
    <section class="wrap product-detail">
        <div class="inner-wrap">
            <div class="contents">
                <slot name="wash"></slot>
                <div class="contents-list__type">
                    <div v-if="views.isParent" class="product-detail__bx">
                        <div class="product-detail__introduce">
                            <dl>
                                <dt><slot name="title"></slot></dt>
                                <dd><slot name="sub"></slot></dd>
                            </dl>
                        </div>

                        <div class="product-detail__info">
                            <div class="product-detail__info-container">
                                <div class="product-detail__info-title">
                                    <slot name="description"></slot>
                                </div>

                                <div v-if="views.isList" class="product-detail__info-list">
                                    <ul>
                                        <slot name="list"></slot>
                                    </ul>
                                </div>

                                <div v-if="views.isGraph" class="product-detail__info-graph">
                                    <div class="product-detail__info-graph__container">
                                        <div class="product-detail__info-graph__img">
                                            <img class="img-pc" :src="`../images/product/common/img-detail-graph.png`" alt="피부 밸런스를 지키는 pH 5.5 약산성 클렌징">
                                            <img class="img-mb" :src="`../images/product/common/m_img-detail-graph.png`" alt="피부 밸런스를 지키는 pH 5.5 약산성 클렌징">
                                        </div>

                                        <div class="product-detail__info-graph__list">
                                            <ul>
                                                <li>산성</li>
                                                <li>
                                                    <p>
                                                        <img :src="`../images/product/common/icon-arrow-up.png`" alt="화살표 아이콘">
                                                    </p>

                                                    <dl>
                                                        <dt>약산성</dt>
                                                        <dd>5.5~6.5</dd>
                                                    </dl>
                                                </li>
                                                <li>중성</li>
                                                <li>알칼리성</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div v-if="views.isPatent" class="product-detail__patent">
                                <div class="product-detail__patent-img">
                                    <img :src="`../images/product/common/img-detail-patent.jpg`" alt="특허 10-2014-0083310">
                                </div>
                                <div class="product-detail__patent-info">
                                    <dl>
                                        <dt>
                                            Nano Gel Capsule Emulsion
                                        </dt>
                                        <dd>
                                            *특허 10-2014-0083310<br>
                                            자기 회합 겔 특성을 이용한 세포막 유사 구조의<br class="pc-br">
                                            나노 겔 타입의 에멀전 및 그를 이용한 화장품 조성물
                                        </dd>
                                    </dl>
                                </div>
                            </div>

                            <div v-if="views.isLayer" class="product-detail__layer">
                                <div class="product-detail__layer-img">
                                    <img class="img-pc" :src="`../images/product/common/img-detail-layer.png`" alt="Hydrarelief Cream-on Mask">
                                    <img class="img-mb" :src="`../images/product/common/m_img-detail-layer.png`" alt="Hydrarelief Cream-on Mask">
                                </div>
                                <div class="product-detail__layer-info">
                                    <ul>
                                        <li>
                                            <span></span>
                                            <dl>
                                                <dt>우레탄 코팅으로 또 한 번 LOCK!</dt>
                                                <dd>
                                                    크림의 유효성분이 날아가지 않게<br>
                                                    잡아주고  손에 묻어나지 않게 특수 코팅
                                                </dd>
                                            </dl>
                                        </li>
                                        <li>
                                            <span></span>
                                            <dl>
                                                <dt>마스크 시트</dt>
                                            </dl>
                                        </li>
                                        <li>
                                            <span></span>
                                            <dl>
                                                <dt>멜팅 크림 밤 코팅 LOCK!</dt>
                                                <dd>
                                                    P.C.C(Pressure Cream Coating) 기술로<br>
                                                    피부 온도에 녹아드는 멜팅 크림 밤이<br>
                                                    시트에 균일하게 코팅
                                                </dd>
                                            </dl>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
        name: "comp-product-detail",
        mixins : [
            MixinContents
        ],

        props : {
            views : Object,
        },

        mounted() {

        },

        methods : {
            showMobile(){

                let TL = Timeline({});

                if( this.views.isLayer ){

                    TL.fromTo( ".product-detail__layer .product-detail__layer-img", {
                        y: -20,
                    }, {
                        y:20,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-detail__layer .product-detail__layer-img",
                            start : "top bottom",
                            end : "bottom top",
                            scrub : 1,
                        }
                    });
                }

                if( this.views.isGraph ){
                    TL.fromTo( ".product-detail__info-graph", {
                        y:50,
                        opacity : 0,
                    }, {
                        y: 0,
                        opacity : 1,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-detail__info-graph",
                            start : "center bottom",
                            end : "center center",
                            scrub : 1,
                        },
                    })
                }

                if( this.views.isParent ){
                    let introduce = this.$el.querySelector( ".contents-list__type .product-detail__introduce" );

                    TL.fromTo( introduce, {
                        y : 50,
                        opacity : 0,
                    }, {
                        y:0,
                        opacity : 1,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : introduce,
                            start : "center bottom",
                            end : "center center",
                            scrub : 1,
                        }
                    });

                    let infoTitle = this.$el.querySelector(".contents-list__type .product-detail__info-title" );

                    TL.fromTo( infoTitle, {
                        y : 50,
                        opacity : 0,
                    }, {
                        y:0,
                        opacity : 1,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : infoTitle,
                            start : "center bottom",
                            end : "center center",
                            scrub : 1,
                        }
                    });
                }

                if( this.views.isList ){
                    const washList = this.$el.querySelectorAll( ".contents-list__type .product-detail__info-list li" );
                    washList.forEach(( $item ) => {
                        let img = $item.querySelector( "img" );
                        let txt = $item.querySelector( ".product-detail__info-list__txt" );

                        TL.fromTo( $item, {
                            scale : 1.1,
                        }, {
                            scale : 1,
                            ease:Cubic.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                scrub : 1,
                                start : "top bottom",
                                end : "bottom center",
                            }
                        });

                        TL.fromTo( txt, {
                            y: 70,
                        }, {
                            y:0,
                            ease:Cubic.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                scrub : 1,
                                start : "top bottom",
                                end : "bottom center",
                            }
                        })

                        TL.fromTo( img, {
                            scale : 2,
                        }, {
                            scale : 1,
                            ease:Cubic.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                scrub : 1,
                                start : "top bottom",
                                end : "bottom center",
                            }
                        })
                    })
                }else{
                    TL.fromTo( ".wrap-wash .product-detail__introduce", {
                        opacity : 0,
                        y:50,
                    }, {
                        opacity : 1,
                        y : 0,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".wrap-wash .product-detail__introduce",
                            scrub : true,
                            start : "top bottom",
                            end : "top center",
                        }
                    });

                    TL.fromTo( ".wrap-wash .product-detail__info", {
                        opacity : 0,
                        y:50,
                    }, {
                        opacity : 1,
                        y : 0,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".wrap-wash .product-detail__info",
                            scrub : true,
                            start : "top bottom",
                            end : "top center",
                        }
                    });

                    TL.fromTo( ".wrap-wash .product-detail__info-list__text", {
                        opacity : 0,
                        y:50,
                    }, {
                        opacity : 1,
                        y : 0,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".wrap-wash .product-detail__info-list__text",
                            scrub : true,
                            start : "top bottom",
                            end : "top center",
                        }
                    });

                    TL.fromTo( ".wrap-wash .product-detail__info-list__img img", {
                        scale : 2
                    }, {
                        scale : 1,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".wrap-wash .product-detail__info-list__img",
                            scrub : true,
                            start : "top bottom",
                            end : "center center",
                        }
                    });

                    const washList = this.$el.querySelectorAll( ".wrap-wash .product-detail__info-list li" );
                    washList.forEach(( $item ) => {
                        let img = $item.querySelector( "img" );
                        let txt = $item.querySelector( ".product-detail__info-list__txt" );

                        TL.fromTo( $item, {
                            scale : 1.1,
                        }, {
                            scale : 1,
                            ease:Cubic.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                scrub : 1,
                                start : "top bottom",
                                end : "bottom center",
                            }
                        });

                        TL.fromTo( txt, {
                            y: 70,
                        }, {
                            y:0,
                            ease:Cubic.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                scrub : 1,
                                start : "top bottom",
                                end : "bottom center",
                            }
                        })

                        TL.fromTo( img, {
                            scale : 2,
                        }, {
                            scale : 1,
                            ease:Cubic.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                scrub : 1,
                                start : "top bottom",
                                end : "bottom center",
                            }
                        })
                    })
                }
            },

            setScrollTrigger(){
                if( isMobile ) {
                    this.showMobile();
                    return;
                }


                // Patent Type
                if( this.views.isPatent ){
                    this.showScrollPatent();
                }

                // Layer Type
                if( this.views.isLayer ){
                    this.showScrollLayer();
                }

                // Graph Type
                if( this.views.isGraph ){
                    this.showScrollGraph();
                }

                if( !this.views.isList ){
                    // Wash Type
                    this.showScrollWash();
                }else{
                    // List Type
                    this.showScrollList();
                }

                // 공통
                const detailInfo = this.$el.querySelector( ".contents-list__type .product-detail__info" );
                if( !detailInfo ) return;

                let TL = Timeline({});
                TL.fromTo( ".contents-list__type .product-detail__info-title", {
                    opacity : 0,
                    y:100,
                }, {
                    opacity : 1,
                    y:0,
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : detailInfo,
                        // start : () => this.$getPos_tbTobt( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });
            },

            showScrollList(){
                const detailInfo = this.$el.querySelector( ".contents-list__type .product-detail__info" );
                const detailListImg = this.$el.querySelectorAll( ".contents-list__type .product-detail__info-list__img img" );

                let TL = Timeline({});

                TL.fromTo( ".contents-list__type .product-detail__info-list", {
                    opacity : 0,
                    y : 200,
                }, {
                    y : 0,
                    opacity : 1,
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : detailInfo,
                        // start : () => this.$getPos_tbTobt( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( detailListImg[ 0 ], {
                    scale : 2,
                }, {
                    scale : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : detailInfo,
                        // start : () => this.$getPos_tbTobb( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( detailListImg[ 1 ], {
                    scale : 2,
                }, {
                    scale : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : detailInfo,
                        // start : () => this.$getPos_tbTobb( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

            },

            showScrollPatent(){
                const TL = Timeline({});
                let patentContainer = this.$el.querySelector( ".product-detail__patent" );
                TL.fromTo( ".product-detail__patent .product-detail__patent-img", {
                    y:30,
                    opacity : 0,
                }, {
                    y: 0,
                    opacity : 1,
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        scrub : true,
                        trigger : patentContainer,
                        // start : () => this.$getPos_tbTobb( patentContainer, 1 ),
                        // end : () => this.$getPos_ttTobb( patentContainer, 0.5 ),
                        start : "center bottom",
                        end : "center center",
                    }
                });

                TL.fromTo( ".product-detail__patent .product-detail__patent-info", {
                    y:30,
                    opacity : 0,
                }, {
                    y: 0,
                    opacity : 1,
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        scrub : true,
                        trigger : patentContainer,
                        // start : () => this.$getPos_tbTobb( patentContainer, 1 ),
                        // end : () => this.$getPos_ttTobb( patentContainer, 0.5 ),
                        start : "center bottom",
                        end : "center center",
                    }
                });
            },

            showScrollLayer(){
                const TL = Timeline({});

                let layerContainer = this.$el.querySelector( ".product-detail__layer" );
                let layerList = layerContainer.querySelectorAll( "li" );

                TL.fromTo( layerList[ 0 ], {
                    opacity : 0,
                    x : 50,
                }, {
                    opacity : 1,
                    x : 0,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : layerContainer,
                        // start : () => this.$getPos_tbTobb( layerContainer, 0 ),
                        // end : () => this.$getPos_ttTobb( layerContainer, 0.5 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( layerList[ 1 ], {
                    opacity : 0,
                    x : 100,
                }, {
                    opacity : 1,
                    x : 0,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : layerContainer,
                        // start : () => this.$getPos_tbTobb( layerContainer, 0 ),
                        // end : () => this.$getPos_ttTobb( layerContainer, 0.5 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( layerList[ 2 ], {
                    opacity : 0,
                    x : 150,
                }, {
                    opacity : 1,
                    x : 0,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : layerContainer,
                        // start : () => this.$getPos_tbTobb( layerContainer, 0 ),
                        // end : () => this.$getPos_ttTobb( layerContainer, 0.5 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });
            },

            showScrollGraph(){
                const TL = Timeline({});
                const detailInfo = this.$el.querySelector( ".contents-list__type .product-detail__info" );
                const graphContainer = this.$el.querySelector( ".product-detail__info-graph" );

                let list = graphContainer.querySelectorAll( "li" );

                TL.fromTo( ".product-detail__info-graph", {
                    y: 100,
                    opacity : 0,
                }, {
                    y: 0,
                    opacity : 1,
                    ease:Cubic.easeIn,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : detailInfo,
                        // start : () => this.$getPos_tbTobt( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( list[ 1 ], {
                    y: 300,
                    opacity : 0,
                }, {
                    y: 0,
                    opacity : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : detailInfo,
                        // start : () => this.$getPos_tbTobt( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });
            },

            showScrollWash(){
                const detailInfo = this.$el.querySelector( ".wrap-wash .product-detail__info" );
                if( !detailInfo ) return;

                const detailListImg = this.$el.querySelectorAll( ".wrap-wash .product-detail__info-list__img img" );

                let TL = Timeline({});

                TL.fromTo( ".wrap-wash .product-detail__info-title", {
                    opacity : 0,
                    y:100,
                }, {
                    opacity : 1,
                    y:0,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : detailInfo,
                        // start : () => this.$getPos_tbTobt( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                const detailList = this.$el.querySelectorAll( ".wrap-wash .product-detail__info-list li" );

                TL.fromTo( ".wrap-wash .product-detail__info-list__text", {
                    opacity : 0,
                    y : 200,
                }, {
                    y : 0,
                    opacity : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".wrap-wash",
                        // start : () => this.$getPos_tbTobt( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : 1,
                    }
                });

                TL.fromTo( ".wrap-wash .product-detail__info-list", {
                    opacity : 0,
                    y : 200,
                }, {
                    y : 0,
                    opacity : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".wrap-wash",
                        // start : () => this.$getPos_tbTobt( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : 1,
                    }
                });

                TL.fromTo( detailListImg, {
                    scale : 2,
                }, {
                    scale : 1,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : detailInfo,
                        // start : () => this.$getPos_tbTobt( detailInfo, 0 ),
                        // end : () => this.$getPos_ttTobb( this.$el, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap{
        padding-top: 284px;
        padding-bottom: 255px;
        background-color: $color-set-gray;
        .inner-wrap{
            width: $stage-min-width;
            margin: 0 auto;
            .contents{
                width: $stage-contents-width;
                margin: 0 auto;
                .product-detail__bx{
                    display: flex;
                    justify-content: flex-start;
                    .product-detail__introduce{
                        width: 347px;
                        dl{
                            dt{
                                margin-bottom: 12px;
                                font-size: $font-size-m-3xl;
                                line-height: 46px;
                                font-family: $font-family-kr;
                                font-weight: 700;
                                span{
                                    color: $color-set-green;
                                    font-size: $font-size-m-3xl;
                                    line-height: 46px;
                                    font-family: $font-family-kr;
                                    font-weight: 700;
                                }
                            }

                            dd{
                                font-size: $h2-font-size;
                                line-height: 42px;
                                color: $color-set-green;
                                font-family: $font-family-sans-serif_medium;
                            }
                        }
                    }

                    .product-detail__info{
                        //width: 869px;
                        .product-detail__info-title{
                            font-size: $font-size-me;
                            line-height: 28px;
                            font-weight: 300;
                            font-family: $font-family-kr;
                        }

                        .product-detail__info-graph{
                            margin-top: 161px;
                            .product-detail__info-graph__img{
                                width: 801px;
                                margin-bottom: 27px;
                                font-size: 0;
                                img{
                                    width: 100%;
                                }
                            }

                            .product-detail__info-graph__list{
                                ul{
                                    display: flex;
                                    li{
                                        padding-top: 27px;
                                        font-size: $h6-font-size;
                                        line-height: 20px;
                                        color: #7E7E7E;
                                        font-weight: 400;
                                        font-family: $font-family-kr;

                                        &:nth-child( 1 ){ margin-right: 171px; }

                                        &:nth-child( 2 ){
                                            text-align: center;
                                            padding-top: 0px;
                                            margin-right: 179px;

                                            p{
                                                margin-bottom: 11px;
                                                img{
                                                    width: 23px;
                                                }
                                            }

                                            dl{
                                                dt{
                                                    font-size: $h6-font-size;
                                                    line-height: 20px;
                                                    font-weight: 700;
                                                    margin-bottom: 32px;
                                                    color: $color-set-green;
                                                }

                                                dd{
                                                    font-size: 50px;
                                                    line-height: 60px;
                                                    font-family: $font-family-sans-serif_thin;
                                                    color: $color-set-green;
                                                }
                                            }

                                        }

                                        &:nth-child( 3 ){ margin-right: 173px; }
                                    }
                                }
                            }
                        }

                        .product-detail__info-list{
                            width: 100%;
                            margin-top: 112px;
                            ul{
                                display: flex;
                            }
                        }
                    }

                    .product-detail__patent{
                        margin-top: 125px;
                        padding-top: 63px;
                        width: 100%;
                        border-top: 1px solid #979797;
                        display: flex;
                        justify-content: flex-start;

                        .product-detail__patent-img{
                            margin-right: 39px;
                            width: 124px;
                            img{ width: 100%; }
                        }

                        .product-detail__patent-info{
                            dl{
                                dt{
                                    margin-bottom: 20px;
                                    font-size: $font-size-lg;
                                    line-height: 27px;
                                    font-family: $font-family-sans-serif;
                                }

                                dd{
                                    font-size: $font-size-s;
                                    line-height: 26px;
                                    font-weight: 300;
                                    font-family: $font-family-kr;
                                }
                            }
                        }
                    }

                    .product-detail__layer{
                        margin-top: 125px;
                        padding-top: 63px;
                        width: 100%;
                        border-top: 1px solid #979797;
                        display: flex;
                        justify-content: flex-start;

                        .product-detail__layer-img{
                            width: 541px;
                            img{width: 100%;}
                        }

                        .product-detail__layer-info{
                            margin-top: 12px;
                            margin-left: 2px;
                            ul{
                                li{
                                    display: flex;
                                    justify-content: flex-start;

                                    &:nth-child( 1 ){ margin-bottom: 82px; }
                                    &:nth-child( 2 ){ margin-bottom: 77px; }

                                    span{
                                        position: relative;
                                        top: 6px;
                                        margin-right: 25px;
                                        display: inline-block;
                                        width: 45px;
                                        height: 1px;
                                        background-color: $color-set-green;
                                    }

                                    dl{
                                        dt{
                                            margin-bottom: 8px;
                                            font-size: $h6-font-size;
                                            color: $color-set-green;
                                            line-height: 19px;
                                            font-weight: 700;
                                            font-family: $font-family-kr;
                                        }

                                        dd{
                                            font-size: $font-size-s;
                                            line-height: 25px;
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
        }
    }

    .mobile {
        .wrap{
            padding-top: 80px;
            padding-bottom: 100px;
            .inner-wrap{
                width: 100%;

                box-sizing: border-box;
                background-color: $color-set-gray;
                .contents{
                    width: 100%;
                    .product-detail__bx{
                        flex-direction: column;
                        .product-detail__introduce{
                            padding: 0 30px;
                            box-sizing: border-box;
                            width: 100%;
                            dl{
                                dt{
                                    margin-bottom: 8px;
                                    font-size: $font-size-m-lg;
                                    font-weight: 700;
                                    line-height: 27px;
                                    font-family: $font-family-kr;
                                    span{
                                        font-size: $font-size-m-lg;
                                        line-height: 27px;
                                        font-family: $font-family-kr;
                                        font-weight: 700;
                                    }
                                }

                                dd{
                                    margin-bottom: 24px;
                                    font-size: $font-size-m-lg;
                                    line-height: 27px;
                                    font-weight: 700;
                                    font-family: $font-family-sans-serif_bold;
                                }
                            }
                        }

                        .product-detail__info{
                            width: 100%;
                            .product-detail__info-title{
                                font-size: $font-size-xs;
                                line-height: 24px;
                                font-family: $font-family-kr;
                                padding: 0 30px;
                                box-sizing: border-box;
                                br{
                                    display: none;
                                }
                            }

                            .product-detail__info-graph{
                                width: 100%;
                                max-width: 325px;
                                min-width: 320px;
                                margin: 0 auto;
                                margin-top: 70px;
                                .product-detail__info-graph__img{
                                    width: 100%;
                                    margin-bottom: -25px;
                                    font-size: 0;
                                    img{width: 100%;}
                                }

                                .product-detail__info-graph__list{
                                    ul{
                                        display: flex;
                                        position: relative;
                                        left: 5px;
                                        li{
                                            font-size: 13px;
                                            line-height: 20px;
                                            color: #7E7E7E;
                                            font-weight: 400;
                                            padding-top: 27px;

                                            &:nth-child( 1 ){ margin-right: 26px; }

                                            &:nth-child( 2 ){
                                                text-align: center;
                                                padding-top: 51px;
                                                margin-right: -36px;

                                                p{
                                                    margin-bottom: 11px;
                                                    img{
                                                        width: 15px;
                                                    }
                                                }

                                                dl{
                                                    dt{
                                                        font-size: $font-size-s;
                                                        line-height: 19px;
                                                        margin-bottom: 20px;
                                                    }

                                                    dd{
                                                        font-size: 40px;
                                                        line-height: 48px;
                                                    }
                                                }

                                            }

                                            &:nth-child( 3 ){ margin-right: 98px; }
                                        }
                                    }
                                }
                            }

                            .product-detail__info-list{
                                width: 100%;
                                margin-top: 70px;
                               /* padding: 0 55px;*/
                                box-sizing: border-box;
                                ul{
                                    flex-direction: column;
                                }
                            }
                        }

                        .product-detail__patent{
                            margin-top: 80px;
                            padding-top: 80px;
                            width: 100%;
                            border-top: 1px solid #979797;
                            justify-content: center;

                            .product-detail__patent-img{
                                margin-right: 16px;
                                width: 109px;
                                height: auto;
                                img{ width: 100%; }
                            }

                            .product-detail__patent-info{
                                width: 190px;
                                padding-top: 5px;
                                dl{
                                    dt{
                                        font-size: $font-size-me;
                                        line-height: 24px;
                                        font-family: $font-family-sans-serif_medium;
                                        margin-bottom: 14px;
                                    }

                                    dd{
                                        font-size: 13px;
                                        line-height: 22px;
                                    }
                                }
                            }
                        }

                        .product-detail__layer{
                            position: relative;
                            margin-top: 100px;
                            flex-direction: column;
                            padding: 140px 30px 0;
                            box-sizing: border-box;
                            border-top: none;

                            .product-detail__layer-img{
                                position: absolute;
                                right: -30px;
                                width: 272px;
                                top: 35px;
                                img{width: 100%;}
                            }

                            .product-detail__layer-info{
                                position: relative;
                                z-index: 10;
                                margin-top: 12px;
                                margin-left: 2px;
                                ul{
                                    li{
                                        width: 100%;
                                        display: flex;
                                        justify-content: flex-start;

                                        &:nth-child( 1 ){ margin-bottom: 70px; }
                                        &:nth-child( 2 ){ margin-bottom: 138px; }
                                        //&:nth-child( 3 ) { display: none; }

                                        span{
                                            display: none;
                                        }

                                        dl{
                                            dt{
                                                font-size: $font-size-s;
                                                margin-bottom: 6px;
                                            }

                                            dd{
                                                font-size: $font-size-s;
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
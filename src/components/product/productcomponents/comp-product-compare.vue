<template>
    <section class="wrap comp-product-compare">
        <div class="inner-wrap">
            <div class="contents">
                <div class="compare-info">
                    <div class="compare-info__title">
                        촉촉하지만 깔끔하게-<br>
                        남김 없는<br>
                        탁월한 세정력
                    </div>

                    <div class="compare-info__description">
                        베이스 메이크업부터 포인트 메이크업까지 깨끗하게<br>
                        클렌징 해주어 남김 없는 말끔한 세안을 도와줍니다.
                    </div>
                </div>
                <div class="compare-list">
                    <ul>
                        <li>
                            <div class="compare-list__img">
                                <img class="img-pc" :src="`../images/product/common/img-compare-before.jpg`" alt="BEFORE">
                                <img class="img-mb" :src="`../images/product/common/m_img-compare-before.jpg`" alt="BEFORE">
                            </div>
                            <dl>
                                <dt>BEFORE</dt>
                                <dd></dd>
                            </dl>
                        </li>
                        <li>
                            <div class="compare-list__img">
                                <img class="img-pc" :src="`../images/product/common/img-compare-after.jpg`" alt="AFTER">
                                <img class="img-mb" :src="`../images/product/common/m_img-compare-after.jpg`" alt="AFTER">
                            </div>
                            <dl>
                                <dt>AFTER</dt>
                                <dd>* 전/후 이미지는 개인 차이가 있을 수 있습니다.</dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MixinContents from "../../../mixin/mixin-contents-sctrigger";
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    export default {
        name: "comp-product-compare",

        mixins : [
            MixinContents
        ],

        mounted() {

        },

        methods : {
            showMobile(){

                const TL = Timeline({});

                let list = this.$el.querySelectorAll( ".comp-product-compare .compare-list li" );
                list.forEach(( $item ) => {
                    let img = $item.querySelector( ".img-mb" );

                    TL.fromTo( img, {
                        scale : 2,
                    }, {
                        scale : 1,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".compare-list",
                            start : "top bottom",
                            end : "center 25%",
                            scrub : true,
                        }
                    })
                })
            },


            setScrollTrigger(){
                if( isMobile ){
                    this.showMobile();
                    return;
                }

                const TL = Timeline({});
                let container = this.$el.querySelector( ".contents" );
                let list = this.$el.querySelectorAll( "li .img-pc" );

                TL.fromTo( ".comp-product-compare .compare-title", {
                    y : 50,
                    opacity : 0,
                }, {
                    y:0,
                    opacity : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : container,
                        // start : () => this.$getPos_tbTobb( container, 0 ),
                        // end : () => this.$getPos_ttTobt( container, 0 ),
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( ".comp-product-compare .compare-list", {
                    y : 200,
                    opacity : 0,
                }, {
                    y:0,
                    opacity:1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : container,
                        start : "top bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( list, {
                    scale : 2,
                }, {
                    scale : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : container,
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

        .inner-wrap{
            padding-top: 400px;
            width: $stage-min-width;
            margin: 0 auto;
            .contents{
                width: $stage-contents-width;
                margin: 0 auto;

                .compare-info{
                    display: flex;
                    justify-content: flex-start;
                    margin-bottom: 64px;
                    .compare-info__title{
                        font-size: $h2-font-size;
                        font-weight: 700;
                        line-height: 42px;
                        font-family: $font-family-kr;
                        margin-right: 54px;
                    }

                    .compare-info__description{
                        font-size: $font-size-lg;
                        line-height: 30px;
                        font-family: $font-family-kr;
                        font-weight: 300;
                    }
                }

                .compare-list{
                    ul{
                        display: flex;
                        justify-content: space-between;
                        li{
                            .compare-list__img{
                                width: 590px;
                                margin-bottom: 27px;
                                overflow: hidden;
                                img{
                                    width: 100%;
                                }
                            }

                            dl{
                                dt{
                                    font-size: $font-size-lg;
                                    line-height: 25px;
                                    font-family: $font-family-sans-serif;
                                    margin-bottom: 20px;
                                }

                                dd{
                                    font-size: 12px;
                                    line-height: 19px;
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

    .mobile {
        .wrap{

            .inner-wrap{
                width: 100%;
                padding: 0 30px;
                padding-top: 80px;
                box-sizing: border-box;
                .contents{
                    width: 100%;


                    .compare-info{
                        margin-bottom: 40px;
                        flex-wrap: wrap;

                        .compare-info__title{
                            width: 100%;
                            font-size: $font-size-m-lg;
                            line-height: 30px;
                            font-weight: 700;
                            margin-bottom: 24px;
                        }

                        .compare-info__description{
                            font-size: $font-size-xs;
                            line-height: 24px;
                        }
                    }

                    .compare-list{
                        ul{
                            flex-direction: column;
                            li{
                                margin-bottom: 8px;
                                .compare-list__img{
                                    width: 100%;
                                    height: auto;
                                    margin: 0 auto;
                                    margin-bottom: 0;
                                    img {
                                        height: 100%;
                                    }
                                }

                                dl{
                                    dt{
                                        display: none;
                                    }
                                    dd{
                                        margin-top: 10px;
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
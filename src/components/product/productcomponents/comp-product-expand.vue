<template>
    <section class="wrap product-expand">
        <div class="inner-wrap">
            <div class="contents">
                <div class="ampoule-type">
                    <div class="ampoule-type-tit">
                        <h2>
                            <slot name="title"></slot>
                        </h2>
                        <p>
                            <slot name="description"></slot>
                        </p>
                    </div>

                    <div class="ampoule-type-product">
                        <div class="ampoule-type-product_img">
                            <slot name="img"></slot>
                        </div>

                        <div v-if="isList" class="product-expand__list">
                            <ul>
                                <li>
                                    <div class="product-expand__point">
                                        <div class="product-expand__point-circle">
                                            <span></span>
                                        </div>
                                        <div class="product-expand__point-line">
                                            <span></span>
                                        </div>
                                    </div>

                                    <div class="product-expand__info-list__info">
                                        <div class="product-expand__info-list__img">
                                            <img :src="`../images/product/cream-on-mask/img-expand-list0.png`" alt="겉면 우레탄 코팅">
                                        </div>
                                        <div class="product-expand__info-list__txt">
                                            <dl>
                                                <dt>
                                                    겉면 ‘우레탄 코팅’
                                                </dt>
                                                <dd>
                                                    보습 증발 차단 + 크림 흡수 UP<br>
                                                    머리카락이 달라붙지 않는 편리함
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="product-expand__point">
                                        <div class="product-expand__point-circle">
                                            <span></span>
                                        </div>
                                        <div class="product-expand__point-line">
                                            <span></span>
                                        </div>
                                    </div>

                                    <div class="product-expand__info-list__info">
                                        <div class="product-expand__info-list__img">
                                            <img :src="`../images/product/cream-on-mask/img-expand-list1.png`" alt="안쪽 진정 농축 크림 코팅">
                                        </div>
                                        <div class="product-expand__info-list__txt">
                                            <dl>
                                                <dt>
                                                    안쪽 ‘진정 농축 크림 코팅’
                                                </dt>
                                                <dd>
                                                    피부 진정 성분과 쿨링 성분이<br>
                                                    농축된 크림이 가득
                                                </dd>
                                            </dl>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
        name: "comp-product-expand",
        mixins : [
            MixinContents,
        ],

        data(){
            return{

            }
        },

        props : {
            isList : {
                type : Boolean,
                default : () => false,
            }
        },

        mounted() {

        },

        methods : {
            showMobile(){
                const TL = Timeline({});

                TL.fromTo( ".ampoule-type-tit", {
                    y:50,
                    opacity : 0,
                }, {
                    y:0,
                    opacity : 1,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".ampoule-type-tit",
                        start : "center bottom",
                        end : "center center",
                        scrub : 1,
                        // markers : true,
                    }
                });

                TL.fromTo( ".ampoule-type-product", {
                    y:-70,
                }, {
                    y:0,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".ampoule-type-product_img",
                        start : "start bottom",
                        end : "bottom top",
                        scrub : 1,
                    }
                });

                if( this.isList ){
                    const list = this.$el.querySelectorAll( ".product-expand__list li" );

                    list.forEach(( $item ) => {
                        let img = $item.querySelector( ".product-expand__info-list__img img" );
                        let txt = $item.querySelector( ".product-expand__info-list__txt" );

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
                    });
                }
            },

            setScrollTrigger(){
                if( isMobile ) {
                    this.showMobile();
                    return;
                }

                const TL = Timeline({});
                const innerWrap = this.$el.querySelector( ".inner-wrap" );

                if( this.isList ){
                    const list = this.$el.querySelectorAll( ".product-expand__list li" );

                    const lineH = [ 238, 95 ];
                    const posY = [ 100, 50 ];

                    list.forEach(( $item, $index ) => {
                        let info = $item.querySelector( ".product-expand__info-list__info" );
                        let img = $item.querySelector( ".product-expand__info-list__img img" );
                        let txt = $item.querySelector( ".product-expand__info-list__txt" );
                        let line = $item.querySelector( ".product-expand__point-line span" );

                        TL.fromTo( info, {
                            y: posY[ $index ],
                        }, {
                            y:0,
                            ease:Cubic.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                scrub : 1,
                                start : "top bottom",
                                end : "top center",
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
                        });

                        TL.fromTo( line, {
                            height : 0,
                        }, {
                            height : lineH[ $index ],
                            ease:Cubic.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : $item,
                                scrub : 1,
                                start : "top bottom",
                                end : "top center",
                            }
                        });
                    });
                }

                TL.fromTo( ".ampoule-type-tit", {
                    y:50,
                    opacity : 0,
                }, {
                    y:0,
                    opacity : 1,
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : this.$el,
                        // start : () => this.$getPos_tbTobb( innerWrap, 0.3 ),
                        // end : () => this.$getPos_tbTobb( this.$el, 0.6 ),
                        start : "30% bottom",
                        end : "60% bottom",
                        scrub : true,
                    }
                });

                TL.fromTo( ".ampoule-type-product", {
                    y : 200,
                }, {
                    y: 0,
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-expand .inner-wrap",
                        // start : () => this.$getPos_tbTobb( this.$el, 0 ),
                        // end : () => this.$getPos_tbTobb( innerWrap, 1 ),
                        start : "top bottom",
                        end : "bottom bottom",
                        scrub : true,
                    }
                });
            }
        }
    }

</script>

<style scoped lang="scss">
    .wrap{
        /*padding-bottom: 440px;*/
        padding: 400px 0 400px 0;
        position: relative;
        background-color: #fff;
        z-index: 2;
        .inner-wrap{
            width: $stage-min-width;
            margin: 0 auto;
            .contents{
                position: relative;
                display: flex;
                flex-direction: column;
                width: $stage-contents-width;
                margin: 0 auto;
                .ampoule-type {

                    /*padding: 400px 0 440px 0;*/
                    /*padding-bottom: 440px;*/
                    .ampoule-type-tit {
                        display: flex;
                        margin-bottom: 80px;
                        position: relative;
                        z-index: 1;

                        h2 {
                            width: 347px;
                            font-size: $font-size-m-3xl;
                            line-height: 46px;
                            font-weight: 700;
                            font-family: $font-family-kr;
                        }

                        p {
                            font-size: $font-size-lg;
                            line-height: 30px;
                            font-weight: 300;
                            font-family: $font-family-kr;
                        }
                    }

                    .ampoule-type-product {
                        .ampoule-type-product_img {
                            text-align: center;
                            img{
                                width: 762px;
                            }
                        }

                        .product-expand__list{
                            width: 762px;
                            margin: 0 auto;
                            ul{
                                margin-top: -215px;
                                display: flex;
                                justify-content: space-between;

                                li{
                                    position: relative;
                                    .product-expand__point{
                                        margin-bottom: 45px;
                                        .product-expand__point-circle{
                                            font-size: 0;
                                            text-align: center;
                                            span{
                                                width: 11px;
                                                height: 11px;
                                                background-color: $color-set-green;
                                                display: inline-block;
                                                border-radius: 100%;

                                                -webkit-backface-visibility: hidden;
                                                -moz-backface-visibility: hidden;
                                                -webkit-transform: translate3d(0, 0, 0);
                                                -moz-transform: translate3d(0, 0, 0);
                                            }
                                        }

                                        .product-expand__point-line{
                                            text-align: center;
                                            font-size: 0;
                                            span{
                                                display: inline-block;
                                                width: 1px;
                                                height: 238px;
                                                background-color: $color-set-green;
                                            }
                                        }
                                    }

                                    &:last-child{
                                        padding-top: 143px;
                                        .product-expand__point{
                                            product-expand__point-circle{
                                                span{}
                                            }

                                            .product-expand__point-line{
                                                span{
                                                    height: 95px;
                                                }
                                            }
                                        }
                                    }

                                    .product-expand__info-list__img{
                                        width: 292px;
                                        margin-bottom: 43px;
                                        overflow: hidden;
                                        border-radius: 100%;
                                        font-size: 0;

                                        -webkit-backface-visibility: hidden;
                                        -moz-backface-visibility: hidden;
                                        -webkit-transform: translate3d(0, 0, 0);
                                        -moz-transform: translate3d(0, 0, 0);

                                        &.orange{
                                            border: 2px solid #FEC199;
                                        }

                                        img{ width: 100%; }
                                    }

                                    .product-expand__info-list__txt{
                                        dl{
                                            font-size: $font-size-s;
                                            line-height: 25px;
                                            font-family: $font-family-kr;
                                            dt{
                                                color: $color-set-green;
                                                font-weight: 700;
                                            }

                                            dd{
                                                /*font-size: $h6-font-size;*/
                                                font-weight: 400;
                                                line-height: 25px;
                                            }
                                        }
                                    }
                                }
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

    .tablet {
        .wrap {
            padding-bottom: 100px;
        }
    }

    .mobile{
        .wrap{
            padding: 80px 0px 100px 0;
            .inner-wrap{
                width: 100%;
                padding: 0 30px;
                box-sizing: border-box;
                .contents{
                    width: 100%;
                    .ampoule-type {
                        .ampoule-type-tit {
                            flex-direction: column;
                            margin-bottom: 80px;

                                h2 {
                                width: 100%;
                                margin-right: 0;
                                margin-bottom: 24px;
                                line-height: 30px;
                                font-size: $font-size-m-lg;
                            }

                            p {
                                font-size: $font-size-xs;
                                line-height: 24px;
                                word-break: keep-all;
                                br{
                                    display: none;
                                }
                            }
                        }

                        .ampoule-type-product {

                            .ampoule-type-product_img {
                                /*margin-bottom: 110px;*/
                                img{
                                    width: 275px;
                                }
                            }
                        }

                        .product-expand__list{
                            //display: none;
                            width: 100%;
                            margin-top: 110px;
                            ul{
                                margin-top: 0;
                                display: block;
                                li{
                                    width: 100%;
                                    margin-bottom: 53px;
                                    .product-expand__point{
                                        display: none;
                                    }

                                    .product-expand__info-list__img{
                                        width: 200px;
                                        height: 200px;
                                        margin: 0 auto;
                                        margin-bottom: 24px;
                                        img{
                                            width: 100%;
                                        }
                                    }

                                    .product-expand__info-list__txt{
                                        width: 100%;
                                        text-align: center;
                                    }

                                    &:last-child{
                                        padding-top: 0;
                                        margin-bottom: 0px;
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
                    .ampoule-type {
                        .ampoule-type-tit {
                            h2 {
                                font-size: $font-size-m-2xl;
                            }

                            p {
                            }
                        }

                        .ampoule-type-product {
                            .ampoule-type-product_img {
                                img{
                                }
                            }

                            .product-expand__list{
                                ul{
                                    li{
                                        .product-expand__point{
                                            .product-expand__point-circle{
                                                span{
                                                }
                                            }

                                            .product-expand__point-line{
                                                span{
                                                }
                                            }
                                        }

                                        &:last-child{
                                            .product-expand__point{
                                                product-expand__point-circle{
                                                    span{}
                                                }

                                                .product-expand__point-line{
                                                    span{
                                                    }
                                                }
                                            }
                                        }

                                        .product-expand__info-list__img{
                                            &.orange{
                                            }

                                            img{
                                            }
                                        }

                                        .product-expand__info-list__txt{
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

                    & img {
                    }
                }
            }
        }
    }

    .windows{
        .wrap{
            .inner-wrap{
                .contents{
                    .ampoule-type {
                        .ampoule-type-tit {
                            h2 {
                                font-size: 31px;
                            }

                            p {
                            }
                        }

                        .ampoule-type-product {
                            .ampoule-type-product_img {
                                img{
                                }
                            }

                            .product-expand__list{
                                ul{
                                    li{
                                        .product-expand__point{
                                            .product-expand__point-circle{
                                                span{
                                                }
                                            }

                                            .product-expand__point-line{
                                                span{
                                                }
                                            }
                                        }

                                        &:last-child{
                                            .product-expand__point{
                                                product-expand__point-circle{
                                                    span{}
                                                }

                                                .product-expand__point-line{
                                                    span{
                                                    }
                                                }
                                            }
                                        }

                                        .product-expand__info-list__img{
                                            &.orange{
                                            }

                                            img{
                                            }
                                        }

                                        .product-expand__info-list__txt{
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

                    & img {
                    }
                }
            }
        }
    }
</style>
<template>
    <section class="wrap product-ingredient">
        <div class="inner-wrap">
            <div class="contents">
                <div class="ingredient-container">
                    <div class="ingredient-container__bx">
                        <div class="ingredient-container__trigger">
                            <div class="ingredient-info">
                                <dl>
                                    <dt>
                                        내 피부를 케어해주는<br>
                                        촉촉 보습막<br>
                                        식물 유래 보습 성분
                                    </dt>
                                    <dd>
                                        각종 식물 유래 보습 성분들이 함유되어<br>
                                        건조해지고 메마른 피부 보습에 도움을 줍니다.
                                    </dd>
                                </dl>

                                <div class="ingredient-info__important">
                                    <span>
                                        상기 내용은 원료적 특성에 한함
                                    </span>
                                </div>
                            </div>

                            <div class="ingredient-list">
                                <ul>
                                    <li>
                                        <div class="ingredient-list__info">
                                            <div class="ingredient-list__img">
                                                <img :src="`../images/product/ampoule/img-product-ingredient5.png`" alt="캐모마일 꽃 추출물">
                                            </div>
                                            <div class="ingredient-list__title">
                                                자작나무<br class="pc-br">수액

                                                <div class="ingredient-list__eng ingredient-list__eng-sub">
                                                    Betula Platyphylla<br>
                                                    Japonica Juice
                                                </div>
                                            </div>

                                        </div>

                                        <div class="ingredient-list__eng">
                                            Betula Platyphylla<br>
                                            Japonica Juice
                                        </div>
                                    </li>
                                    <li>
                                        <div class="ingredient-list__info">
                                            <div class="ingredient-list__img">
                                                <img :src="`../images/product/ampoule/img-product-ingredient3.png`" alt="호호바씨 오일">
                                            </div>
                                            <div class="ingredient-list__title">
                                                호호바씨<br class="pc-br">
                                                오일

                                                <div class="ingredient-list__eng ingredient-list__eng-sub">
                                                    Simmondsia Chinensis<br>
                                                    (Jojoba) Seed Oil
                                                </div>
                                            </div>

                                        </div>

                                        <div class="ingredient-list__eng">
                                            Simmondsia Chinensis<br>
                                            (Jojoba) Seed Oil
                                        </div>
                                    </li>
                                    <li>
                                        <div class="ingredient-list__info">
                                            <div class="ingredient-list__img">
                                                <img :src="`../images/product/ampoule/img-product-ingredient1.png`" alt="스위트 아몬드 오일">
                                            </div>
                                            <div class="ingredient-list__title">
                                                스위트아몬드<br class="pc-br">
                                                오일

                                                <div class="ingredient-list__eng ingredient-list__eng-sub">
                                                    Prunus Amygdalus Dulcis<br>
                                                    (Sweet Almond) Oil
                                                </div>
                                            </div>

                                        </div>

                                        <div class="ingredient-list__eng">
                                            Prunus Amygdalus Dulcis<br>
                                            (Sweet Almond) Oil
                                        </div>
                                    </li>
                                    <li>
                                        <div class="ingredient-list__info">
                                            <div class="ingredient-list__img">
                                                <img :src="`../images/product/ampoule/img-product-ingredient2.png`" alt="포도씨 오일">
                                            </div>
                                            <div class="ingredient-list__title">
                                                포도씨<br class="pc-br">
                                                오일

                                                <div class="ingredient-list__eng ingredient-list__eng-sub">
                                                    Vitis Vinifera (Grape)<br>
                                                    Seed Oil
                                                </div>
                                            </div>

                                        </div>

                                        <div class="ingredient-list__eng">
                                            Vitis Vinifera (Grape)<br>
                                            Seed Oil
                                        </div>
                                    </li>
                                    <li>
                                        <div class="ingredient-list__info">
                                            <div class="ingredient-list__img">
                                                <img :src="`../images/product/ampoule/img-product-ingredient0.png`" alt="캐모마일 꽃 추출물">
                                            </div>
                                            <div class="ingredient-list__title">
                                                캐모마일꽃<br class="pc-br">추출물

                                                <div class="ingredient-list__eng ingredient-list__eng-sub">
                                                    Anthemis Nobilis<br>
                                                    Flower Extract
                                                </div>
                                            </div>

                                        </div>

                                        <div class="ingredient-list__eng">
                                            Anthemis Nobilis<br>
                                            Flower Extract
                                        </div>
                                    </li>
                                    <li>
                                        <div class="ingredient-list__info">
                                            <div class="ingredient-list__img">
                                                <img :src="`../images/product/ampoule/img-product-ingredient4.png`" alt="들깨 추출물">
                                            </div>
                                            <div class="ingredient-list__title">
                                                들깨<br class="pc-br">
                                                추출물

                                                <div class="ingredient-list__eng ingredient-list__eng-sub">
                                                    Perilla Ocymoides<br>
                                                    Seed Extract
                                                </div>
                                            </div>
                                        </div>

                                        <div class="ingredient-list__eng">
                                            Perilla Ocymoides<br>
                                            Seed Extract
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="ingredient-line">
                            <span></span>
                        </div>
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
        name: "comp-product-ingredient",
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
            showMobile(){
                const TL = Timeline({});

                const listContainer = this.$el.querySelector( ".ingredient-list" );
                const list = listContainer.querySelectorAll( "li" );

                list.forEach(( $item ) => {

                    let text = $item.querySelector( ".ingredient-list__title" );
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
                })
            },

            setScrollTrigger(){
                if( isMobile ){
                    this.showMobile();
                    return;
                }

                const contents = this.$el.querySelector( ".contents" );
                const TL = Timeline({});

                let listH = this.$el.querySelectorAll(".ingredient-list ul li").length;
                listH = 246 * (listH-1);

                TL.fromTo( ".product-ingredient .ingredient-list",
                    { y: 0 },
                    {
                        y: -listH + 0,
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : contents,
                            start : () => this.$getPos_ttTobb( contents, 0 ),
                            end : () => this.$getPos_ttTobb( contents, 1 ),
                            // start : "top top",
                            // end : "bottom bottom",
                            scrub : true,
                        }
                    }
                )

                TL.fromTo( ".product-ingredient .ingredient-list ul li",
                    { y:300},
                    {
                        ease:Power2.easeInOut,
                        y:0,
                        stagger:0.1,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : contents,
                            // start : () => this.$getPos_tbTobb( contents, 0 ),
                            // end : () => this.$getPos_tbTobb( contents, 1 ),
                            start : "top bottom",
                            end : "bottom bottom",
                            scrub : true,
                        }
                    },
                )


                TL.fromTo( ".product-ingredient .ingredient-list ul li .ingredient-list__img img",
                    { scale:1 },
                    {
                        ease:Power2.easeInOut,
                        scale:1,
                        stagger:0.1,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : contents,
                            // start : () => this.$getPos_tbTobb( contents, 0 ),
                            // end : () => this.$getPos_tbTobb( contents, 1.2 ),
                            start : "top bottom",
                            end : "bottom top",
                            scrub : true,
                        }
                    },
                )

                TL.fromTo( ".product-ingredient .ingredient-list ul li .ingredient-list__title",
                    { y:100, opacity:0},
                    {
                        ease:Power2.easeInOut,
                        y:0, opacity:1,
                        stagger:0.1,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : contents,
                            // start : () => this.$getPos_tbTobb( contents, 0 ),
                            // end : () => this.$getPos_tbTobb( contents, 1 ),
                            start : "top bottom",
                            end : "bottom bottom",
                            scrub : true,
                        }
                    },
                )

                // TL.fromTo( ".product-ingredient .ingredient-info",
                //     { y: 0 },
                //     {
                //         y: 0,
                //         ease:Power2.easeInOut,
                //         scrollTrigger : {
                //             scroller : this.stWrapper,
                //             trigger : ".product-ingredient .contents",
                //             start : () => this.$getPos_ttTobb( contents, 0.1 ),
                //             end : () => this.$getPos_ttTobb( contents, 0.4 ),
                //             scrub : true,
                //         }
                //     }
                // )

                // line
                const containerBx = this.$el.querySelector( ".ingredient-container__bx" );
                TL.fromTo( ".product-ingredient .ingredient-line",
                    { width: "0%" },
                    {
                        width: "100%",
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : containerBx,
                            // start : () => this.$getPos_tbTobb( containerBx, 1 ),
                            // end : () => this.$getPos_tbTobb( containerBx, 3 ),
                            start : "top bottom",
                            end : "bottom center",
                            scrub : true,
                        }
                    }
                )

                ScTrigger.create({
                    scroller : this.stWrapper,
                    animation : TL,
                    trigger : ".product-ingredient .contents",
                    // start : () => this.$getPos_ttTobb( contents, 0 ),
                    // end : () => this.$getPos_ttTobb( contents, 1 ),
                    start : "top top",
                    end : "bottom bottom",
                    scrub : true,
                    pin : ".ingredient-container",
                    pinSpacing : false,
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrap{
        position: relative;
        z-index: 100;
        background-color: #fff;
        .inner-wrap{
            width: $stage-min-width;
            margin: 0 auto;
            .contents{
                width: $stage-contents-width;
                margin: 0 auto;
                height: 200vh;

                .ingredient-container{
                    position: relative;
                    width: 100%;
                    height: 100vh;

                    .ingredient-container__bx{
                        position: relative;
                        top: 50%;
                        transform: translate3d( 0, -100%, 0 );

                        .ingredient-container__trigger{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            position: relative;
                            margin-bottom: 50px;

                            .ingredient-info{
                                padding-top: 51px;
                                dl{
                                    margin-bottom: 16px;
                                    dt{
                                        margin-bottom: 18px;
                                        font-size: $font-size-m-3xl;
                                        line-height: 46px;
                                        font-weight: 700;
                                        font-family: $font-family-kr;
                                    }

                                    dd{
                                        font-size: $font-size-me;
                                        line-height: 28px;
                                        font-family: $font-family-kr;
                                        font-weight: 300;
                                    }
                                }

                                .ingredient-info__important{
                                    span{
                                        display: inline-block;
                                        border: 1px solid #979797;
                                        font-size: 11px;
                                        padding: 8px 9px 4px;
                                    }
                                }
                            }

                            .ingredient-list{
                                margin-top: 260px;
                                /*width: 730px;*/
                                width: calc(50% + 206px);
                                position: relative;
                                ul{
                                    width: 100%;
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    li{
                                        position: relative;
                                        width: 100%;
                                        margin-bottom: 40px;
                                        display: flex;
                                        justify-content: space-between;
                                        align-items: center;
                                        .ingredient-list__info{
                                            display: flex;
                                            justify-content: flex-start;
                                            align-items: center;

                                            .ingredient-list__img{
                                                width: 204px;
                                                height: 204px;
                                                border: 1px solid #979797;
                                                border-radius: 100%;
                                                margin-right: 30px;
                                                img{
                                                    width: 100%;
                                                }
                                            }

                                            .ingredient-list__title{
                                                font-size: $font-size-lg;
                                                font-weight: 400;
                                                line-height: 30px;
                                                font-family: $font-family-kr;
                                            }
                                        }

                                        .ingredient-list__eng{
                                            font-size: $font-size-xs;
                                            font-family: $font-family-sans-serif;
                                            line-height: 22px;
                                            text-align: right;

                                            &.ingredient-list__eng-sub{
                                                display: none;
                                            }
                                        }

                                        &:last-child{
                                            margin-bottom: 0;
                                        }
                                    }
                                }
                            }
                        }

                        .ingredient-line{
                            position: relative;
                            z-index: 3;
                            width: 100%;
                            span{
                                display: block;
                                width: 100%;
                                height: 1px;
                                background-color: rgba( 0, 0, 0, 0.3 );
                            }
                        }
                    }
                }
            }
        }
    }

    .mobile {
        .wrap{
            padding: 0;
            .inner-wrap{
                width: 100%;
                padding: 0 30px;
                box-sizing: border-box;
                .contents{
                    width: 100%;
                    height: auto;

                    .ingredient-container{
                        position: relative;
                        width: 100%;
                        height: auto;

                        .ingredient-container__bx{
                            position: static;
                            top: 50%;
                            transform: none;

                            .ingredient-container__trigger{
                                flex-direction: column;
                                margin-bottom: 96px;

                                .ingredient-info{
                                    padding-top: 80px;
                                    margin-bottom: 50px;
                                    dl{
                                        margin-bottom: 40px;
                                        dt{
                                            font-size: $font-size-m-lg;
                                            line-height: 30px;
                                        }

                                        dd{
                                            font-size: $font-size-s;
                                            line-height: 20px;
                                        }
                                    }

                                    .ingredient-info__important{
                                        display: inline-block;
                                        position: relative;
                                        top: 0;
                                        left: 149px;
                                    }
                                }

                                .ingredient-list{
                                    width: 100%;
                                    margin-top: 0;
                                    ul{
                                        position: static;
                                        li{
                                            margin-bottom: 20px;
                                            display: flex;
                                            justify-content: space-between;
                                            align-items: center;
                                            .ingredient-list__info{
                                                display: flex;
                                                justify-content: flex-start;
                                                align-items: center;


                                                .ingredient-list__img{
                                                    flex-shrink: 0;
                                                    width: 130px;
                                                    height: 130px;
                                                    margin-right: 18px;
                                                }

                                                .ingredient-list__title{
                                                    font-size: $font-size-xs;
                                                    line-height: 17px;


                                                    .ingredient-list__eng{
                                                        display: block;
                                                        margin-top: 8px;
                                                        text-align: left;
                                                    }
                                                }
                                            }

                                            .ingredient-list__eng{
                                                display: none;
                                            }

                                            &:last-child{
                                                margin-bottom: 0;
                                            }
                                        }
                                    }
                                }
                            }

                            .ingredient-line{
                                position: relative;
                                z-index: 3;
                                width: 100%;
                                span{
                                    display: block;
                                    width: 100%;
                                    height: 1px;
                                    background-color: rgba( 0, 0, 0, 0.3 );
                                }
                            }
                        }
                    }
                }
            }
        }
    }


    .ie, .tablet{
        .inner-wrap{
            padding-top: 150px;
            padding-bottom: 150px;
            .contents{
                height: auto;
                .ingredient-container{
                    height: auto;
                    .ingredient-container__bx{
                        top: 0;
                        transform: translate3d( 0, 0, 0 );
                        .ingredient-container__trigger{
                            .ingredient-info{
                                padding-top: 0px;
                                dl{
                                    dt{
                                    }

                                    dd{
                                    }
                                }
                            }

                            .ingredient-list{
                                margin-top: 0px;
                                ul{
                                    position: relative;
                                    li{
                                        .ingredient-list__info{
                                            .ingredient-list__img{
                                                img{
                                                }
                                            }

                                            .ingredient-list__title{
                                            }
                                        }

                                        .ingredient-list__eng{
                                            &.ingredient-list__eng-sub{
                                            }
                                        }

                                        &:last-child{
                                        }
                                    }
                                }
                            }
                        }

                        .ingredient-line{
                            position: absolute;
                            top: 300px;
                            left: 0px;
                            width: 310px;
                            span{
                            }
                        }
                    }
                }
            }
        }
    }

</style>
<template>
    <section class="wrap product-d">
        <div class="product-description__container">
            <div class="bg-color"></div>

            <div class="inner-wrap">
                <div class="contents">
                    <div class="product-description-bx" :style="bxStyle">
                        <div class="product-description">
                            <dl>
                                <dt>
                                    <slot name="title"></slot>
                                </dt>
                                <dd v-if="views.isEffect">
                                    <ul>
                                        <li>주름개선</li>
                                        <li>미백</li>
                                        <li>2중 기능성</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>

                        <div class="product-description__view">
                            <slot name="view-img"></slot>
                        </div>

                        <div class="product-description__list">
                            <ul>
                                <slot name="description-list"></slot>
                            </ul>
                        </div>
                    </div>

                    <div v-if="views.isReply" class="product-reply">
                        <h2>
                            <slot name="description-reply-title">
                                직접 만든 이들이 경험한<br>
                                하이드라시카 앰플
                            </slot>
                        </h2>

                        <ul>
                            <slot name="description-reply"></slot>
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
        name: "comp-product-description",
        mixins : [
            MixinContents
        ],
        data(){
            return{
                bxStyle : {
                    paddingBottom : null
                }
            }
        },

        props : {
            views : Object,
        },

        mounted() {
            if( !this.views.isReply ){
                if( !isMobile ){
                    this.bxStyle.paddingBottom = "150px";
                }
            }
        },

        methods : {
            showMobile(){
                const TL = Timeline({});
                TL.fromTo( ".product-d .product-description dl", {
                    y:0,
                    opacity : 0,
                }, {
                    y:0,
                    opacity: 1,
                    ease:Linear.easeNone,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-d .product-description",
                        start : "center bottom",
                        end : "center center",
                        scrub : true,
                    }
                });

                TL.fromTo( ".product-d .product-description__view img", {
                    y : -40,
                }, {
                    y:10,
                    ease:Cubic.easeOut,
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : ".product-d .product-description__view",
                        start : "top bottom",
                        end : "bottom top",
                        scrub : true,
                    }
                });

                const list = this.$el.querySelector( ".product-description__list" ).querySelectorAll( "li" );
                list.forEach(( $item ) => {
                    TL.fromTo( $item, {
                        y:50,
                        opacity:0,
                    }, {
                        y:0,
                        opacity:1,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : $item,
                            start : "center bottom",
                            end : "center 75%",
                            scrub : 1,
                        }
                    })
                });

                const replyList = this.$el.querySelectorAll( ".product-reply li" );
                replyList.forEach(( $item ) => {
                    TL.fromTo( $item, {
                        y:50,
                        opacity:0,
                    }, {
                        y:0,
                        opacity:1,
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : $item,
                            start : "center bottom",
                            end : "center 75%",
                            scrub : 1,
                        }
                    })
                })
            },

            setScrollTrigger(){
                if( isMobile ){
                    this.showMobile();
                    return;
                }

                const contents = this.$el.querySelector( ".contents" );
                const descriptionBx = this.$el.querySelector( ".product-description-bx" );
                const replyBx = this.$el.querySelector( ".product-reply" );
                const TL = Timeline({});

                // TL.fromTo( ".product-d .container",
                //     {
                //         y:0
                //     },
                //     {
                //         y:"0vh", ease:Linear.easeNone,
                //         scrollTrigger : {
                //             scroller : this.stWrapper,
                //             trigger : ".product-d",
                //             start : () => this.$getPos_tbTobb( this.$el, 0 ),
                //             end : () => this.$getPos_tbTobb( descriptionBx, 1 ),
                //             scrub : true,
                //         }
                //     }
                // );

                TL.fromTo( ".product-d .product-description__view",
                    {
                        y:0, scale:0.9
                    },
                    {
                        y:0, scale:1, ease:Power3.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-d .contents",
                            start : "top bottom",
                            end : "bottom bottom",
                            scrub : 1,
                        }
                    }
                );


                TL.fromTo( ".product-d .product-description",
                    {
                        y:50, opacity:0,
                    },
                    {
                        y:-50, opacity:1,
                        ease:Power1.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : descriptionBx,
                            // start : () => this.$getPos_tbTobb( descriptionBx, 0.3 ),
                            // end : () => this.$getPos_tbTobt( descriptionBx, 0.5 ),
                            start : "top bottom",
                            end : "center center",
                            scrub : 0.5,
                        }
                    }
                );

                TL.fromTo( ".product-d .product-description__list",
                    {
                        y:50, opacity:0,
                    },
                    {
                        y:-50, opacity:1,
                        ease:Power1.easeOut,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : descriptionBx,
                            start : "top bottom",
                            end : "center center",
                            scrub : 0.5,
                        }
                    }
                );

                // img + bg y move
                TL.fromTo( ".product-d .product-description__view img",
                    {
                        y:-100
                    },
                    {
                        y:100, scale:1, ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : descriptionBx,
                            start : "top bottom",
                            end : "bottom top",
                            scrub : true,
                        }
                    }
                );

                TL.fromTo( ".product-d .bg-color",
                    {
                        y:-50
                    },
                    {
                        y:50, scale:1, ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : descriptionBx,
                            // start : () => this.$getPos_tbTobb( descriptionBx, 0 ),
                            // end : () => this.$getPos_tbTobt( descriptionBx, 1 ),
                            start : "top bottom",
                            end : "bottom top",
                            scrub : true,
                        }
                    }
                );

                if( this.views.isReply ){
                    TL.fromTo( ".product-d .product-reply h2",
                        {
                            y:100,
                            opacity:0,
                        },
                        {
                            y:0,
                            opacity:1,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                // start : () => this.$getPos_tbTobb( replyBx, 0.5 ),
                                // end : () => this.$getPos_tbTobt( replyBx, 0.7 ),
                                trigger : ".product-d .product-reply",
                                start : "top bottom",
                                end : "300% bottom",
                                scrub : true,
                            }
                        }
                    );

                    let replyList = this.$el.querySelector( ".product-reply" ).querySelectorAll( "li" );
                    TL.fromTo( replyList[ 0 ],
                        {
                            y:150,
                            opacity:0,
                        },
                        {
                            y:0,
                            opacity:1,
                            ease:Power1.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : ".product-d .product-reply",
                                start : "10% bottom",
                                end : "300% bottom",
                                scrub : true,
                            }
                        }
                    );

                    TL.fromTo( replyList[ 1 ],
                        {
                            y:150,
                            opacity:0,
                        },
                        {
                            y:0,
                            opacity:1,
                            ease:Power1.easeOut,
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : ".product-d .product-reply",
                                start : "10% bottom",
                                end : "300% bottom",
                                scrub : true,
                            }
                        }
                    );
                }
            }
        }
    }
</script>

<style scoped lang="scss">

    .wrap{
        padding-top: 280px;
        position: relative;
        overflow: hidden;
        .product-description__container{
            position: relative;
            z-index: 1;
            .inner-wrap{
                width: $stage-min-width;
                margin: 0 auto;

                .contents{
                    width: $stage-contents-width;
                    margin: 0 auto;
                    position: relative;
                    /*padding-bottom: 150vh; // scTrigger value*/

                    .product-description-bx{
                        display: flex;
                        justify-content: space-between;
                        box-sizing: border-box;
                        position: relative;
                        /*margin-bottom: 250px;*/
                        padding-bottom: 250px;
                        .product-description{
                            width: 370px;
                            margin-top: 57px;
                            dl{
                                dt{
                                    margin-bottom: 55px;
                                    font-size: $h2-font-size;
                                    font-family: $font-family-kr;
                                    font-weight: 700;
                                    line-height: 42px;
                                    span{
                                        color: $color-set-green;
                                        font-size: $h2-font-size;
                                        font-family: $font-family-kr;
                                        font-weight: 700;
                                        line-height: 42px;
                                    }
                                }

                                dd{
                                    ul{
                                        display: flex;
                                        li{
                                            padding: 13px 14px 6px;
                                            border: 1px solid rgba( 0, 0, 0, 0.2 );
                                            border-right: none;
                                            line-height: 19px;
                                            font-weight: 600;
                                            font-size: $h6-font-size;

                                            &:first-child{
                                                border-right: none;
                                            }

                                            &:last-child{
                                                border-right: 1px solid rgba( 0, 0, 0, 0.2 );
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .product-description__view{
                            width: 459px;
                            position: relative;
                            .view-text{
                                font-size: 0;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 388px;
                                text-align: center;

                                span{
                                    font-family: $font-family-sans-serif_thin;
                                    font-size: 27px;
                                }
                            }

                            img{
                                width: 100%;
                            }
                        }

                        .product-description__list{
                            width: 370px;
                            margin-top: 53px;
                            padding-left: 66px;
                            box-sizing: border-box;
                            ul{
                                li{
                                    margin-bottom: 37px;
                                    &:last-child{ margin-bottom: 0px; }
                                }
                            }
                        }
                    }

                    .product-reply{
                        margin-bottom: 250px;
                        h2{
                            margin-bottom: 45px;
                            font-size: $h2-font-size;
                            font-weight: 700;
                            line-height: 42px;
                            font-family: $font-family-kr;
                        }

                        ul{
                            display: flex;
                            justify-content: flex-start;
                            li{
                                margin-right: 125px;

                                &:last-child{ margin-right: 0; }
                            }
                        }
                    }

                }
            }
        }

        .bg-color{
            z-index: 0;
            position: absolute;
            left: 0;
            top: 175px;
            width: 100%;
            height: 100%;
            background-color: $color-set-gray;
        }
    }

    .mobile {
        .wrap{
            background-color: #fff;
            padding-top: 63px;
            .product-description__container{
                min-height: auto;
                .inner-wrap{
                    width: 100%;
                    padding: 0 30px;
                    box-sizing: border-box;
                    .contents{
                        width: 100%;
                        padding-bottom: 0;
                        .product-description-bx{
                            flex-direction: column;
                            padding-bottom: 100px;

                            .product-description{
                                width: 100%;
                                margin-top: 0;
                                dl{
                                    dt{
                                        //margin-bottom: 40px;
                                        font-size: $font-size-m-lg;
                                        font-weight: 700;
                                        line-height: 30px;
                                        span{
                                            font-size: $font-size-m-lg;
                                            color: $color-set-green;
                                            line-height: 30px;
                                            font-weight: 700;
                                        }

                                        margin-bottom: 30px;
                                    }

                                    dd{
                                        ul{
                                            /*display: none;*/
                                        }
                                    }

                                    dd{
                                        ul{
                                            li{
                                                padding: 10px 14px 7px;
                                                line-height: 19px;
                                                font-size: $font-size-m-s;
                                            }
                                        }
                                        margin-bottom: 60px;
                                    }
                                }
                            }

                            .product-description__view{
                                width: 100%;
                                position: relative;
                                padding: 0 20px;
                                box-sizing: border-box;
                                .view-text{
                                    display: none;
                                }

                                img{
                                    width: 100%;
                                }
                            }

                            .product-description__list{
                                width: 100%;
                                margin-top: 30px;
                                padding-left: 0;
                                ul{
                                    li{
                                        margin-bottom: 34px;
                                        &:last-child{ margin-bottom: 0px; }
                                    }
                                }
                            }
                        }

                        .product-reply{
                            margin-bottom: 124px;
                            h2{
                                margin-bottom: 30px;
                                line-height: 30px;
                                font-size: $font-size-m-lg;
                            }

                            ul{
                                flex-direction: column;
                                li{
                                    margin-right: 0;
                                    &:last-child{
                                        margin-right: 0;
                                    }
                                }
                            }
                        }

                    }
                }
            }

            .bg-color{
                z-index: 0;
                position: absolute;
                left: 0;
                top: 390px;
                width: 100%;
                height: 100%;
                background-color: $color-set-gray;
            }
        }
    }

    .ie{
        .wrap{
            .product-description__container{
                .inner-wrap{
                    .contents{
                        .product-description-bx{
                            .product-description{
                                dl{
                                    dt{
                                        font-size: $h3-font-size;
                                        span{
                                        }
                                    }

                                    dd{
                                        ul{
                                            li{
                                                &:first-child{
                                                }

                                                &:last-child{
                                                }
                                            }
                                        }
                                    }
                                }
                            }

                            .product-description__view{
                                .view-text{
                                    span{
                                    }
                                }

                                img{
                                }
                            }

                            .product-description__list{
                                ul{
                                    li{
                                        &:last-child{

                                        }
                                    }
                                }
                            }
                        }

                        .product-reply{
                            h2{
                            }

                            ul{
                                li{
                                    &:last-child{

                                    }
                                }
                            }
                        }
                    }
                }
            }

            .bg-color{
            }
        }
    }

    .windows{
        .wrap{
            .product-description__container{
                .inner-wrap{
                    .contents{
                        .product-description-bx{
                            .product-description{
                                dl{
                                    dt{
                                        font-size: 27px;
                                        line-height: initial;
                                        span{
                                            font-size: 27px;
                                            line-height: initial;
                                        }
                                    }

                                    dd{
                                        ul{
                                            li{
                                                padding-top: 6px;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .product-reply{
                            margin-bottom: 170px;
                        }
                    }
                }
            }
        }
    }

</style>
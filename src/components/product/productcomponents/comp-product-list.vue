<template>
    <section class="wrap comp-product-list">
        <div class="inner-wrap">
            <div class="contents">
                <div class="good-to-share">
                    <div class="share-tit">
                        <span>
                            함께 쓰면 좋은 <br>
                            제품들
                        </span>
                    </div>
                    <div class="share-list">
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
    import {EventBus} from "../../../bus";

    export default {
        name: "comp-product-list",
        mixins : [
            MixinContents
        ],

        mounted() {

        },

        methods : {
            showMobile(){
                const TL = Timeline({});
                const list = this.$el.querySelectorAll( ".share-list li" );


                list.forEach(( $item ) => {
                    let imgProduct = $item.querySelector( ".share-img img" );

                    TL.fromTo( imgProduct, {
                        y: 120,
                    }, {
                        y: 0,
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

                if( isMobile ) {
                    this.showMobile();
                    return;
                }

                const Tl_list = Timeline({});

                Tl_list.fromTo( this.$el, {

                }, {
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : this.$el,
                        start : "top bottom",
                        end : "bottom top",
                        // onLeave:() => {         EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT); },
                        // onLeaveBack:() => {     EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT); },
                        onEnter:() => {         EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT); },
                        onEnterBack:() => {     EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT); }
                    }
                });



                Tl_list.fromTo(
                    '.comp-product-list .share-list li:nth-child(1) div',
                    { y:200, opacity:0},
                    { y:0, opacity:1, stagger:0.01,
                        ease: Power1.easeOut,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".comp-product-list .share-list li",
                            start:"top bottom",
                            end:"bottom 60%"
                        }
                    }
                )

                Tl_list.fromTo(
                    '.comp-product-list .share-list li:nth-child(2) div',
                    { y:200, opacity:0},
                    { y:0, opacity:1, stagger:0.01,
                        ease: Power1.easeOut,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".comp-product-list .share-list li",
                            start:"top bottom",
                            end:"bottom 60%"
                        }
                    }
                )

                Tl_list.fromTo(
                    '.comp-product-list .share-list li:nth-child(3) div',
                    { y:200, opacity:0},
                    { y:0, opacity:1, stagger:0.01,
                        ease: Power1.easeOut,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".comp-product-list .share-list li",
                            start:"top bottom",
                            end:"bottom 60%"
                        }
                    }
                )

                Tl_list.fromTo(
                    '.comp-product-list .share-list li:nth-child(4) div',
                    { y:200, opacity:0},
                    { y:0, opacity:1, stagger:0.01,
                        ease: Power1.easeOut,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".comp-product-list .share-list li",
                            start:"top bottom",
                            end:"bottom 60%"
                        }
                    }
                )

                return;

                const container = this.$el;

                const parent = container.querySelector( ".share-list" );
                const list = parent.getElementsByTagName( "li" );

                Array.prototype.forEach.call( list, ( $item, $index ) => {
                    TL.fromTo( $item, {
                        y:150 + ( 250 ),
                    }, {
                        y:0,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".comp-product-list",
                            start : () => this.$getPos_tbTobt( container, 0 ),
                            end : () => this.$getPos_tbTobb( container, 1 ),
                            scrub : true,
                            // markers : true,
                        }
                    })
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
                .good-to-share {
                    padding: 0 0 360px 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;

                    .share-tit {
                        margin-bottom: 0;
                        span {
                            line-height: 42px;
                            font-size: $font-size-m-3xl;
                            font-weight: 700;
                            font-family: $font-family-kr;
                        }
                    }

                    .share-list {
                        ul {
                            display: flex;
                            flex-flow: row wrap;

                        }
                    }

                    & img {
                        width: 100%;
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
                    .good-to-share {
                        padding: 0 0 140px 0;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;

                        .share-tit {
                            margin-bottom: 40px;
                            span {
                                line-height: 30px;
                                font-size: $font-size-m-lg;
                            }
                        }

                        .share-list {
                            ul {
                                justify-content: space-between;
                                flex-wrap: wrap;
                            }
                        }

                        & img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

</style>
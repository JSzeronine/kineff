<template>
    <section class="wrap product-allergy">
        <div class="inner-wrap">
            <div class="contents">
                <div class="allergy-value">
                    {{this.per}}<span>%</span>
                </div>
                <dl class="allergy-effect">
                    <dt>병풀추출물 함량</dt>
                </dl>
            </div>
        </div>
    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../../mixin/mixin-contents-sctrigger";
    export default {
        name: "comp-product-allergy",
        mixins : [
            MixinContents
        ],

        data(){
            return{
                per:0
            }
        },

        created() {
            if( isIE ){
                this.per = 74.7;
            }
        },

        mounted() {

        },

        methods : {
            showMobile(){
                const TL = Timeline({});

                TL.fromTo( null, {

                }, {
                    scrollTrigger : {
                        scroller : this.stWrapper,
                        trigger : this.$el,
                        scrub : true,
                        start : "center bottom",
                        end : "center center",
                        onUpdate : ( self ) => {
                            if(self.progress > 0.2){
                                this.startPercent()
                            } else {
                                this.resetPercent()
                            }
                        }
                    }
                })
            },

            setScrollTrigger(){
                if( isMobile ){
                    this.showMobile();
                    return;
                }

                const container = this.$el.querySelector( ".inner-wrap" );
                const TL = Timeline({});

                const _this = this;

                // percent move
                TL.fromTo( ".product-allergy .allergy-value",
                    {
                        y: -100,
                        opacity:1,
                    },
                    {
                        y:0,
                        opacity:1,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-allergy .inner-wrap",
                            // start : () => this.$getPos_tbTobt( container, 0 ),
                            // end : () => this.$getPos_tbTobt( container, 1 ),
                            start : "top bottom",
                            end : "top top",
                            scrub : true,
                            onUpdate: self => {
                                // if(self.progress > 0.4) return;
                                // _this.onScrollUpdate(self.progress)
                                // console.log( self.progress );
                            },
                        }
                    }
                );

                // percent Number
                TL.fromTo( ".product-allergy",
                    {
                        opacity:1,
                    },
                    {
                        opacity:1,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-allergy .inner-wrap",
                            // start : () => this.$getPos_tbTobt( container, 0 ),
                            // end : () => this.$getPos_tbTobt( container, 0.4 ),
                            start : "top bottom",
                            end : "center 50%",
                            scrub : true,
                            onUpdate: self => {
                                // _this.onScrollUpdate(self.progress)
                                if(self.progress > 0.2){
                                    _this.startPercent()
                                } else {
                                    _this.resetPercent()
                                }

                            },
                            // markers :true,
                        }
                    }
                );

                TL.fromTo( ".product-allergy .allergy-effect",
                    {
                        y:150,
                        opacity:0
                    },
                    {
                        y:0,
                        opacity:1,
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".product-allergy .inner-wrap",
                            // start : () => this.$getPos_tbTobt( container, 0 ),
                            // end : () => this.$getPos_tbTobt( container, 1 ),
                            start : "50% bottom",
                            end : "bottom bottom",
                            scrub : true,
                            // markers : true
                        }
                    }
                );
            },


            onScrollUpdate(progress) {
                let per = Gsap.utils.mapRange(0, 1, 0, 74.7, progress);
                const perFixed = per.toFixed(1);

                const _this = this;
                Gsap.killTweensOf(this);
                Gsap.to(this, 0.5, {per:per, ease: Power2.easeOut,
                    onUpdate:function(){
                        _this.per = _this.per.toFixed(1);

                    }
                });
            },

            startPercent(){
                const _this = this;
                Gsap.killTweensOf(this);
                Gsap.to(this, 1.5, {per:74.7, ease: Power2.easeOut,
                    onUpdate:function(){
                        if(_this.per)
                            _this.per = _this.per.toFixed(1);
                    }
                });
            },

            resetPercent(){
                const _this = this;
                Gsap.killTweensOf(this);
                Gsap.to(this, 1.5, {per:0, ease: Power2.easeOut,
                    onUpdate:function(){
                        if(_this.per)
                            _this.per = _this.per.toFixed(1);
                    }
                });
            }

        }
    }
</script>

<style scoped lang="scss">

    .wrap{
        position: relative;
        .inner-wrap{
            width: $stage-min-width;
            padding: 250px 0 0;
            margin: 0 auto;

            .contents{
                width: $stage-contents-width;
                position: relative;
                margin: 0 auto;

                .allergy-value{
                    font-size: 310px;
                    font-family: $font-family-sans-serif_light;
                    line-height: 372px;
                    span{
                        display: inline-block;
                        margin-left: 12px;
                        font-size: 140px;
                        line-height: 140px;
                        font-family: $font-family-sans-serif;
                    }
                }

                .allergy-effect{
                    margin-top: -22px;
                    padding-left: 96px;
                    dt{
                        margin-bottom: 24px;
                        font-size: $font-size-lg;
                        font-weight: 700;
                        line-height: 24px;
                    }
                }

            }
        }
    }

    .mobile {
        .wrap{
            position: relative;
            .inner-wrap{
                width: 100%;
                padding: 140px 30px 50px 30px;
                box-sizing: border-box;
                .contents{
                    width: 100%;
                    .allergy-value{
                        padding-left: 0;
                        font-size: 128px;
                        font-family: $font-family-sans-serif;
                        line-height: 154px;
                        text-align: center;
                        span{
                            font-size: $h1-font-size;
                            line-height: 48px;
                            margin-left: 8px;
                        }
                    }

                    .allergy-effect{
                        margin-top: 0;
                        padding-left: 0;
                        dt{
                            font-size: $font-size-xs;
                            font-weight: 700;
                            line-height: 20px;
                            width: 70px;
                        }
                    }

                }
            }
        }
    }

    .ie{
        .wrap{
            .inner-wrap{
                padding-top: 150px;
                .contents{
                    .allergy-value{
                        span{
                        }
                    }

                    .allergy-effect{
                        dt{
                        }

                        dd{
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
        }
    }

</style>


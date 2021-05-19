
<template>
    <section class="about-feature-wrap">
        <div class="confidence-wrap">
            <div class="inner-wrap">
                <div class="about-feature about-feature__step-0">
                    <div class="about-feature__count">
                        <span>effect</span>
                        <p>1</p>
                    </div>
                    <dl>
                        <dt>
                            자신감 회복을<br>
                            위한 효과
                        </dt>
                        <dd>
                            키네프는 전문가답게, 정확하고<br>
                            숙련된 기술을 바탕으로 피부에 대한 자신감을<br>
                            최대한 빠르게 회복시킬 수 있는 솔루션을<br>
                            제공합니다.
                        </dd>
                    </dl>
                </div>

                <div class="confidence-img">
                    <img class="img-pc" :src="`../images/about/confidence-img.jpg`" alt="">
                    <img class="img-mb" :src="`../images/about/m-confidence-img.jpg`" alt="">
                </div>
            </div>
        </div>
        <div class="fast-wrap">
            <div class="inner-wrap">

                <div class="about-feature about-feature__step-1">
                    <div class="about-feature__count">
                        <span>effect</span>
                        <p>2</p>
                    </div>

                    <dl>
                        <dt>
                            빠른<br class="pc-br">
                            일상복귀를<br>
                            위한 효과
                        </dt>
                        <dd>
                            키네프는 순하지만 뛰어난 진정 효과를 가진<br>
                            성분들고 제품을 만들어 트러블 없는 일상으로<br>
                            빠르게 돌아갈 수 있도록 돕습니다.
                        </dd>
                    </dl>
                </div>

                <div class="fast-img">
                    <img class="img-pc" :src="`../images/about/fast-img.jpg`" alt="">
                    <img class="img-mb" :src="`../images/about/m-fast-img.jpg`" alt="">
                </div>
            </div>
        </div>
        <div class="best-wrap">
            <div class="inner-wrap">
                <div class="about-feature about-feature__step-2">
                    <div class="about-feature__count">
                        <span>effect</span>
                        <p>3</p>
                    </div>

                    <dl>
                        <dt>
                            최고의 모습을<br>
                            위한 효과
                        </dt>

                        <dd>
                            <span></span>
                        </dd>
                        <dd>
                            키네프는 당신이 최고의 모습으로 당당하게<br>
                            세상을 만날 수 있도록 모든 제품 하나하나에<br>
                            최선을 담기 위해 노력합니다.
                        </dd>
                    </dl>
                </div>

                <div class="best-img">
                    <img class="img-pc" :src="`../images/about/best-img.jpg`" alt="">
                    <img class="img-mb" :src="`../images/about/m-best-img.jpg`" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";

    export default {
        name: "section-about-feature",
        mixins : [
            MixinContents
        ],

        mounted() {

        },

        methods : {

            setScrollTrigger() {
                const Tl = Timeline();

                let frameY = 20;
                let imgY = 150;

                if( isMobile ) {
                    frameY = 10;
                    imgY = 50;
                }

                // confidence wrap
                Tl.fromTo(
                    '.confidence-wrap .confidence-img',
                    { opacity: 1, y:frameY+"vh" },
                    { opacity:1, y:-frameY+"vh", ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".confidence-wrap .confidence-img",
                            start:"top bottom",
                            end:"bottom top"
                        }}
                )

                Tl.fromTo(
                    '.confidence-wrap .confidence-img img',
                    { opacity: 1, y:-imgY, scale:1.2, transformOrigin: "top left", },
                    { opacity:1, y:imgY, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.8,
                            scroller: this.stWrapper,
                            trigger:".confidence-wrap .confidence-img",
                            start:"top bottom",
                            end:"bottom top"
                        }}
                )

                Tl.fromTo(
                    '.confidence-wrap .about-feature__step-0 .about-feature__count',
                    { opacity: 0},
                    { opacity:1, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".confidence-wrap .confidence-img",
                            start:"top bottom",
                            end:"top 50%"
                        }}
                )

                Tl.fromTo(
                    '.confidence-wrap .about-feature__step-0 dl',
                    { opacity: 0, y:60},
                    { opacity:1, y:0, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".confidence-wrap .confidence-img",
                            start:"top bottom",
                            end:"top 70%"
                        }}
                )


                // fast wrap
                Tl.fromTo(
                    '.fast-wrap .fast-img',
                    { opacity: 1, y:frameY+"vh"},
                    { opacity:1, y:-frameY+"vh", ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger:".fast-wrap .fast-img",
                            start:"top bottom",
                            end:"bottom top"
                        }}
                )

                Tl.fromTo(
                    '.fast-wrap .fast-img img',
                    { opacity: 1, y:-imgY, scale:1.2, },
                    { opacity:1, y:imgY, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".fast-wrap .fast-img",
                            start:"top bottom",
                            end:"bottom top"
                        }}
                )

                Tl.fromTo(
                    '.fast-wrap .about-feature__step-1 .about-feature__count',
                    { opacity: 0},
                    { opacity:1, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".fast-wrap",
                            start:"top 80%",
                            end:"top 40%"
                        }}
                )

                Tl.fromTo(
                    '.fast-wrap .about-feature__step-1 dl',
                    { opacity: 0, y:60},
                    { opacity:1, y:0, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".fast-wrap",
                            start:"top 80%",
                            end:"top 40%"
                        }}
                )

                // best wrap
                Tl.fromTo(
                    '.best-wrap .best-img',
                    { opacity: 1, y:frameY+"vh"},
                    { opacity:1, y:-frameY+"vh", ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger:".best-wrap .best-img",
                            start:"top bottom",
                            end:"bottom top"
                        }}
                )

                Tl.fromTo(
                    '.best-wrap .best-img img',
                    { opacity: 1, y:-imgY, scale:1.2, transformOrigin: "top left", },
                    { opacity:1, y:imgY, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".best-wrap .best-img",
                            start:"top bottom",
                            end:"bottom top"
                        }}
                )

                Tl.fromTo(
                    '.best-wrap .about-feature__step-2 .about-feature__count',
                    { opacity: 0},
                    { opacity:1, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".best-wrap",
                            start:"top 80%",
                            end:"top 40%"
                        }}
                )

                Tl.fromTo(
                    '.best-wrap .about-feature__step-2 dl',
                    { opacity: 0, y:60},
                    { opacity:1, y:0, ease: Linear.easeNone,
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".best-wrap",
                            start:"top 80%",
                            end:"top 40%"
                        }}
                )

            },

            killScrollTrigger() {

            }
        }
    }
</script>

<style scoped lang="scss">

    .about-feature-wrap {
        background-color: #000;

        .about-feature{
            .about-feature__count{
                transform: translate3d( 0, 0, 0 );
                span{
                    font-size: 23px;
                    font-family: $font-family-sans-serif_medium;
                    color: #fff;
                    line-height: 28px;
                }

                p{
                    font-size: 250px;
                    font-family: $font-family-sans-serif_light;
                    color: #fff;
                    line-height: 301px;
                }
            }

            dl{
                dt{
                    font-size: 40px;
                    line-height: 48px;
                    color: #fff;
                    font-weight: 700;
                }

                dd{
                    font-size: 18px;
                    line-height: 28px;
                    color: #fff;
                    font-weight: 500;
                }
            }
        }

        .confidence-wrap {
            width: 1280px;
            margin: 0 auto;
            padding: 246px 0 311px 0;

            .inner-wrap {
                width: 1200px;
                margin: 0 auto;
                padding-left: 78px;
                box-sizing: border-box;

                display: flex;
                justify-content: flex-start;

                .about-feature__step-0{
                    width: 352px;
                    dl{
                        dt{
                            margin-bottom: 30px;
                            padding-bottom: 30px;
                            border-bottom: 1px solid #D8D8D8;
                        }
                    }
                }

                .confidence-img {
                    margin-top: 197px;
                    margin-left: 100px;
                    width: 503px;
                    height: 596px;
                    overflow: hidden;

                    img{
                        width: 100%;
                    }
                }
            }
        }

        .fast-wrap {
            width: 1280px;
            margin: 0 auto;
            padding: 0 0 270px 0;

            .inner-wrap {
                position: relative;
                width: 1200px;
                margin: 0 auto;
                padding-left: 78px;
                box-sizing: border-box;
                text-align: center;

                .about-feature__step-1{
                    display: inline-flex;
                    justify-content: space-between;
                    width: 738px;
                    margin: 0 auto;

                    .about-feature__count{
                        span{
                            box-sizing: border-box;
                            padding-right: 17px;
                        }

                        text-align: right;
                        margin-right: 43px;
                    }

                    dl{
                        text-align: left;
                        display: flex;
                        justify-content: space-between;
                        padding-top: 38px;
                        box-sizing: border-box;
                        border-bottom: 1px solid #D8D8D8;
                        height: 232px;
                        dt{
                            margin-right: 52px;
                        }
                    }
                }

                .fast-img {
                    width: 789px;
                    height: 434px;
                    overflow: hidden;
                    margin-left: 382px;
                    img {
                        transform-origin: 50% 0;
                        width: 100%;
                    }
                }
            }
        }

        .best-wrap {
            padding: 0 0 220px 0;
            .inner-wrap {
                position: relative;
                width: $stage-contents-width;
                margin: 0 auto;

                .about-feature__step-2{
                    .about-feature__count{
                        span{
                        }
                    }

                    dl{
                        display: flex;
                        justify-content: flex-start;
                        margin-bottom: 100px;

                        dt{

                        }

                        dd{

                            span{
                                margin: 0 32px;
                                display: inline-block;
                                width: 100px;
                                height: 1px;
                                background-color: #D8D8D8;
                            }
                        }
                    }
                }

                .best-img {
                    width: 800px;
                    height: 520px;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }

    .mobile {
        .about-feature-wrap {
            position: relative;
            z-index: 10;
            padding: 160px 0;
            background-color: transparent;
            .about-feature{
                .about-feature__count{
                    span{
                        font-size: 18px;
                        line-height: 22px;
                        margin-bottom: 10px;
                    }

                    p{
                        font-size: 100px;
                        line-height: 120px;
                    }
                }

                dl{
                    dt{
                        font-size: 28px;
                        line-height: 37px;
                        margin-bottom: 40px;
                    }

                    dd{
                        font-size: 17px;
                        line-height: 26px;
                    }
                }
            }

            .confidence-wrap {
                width: 100%;
                padding: 0;
                margin: 0;
                margin-bottom: 120px;
                .inner-wrap {
                    background-color: transparent;
                    width: 100%;
                    margin: 0;
                    display: block;
                    padding: 0;
                    position: relative;
                    .about-feature__step-0{
                        position: relative;
                        z-index: 2;
                        margin-left: 30px;
                        dl{
                            dt{
                                border: none;
                            }
                        }
                    }

                    .confidence-img {
                        z-index: 1;
                        width: 100%;
                        height: auto;
                        margin: 0;
                        padding-left: 60px;
                        box-sizing: border-box;
                        margin-top: -137px;
                        font-size: 0;

                        img{
                            width: 100%;
                        }
                    }
                }
            }

            .fast-wrap {
                width: 100%;
                padding: 0;
                margin: 0;
                margin-bottom: 120px;

                .inner-wrap {
                    background-color: #000;
                    width: 100%;
                    margin: 0;
                    display: block;

                    padding: 0;
                    position: relative;

                    .about-feature__step-1{
                        position: relative;
                        z-index: 2;
                        display: block;
                        width: 100%;
                        margin: 0;
                        padding-right: 30px;
                        box-sizing: border-box;

                        .about-feature__count{
                            margin-right: 0;

                            span{
                                padding: 0;
                            }
                        }

                        dl{
                            display: block;
                            text-align: right;
                            padding-top: 0;
                            border: none;

                            dt{
                                margin: 0;
                                margin-bottom: 40px;
                            }

                            dd{
                            }
                        }
                    }

                    .fast-img {
                        z-index: 1;
                        width: 100%;
                        height: auto;
                        margin: 0;
                        box-sizing: border-box;
                        margin-top: -90px;
                        font-size: 0;

                        img{
                            width: 100%;
                        }
                    }
                }
            }

            .best-wrap {
                width: 100%;
                padding: 0;
                margin: 0;
                margin-bottom: 120px;

                .inner-wrap {
                    background-color: #000;
                    width: 100%;
                    margin: 0;
                    display: block;

                    padding: 0;
                    position: relative;
                    .about-feature__step-2{
                        position: relative;
                        z-index: 2;
                        margin-left: 30px;
                        display: block;

                        .about-feature__count{
                            span{
                            }
                        }

                        dl{
                            display: block;
                            dt{

                            }

                            dd{
                                span{
                                    display: none;
                                }
                            }
                        }
                    }

                    .best-img {
                        z-index: 1;
                        width: 100%;
                        height: auto;
                        margin: 0;
                        padding-left: 60px;
                        box-sizing: border-box;
                        margin-top: -200px;
                        font-size: 0;

                        img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

    .ie, .tablet{
        .about-feature-wrap {
            font-size: 0;
            position: relative;
            z-index: 10;
            .about-feature{
                .about-feature__count{
                    span{
                    }

                    p{
                    }
                }

                dl{
                    dt{
                        font-size: 35px;
                    }

                    dd{
                        font-size: 16px;
                    }
                }
            }

            .confidence-wrap {
                .inner-wrap {
                    .about-feature__step-0{
                        dl{
                            dt{
                            }
                        }
                    }

                    .confidence-img {
                        img{
                        }
                    }
                }
            }

            .fast-wrap {
                .inner-wrap {
                    .about-feature__step-1{
                        .about-feature__count{
                            span{
                            }
                        }

                        dl{
                            dt{
                                margin-right: 40px;
                            }

                            dd{
                            }
                        }
                    }

                    .fast-img {
                        img{
                        }
                    }
                }
            }

            .best-wrap {
                .inner-wrap {
                    .about-feature__step-2{
                        .about-feature__count{
                            span{
                            }
                        }

                        dl{
                            dt{

                            }

                            dd{
                                span{
                                }
                            }
                        }
                    }

                    .best-img {
                        img {
                        }
                    }
                }
            }
        }
    }



    .windows{
        .about-feature-wrap {
            .about-feature{
                .about-feature__count{
                    span{
                    }

                    p{
                    }
                }

                dl{
                    dt{
                    }

                    dd{
                        font-size: 17px;
                        line-height: initial;
                    }
                }
            }

            .confidence-wrap {
                .inner-wrap {
                    .about-feature__step-0{
                        dl{
                            dt{
                            }
                        }
                    }

                    .confidence-img {
                        img{
                        }
                    }
                }
            }

            .fast-wrap {
                .inner-wrap {
                    .about-feature__step-1{
                        .about-feature__count{
                            span{
                            }
                        }

                        dl{
                            dt{
                                margin-right: 44px;
                                font-size: 33px;
                                line-height: initial;
                            }

                            dd{
                            }
                        }
                    }

                    .fast-img {
                        img{
                        }
                    }
                }
            }

            .best-wrap {
                .inner-wrap {
                    .about-feature__step-2{
                        .about-feature__count{
                            span{
                            }
                        }

                        dl{
                            dt{

                            }

                            dd{
                                span{
                                }
                            }
                        }
                    }

                    .best-img {
                        img {
                        }
                    }
                }
            }
        }
    }

</style>
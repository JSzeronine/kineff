
<template>
    <section class="section-wrap-e">

        <div class="inner-wrap">
            <div class="data-wrap">
                <div class="percent-wrap">
                    <div class="percent-con">
                        {{this.per}}<span>%</span>
                    </div>
                </div>

                <div class="text-wrap">
                    <div class="first-text">
                        병풀추출물<br>함량
                    </div>
                    <!--<div class="sec-text">
                        항 아토피 피부 개선물의<br>
                        피부 알러지 억제 효과
                    </div>-->

                </div>
            </div>


            <ul class="list-wrap">
<!--                앞부분 삭제 2020-08-18 zeronine -->
<!--                <li class="product-wrap product-wrap-tit">-->
<!--                    <a href="javascript:void(0);">-->
<!--                        <div class="product-name">All day care</div>-->
<!--                        <div class="product-desc">TECA 성분과 유산균 ALL-프로 바이옴이-->
<!--                            손상된 피부를 진정시켜주고-->
<!--                            무너진 피부의 밸런스를 바로 맞춰줍니다.</div>-->
<!--                    </a>-->
<!--                </li>-->
<!--                //앞부분 삭제 2020-08-18 zeronine -->

                <li class="product-wrap product-wrap_01 product-wrap-first">
                    <a href='./all-day-care/hydracica-ampoule.html'>
                        <div class="product-img">
                            <img :src="'./images/main/hydracica-ampoule.png'" alt="Hydracica Ampoule">
                        </div>
                        <div class="product-name">Hydracica<br>Ampoule</div>
                        <div class="product-price">￦49,000</div>
                        <div class="product-desc">
                            스트레스 받은 피부의 진정과
                            컨디션 케어를 돕는 집중 케어 앰플
                        </div>
                    </a>

                </li>

                <li class="product-wrap product-wrap_02 product-wrap-first">
                    <a href='./all-day-care/hydracica-toner.html'>
                        <div class="product-img">
                            <img :src="'./images/main/hydracica-toner.png'" alt="Hydracica Toner">
                        </div>
                        <div class="product-name">Hydracica<br>Toner</div>
                        <div class="product-price">￦39,000</div>
                        <div class="product-desc">
                            스트레스 받은 피부의
                            편안한 진정을 돕는 보습 토너
                        </div>
                    </a>
                </li>

                <li class="product-wrap__mobile-line"></li>

                <li class="product-wrap product-wrap_03 product-wrap-second">
                    <a href='./all-day-care/hydracica-cream.html'>
                        <div class="product-img">
                            <img :src="'./images/main/hydracica-cream.png'" alt="Hydracica Cream">
                        </div>
                        <div class="product-name">Hydracica<br>Cream</div>
                        <div class="product-price">￦49,000</div>
                        <div class="product-desc">
                            스트레스 받은 피부의 진정,
                            보습 강화를 도와 건강한 피부로
                            가꿔주는 집중 케어 크림
                        </div>
                    </a>
                </li>

                <li class="product-wrap product-wrap_04 product-wrap-second">
                    <a href='./all-day-care/hydracica-calming-mask.html'>
                        <div class="product-img">
                            <img :src="'./images/main/hydracica-mask.png'" alt="Hydracica Calming mask">
                        </div>
                        <div class="product-name">Hydracica<br>Calming Mask</div>
                        <div class="product-price">￦25,000</div>
                        <div class="product-desc">
                            대나무 섬유 시트에 농축된
                            진정 보습 성분과 식물유래 보습 오일이
                            스트레스 받은 피부를 집중 케어하는
                            진정 보습 마스크
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </section>




</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";
    import {EventBus} from "../../bus";

    export default {
        name: "comp-main-E",
        mixins : [
            MixinContents
        ],

        data(){
            return {
                per:0

            }

        },

        mounted() {
            if( isIE ){
                this.per = 74.7;
            }
            // EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
            // EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
        },

        methods: {
            setScrollTrigger(){

                const _this = this;

                if(isMobile) {
                    const TlM = Timeline({
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".section-wrap-e",
                            start:"top bottom",
                            end:"top 50%",
                            onUpdate: self =>
                                _this.onScrollUpdate(self.progress)
                        }
                    })


                    const Tl_list = Timeline({

                    })

                    // navi color
                    TlM.fromTo( ".section-wrap-e .list-wrap", {
                    }, {
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".section-wrap-e .list-wrap",
                            start : "top top",
                            end : "bottom top",
                            scrub : true,
                            onLeave:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                            },
                            onLeaveBack:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                            },
                            onEnter:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                            },
                            onEnterBack:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                            }
                        }
                    });

                    Tl_list.fromTo(
                        '.section-wrap-e .list-wrap .product-wrap-first',
                        { y:100, autoAlpha:0},
                        { y:0, autoAlpha:1,
                            ease: Power1.easeOut,
                            scrollTrigger:{
                                scrub: 0.5,
                                scroller: this.stWrapper,
                                trigger:".section-wrap-e .list-wrap .product-wrap-first",
                                start:"top bottom",
                                end:"bottom 50%"
                            }
                        }
                    )

                    Tl_list.fromTo(
                        '.section-wrap-e .list-wrap .product-wrap-second',
                        { y:100, autoAlpha:0},
                        { y:0, autoAlpha:1,
                            ease: Power1.easeOut,
                            scrollTrigger:{
                                scrub: 0.5,
                                scroller: this.stWrapper,
                                trigger:".section-wrap-e .list-wrap .product-wrap-second",
                                start:"top bottom",
                                end:"bottom 50%"
                            }
                        }
                    )


                    Gsap.set('.section-wrap-e .list-wrap .product-wrap', {autoAlpha:0})

                    return;
                }


                // text wrap show - translateY
                const TlMove = Timeline({})

                TlMove.fromTo(
                    '.section-wrap-e .percent-con',
                    { y: "60vh"},
                    { y: 0, ease: Power2.easeOut,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-e',
                            start:"-10% top",
                            end:"22% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.22),
                        }}
                );

                TlMove.fromTo(
                    '.section-wrap-e .text-wrap .first-text',
                    { y: "75vh"},
                    { y: 0, ease: Power2.easeOut,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-e',
                            start:"0% top",
                            end:"25% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.01),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.23),
                        }}
                )

                Gsap.set('.section-wrap-e .percent-con', {y:"60vh"});
                Gsap.set('.section-wrap-e .list-wrap', {opacity:0});



                // container pin
                const Tl = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-e",
                        pin:".section-wrap-e .inner-wrap",
                        pinSpacing:false,
                        start:"top top",
                        end:"bottom top",
                        // start: () => this.$getPos_ttTobb(this.$el, 0),
                        // end: () => this.$getPos_ttTobb(this.$el, 1),
                        // start: () => this.$getPos_tbTobt(this.$el, 0),
                        // end: () => this.$getPos_tbTobt(this.$el, 1)
                    }
                })



                // percent number
                Tl.fromTo(
                    '.section-wrap-e',
                    { opacity: 1},
                    { ease: Power2.easeOut,
                        opacity: 1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-e',
                            start:"-10% top",
                            end:"17% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.17),
                            onUpdate:(self) => {
                                if(self.progress > 0.2){
                                    _this.startPercent()
                                } else {
                                    _this.resetPercent()
                                }
                            }
                        }}
                )

                // dot scale
                let calcScale = Math.ceil(this.$el.offsetWidth / 50);
                let perWrap =this.$el.querySelector(".percent-wrap")

                Tl.fromTo(
                    '.section-wrap-e .percent-wrap',
                    { opacity: 1},
                    { opacity:1, ease: Power3.easeInOut,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-e',
                            start:"15% top",
                            end:"65% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.22),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.65),
                            // onUpdate: self =>
                            //     perWrap.style.transform = "scale("+(1 + (self.progress * (calcScale-1)))+")",

                            onUpdate : ( self ) => {
                                calcScale = Math.ceil(this.$el.offsetWidth / 50);
                                let per = 1 + (easeInCubic(self.progress) * (calcScale-1));
                                Gsap.to(perWrap, 0.1, {scale:per});
                            },

                            /*onEnter : ( $e, $sub ) => {
                                calcScale = Math.ceil(_this.$el.offsetWidth / 50);
                                console.log(calcScale)
                            },*/
                        }}
                )



                function easeInCubic(x) {
                    return x * x * x;
                }


                Tl.fromTo(
                    '.section-wrap-e .first-text',
                    { opacity: 1},
                    { opacity:0, ease: Linear.easeNone,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-e',
                            start:"20% top",
                            end:"35% bottom",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.25),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.32)
                        }}
                )

                let stPtX = 100+"vw";
                let stPtY = -130+"vw";

                // list wrap <-- translateX
                Tl.fromTo(
                    '.section-wrap-e .list-wrap',
                    { },
                    { ease: Linear.easeNone,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-e',
                            start:"48% top",
                            end:"120% bottom",

                            onUpdate : ( $self ) => {
                                stPtX = ( window.innerWidth < 1280 ) ? 1280 : 100;
                                stPtY = ( window.innerWidth < 1280 ) ? -2000 : -130;

                                let tgX = Gsap.utils.mapRange(0, 1, stPtX, stPtY, $self.progress)
                                tgX = ( window.innerWidth < 1280 ) ? tgX+"px" : tgX+"vw";

                                Gsap.set( ".section-wrap-e .list-wrap", { x: tgX});
                            },

                            onLeave:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                            },
                            onLeaveBack:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                            },
                            onEnter:() => {
                                EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                                Gsap.set( ".section-wrap-e .list-wrap", { opacity: 0});
                            },
                            onEnterBack:() => {
                                // EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                            }
                        }}
                )



                // list wrap <-- opacity
                Tl.fromTo(
                    '.section-wrap-e .list-wrap',
                    { opacity: 0},
                    { opacity: 1, ease: Power1.easeOut,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-e',
                            start:"50% top",
                            end:"60% top",
                            // start: () => this.$getPos_ttTobb(this.$el, 0.48),
                            // end: () => this.$getPos_ttTobb(this.$el, 0.60),
                        }}
                )

                Tl.fromTo(
                    '.section-wrap-e .list-wrap',
                    { opacity: 1},
                    { opacity: 0, ease: Power1.easeOut,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-e',
                            start:"100% bottom",
                            end:"110% bottom",
                            // start: () => this.$getPos_ttTobb(this.$el, 0.95),
                            // end: () => this.$getPos_ttTobt(this.$el, 1),
                        }}
                )







            },

            killScrollTrigger(){

            },

            onScrollUpdate(progress) {
                const per = Gsap.utils.mapRange(0, 1, 0, 74.7, progress);
                const perFixed = per.toFixed(1)

                const _this = this;
                Gsap.killTweensOf(this)
                Gsap.to(this, 0.5, {per:per, ease: Power2.easeOut,
                    onUpdate:function(){
                    if(_this.per)
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
    .windows{
        section{
            .inner-wrap{
                .data-wrap{
                    .percent-wrap{
                        transform-origin: 53.43% 63.65%;
                        padding-bottom: 100px;
                    }
                }
            }
        }
    }

    section {
        position: relative;
        width: 100%;
        height: 800vh;
        overflow: hidden;

        .inner-wrap {
            /*width: 1130px;*/
            margin: 0 auto;
            height: 100vh;



            .data-wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100vh;


                .percent-wrap {
                    position: relative;
                    transform-origin: 53.43% 61.54%;

                    .percent-con {
                        font-size: 500px;
                    }

                    span {
                        font-family: $font-family-sans-serif_medium;
                        font-size: 200px;
                    }

                }

                .text-wrap {
                    width: 560px;
                    display: flex;
                    flex-direction: row;
                    font-size: $font-size-xl;

                    margin-top: -166px;
                    .first-text {
                        font-weight: 600;
                    }
                    >div {
                        flex: 1;
                    }

                }
            }




            .list-wrap {
                position: absolute;
                top: 0;

                margin: 0 auto;
                height: 100vh;
                min-height: 760px;

                display: flex;
                flex-direction: row;

                padding-bottom: 130px;
                box-sizing: border-box;

                transform: translate3d(200vw,0,0);
                opacity: 0;

                .product-wrap {
                    flex-shrink: 0;

                    width: 250px;

                    margin-top: auto;
                    margin-bottom: 8vh;
                    margin-right: 200px;

                    &.product-wrap__mobile-line{
                        display: none;
                    }

                    &.product-wrap-tit {
                        width: 300px;
                        margin-right: 270px;
                        .product-name {
                            font-size: $h1-font-size;
                            line-height: 1;
                        }
                        .product-desc {
                            width: 300px;
                        }
                    }

                    .product-img {
                        padding-bottom: 10px;
                        img {
                            position: absolute;
                            transform-origin: 0 100%;
                            transform: scale(0.5) translateY(-200%);
                        }

                    }

                    .product-name {
                        line-height: 1.2;
                        font-size: $font-size-lg;
                        color: $color-set-green;
                        margin-top: 26px;
                        margin-bottom: 10px;
                    }

                    .product-price{
                        font-size: $font-size-base;
                        line-height: 16px;
                        color: #fff;
                        //margin-bottom: 30px;
                        font-family: $font-family-kr;
                    }

                    .product-desc {
                        position: absolute;
                        width: 250px;
                        margin-top: 30px;
                        font-size: 16px;
                        color: white;
                    }
                }
            }
        }
    }

    .mobile {
        section {
            height: auto;
            .inner-wrap {
                width: 100%;
                margin: 0 auto;
                height: auto;
                display: block;

                .data-wrap {
                    background-color: #fff;
                    display: block;
                    height: auto;
                    padding: 150px 40px 180px 40px;
                    box-sizing: border-box;


                    .percent-wrap {
                        position: relative;
                        width: 100%;
                        font-family: $font-family-sans-serif;
                        text-align: center;

                        .percent-con {
                            font-size: 128px;
                        }

                        span {
                            font-size: $h1-font-size;
                        }

                    }

                    .text-wrap {
                        width: 100%;
                        flex-direction: row;
                        font-size: $font-size-lg;
                        margin-top: 0;
                        line-height: 19px;

                        .first-text {
                            font-family: $font-family-sans-serif;
                            font-size: $font-size-xs;
                            font-weight: 700;
                            line-height: 20px;
                        }

                        .sec-text {
                            font-weight: 400;
                            font-size: $font-size-xs;
                        }


                    }
                }

                .list-wrap {
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    min-height: unset;
                    //flex-direction: column;

                    height: auto;
                    //padding: 90px 25px 128px 25px;
                    padding: 142px 25px 130px;
                    box-sizing: border-box;
                    background-color: black;

                    transform: translate3d(0,0,0);
                    opacity: 1;

                    .product-wrap__mobile-line{
                        display: block;
                        width: 100%;
                        height: 1px;
                        background-color: rgba( 255, 255, 255, 0.5 );
                        margin-bottom: 45px;
                    }

                    .product-wrap {

                        width: 50%;
                        //height: 400px;
                        margin: 0;
                        box-sizing: border-box;

                        &.product-wrap-tit {
                            position: relative;
                            width: 100%;
                            margin-bottom: 83px;
                            display: none;
                            .product-name {
                                margin-top: 0;
                                font-size: $font-size-2xl;
                                margin-bottom: 10px;
                            }

                            .product-desc {
                                //width: 274px;
                                margin-top: 20px;
                                font-size: $font-size-xs;
                                font-weight: 400;
                                line-height: 22px;
                            }

                            &::after {
                                position: absolute;
                                bottom: -31px;
                                left: 0;
                                content: '';
                                display: block;
                                width: 100%;
                                height: 1px;
                                background-color: rgba(100,100,100,0.7);
                            }
                        }

                        &.product-wrap_01 {
                            margin-bottom: 45px;
                            padding: 56px 14px 0 10px;
                            .product-img {
                                width: 39px;
                            }
                        }

                        &.product-wrap_02 {
                            margin-bottom: 45px;
                            padding: 0 0 0 25px;
                            .product-img {
                                width: 54px;
                            }
                        }

                        &.product-wrap_03 {
                            padding: 93px 14px 0 10px;
                            .product-img {
                                width: 93px;
                            }
                        }

                        &.product-wrap_04 {
                            padding: 0 0 0 25px;
                            .product-img {
                                width: 120px;
                            }
                        }

                        a {
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            height: 100%;
                            .product-img {
                                padding-bottom: 0px;
                                img {
                                    position: relative;
                                    transform-origin: 0 100%;
                                    transform: scale(1) translateY(0);
                                }

                            }

                        }


                        .product-name {
                            margin-top: 16px;
                            font-family: $font-family-sans-serif;
                            font-size: $font-size-s;
                            line-height: 18px;
                        }

                        .product-price{
                            font-size: 12px;
                            margin-bottom: 0;
                            line-height: 18px;
                        }

                        .product-desc {
                            position: relative;
                            margin-top: 25px;
                            font-size: 12px;
                            font-weight: 300;
                            line-height: 18px;
                            width: 90%;
                        }


                    }
                }



            }

            & img {
                width: 100%;
            }
        }
    }


    .ie, .tablet{
        section {
            height: auto;
            padding-bottom: 300px;
            .inner-wrap {
                height: auto;

                .data-wrap {
                    margin-bottom: 150px;
                    height: auto;
                    .percent-wrap {
                        .percent-con {
                        }

                        span {
                        }
                    }

                    .text-wrap {
                        margin-top: -230px;
                        >div {
                        }
                    }
                }

                .list-wrap {
                    position: relative;
                    flex-direction: initial;
                    flex-wrap: wrap;
                    height: auto;
                    width: 1200px;
                    margin: 0 auto;
                    align-items: flex-end;
                    transform: translate3d(0,0,0);
                    opacity: 1;
                    top: 550px;

                    .product-wrap {
                        width: 25%;
                        margin: 0;
                        flex-shrink: initial;

                        &.product-wrap-tit {
                            width: 100%;
                            margin-bottom: 100px;
                            .product-name {

                            }
                            .product-desc {
                                position: relative;
                                color: black;

                            }
                        }

                        .product-img {
                            display: flex;
                            align-items: flex-end;
                            justify-items: center;

                        }

                        .product-name {

                        }

                        .product-desc {
                            color: black;
                        }
                    }
                }
            }
        }
    }

</style>
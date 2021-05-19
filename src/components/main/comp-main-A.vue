<template>
    <section class="section-wrap-a">
        <div v-if="isMobile" class="inner-wrap">
            <div class="skineffect-wrap">
                <div class="skineffect-con">
                    <div class="img-wrap">
                        <img class="product-img__content" :src="`./images/main/comp-a_amp_kineff.png`" alt="Hydracica Ampoule">
                    </div>

                    <div class="text-wrap">
                        <div class="skin-txt">
                            <p><span>s</span>kin</p>
                        </div>

                        <div class="list-txt">
                            <p>professional</p>
                            <p>scientific</p>
                            <p>eff<span>ect</span></p>
                        </div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>

            <div class="asiatica-wrap">
                <div class="product-effect__bx">
                    <ul>
                        <li class="title-con">
                            <p class="title-con__title">피부 진정과 보습에 뛰어난</p>
                            <p class="title-con__sub">센텔라 아시아티카 & 티트리</p>
                            <span class="title-con__line"></span>
                        </li>
                        <li class="desc-con">
                            센텔라 아시아티카와 티트리를<br>
                            강력하게 배합하여 만든<br>
                            전문적인 제품들을 자신 있게 제안합니다.
                        </li>
                    </ul>

                    <div class="product-name__bg-img-m">
                        <video loop playsinline muted :src="'./images/main/cica_video_02_m.mp4'"></video>
                    </div>
                </div>
            </div>

        </div>

        <div class="kineff-bx" v-if="isIE">
            <div class="kineff-product">
                <div class="kineff-product__txt">
                    <ul>
                        <li>
                            <dl>
                                <dt>uncompromising</dt>
                                <dd>
                                    우리나라 최고의 화장품 연구진들이<br>
                                    타협 없는 기준으로 엄선한 성분들로만<br>
                                    제품을 만들었습니다.
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>faithful</dt>
                                <dd>
                                    제품의 성분과 함유량에 대해<br>
                                    안심하고 사용할 수 있는 브랜드입니다.
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
                <div class="kineff-product__img">
                    <img class="product-img__content" :src="`./images/main/comp-a_amp_kineff_ie.png`" alt="Hydracica Ampoule">
                </div>
            </div>

            <div class="kineff-info">
                <ul>
                    <li>
                        <div>
                            <dl>
                                <dt>skin</dt>
                                <dd>professional</dd>
                            </dl>
                        </div>
                    </li>
                    <li>
                        <div>
                            <dl>
                                <dt>skin</dt>
                                <dd>scientific</dd>
                            </dl>
                        </div>
                    </li>
                    <li>
                        <div>
                            <dl>
                                <dt>skin</dt>
                                <dd>effect</dd>
                            </dl>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="kineff-logo">
                <Logo class="logo"></Logo>
            </div>
        </div>

        <div v-if="!isMobile" class="product-container" ref="productContainer">
            <div class="product-container__bx">
                <div class="product-info__bx">
                    <div>
                        <div v-if="!isIE" class="product-img__bx">
                            <div class="product-img">
                                <span class="product-img__content-bx">
                                    <img class="product-img__content" :src="`./images/main/comp-a_amp_kineff.png`" alt="">
<!--                                    <span ref="productImgGradient" class="product-img__content-gradient"></span>-->
                                    <div ref="productImgGradient" class="product-img__content-gradient">
                                        <img :src="`./images/main/gradient_mask.png`" alt="gradient mask">
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div v-if="!isIE" ref="productInfoBxContainer" class="product-info__bx-container">
                            <div class="product-info__bx-container__pin">
                                <div class="product-list product-make">
                                    <dl>
                                        <dt>
                                            uncompromising
                                        </dt>
                                        <dd>
                                            우리나라 최고의 화장품 연구진들이<br>
                                            타협 없는 기준으로 엄선한 성분들로만<br>
                                            제품을 만들었습니다.
                                        </dd>
                                    </dl>
                                </div>

                                <div class="product-list product-info">
                                    <dl>
                                        <dt>
                                            faithful
                                        </dt>
                                        <dd>
                                            제품의 성분과 함유량에 대해<br>
                                            안심하고 사용할 수 있는 브랜드입니다.
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div class="product-name" ref="productName">
                            <div class="product-name__bx">
                                <div v-if="!isIE" class="product-name__inner-bx">
                                    <dl class="product-name__bx-container">
                                        <dt class="product-name__title">
                                            <div ref="productNameTitleBx" class="product-name__title-bx">
                                                <span :style="productNameStyle">s</span>kin
                                            </div>
                                        </dt>

                                        <dd class="product-name__sub">
                                            <div ref="productNameSubBx" class="product-name__list">
                                                <ul class="product-name__list-container">
                                                    <li>professional</li>
                                                    <li>scientific</li>
                                                    <li>eff<span :style="productNameStyle">ect</span></li>
                                                </ul>
                                            </div>

                                            <div class="product-name__line">
                                                <div>
                                                    <span ref="productNameLine" class="product-name__line-content"></span>
                                                </div>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>


                                <div class="product-effect__bx-container">
                                    <div class="product-cica">
                                        <div class="product-cica__mask">
<!--                                            <svg class="svg_bx" ref="svgBx">-->
<!--                                                <defs>-->
<!--                                                    <clipPath id="product-name__mask">-->
<!--                                                        <rect ref="productNameMask" class="product-name__mask-rect" v-bind:x="maskPosition.x" v-bind:y="maskPosition.y" width="180" height="5"></rect>-->
<!--                                                    </clipPath>-->
<!--                                                </defs>-->
<!--                                            </svg>-->
                                        </div>

                                        <div class="product-name__bg">
                                            <div class="product-name__bg-mask">
                                                <div class="product-name__bg-img" :style="{ backgroundImage : `url( ./images/main/comp-a_bg.jpg )`}">
                                                    <video loop playsinline muted :src="'./images/main/cica_video_02.mp4'"></video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div ref="productEffect" class="product-effect">
                                        <div class="product-effect__bx">
                                            <ul>
                                                <li>
                                                    <p>피부 진정과 보습에 뛰어난</p>
                                                    <p>센텔라 아시아티카 &<br>티트리</p>
                                                    <span class="line"></span>
                                                </li>
                                                <li class="desc-text">
                                                    센텔라 아시아티카와 티트리를<br>
                                                    강력하게 배합하여 만든<br>
                                                    전문적인 제품들을 자신 있게 제안합니다.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "../../bus";
    import MixinContents from "../../mixin/mixin-contents-sctrigger";
    import Logo from "../icon/Logo"

    export default {
        name: "comp-main-A",
        mixins : [
            MixinContents
        ],

        components : {
            Logo
        },

        data() {
            return {
                maskPosition : {
                    w : 100,
                    h : 5,
                    x : 0,
                    y : 0,
                },

                productNameStyle : {
                    opacity: 1
                },

                isMobile:isMobile,
                isIE : isIE,
            }
        },

        mounted() {
            this.initW = window.innerWidth;
            this.initH = window.innerHeight;

            let vm = this;
            vm.resizeListener( null );
            window.addEventListener( "resize", vm.resizeListener );

            if( isIE ){
                const video = this.$el.querySelector(".product-name__bg video");
                video.play();
            }
        },

        methods: {
            setScrollTrigger(){
                let vm = this;

                if(isMobile) {

                    const TlM = Timeline({
                        scrollTrigger:{
                            scrub: 0.5,
                            trigger:".section-wrap-a .skineffect-wrap",
                            start:"top 0%",
                            end:"bottom bottom",
                        }
                    });


                    TlM.fromTo( ".title-con__line", {
                        width : "0%",
                    }, {
                        width : "100%",
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".section-wrap-a .asiatica-wrap",
                            start : "center bottom",
                            end : "center center",
                            scrub : true,
                        }
                    });


                    // navi color
                    TlM.fromTo( ".title-con__line", {
                        width : "0%",
                    }, {
                        width : "100%",
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".section-wrap-a .asiatica-wrap",
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


                    const mVideo = this.$el.querySelector(".product-name__bg-img-m video");
                    TlM.fromTo( ".section-wrap-a .asiatica-wrap", {
                    }, {
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".section-wrap-a .asiatica-wrap",
                            start : "top bottom",
                            end : "bottom top",
                            onEnter : ( $e, $sub ) => { mShowVideo(); },
                            onEnterBack : ( $e ) => { mShowVideo(); },
                            onLeave : ( $e ) => { mHideVideo(); },
                            onLeaveBack : ( $e ) => { mHideVideo(); },
                        }
                    });

                    function mShowVideo(){
                        mVideo.play();
                        mVideo.style.opacity = 1;
                    }

                    function mHideVideo(){
                        mVideo.style.opacity = 0;
                        mVideo.pause();
                    }

                    /*TlM.fromTo(
                        '.section-wrap-a .inner-wrap .skineffect-wrap .skineffect-con',
                        { y: "0vh"},
                        { y: "0vh", ease: Linear.easeNone}
                    )*/


                    TlM.fromTo( ".section-wrap-a .skineffect-wrap .skineffect-con",
                        {}, {
                        scrollTrigger : {
                            scroller : this.stWrapper,
                            trigger : ".section-wrap-a .skineffect-wrap",
                            start : "top top",
                            end : "95% bottom",
                            pin:".section-wrap-a .skineffect-wrap .skineffect-con",
                            pinSpacing:true,
                            scrub: 1,
                        }
                    });

                    TlM.fromTo( ".section-wrap-a .skineffect-wrap .skineffect-con .img-wrap",
                        {y:5+"vh"},
                        {
                            y:-5+"vh",
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : ".section-wrap-a .skineffect-wrap",
                                start : "top top",
                                end : "100% bottom",
                                scrub: 1
                            }
                        });

                    TlM.fromTo( ".section-wrap-a .skineffect-wrap .skineffect-con .text-wrap",
                        {y:5+"vh"},
                        {
                            y:-5+"vh",
                            scrollTrigger : {
                                scroller : this.stWrapper,
                                trigger : ".section-wrap-a .skineffect-wrap",
                                start : "top top",
                                end : "100% bottom",
                                scrub: 1
                            }
                        });


                    const Tl_text = Timeline({
                        scrollTrigger:{
                            scrub: true,
                            trigger:".section-wrap-a .skineffect-wrap",
                            start:"top -10%",
                            end:"85% bottom",

                            onLeave:() => {
                                const tg = vm.$el.querySelector(".skineffect-wrap .text-wrap")
                                tg.classList.add("combine")
                            },
                            onEnterBack:() => {
                                const tg = vm.$el.querySelector(".skineffect-wrap .text-wrap")
                                tg.classList.remove("combine")
                            }
                        }
                    })

                    Tl_text.fromTo(
                        '.section-wrap-a .inner-wrap .skineffect-wrap .text-wrap .list-txt p',
                        { y: "0"},
                        { y: "-100%", ease: Power2.easeInOut}
                    )
                        .fromTo(
                            '.section-wrap-a .inner-wrap .skineffect-wrap .text-wrap .list-txt p',
                            { y: "-100%"},
                            { y: "-200%", ease: Power2.easeInOut}
                        )
                        .fromTo(
                            '.section-wrap-a .inner-wrap .skineffect-wrap .text-wrap .list-txt p',
                            { x: 0},
                            { x: 0, ease: Power2.easeInOut}
                        )


                    const fixWrap = this.$el.querySelector(".section-wrap-a .asiatica-wrap")
                    const TlM_fix = Timeline({
                        scrollTrigger:{
                            scrub: 0,
                            trigger:".section-wrap-a .asiatica-wrap",
                            start:"top bottom",
                            end:"bottom top",
                            onEnter : ( $e ) => { fixWrap.classList.add("show") },
                            onEnterBack : ( $e ) => { fixWrap.classList.add("show") },
                            onLeave : ( $e ) => { fixWrap.classList.remove("show") },
                            onLeaveBack : ( $e ) => { fixWrap.classList.remove("show") }

                        }
                    })
                    return;
                }
                if( this.isIE ) return;



                const productTimeline = Timeline({});
                const productInfoTimeline = Timeline({});

                // product show
                let productImgBx = vm.$el.getElementsByClassName( "product-img__bx" )[ 0 ];

                productInfoTimeline.fromTo( ".product-img",
                    { y: "40vh", scale : 1, opacity : 1 },
                    {
                        y: "0vh", scale : 1, opacity : 1,
                        ease:Power3.easeOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productImgBx,
                            scrub : 0.7,
                            // start : () => vm.$getPos_tbTobb( productImgBx, 0 ),
                            // end : () => vm.$getPos_ttTobb( productImgBx, 0.05 ),
                            start : "top bottom",
                            end : "5% bottom",
                        }
                    }
                )

                productInfoTimeline.fromTo( ".product-img .product-img__content-bx",
                    { y: "10vh" },
                    {
                        y: "-5vh",
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productImgBx,
                            scrub : 0,
                            // start : () => vm.$getPos_ttTobb( productImgBx, 0 ),
                            // end : () => vm.$getPos_ttTobt( productImgBx, 1 ),
                            start : "top bottom",
                            end : "bottom bottom",
                        }
                    }
                )

                // product left / right : first text
                const productInfoBxContainer = vm.$el.getElementsByClassName( "product-info__bx-container" )[ 0 ];
                const productMask = vm.$el.getElementsByClassName( "product-make" )[ 0 ];

                productInfoTimeline.fromTo( ".product-make",
                    {
                        y : "70vh",
                        opacity : 0,
                    },
                    {
                        y : "50vh",
                        opacity : 1,
                        ease:Power1.easeOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productInfoBxContainer,
                            scrub : true,
                            // start : () => this.$getPos_ttTobt( productInfoBxContainer, 0.05 ),
                            // end : () => this.$getPos_ttTobb( productInfoBxContainer, 0.20 ),
                            start : "5% top",
                            end : "20% 20%",
                        }
                    }
                );

                productInfoTimeline.fromTo( ".product-make dl",
                    { y : "5vh" },
                    {
                        y: "-5vh",
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productInfoBxContainer,
                            scrub : true,
                            // start : () => this.$getPos_ttTobb( productInfoBxContainer, 0.1 ),
                            // end : () => this.$getPos_ttTobb( productInfoBxContainer, 0.45 ),
                            start : "10% 10%",
                            end : "45% 45%",
                        }
                    }
                )

                productInfoTimeline.fromTo( ".product-make",
                    {
                        y : "50vh",
                        opacity : 1,
                    },
                    {
                        y: "30vh",
                        opacity : 0,
                        ease:Power1.easeIn,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productInfoBxContainer,
                            // start : () => this.$getPos_ttTobb( productInfoBxContainer, 0.35 ),
                            // end : () => this.$getPos_ttTobb( productInfoBxContainer, 0.5 ),
                            start : "35% 35%",
                            end : "50% 50%",
                            scrub : true,
                        }
                    }
                )



































                // product left / right : second text
                const productInfo = vm.$el.getElementsByClassName( "product-info" )[ 0 ];
                productInfoTimeline.fromTo( ".product-info",
                    { y : "70vh", opacity : 0 },
                    {
                        y : "50vh", opacity : 1,
                        ease:Power1.easeOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productInfoBxContainer,
                            scrub : true,
                            // start : () => this.$getPos_ttTobb( productInfoBxContainer, 0.5 ),
                            // end : () => this.$getPos_ttTobb( productInfoBxContainer, 0.65 )
                            start : "50% 50%",
                            end : "65% 65%",
                        }
                    }
                )

                productInfoTimeline.fromTo( ".product-info dl",
                    { y : "5vh" },
                    {
                        y: "-5vh",
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productInfoBxContainer,
                            scrub : true,
                            // start : () => this.$getPos_ttTobb( productInfoBxContainer, 0.55 ),
                            // end : () => this.$getPos_ttTobb( productInfoBxContainer, 0.90 )
                            start : "55% 55%",
                            end : "90% 90%",
                        }
                    }
                )

                productInfoTimeline.fromTo( ".product-info",
                    { y : "50vh", opacity : 1 },
                    {
                        y : "30vh", opacity : 0,
                        ease:Power1.easeIn,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productInfoBxContainer,
                            scrub : true,
                            // start : () => this.$getPos_ttTobb( productInfoBxContainer, 0.85 ),
                            // end : () => this.$getPos_ttTobb( productInfoBxContainer, 1 )
                            start : "85% 85%",
                            end : "100% 100%",
                        }
                    }
                )

                ScTrigger.create({
                    scroller: this.stWrapper,
                    animation : productInfoTimeline,
                    trigger : productInfoBxContainer,
                    pin : ".product-info__bx-container .product-info__bx-container__pin",
                    // start : () => this.$getPos_ttTobt( productInfoBxContainer, 0 ),
                    // end : () => this.$getPos_ttTobb( productInfoBxContainer, 1 ),
                    start : "top top",
                    end : "bottom bottom",
                });

                Gsap.set( productMask, { y:"100vh" });
                Gsap.set( productInfo, { y:"100vh" });


















                const productName = this.$el.getElementsByClassName( "product-name" )[ 0 ];
                const productNameListContainer = this.$el.getElementsByClassName( "product-name__list-container" )[ 0 ];
                const productNameBx = this.$el.getElementsByClassName( "product-name__bx" )[ 0 ];

                productTimeline.fromTo( ".product-name",
                    {},
                    {
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            // start : () => this.$getPos_ttTobt( productName, 0 ),
                            // end : () => this.$getPos_ttTobb( productName, 1 ),
                            start : "top top",
                            end : "bottom bottom",
                            scrub : true,
                            pin : ".product-name .product-name__bx",
                            pinSpacing: false,
                        }
                    }
                );

                productTimeline.fromTo( ".product-name__bx .product-name__inner-bx",{
                        opacity: 0,
                        y : "15vh"
                    },
                    {
                        opacity : 1,
                        y : "0vh",
                        ease:Power1.easeOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            // start : () => this.$getPos_ttTobt( productName, 0 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.2 ),
                            start : "top top",
                            end : "20% bottom",
                            scrub : 0,
                        }
                    }
                );

                productTimeline.fromTo( ".product-name__bx .product-name__inner-bx dl",{
                        y : "10vh"
                    },
                    {
                        y : "0vh",
                        ease:Power1.easeOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            // start : () => this.$getPos_ttTobt( productName, 0 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.45 ),
                            start : "top top",
                            end : "45% bottom",
                            scrub : 0,
                        }
                    }
                );

                // underline text : step 2
                productTimeline.fromTo( ".product-name__list-container",
                    { y: 0 },
                    {
                        y:-60,
                        ease:Power3.easeInOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productName,
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.2 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.3 ),
                            start : "20% bottom",
                            end : "30% bottom",
                        }
                    }
                );

                // underline text : step 3
                productTimeline.fromTo( ".product-name__list-container",
                    { y: -60 },
                    {
                        y:-120,
                        ease:Power3.easeInOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productName,
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.32 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.42 ),
                            start : "32% bottom",
                            end : "42% bottom",
                        }
                    }
                );

                Gsap.set( productNameListContainer, { y: 0 });
























                // underline text : skin + effect center
                const productNameLine = vm.$el.getElementsByClassName( "product-name__line-content" )[ 0 ];
                const productImgGradient = vm.$el.getElementsByClassName( "product-img__content-gradient" )[ 0 ];
                productTimeline.fromTo( ".product-name__title",
                    { x:0 },
                    {
                        x : 333,
                        ease:Power3.easeInOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productName,
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.43 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.58 ),
                            start : "43% bottom",
                            end : "58% bottom",
                            onUpdate : ( $self ) => {
                                Gsap.to( productNameLine, 0.15, {
                                    width: 218 - ( 118 * $self.progress ),
                                    x:-53 * $self.progress, ease:Power3.easeOut
                                });

                                Gsap.to( vm.productNameStyle, 0.35, { opacity: 1 - ( $self.progress * 1.5 ), ease:Cubic.easeOut });

                                let tgY = Gsap.utils.mapRange(0, 1, 100, -50, $self.progress);
                                Gsap.to( productImgGradient, 0.35, { opacity:1, y:tgY  +"%", ease:Cubic.easeOut });

                                // let gradient = `linear-gradient(rgba(#EEF3F4, 0) 0%, #EEF3F4 ${ 200 - ( $self.progress * 200 )}%)`;
                                // Gsap.to( productImgGradient, 0.35, { opacity:$self.progress * 2, background : gradient, ease:Cubic.easeOut });
                            },
                        }
                    }
                );


                Gsap.set( productImgGradient, { background : 'linear-gradient( rgba(#EEF3F4,0) 0%, #EEF3F4 200%)' });

                productTimeline.fromTo( ".product-name__sub",
                    { x:0 },
                    {
                        x:-195,
                        ease:Power3.easeInOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productName,
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.43 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.58 )
                            start : "43% bottom",
                            end : "58% bottom",
                        }
                    }
                );






















                // underline text : kineff hide
                const bxTitle = vm.$el.getElementsByClassName( "product-name__title-bx" )[ 0 ];
                const bxSub = vm.$el.getElementsByClassName( "product-name__list" )[ 0 ];
                productTimeline.fromTo( ".product-name__sub",
                    {},
                    {
                        ease:Cubic.easeOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.62 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.66 ),
                            start : "62% bottom",
                            end : "66% bottom",
                            onUpdate : ( $self ) => {
                                Gsap.to( bxTitle, 0.15, { height : 50 - ( 50 * $self.progress ), ease:Expo.easeOut });
                                Gsap.to( bxSub, 0.35, { height : 50 - ( 50 * $self.progress ), ease:Expo.easeOut });
                            }
                        }
                    }
                );

                let wW = ( window.innerWidth < 1280 ) ? 1280 : window.innerWidth;
                let wH = window.innerHeight;

                let cX = ( wW - this.maskPosition.w ) / 2;
                let cY = ( wH - this.maskPosition.h ) / 2;


                const productNameMask = vm.$el.querySelector( ".product-name__bg-mask" );
                productTimeline.fromTo( ".product-name__bg-mask",
                    {
                        // x : cX,
                        // y : cY,
                        // width : this.maskPosition.w,
                        // height : this.maskPosition.h
                    },
                    {
                        // x : 0,
                        // y : 0,
                        // width : "100%",
                        // height : "100%",
                        ease:Cubic.easeInOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.67 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.9 ),
                            start : "67% bottom",
                            end : "90% bottom",
                            onUpdate : ( $self ) => {
                                wW = ( window.innerWidth < 1280 ) ? 1280 : window.innerWidth;
                                wH = window.innerHeight;

                                cX = ( wW - this.maskPosition.w ) / 2;
                                cY = ( wH - this.maskPosition.h ) / 2;

                                let posX = cX - ( cX * $self.progress );
                                let posY = cY - ( cY * $self.progress );

                                let w = this.maskPosition.w + (( wW - this.maskPosition.w ) * $self.progress );
                                let h = this.maskPosition.h + (( wH - this.maskPosition.h ) * $self.progress );

                                Gsap.set( ".product-name__bg-mask", { x: posX, y:posY, width:w, height:h });
                            },

                            onEnter : ( $e, $sub ) => {
                                // cX = ( wW - vm.maskPosition.w ) / 2;
                                // cY = ( wH - vm.maskPosition.h ) / 2;
                                productNameMask.style.visibility = "visible";
                            },
                            onEnterBack : ( $e ) => { productNameMask.style.visibility = "visible"; },
                            onLeave : ( $e ) => { },
                            onLeaveBack : ( $e ) => { productNameMask.style.visibility = "hidden"; }
                        },
                    }
                );


                // change nav color
                productTimeline.fromTo( ".product-name__bg-mask",
                    {},
                    {
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            scrub : 0,
                            start : "86% bottom",
                            end : "100% top",
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
                        },
                    }
                );

                const tl_video =Timeline({
                    scrollTrigger : {
                        scroller: this.stWrapper,
                        trigger : ".product-name",
                        scrub : 0,
                        // start : () => this.$getPos_tbTobb( productName, 0.67 ),
                        // end : () => this.$getPos_tbTobt( productName, 1 ),
                        start : "67% bottom",
                        end : "bottom top",
                        onUpdate : ( $self ) => { },
                        onEnter : ( $e, $sub ) => { showVieo() },
                        onEnterBack : ( $e ) => { showVieo() },
                        onLeave : ( $e ) => { hideVideo() },
                        onLeaveBack : ( $e ) => { hideVideo() },
                    },
                });

                const video = this.$el.querySelector(".product-name__bg video")

                function showVieo(){
                    video.play();
                }

                function hideVideo(){
                    video.pause();
                }

                productTimeline.fromTo( ".product-name__bg-img",
                    {
                        scale:1.2,
                        // x : -cX,
                        // y : -cY,
                    },
                    {
                        scale:1,
                        // x : 0,
                        // y : 0,
                        ease:Cubic.easeInOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.67 ),
                            // end : () => this.$getPos_tbTobb( productName, 0.9 ),
                            start : "67% bottom",
                            end : "90% bottom",
                            onUpdate : ( $self ) => {
                                let posX = cX - ( cX * $self.progress );
                                let posY = cY - ( cY * $self.progress );

                                Gsap.set( ".product-name__bg-img", { x: -posX, y:-posY });
                            }
                        },
                    }
                );

                productTimeline.fromTo( ".product-effect",
                    {
                        y: "100vh",
                    },
                    {
                        y : "-120vh",
                        ease:Linear.easeOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.85 ),
                            // end : () => this.$getPos_tbTobt( productName, 1.0 ),
                            start : "85% bottom",
                            end : "bottom top",
                        },
                    }
                );

                productTimeline.fromTo( ".product-effect .line",
                    {
                        width: 0,
                    },
                    {
                        width : "540px",
                        ease:Power2.easeInOut,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.87 ),
                            // end : () => this.$getPos_tbTobt( productName, 0.89 ),
                            start : "87% bottom",
                            end : "89% top",
                        },
                    }
                );

                productTimeline.fromTo( ".product-effect .desc-text",
                    {
                        opacity:0, y: "25vh",
                    },
                    {
                        opacity:1, y: "0vh",
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : ".product-name",
                            scrub : 0,
                            // start : () => this.$getPos_tbTobb( productName, 0.88 ),
                            // end : () => this.$getPos_tbTobt( productName, 0.89 ),
                            start : "88% bottom",
                            end : "89% top",
                        },
                    }
                );

                const productNameBg = document.querySelector( ".product-name__bg" );
                const productContainer = this.$el.getElementsByClassName( "product-container" )[ 0 ];
                productTimeline.fromTo( ".product-effect__bx-container",
                    {
                        y:"0vh",
                    },
                    {
                        y:"50vh",
                        ease:Linear.easeNone,
                        scrollTrigger : {
                            scroller: this.stWrapper,
                            trigger : productContainer,
                            scrub : true,
                            // start : () => this.$getPos_tbTobb( productName, 1 ),
                            // end : () => this.$getPos_tbTobb( productName, 1 ) + ( window.innerHeight * 3 ),
                            start : "bottom bottom",
                            end : "bottom top",
                        },
                    }
                );

                ScTrigger.create({
                    scroller: this.stWrapper,
                    animation : productTimeline,
                    trigger : productContainer,
                    // start : () => this.$getPos_ttTobt( productContainer, 0 ),
                    // end : () => this.$getPos_ttTobb( productContainer, 1 ),
                    start : "top top",
                    end : "bottom bottom",
                    pin : this.$el.querySelector( ".product-img__bx" ),
                    pinSpacing : false,
                });
            },

            killScrollTrigger(){

            },

            resizeListener( $e ){
                let wW = ( window.innerWidth < 1280 ) ? 1280 : window.innerWidth;
                let wH = window.innerHeight;
            },

            getHeightVH( $target ){
                let posY = 100 - ((( window.innerHeight - $target.clientHeight ) / window.innerHeight ) * 100 );
                return posY;
            },

        }
    }
</script>


<style scoped lang="scss">

    section{
        .product-container{
            width: 100%;
            .product-container__bx{
                position: relative;
                background-color: $color-set-gray;
                .product-info__bx{
                    > div{
                        position: relative;
                        .product-img__bx{
                            position: absolute;
                            width: 100%;
                            height: 2700vh;
                            left: 0;
                            top: 0;
                            .product-img{
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                height: 100vh;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                .product-img__content-bx{
                                    position: relative;
                                    width: 397px;
                                    height: 624px;
                                    img{
                                        width: 100%;
                                    }

                                    .product-img__content-gradient{
                                        position: absolute;
                                        width: 100%;
                                        height: 100%;
                                        left: 0;
                                        top: 0%;
                                        opacity: 1;
                                        transform: translate3d(0,100%,0);
                                        /*background-image: -webkit-linear-gradient(to bottom, tgba( 255, 255, 255, 0 ) 0%, #EEF3F4 0%);*/
                                        /*background: -webkit-linear-gradient(rgba(#EEF3F4, 0), #EEF3F4 200%)*/
                                    }
                                }
                            }
                        }

                        .product-info__bx-container{
                            position: relative;
                            width: $stage-contents-width;
                            margin: 0 auto;
                            height: 800vh;
                            .product-list{
                                position: absolute;
                                left: 0;
                                top: 0;
                                width: 100%;
                                display: flex;

                                &.product-make {
                                    dl {
                                        width: 100%;
                                        display: flex;
                                        justify-content: space-between;

                                        dt {
                                            font-size: $h1-font-size;
                                            width: 330px;
                                            margin-left: 70px;
                                            text-align: center;
                                        }

                                        dd {
                                            font-size: $font-size-xl;
                                            width: 400px;
                                            font-weight: 700;
                                        }
                                    }
                                }

                                &.product-info {
                                    dl {
                                        width: 100%;
                                        display: flex;
                                        justify-content: space-between;

                                        dt {
                                            font-size: $h1-font-size;
                                            width: 330px;
                                            margin-left: 70px;
                                            text-align: center;
                                        }

                                        dd {
                                            font-size: $font-size-xl;
                                            width: 400px;
                                            font-weight: 700;
                                        }
                                    }
                                }
                            }
                        }

                        .product-name {
                            /*border: 1px solid black;*/
                            margin-top: -100vh;
                            position: relative;
                            width: 100%;
                            height: 1400vh;
                            display: block;

                            .product-name__bx{
                                width: 100%;
                                height: 100vh;
                                position: absolute;
                                display: flex;
                                align-items: center;
                                justify-content: center;

                                dl {
                                    height: 100vh;
                                    width: $stage-contents-width;
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;

                                    .product-name__title {
                                        font-size: $h1-font-size;
                                        width: 330px;
                                        margin-left: 70px;
                                        text-align: center;
                                        margin-bottom: 10px;

                                        .product-name__title-bx{
                                            overflow: hidden;
                                            height: 50px;
                                        }
                                    }

                                    .product-name__sub {
                                        width: 400px;
                                        font-size: 0;

                                        .product-name__list{
                                            height: 50px;
                                            overflow: hidden;
                                            margin-bottom: 5px;
                                            > ul{
                                                li{
                                                    font-size: $h1-font-size;
                                                }
                                            }
                                        }

                                        .product-name__line {
                                            > div {
                                                span {
                                                    position: relative;
                                                    top: -2px;
                                                    display: inline-block;
                                                    width: 218px;
                                                    height: 5px;
                                                    background-color: #00916D;
                                                }
                                            }
                                        }
                                    }
                                }

                                .product-effect__bx-container{
                                    /*clip-path: url( #product-name__mask );*/
                                    position: absolute;
                                    width: 100%;
                                    height: 100vh;
                                    left: 0;
                                    top: 0;
                                    overflow: hidden;
                                    .product-cica{
                                        position: absolute;
                                        width: 100%;
                                        height: 100vh;
                                        left: 0;
                                        top: 0;
                                        font-size: 0;

                                        .product-cica__mask{
                                            svg{
                                                width: 0;
                                                height: 0;

                                                rect{
                                                    position: relative;
                                                    visibility : hidden;
                                                }
                                            }
                                        }

                                        .product-name__bg{
                                            width: 100%;
                                            height: 100vh;
                                            position: relative;
                                            /*height: 120vh;*/
                                            /*margin: 0 auto;*/

                                            .product-name__bg-mask{
                                                position: absolute;
                                                width: 96px;
                                                height: 5px;
                                                overflow: hidden;
                                                visibility: hidden;

                                                .product-name__bg-img{
                                                    position: absolute;
                                                    left: 0;
                                                    top: 0;
                                                    width: 100vw;
                                                    height: 100vh;
                                                    min-width: 1280px;

                                                    background-repeat: no-repeat;
                                                    background-size: cover;
                                                    background-position: center;

                                                    background-color: black;
                                                    video {
                                                        object-fit: cover;
                                                        width: 100%; height: 100%;
                                                    }
                                                }
                                            }

                                        }
                                    }

                                    .product-effect{
                                        position: relative;
                                        width: $stage-contents-width;
                                        margin: 0 auto;
                                        left: 0;
                                        top: 0;
                                        font-size: 0;
                                        .product-effect__bx{
                                            width: 100%;
                                            ul{
                                                li{
                                                    /*text-align: center;*/
                                                    color: white;
                                                    &:nth-child( 1 ){
                                                        font-family: $font-family-sans-serif_light;
                                                        font-size: 64px;
                                                        margin-bottom: 371px;
                                                        p {
                                                            line-height: 1.2;
                                                            font-weight: 600;
                                                            &:nth-child( 1 ){
                                                                font-size: $h1-font-size;
                                                                margin-bottom: 35px;
                                                                font-weight: 400;
                                                            }
                                                        }
                                                    }

                                                    &:nth-child( 2 ){
                                                        font-size: $h2-font-size;
                                                        margin-bottom: 0;
                                                        font-weight: 400;
                                                    }

                                                    .line {
                                                        position: absolute;
                                                        width: 180px;
                                                        height: 1px;
                                                        background-color: white;
                                                        margin-top: 160px;
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
        }
    }

    .mobile, .tablet {
        section {
            position: relative;
            .inner-wrap {
                .skineffect-wrap {
                    position: relative;
                    z-index: 1;
                    background-color: $color-set-gray;
                    height: 180vh;
                    /*padding-top: 50px;*/

                    display: flex;
                    flex-direction: column;
                    /*justify-content: center;*/
                    align-items: center;

                    .skineffect-con {
                        display: flex;
                        height: 100vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        .img-wrap {
                            width: 280px;
                            img {width: 100%}
                        }

                        .text-wrap {
                            position: relative;
                            display: flex;
                            font-size: $font-size-xl;
                            //font-family: $font-family-sans-serif_light;
                            span {
                                transition: opacity 0.2s;
                            }
                            .skin-txt {
                                margin-right: 14px;
                                transition: transform 0.5s $vars_easeInOutCubic;
                            }

                            .list-txt {
                                position: relative;
                                height: 34px;
                                overflow: hidden;
                                transition: transform 0.5s $vars_easeInOutCubic;

                                &:after {
                                    display: none;
                                }

                            }
                            .line {
                                position: absolute;
                                width: 130px; height: 2px;
                                background-color: $color-set-green;
                                bottom: 0;
                                pointer-events: none;
                                right: 0;
                                transition: transform 0.5s $vars_easeInOutCubic;
                            }

                            &.combine {
                                span {
                                    opacity: 0;
                                }
                                .skin-txt {
                                    transform: translate3d(54px,0,0);
                                }

                                .list-txt {
                                    transform: translate3d(40px,0,0);
                                }

                                .line {
                                    transform: translate3d(-25px,0,0) scaleX(0.8);


                                }
                            }

                        }
                    }


                }

                .asiatica-wrap {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    background-color: black;
                    z-index: 0;
                    pointer-events: none;

                    .product-effect__bx {
                        position: relative;

                        // 배경 이미지
                        &:before {
                            //opacity: 0;
                            //transition: opacity 0.3s;
                            //content: ' ';
                            //display: block;
                            //background-image: url( ../../../static/images/main/comp-a_bg-mobile.jpg );
                            //background-position: center;
                            //background-size: cover;
                            //height: 100vh;
                            //width: 100vw;
                            //top: 0;
                            //bottom: 0;
                            //left: 0;
                            //right: 0;
                            //position: fixed;
                            //z-index: 0
                        }

                        // 배경 비디오
                        .product-name__bg-img-m{
                            position: fixed;
                            z-index: 0;
                            width: 100%;
                            height: 100vh;
                            left: 0;
                            top: 0;
                            video{
                                opacity: 0;
                                width: 100%;
                                height: 100vh;
                                object-fit: cover;
                            }
                        }

                        width: 100%;
                        position: absolute;
                        top: 0px;
                        padding: 148px 30px 70px;
                        box-sizing: border-box;
                        color: white;

                        ul {
                            position: relative;
                            z-index: 1;
                            li {
                                &.title-con{
                                    position: relative;
                                    font-family: $font-family-sans-serif_light;
                                    font-size: $font-size-m-3xl;
                                    font-weight: 400;
                                    line-height: 1.2;
                                    padding-bottom: 75px;
                                    box-sizing: border-box;

                                    p {
                                        &.title-con__title {
                                            font-size: $font-size-lg;
                                            font-weight: 600;
                                        }

                                        &.title-con__sub {
                                            margin-top: 18px;
                                            font-size: $font-size-2xl;
                                            font-weight: 700;
                                            width: 270px;
                                            line-height: 36px;
                                        }
                                    }


                                    .title-con__line {
                                        display: block;
                                        content: '';
                                        position: absolute;
                                        width: 100%;
                                        height: 1px;
                                        left: 0; bottom: 0;
                                        background-color: rgba( 255, 255, 255, 0.7 );
                                        transition: background-color 0.2s, opacity 0.2s;
                                    }

                                }

                                &.desc-con{
                                    position: relative;
                                    margin-top: 72px;
                                    font-size: $font-size-m-me;
                                    line-height: 28px;
                                    font-weight: 700;
                                    width: 240px;
                                }
                            }
                        }
                    }

                    &.show {
                        .product-effect__bx {
                            &:before {
                                opacity: 1;
                            }
                        }
                    }
                }
            }
        }
    }

    .ie{
        section{
            background-color: $color-set-gray;
            position: relative;
            height: auto;
            .kineff-bx{
                width: 1280px;
                margin: 0 auto;
                padding: 0px 0 250px;
                .kineff-product{
                    width: 1200px;
                    height: 110vh;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 76px;
                    box-sizing: border-box;
                    //margin-bottom: 150px;

                    .kineff-product__txt{
                        width: 50%;
                        padding-top: 74px;
                        ul{
                            li{
                                width: 407px;
                                dl{
                                    dt{
                                        font-size: 38px;
                                        line-height: 46px;
                                        font-family: $font-family-sans-serif_medium;
                                        margin-bottom: 12px;
                                    }

                                    dd{
                                        font-size: $font-size-m-lg;
                                        line-height: 36px;
                                        font-weight: 400;
                                    }
                                }

                                &:first-child{
                                    border-bottom: 1px solid black;
                                    padding-bottom: 50px;
                                    margin-bottom: 50px;
                                }
                            }
                        }
                    }

                    .kineff-product__img{
                        width: 50%;
                        text-align: right;
                        img{
                            width: 266px;
                        }
                    }
                }

                .kineff-info{
                    width: 1200px;
                    margin: 0 auto;
                    box-sizing: border-box;
                    padding: 0 76px;
                    margin-bottom: 120px;
                    ul{
                        display: flex;
                        justify-content: center;
                        li{
                            width: 33.3333%;
                            > div{
                                border: 1px solid #979797;
                                border-radius: 100%;
                                overflow: hidden;
                                width: 380px;
                                height: 380px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-wrap: wrap;

                                dl{
                                    text-align: center;
                                    dt{
                                        font-size: $font-size-m-xl;
                                        line-height: 30px;
                                        font-family: $font-family-sans-serif_light;
                                        margin-bottom: 14px;
                                    }

                                    dd{
                                        font-size: $font-size-m-2xl;
                                        line-height: 42px;
                                        font-family: $font-family-sans-serif_light;
                                    }
                                }
                            }
                        }
                    }
                }

                .kineff-logo{
                    display: flex;
                    justify-content: center;
                    .logo{
                        width: 285px;
                        height: 90px;
                    }
                }
            }




            .product-container{
                position: relative;
                .product-container__bx{
                    .product-info__bx{
                        > div{
                            .product-img__bx{
                                position: relative;
                                height: auto;
                                .product-img{
                                   position: relative;
                                    .product-img__content-bx{
                                        img{
                                        }

                                        .product-img__content-gradient{
                                           transform: translate3d( 0, 0, 0 );
                                            display: none;
                                        }
                                    }
                                }
                            }

                            .product-info__bx-container{
                               position: relative;
                               height: auto;
                                .product-info__bx-container__pin{
                                    position: relative;
                                }

                                .product-list{
                                    position: relative;
                                    height: 100vh;
                                    &.product-make {
                                        display: flex;
                                        align-items: center;
                                        justify-items: center;
                                        dl {
                                            dt {
                                            }

                                            dd {
                                            }
                                        }
                                    }

                                    &.product-info {
                                        display: flex;
                                        align-items: center;
                                        justify-items: center;
                                        dl {
                                            dt {
                                            }

                                            dd {
                                            }
                                        }
                                    }
                                }
                            }

                            .product-name {
                               position: relative;
                               height: auto;
                                margin-top: 0;
                                .product-name__bx{
                                    display: block;
                                    position: relative;
                                    height: auto;

                                    .product-name__inner-bx{
                                        position: relative;
                                    }

                                    dl {
                                        .product-name__title {
                                            .product-name__title-bx{
                                            }
                                        }

                                        .product-name__sub {
                                            .product-name__list{
                                                > ul{
                                                    li{
                                                    }
                                                }
                                            }

                                            .product-name__line {
                                                > div {
                                                    span {
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    .product-effect__bx-container{
                                        position: relative;
                                        height: auto;
                                        .product-cica{
                                            position: relative;
                                            height: auto;
                                            .product-cica__mask{
                                                svg{
                                                    rect{
                                                    }
                                                }
                                            }

                                            .product-name__bg{
                                                .product-name__bg-mask{
                                                    width: 100%;
                                                    height: 100%;
                                                    overflow: initial;
                                                    visibility: visible;

                                                    .product-name__bg-img{
                                                        video{
                                                            //display: none !important;
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                        .product-effect{
                                            left: 0;
                                            top: 0;
                                            width: 100%;
                                            height: 100vh;
                                            position: absolute;
                                            display: flex;
                                            justify-items: center;
                                            align-items: center;
                                            .product-effect__bx{
                                                width: 1200px;
                                                margin: 0 auto;
                                                ul{
                                                    li{
                                                        margin: 0;
                                                        &:nth-child( 1 ){
                                                            margin-bottom: 70px;
                                                            p {
                                                                &:nth-child( 1 ){
                                                                    margin-bottom: 0px;
                                                                }
                                                            }
                                                        }

                                                        &:nth-child( 2 ){
                                                        }

                                                        .line{
                                                            display: none;
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
            }
        }
    }

    .windows{
        section{
            .kineff-bx{
                .kineff-product{
                    .kineff-product__txt{
                        ul{
                            li{
                                dl{
                                    dt{
                                    }

                                    dd{
                                    }
                                }

                                &:first-child{
                                }
                            }
                        }
                    }

                    .kineff-product__img{
                        img{
                        }
                    }
                }

                .kineff-info{
                    ul{
                        li{
                            > div{
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

                .kineff-logo{
                    .logo{
                    }
                }
            }

            .product-container{
                .product-container__bx{
                    .product-info__bx{
                        > div{
                            .product-img__bx{
                                .product-img{
                                    .product-img__content-bx{
                                        img{
                                        }

                                        .product-img__content-gradient{
                                        }
                                    }
                                }
                            }

                            .product-info__bx-container{
                                .product-info__bx-container__pin{
                                }

                                .product-list{
                                    &.product-make {
                                        dl {
                                            dt {

                                            }

                                            dd {
                                                font-size: 23px;
                                            }
                                        }
                                    }

                                    &.product-info {
                                        dl {
                                            dt {
                                            }

                                            dd {
                                                font-size: 23px;
                                            }
                                        }
                                    }
                                }
                            }

                            .product-name {
                                .product-name__bx{
                                    .product-name__inner-bx{
                                    }

                                    dl {
                                        .product-name__title {
                                            .product-name__title-bx{
                                            }
                                        }

                                        .product-name__sub {
                                            .product-name__list{
                                                > ul{
                                                    li{
                                                    }
                                                }
                                            }

                                            .product-name__line {
                                                > div {
                                                    span {
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    .product-effect__bx-container{
                                        .product-cica{
                                            .product-cica__mask{
                                                svg{
                                                    rect{
                                                    }
                                                }
                                            }

                                            .product-name__bg{
                                                .product-name__bg-mask{
                                                    .product-name__bg-img{
                                                        video{
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                        .product-effect{
                                            .product-effect__bx{
                                                ul{
                                                    li{
                                                        &:nth-child( 1 ){
                                                            p {
                                                                &:nth-child( 1 ){
                                                                }
                                                            }
                                                        }

                                                        &:nth-child( 2 ){
                                                        }

                                                        .line{
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
            }
        }
    }
</style>
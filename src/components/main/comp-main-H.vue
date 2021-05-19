
<template>
    <section class="section-wrap-h">

        <div class="product-wrap">
            <div class="img-con">
<!--                <img :src="'./images/main/main_soothing_care_cream.png'" alt="">-->
                <SqImage :isSetComp="isSetComp" :productPer="productPer"></SqImage>
            </div>
        </div>

        <div class="inner-wrap">
            <div class="contents-wrap">
                <div class="text-wrap">
                    <div class="text-con">
                        <div class="text-title-con">Soothing Care</div>
                        <div class="text-desc-con">
                            <p>아르니카 추출물과 병풀 추출물이</p>
                            <p>자극을 받아 예민한 피부에 쿨링 효과를 선사하여 피부를 진정시켜줍니다.</p>
                        </div>
                    </div>
                </div>

                <div class="soothing-wrap">
                    <ul>
                        <li>
                            <a href='./soothing-care/hydrarelief-cooling-gel-cream.html'>
                                <div class="hydracica_item_img">
                                    <img :src="'./images/main/soothing_cream.png'" alt="Hydrarelief CoolingGel Cream">
                                </div>
                                <div class="hydracica_item_txt">
                                    <h2>Hydrarelief<br>
                                        Cooling Gel Cream</h2>
                                    <div class="hydracica_item_price">￦46,000</div>
                                    <p>
                                        스트레스 받은 피부에 쿨링감을 주어
                                        피부 진정을 도와주는 수분 충전 젤 크림
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href='./soothing-care/hydrarelief-cream-on-mask.html'>
                                <div class="hydracica_item_img">
                                    <img :src="'./images/main/soothing_mask.png'" alt="Hydrarelief Creamon Mask">
                                </div>
                                <div class="hydracica_item_txt">
                                    <h2>Hydrarelief<br>
                                        Cream-on Mask</h2>
                                    <div class="hydracica_item_price">￦49,000</div>
                                    <p>
                                        진정 보습 크림을 그대로 담아
                                        스트레스 받은 피부를 부드럽게
                                        밀착 케어하는 멜팅 크림 마스크
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="bg-wrap" :style="{ backgroundImage : `url( ./images/main/main_soothing_care_bg.jpg )`}">
<!--                <img :src="'./images/main/main_soothing_care_bg.jpg'" alt="">-->
            </div>

        </div>


    </section>
</template>

<script>

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";
    import {EventBus} from "../../bus";
    import SqImage from "../common/comp-sq-jel-cream";

    export default {
        name: "comp-main-H",
        mixins: [
            MixinContents
        ],

        components: {
            SqImage
        },

        data(){
          return {
              productPer:0
          }
        },

        mounted() {




        },

        methods :{
            setScrollTrigger(){

                const _this = this;

                if(isMobile) {
                    const TlM = Timeline({
                        scrollTrigger:{
                            scrub: 0.5,
                            trigger:".section-wrap-h",
                            start:"top bottom",
                            end:"top -40%",
                            onUpdate: self =>
                                _this.productControl(self.progress)
                        }
                    })

                    TlM.fromTo(
                        '.section-wrap-h .product-wrap',
                        { y: "-3vh", rotate:'0deg'},
                        { ease: Power2.easeInOut,
                            y: "0vh", rotate:'-0deg'
                        }
                    );

                    TlM.fromTo(
                        '.section-wrap-h',
                        {},
                        {
                            scrollTrigger:{
                                scrub: 0,
                                scroller: this.stWrapper,
                                trigger:".section-wrap-h .inner-wrap",
                                start:"top top",
                                end:"bottom top",
                                onLeaveBack:() => {
                                    EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT)
                                },
                                onEnter:() => {
                                    EventBus.$emit(EventBus.CHANGE_NAV_WHITE)
                                },
                                onLeave:() => {
                                    // EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT)
                                },
                                onEnterBack:() => {
                                    EventBus.$emit(EventBus.CHANGE_NAV_WHITE)
                                }
                            }

                        }
                    )

                    const TlM_list = Timeline({
                        scrollTrigger:{
                            scrub: 0.5,
                            trigger:".section-wrap-h .soothing-wrap",
                            start:"top bottom",
                            end:"bottom bottom"
                        }
                    })

                    TlM_list.fromTo(
                        '.section-wrap-h .soothing-wrap ul li',
                        { y:100, opacity:0},
                        { y:0, opacity:1, stagger:0.20,
                            ease: Power1.easeOut,
                        }
                    )
                    return;
                }



                const Tl_sq = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-h .product-wrap",
                        start:"top bottom",
                        end:"bottom top",
                        onUpdate: self =>
                            _this.productControl(self.progress)
                    }
                })

                const Tl = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-h",
                        pin:".section-wrap-h .inner-wrap",
                        pinSpacing:false,
                        start:"top top",
                        end:"bottom top",
                        // start: () => this.$getPos_ttTobb(this.$el, 0),
                        // end: () => this.$getPos_ttTobb(this.$el, 1),
                        onLeaveBack:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT)
                        },
                        onEnter:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_WHITE)
                        },
                        onLeave:() => {
                            // EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT)
                        },
                        onEnterBack:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_WHITE)
                        }
                        // markers:true
                    }
                })

                // scene 1 - product
                Tl.fromTo(
                    '.section-wrap-h .product-wrap',
                    { y: "0"},
                    { ease: Linear.easeNone,
                        y: "100",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"0% bottom",
                            end:"10% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_ttTobt(this.$el, 0)
                        }},
                );


                // scene 2 - text split show
                Tl.fromTo(
                    '.section-wrap-h .text-wrap',
                    { y: "80vh"},
                    { ease: Power1.easeInOut,
                        y: "0",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"-10% top",
                            end:"30% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.25)
                        }},
                );

                // scene 2 - text split hide
                Tl.fromTo(
                    '.section-wrap-h .text-wrap',
                    { y: "0vh"},
                    { ease: Power1.easeInOut,
                        y: "-100vh",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"30% top",
                            end:"60% top"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.40),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.65)
                        }},
                );


                const textChars = this.$setSplitText(this.$el.querySelector('.text-title-con'));
                const descChars = this.$setSplitRowText(this.$el.querySelector('.text-desc-con'));


                const TlText = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger: '.section-wrap-h',
                        start:"1% top",
                        end:"50% bottom"
                        // start: () => this.$getPos_tbTobt(this.$el, 0.11),
                        // end: () => this.$getPos_ttTobt(this.$el, 0.36)
                    }
                })

                TlText.fromTo(
                    '.section-wrap-h .text-wrap .text-con',
                    { y: "10vh"},
                    { ease: Linear.easeNone,
                        y: "-5vh",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"1% top",
                            end:"60% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.1),
                            // end: () => this.$getPos_ttTobt(this.$el, 0.37)
                        }},
                );

                TlText.from(textChars, {duration: 0.4, opacity:0, y:0, stagger: 0.2}, "+=0");
                TlText.from(descChars, {duration: 0.2, opacity:0, y:0, stagger: 0.1}, "+=0");








                // scene 3 - soothing content show
                Tl.fromTo(
                    '.section-wrap-h .soothing-wrap',
                    { y: "100vh", opacity:1},
                    { ease: Power1.easeInOut,
                        y: "0", opacity:1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"35% top",
                            end:"60% top"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.35),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.65)
                        }},
                );

                // scene 3 - soothing content hide
                Tl.fromTo(
                    '.section-wrap-h .soothing-wrap',
                    { y: "0vh", opacity:1},
                    { ease: Power1.easeIn,
                        y: "-100vh",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"75% top",
                            end:"110% bottom"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.70),
                            // end: () => this.$getPos_tbTobt(this.$el, 1.0)
                        }},
                );



                Tl.fromTo(
                    '.section-wrap-h .soothing-wrap ul li:nth-child(1) .hydracica_item_img',
                    { y: 300, opacity:1},
                    { ease: Power2.easeOut,
                        y: "0", opacity:1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"40% top",
                            end:"80% top"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.35),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.75)
                        }},
                );

                Tl.fromTo(
                    '.section-wrap-h .soothing-wrap ul li:nth-child(1) .hydracica_item_txt',
                    { y: 400, opacity:1},
                    { ease: Power2.easeOut,
                        y: "0", opacity:1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"40% top",
                            end:"83% top"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.42),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.82)
                        }},
                );

                Tl.fromTo(
                    '.section-wrap-h .soothing-wrap ul li:nth-child(2) .hydracica_item_img',
                    { y: 300, opacity:1},
                    { ease: Power2.easeOut,
                        y: "0", opacity:1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"40% top",
                            end:"80% top"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.35),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.75)
                        }},
                );

                Tl.fromTo(
                    '.section-wrap-h .soothing-wrap ul li:nth-child(2) .hydracica_item_txt',
                    { y: 400, opacity:1},
                    { ease: Power2.easeOut,
                        y: "0", opacity:1,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"40% top",
                            end:"83% top"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.42),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.82)
                        }},
                );



                Tl.fromTo(
                    '.section-wrap-h .soothing-wrap ul',
                    { y: "10vh"},
                    { ease: Linear.easeNone,
                        y: "0vh",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"40% top",
                            end:"83% top"
                            // start: () => this.$getPos_tbTobt(this.$el, 0.6),
                            // end: () => this.$getPos_tbTobt(this.$el, 0.75)
                        }},
                );

                Gsap.set('.section-wrap-h .soothing-wrap', {y:'100vh', opacity:0});




                // bg img fixed show
                Tl.fromTo(
                    '.section-wrap-h .bg-wrap',
                    { y: "-100vh"},
                    { ease: Linear.easeNone,
                        y: "0",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"-50% top",
                            end:"0% top",
                            // markers: true
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_ttTobt(this.$el, 0)
                        }},
                );

                // bg img fixed hide
                /*Tl.fromTo(
                    '.section-wrap-h .bg-wrap',
                    { y: "0vh"},
                    { ease: Linear.easeNone,
                        y: "100vh",
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-h',
                            start:"100% bottom",
                            end:"150% bottom",
                            // start: () => this.$getPos_ttTobb(this.$el,1),
                            // end: () => this.$getPos_ttTobt(this.$el, 1)
                        }},
                );*/






            },

            killScrollTrigger(){

            },

            productControl(per){
                this.productPer = per;
            }

        }
    }
</script>

<style scoped lang="scss">

    section {
        position: relative;
        width: 100%;
        height: 700vh;
        background-color: #fff;

        .product-wrap {
            position: absolute;
            width: 100%;
            height: 100vh;
            display: flex; justify-content: center; align-items: center;
            z-index: 1;

            top: -40vh;

            .img-con {
                width: 436px;
                img{
                    width: 100%;
                }
            }
        }

        .inner-wrap {
            position: relative;
            width: 100%;
            height: 100vh;
            margin: 0 auto;



            .contents-wrap {
                position: relative;
                width: $stage-contents-width;
                margin: 0 auto;


                .text-wrap {
                    position: absolute;
                    width: $stage-contents-width;
                    margin: 0 auto;
                    height: 100vh;
                    z-index: 1;
                    color: white;

                    .text-con {
                        height: 100%;
                        display: flex; justify-content: center; align-items: center;
                        flex-direction: column;
                        text-align: center;

                        .text-title-con {
                            width: 60%;
                            font-family: $font-family-sans-serif_light;
                            font-size: 170px;
                            line-height: 155px;
                        }

                        .text-desc-con {
                            width: 60%;
                            margin-top: 60px;
                            font-size: $font-size-xl;
                        }
                    }
                }


                .soothing-wrap {
                    position: relative;
                    width: 923px;

                    margin: 0 auto;
                    box-sizing: border-box;
                    height: 100vh;
                    z-index: 1;
                    color: white;

                    ul {
                        display: flex; align-items: flex-end;
                        justify-content: space-between;
                        width: 100%; height: 85%;

                        li {

                            .hydracica_item_img {
                                width: 242px;
                                margin-bottom: 50px;
                                img {
                                    width: 100%;
                                    margin: 0 auto;
                                }
                            }

                            .hydracica_item_txt {
                                width: 267px;
                                h2 {
                                    font-family: $font-family-sans-serif_medium;
                                    font-size: $font-size-lg;
                                    margin-bottom: 10px;
                                    line-height: 1.2;
                                }

                                .hydracica_item_price{
                                    font-size: $font-size-base;
                                    line-height: 16px;
                                    color: #fff;
                                    margin-bottom: 30px;
                                    font-family: $font-family-kr;

                                }

                                p{

                                }

                            }


                            &:last-child {
                                .hydracica_item_img {
                                    width: 390px;
                                }

                                .hydracica_item_txt {
                                    width: 390px;
                                }
                            }
                        }
                    }
                }
            }


            .bg-wrap {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                overflow: hidden;

                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;

                /*background-image: url("../../../static/images/main/cleansing_care_bg_b.jpg");*/
                /*background-size: cover;*/

                img {
                    object-fit: cover;
                    width: 100%; height: 100%;
                }
            }


        }

    }

    .mobile {
        section {
            height: auto;

            .product-wrap {
                position: relative;
                width: 100%;
                height: 200px;
                top: 0;

                .img-con {
                    position: absolute;
                    width: 200px;
                    margin: 0 auto;
                    bottom: -50px;
                    img{
                        width: 100%;
                    }
                }
            }

            .inner-wrap {
                width: 100%;
                margin: 0 auto;
                padding: 176px 40px 90px;
                box-sizing: border-box;
                height: auto;
                display: block;

                .contents-wrap {
                    width: 100%;

                    .text-wrap {
                        position: relative;
                        width: 100%;
                        height: auto;

                        .text-con {
                            height: auto;

                            .text-title-con {
                                width: 233px;
                                font-family: $font-family-sans-serif_light;
                                font-size: $font-size-3xl;
                                line-height: 60px;
                            }

                            .text-desc-con {
                                width: 100%;
                                margin-top: 32px;
                                font-size: $font-size-s;
                            }
                        }
                    }


                    .soothing-wrap {
                        position: relative;
                        width: 100%;
                        height: auto;

                        box-sizing: border-box;

                        ul {
                            display: flex;
                            flex-direction: column; //align-items: center;
                            //justify-content: space-between;
                            width: 100%; height: auto;

                            li {
                                width: 100%;
                                margin-top: 75px;
                                text-align: center;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                border-bottom: 1px solid rgba( 255, 255, 255, 0.7 );
                                padding-bottom: 43px;

                                .hydracica_item_img {
                                    margin: 0 auto 20px;
                                    width: 132px;
                                    img {
                                        margin: 0 auto;
                                    }
                                }

                                .hydracica_item_txt {
                                    margin: 0 auto;
                                    width: 100%;
                                    h2 {
                                        font-family: $font-family-sans-serif_medium;
                                        font-size: $h5-font-size;
                                        margin-bottom: 10px;
                                    }

                                    .hydracica_item_price{
                                        font-size: 14px;
                                        margin-bottom: 20px;
                                        line-height: 18px;
                                    }

                                    p {
                                        font-size: $font-size-xs;
                                        line-height: 1.7;
                                    }

                                }

                                &:last-child {
                                    margin-bottom: 0;
                                    border-bottom: none;
                                    margin-top: 54px;
                                    padding-bottom: 0px;

                                    .hydracica_item_img {
                                        width: 146px;
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



    .ie, .tablet{
        section {
            height: auto;
            .product-wrap {
                position: relative;
                top: 0;
                height: auto;
                margin-bottom: -250px;
                .img-con {
                    img{
                    }
                }
            }

            .inner-wrap {
                height: auto;
                .contents-wrap {
                    .text-wrap {
                        position: relative;
                        padding-top: 352px;
                        margin-bottom: 100px;
                        height: auto;
                        .text-con {
                            .text-title-con {
                            }

                            .text-desc-con {
                            }
                        }
                    }

                    .soothing-wrap {
                        ul {
                            li {
                                .hydracica_item_img {
                                    img {
                                    }
                                }

                                .hydracica_item_txt {
                                    h2 {
                                    }
                                    p{

                                    }
                                }

                                &:last-child {
                                    .hydracica_item_img {
                                    }
                                }
                            }
                        }
                    }
                }

                .bg-wrap {
                    img {

                    }
                }
            }
        }
    }

    .windows{
        section {
            .product-wrap {
                .img-con {
                    img{
                    }
                }
            }

            .inner-wrap {
                .contents-wrap {
                    .text-wrap {
                        .text-con {
                            .text-title-con {
                            }

                            .text-desc-con {
                                font-size: 22px;
                            }
                        }
                    }

                    .soothing-wrap {
                        ul {
                            li {
                                .hydracica_item_img {
                                    img {
                                    }
                                }

                                .hydracica_item_txt {
                                    h2 {
                                    }
                                    p{
                                        font-size: 15px;
                                    }
                                }

                                &:last-child {
                                    .hydracica_item_img {
                                    }

                                    .hydracica_item_txt {
                                    }
                                }
                            }
                        }
                    }
                }

                .bg-wrap {
                    img {
                    }
                }
            }
        }
    }
</style>
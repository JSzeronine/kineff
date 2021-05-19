<template>
    <section class="section-wrap-g">

        <div class="inner-wrap">
            <!-- todo : hide-powder-wash -->
            <div class="hydracica_item_con hide-powder-wash">
                <ul>
                    <li>
                        <a href='./cleansing-care/hydracica-cleansing-oil.html'>
                            <div class="hydracica_item_img">
                                <img :src="'./images/main/main_hydracica_item_list_01.png'" alt="Hydracica Cleansing Oil">
                            </div>
                            <div class="hydracica_item_txt">
                                <h2>
                                    Hydracica<br>Cleansing Oil
                                </h2>

                                <div class="hydracica_item_price">￦33,000</div>
                                <p>
                                    메이크업과 노폐물을
                                    깨끗하게 지워내는
                                    마일드 클렌징 오일
                                </p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='./cleansing-care/hydracica-cleansing-foam.html'>
                            <div class="hydracica_item_img">
                                <img :src="'./images/main/main_hydracica_item_list_02.png'" alt="Hydracica Cleansing Foam">
                            </div>
                            <div class="hydracica_item_txt">
                                <h2>
                                    Hydracica <br>
                                    Cleansing Foam
                                </h2>
                                <div class="hydracica_item_price">￦26,000</div>
                                <p>
                                    미세 거품이 피부 노폐물을
                                    부드럽게 씻어내는
                                    약산성 클렌징 폼
                                </p>
                            </div>
                        </a>
                    </li>

                    <li class="powder-wash">
                        <a href='./cleansing-care/hydracica-powder-wash.html'>
                            <div class="hydracica_item_img">
                                <img :src="'./images/main/main_hydracica_item_list_03.png'" alt="Hydracica Powder Wash">
                            </div>
                            <div class="hydracica_item_txt">
                                <h2>
                                    Hydracica <br>
                                    Powder Wash
                                </h2>
                                <div class="hydracica_item_price">￦26,000</div>
                                <p>
                                    효소 성분이 묵은 각질과
                                    모공 속 노폐물까지
                                    말끔하게 씻어내는 파우더 워시
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";

    export default {
        name: "comp-main-G",
        mixins: [
            MixinContents
        ],

        mounted() {

        },

        methods: {

            killScrollTrigger() {

            },

            setScrollTrigger() {


                if(isMobile) {
                    const TlM = Timeline({
                        scrollTrigger:{
                            scrub: 0.5,
                            scroller: this.stWrapper,
                            trigger:".section-wrap-g",
                            start:"top 90%",
                            end:"bottom 0%"
                        }
                    })

                    TlM.fromTo(
                        '.section-wrap-g .hydracica_item_con ul li',
                        { y:100, opacity:0},
                        { y:0, opacity:1, stagger:0.20,
                            ease: Power1.easeOut,
                        }
                    )

                    return;
                }

                const Tl = Timeline({})

                // scene 1 - kineff product
                Tl.fromTo(
                    '.section-wrap-g .hydracica_item_con ul li:nth-child(1)',
                    { y: "-40vh", rotate:'0deg'},
                    { ease: Power1.easeInOut,
                        y: "40vh", rotate:'0deg',
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-g',
                            start:"0% bottom",
                            end:"100% top",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 1)
                        }},
                )

                // scene 1 - kineff product
                Tl.fromTo(
                    '.section-wrap-g .hydracica_item_con ul li:nth-child(2)',
                    { y: "-30vh", rotate:'0deg'},
                    { ease: Power1.easeInOut,
                        y: "30vh", rotate:'0deg',
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-g',
                            start:"0% bottom",
                            end:"100% top",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 1)
                        }},
                )

                // scene 1 - kineff product
                Tl.fromTo(
                    '.section-wrap-g .hydracica_item_con ul li:nth-child(3)',
                    { y: "-20vh", rotate:'0deg'},
                    { ease: Power1.easeInOut,
                        y: "20vh", rotate:'0deg',
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-g',
                            start:"0% bottom",
                            end:"100% top",
                            // start: () => this.$getPos_tbTobt(this.$el, 0.0),
                            // end: () => this.$getPos_tbTobt(this.$el, 1)
                        }},
                )


            }
        }
    }
</script>

<style scoped lang="scss">

    section {
        position: relative;
        width: 100%;
        height: 200vh;

        display: flex;
        align-items: center;
        z-index: 1;
        background-color: white;

        /*background-color: yellow;*/

        .inner-wrap {
            width: $stage-contents-width;
            margin: 0 auto;

            padding: 0px 82px;
            box-sizing: border-box;

            & img {
                width: 100%;
            }

            .hydracica_item_con {
                width: 100%;

                ul {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;

                    li {
                        width: 250px;



                        .hydracica_item_img {
                            height: 530px;
                            margin-bottom: 50px;
                            width: 206px;
                            position: relative;
                            img {
                                margin: 0 auto;
                                position: absolute;
                                bottom: 0;
                            }
                        }
                        .hydracica_item_txt {
                            width: 80%;
                            h2 {
                                font-family: $font-family-sans-serif_medium;
                                font-size: $font-size-lg;
                                margin-bottom: 10px;
                                line-height: 1.2;
                            }

                            .hydracica_item_price{
                                font-size: $font-size-base;
                                line-height: 16px;
                                color: #000;
                                margin-bottom: 30px;
                                font-family: $font-family-kr;
                            }
                        }

                        &:first-child {
                            padding-left: 0;
                            .hydracica_item_img {
                                width: 160px;
                            }
                        }

                        &:last-child {
                            padding-right: 0;
                            .hydracica_item_img {
                                width: 140px;
                            }
                        }
                    }
                }

                &.hide-powder-wash {
                    display: flex;
                    justify-content: center;
                    ul {
                        width: 80%;
                    }
                    .powder-wash {
                        display: none;
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
                padding: 0;

                .hydracica_item_con {
                    padding: 110px 0 140px;
                    ul {
                        display: flex;
                        width: 100%;
                        flex-direction: column;
                        box-sizing: border-box;
                        padding: 0 40px;

                        li {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 100%;
                            padding-bottom: 40px;
                            border-bottom: 1px solid #A5A5A5;

                            .hydracica_item_img {
                                height: 200px;
                                /*margin-bottom: 30px;*/
                                width: 70px;
                                margin: 0 auto 30px;
                                img {
                                    /*object-fit: contain;*/
                                    /*width: 100%; height: 100%;*/
                                }
                            }

                            .hydracica_item_txt {
                                width: 65%;
                                margin: 0 auto;
                                h2 {
                                    text-align: center;
                                    font-size: $font-size-lg;
                                    margin-bottom: 10px;
                                }

                                .hydracica_item_price{
                                    text-align: center;
                                    font-size: 14px;
                                    margin-bottom: 20px;
                                    line-height: 18px;
                                }

                                p {
                                    text-align: center;
                                    font-size: $font-size-xs;
                                    line-height: 1.7;
                                }
                            }

                            &:nth-child( 1 ){
                                .hydracica_item_txt{ width: 65%; }
                            }

                            &:nth-child( 2 ){
                                .hydracica_item_txt{
                                    width: 65%;
                                    p{
                                        width: 80%;
                                        margin: 0 auto;
                                    }
                                }
                            }

                            &:nth-child( 3 ){
                                .hydracica_item_txt{
                                    width: 65%;
                                    p{

                                    }
                                }
                            }

                            &:first-child {
                                padding-left: 0;
                                margin-top: 0px;
                                .hydracica_item_img {
                                    width: 58px;
                                }
                            }

                            &:last-child {
                                padding-right: 0;
                                padding-bottom: 0;

                                margin-bottom: 0;

                                border-bottom: none;
                                .hydracica_item_img {
                                    width: 60px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    .ie, .tablet{
        section {

            height: auto;

            .inner-wrap {
                padding: 200px 0;
                & img {
                }

                .hydracica_item_con {
                    ul {
                        li {
                            .hydracica_item_img {
                                img {
                                }
                            }

                            .hydracica_item_txt {
                                h2 {
                                }
                            }

                            &:first-child {
                                .hydracica_item_img {
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
        }
    }

</style>
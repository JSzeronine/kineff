<template>
    <div class="scroll-wrap">
        <div class="contact-wrap">

            <div class="bg-wrap">
                <div class="img-pc bg-pc" :style="{backgroundImage:'url(../images/contact/pc-contact-bg.jpg)'}"></div>
                <div class="img-m bg-m" :style="{backgroundImage:'url(../images/contact/m-contact-bg.jpg)'}"></div>
            </div>

            <div class="inner-wrap">
                <div class="contact-cont">
                    <div class="contact-tit">
                        키네프는 피부에 대한<br class="pc-br">
                        고민을 이해하고 그 마음을 헤아리며<br class="pc-br">
                        제품을 연구하고 있습니다.
                    </div>
                    <div class="contact-txt">
                        우리와 함께할 수 있는 다양한 제안을 기다립니다.<br class="pc-br">
                        제휴 문의나 관련된 문의 사항을 보내주시면, 담당자 검토 후<br class="pc-br">
                        친절하게 안내해드리겠습니다.
                    </div>
                </div>
                <div class="contact-address">
                    <div class="address-tit">contact</div>
                    <div class="address-list">
                        <div class="address-list-item">
                            <div class="address-name">email</div>
                            <p>
                                <a href="mailto:contact@kineff.co.kr">contact@kineff.co.kr</a>
                            </p>
                        </div>
                        <!--<div class="address-list-item">
                            <div class="address-name">fax</div>
                            <p><a href="tel:02-123-1234">02-123-1234</a></p>
                        </div>
                        <div class="address-list-item">
                            <div class="address-name">telephone</div>
                            <p><a href="tel:02-123-1234">02-123-1234</a></p>
                        </div>-->
<!--                        <div class="address-list-item last">-->
<!--                            <p>전화:02-123-1234</p>-->
<!--                        </div>-->
                    </div>
                    <!--<div class="address-time">
                        <div class="address-name">운영시간</div>
                        <ul>
                            <li>평일 AM 10:00 - PM 5:00</li>
                            <li>점심시간 PM 12:00 - PM 1:00</li>
                        </ul>
                    </div>-->
                </div>
            </div>
        </div>

<!--        <div class="visit-wrap">-->
<!--            <div class="inner-wrap">-->
<!--                <div class="visit-cont">-->
<!--                    <div class="visit-tit">-->
<!--                        키네프의 제품이 더-->
<!--                        궁금하신 분들을 기다립니다.-->
<!--                    </div>-->
<!--                    <div class="visit-txt">-->
<!--                        오프라인 매장에 방문하시면 제품을-->
<!--                        직접 체험해 보실 수 있으며, 매장 직원이 친절하게-->
<!--                        안내해드립니다.-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="visit-address">-->
<!--                    <div class="address-tit">visit</div>-->
<!--                    <div class="address-store">-->
<!--                        <div class="address-name store-name">offline<br class="br-none"> store</div>-->
<!--                        <p>-->
<!--                            서울시 강남구 도산대로 229, 6층 (신사동) <br class="br-none">-->
<!--                            229, Dosan-daero, Gangnam-gu, Seoul, <br class="br-none">-->
<!--                            Republic of Korea , 06026-->
<!--                        </p>-->
<!--                    </div>-->
<!--                    <div class="address-call">-->
<!--                        <div class="address-name call-name">telephone</div>-->
<!--                        <div>02-123-1234</div>-->
<!--                    </div>-->
<!--                    <div class="address-time">-->
<!--                        <div class="address-name time-name">opening<br class="br-none"> hours</div>-->
<!--                        <p>-->
<!--                            평일: AM10:00 - PM 07:00<br>-->
<!--                            주말: AM10:00 - PM 06:00<br>-->
<!--                            공휴일: AM10:00 - PM 05:00-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="map-wrap" @click="onClick_map">-->
<!--            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10610.766292706681!2d126.77960893555151!3d37.49490355508934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7d333cacf227%3A0x94f72c20a31e2456!2z642U67iU64u3!5e0!3m2!1sko!2skr!4v1596554706910!5m2!1sko!2skr"-->
<!--                    width="100%" height="100%" frameborder="0"-->
<!--                    style="border:0;" allowfullscreen=""></iframe>-->
<!--        </div>-->

        <Footer></Footer>
    </div>
</template>

<script>
    import MixinPage from "../../mixin/mixin-page";

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "../../bus";

    import Footer from "../common/comp-footer";



    export default {
        name: "Contact",

        mixins: [
            MixinPage
        ],

        components : {
            Footer,

        },

        mounted() {
            this.start();
        },

        methods: {
            start(){
                const time = 1.8;
                Gsap.fromTo('.contact-wrap .contact-cont', time, {alpha:0, y:60}, {y:0, alpha:1, delay:0.4, ease:Power2.easeOut});
                Gsap.fromTo('.contact-wrap .contact-address', time, {alpha:0, y:60}, {y:0, alpha:1, delay:0.8, ease:Power2.easeOut});
            },

            customInit(){},

            onClick_map(e){
                console.log("click",e.currentTarget)
                e.currentTarget.classList.add("active")

            }

        }
    }
</script>

<style scoped lang="scss">
    .scroll-wrap {
        .contact-wrap {
            display: flex;
            align-items: center;
            height: 100vh;
            .bg-wrap {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 1;
                width: 100%;
                height: 100vh;
                .bg-pc{
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                    width: 100%;
                    height: 100%;
                }
            }

             .inner-wrap {
                 display: flex;
                 justify-content: flex-start;
                 position: relative;
                 z-index: 2;
                 width: $stage-contents-width;
                 margin: 0 auto;
                 .contact-cont {
                     width: 490px;
                     margin-right: 130px;
                     font-family: $font-family-kr;
                     color: #fff;
                     .contact-tit {
                         position: relative;
                         width: 490px;
                         margin-bottom: 40px;
                         font-size: $h2-font-size;
                         line-height: 44px;
                         font-weight: 700;
                     }

                     .contact-txt {
                         width: 490px;
                         font-size: $font-size-me;
                         line-height: 28px;
                         font-weight: 300;

                     }
                 }

                 .contact-address {
                     display: flex;
                     flex-direction: column;
                     width: 400px;
                     color: #fff;

                     .address-tit {
                         margin-bottom: 41px;
                         padding-bottom: 25px;
                         border-bottom: 2px solid #fff;
                         font-size: $h1-font-size;
                         line-height: 48px;
                         font-family: $font-family-sans-serif_medium;
                     }

                     .address-list {
                         display: flex;
                         flex-direction: column;
                         padding-bottom: 40px;
                         border-bottom: 2px solid #fff;
                         .address-list-item {
                             display: flex;
                             align-items: center;
                             p {
                                 font-size: $h6-font-size;
                                 line-height: 31px;
                                 font-weight: 400;
                                 font-family: $font-family-kr;

                                 a{
                                     font-size: $h6-font-size;
                                     line-height: 31px;
                                     font-weight: 400;
                                     font-family: $font-family-kr;
                                 }
                             }
                         }

                         .address-name {
                             width: 73px;
                             margin-right: 52px;
                             font-size: $font-size-me;
                             line-height: 31px;
                             font-family: $font-family-sans-serif_medium;

                         }

                         .address-list-item.last {
                             margin-left: 125px;
                         }

                     }

                     .address-time {
                         display: flex;
                         .address-name {
                             margin-right: 71px;
                             font-size: $h6-font-size;
                             line-height: 31px;
                             font-weight: 700;
                             font-family: $font-family-kr;
                         }
                         ul {
                             li {
                                 font-size: $h6-font-size;
                                 line-height: 31px;
                                 font-weight: 400;
                                 font-family: $font-family-kr;
                             }
                         }

                     }
                 }
             }
         }

        .visit-wrap {
            padding: 0 0 224px 0;
            .inner-wrap {
                display: flex;
                justify-content: space-between;
                position: relative;
                width: $stage-contents-width;
                margin: 0 auto;

                .visit-cont {
                    border-top: 1px solid #979797;
                    width: 600px;
                    margin-right: 22px;
                    padding: 73px 0 0 0;
                    font-family: $font-family-kr;
                    .visit-tit {
                        width: 335px;
                        word-break: keep-all;
                        margin-bottom: 40px;
                        font-size: $font-size-2xl;
                        line-height: 38px;
                        font-weight: 400;
                    }

                    .visit-txt {
                        width: 335px;
                        word-break: keep-all;
                        font-size: $font-size-me;
                        line-height: 28px;
                        font-weight: 300;

                    }
                }

                .visit-address {
                    display: flex;
                    flex-direction: column;
                    width: 580px;
                    padding-left: 132px;
                    box-sizing: border-box;

                    .address-tit {
                        margin-bottom: 42px;
                        font-size: $h1-font-size;
                        line-height: 48px;
                        font-family: $font-family-sans-serif_light;
                    }


                    .address-store {
                        display: flex;
                        margin-bottom: 35px;

                        .store-name {
                            margin-right: 62px;
                        }

                        p {
                            line-height: 31px;
                            font-size: $font-size-m-me;
                            font-family: $font-family-kr;
                            font-weight: 300;
                        }

                    }
                    .address-call {
                        display: flex;
                        margin-bottom: 35px;

                        .call-name {
                            margin-right: 77px;
                            font-family: $font-family-sans-serif_light;
                        }

                        > div {
                            line-height: 31px;
                            font-size: $font-size-m-me;
                            font-family: $font-family-kr;
                            font-weight: 300;
                        }
                    }

                    .address-time {
                        display: flex;
                        margin-bottom: 35px;

                        .time-name {
                            margin-right: 42px;
                        }

                        p {
                            line-height: 31px;
                            font-size: $font-size-m-me;
                            font-family: $font-family-kr;
                            font-weight: 300;
                        }

                    }

                    & .address-name {
                        font-size: $font-size-m-me;
                        line-height: 31px;
                        font-family: $font-family-sans-serif_light;

                        .br-none {
                            display: none;
                        }
                    }
                }
            }
        }

        .map-wrap {
            height: 100vh;
            background-color: #efede6;

            iframe {
                pointer-events: none;
            }

            &.active {
                iframe {
                    pointer-events: auto;
                }

            }
        }
    }


    .mobile {
        .scroll-wrap {
            .contact-wrap {
                /*height: 915px;*/
                height: auto;
                position: relative;

                .bg-wrap {
                    height: 100%;
                    /*height: 915px;*/
                    .bg-m{
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: cover;
                        width: 100%;
                        height: 100%;
                    }

                }
                .inner-wrap {
                    background-color: rgba(0,0,0,0.1);
                    flex-direction: column;
                    width: 100%;
                    padding: 180px 30px 160px;
                    box-sizing: border-box;
                    .contact-cont {
                        border-top: none;
                        width: 100%;
                        margin-right: 0;
                        margin-bottom: 75px;
                        padding: 0;
                        font-family: $font-family-kr;
                        .contact-tit {
                            width: 230px;
                            margin-bottom: 30px;
                            font-size: $font-size-m-lg;
                            line-height: 27px;
                            &::after {
                                display: none;
                            }
                        }

                        .contact-txt {
                            width: 250px;
                            font-size: $font-size-s;
                            line-height: 25px;
                            font-weight: 300;

                        }
                    }

                    .contact-address {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        padding-left: 0;
                        box-sizing: border-box;

                        .address-tit {
                            margin-bottom: 20px;
                            padding-bottom: 20px;
                            font-size: 30px;
                            line-height: 35px;
                            font-family: $font-family-sans-serif;
                        }

                        .address-list {
                            margin-bottom: 25px;
                            padding-bottom: 15px;

                            .address-list-item {
                                margin-bottom: 0;
                                p {
                                    font-size: $font-size-xs;
                                    line-height: 24px;
                                    font-weight: 400;

                                    a {
                                        font-size: $font-size-xs;
                                        line-height: 24px;
                                        font-weight: 400;
                                    }

                                }
                            }

                            .address-name {
                                width: 73px;
                                margin-right: 16px;
                                margin-bottom: 0;
                                font-size: $font-size-xs;
                                line-height: 24px;
                                font-family: $font-family-sans-serif;

                            }

                            .address-list-item.last {
                                margin-left: 90px;
                            }

                        }

                        .address-time {
                            .address-name {
                                margin-right: 42px;
                                font-size: $font-size-xs;
                                line-height: 24px;
                                font-weight: 400;
                            }
                            ul {
                                li {
                                    font-size: $font-size-xs;
                                    line-height: 24px;
                                    font-weight: 400;
                                    font-family: $font-family-kr;
                                }
                            }

                        }
                    }
                }
            }

            .visit-wrap {
                padding: 0 0 114px 0;
                .inner-wrap {
                    flex-direction: column;
                    width: 100%;
                    padding: 0 28px;
                    box-sizing: border-box;
                    .visit-cont {
                        border-top: 1px solid #979797;
                        width: 100%;
                        margin-right: 0;
                        margin-bottom: 80px;
                        padding: 40px 0 0 0;
                        font-family: $font-family-kr;
                        .visit-tit {
                            position: relative;
                            width: 245px;
                            word-break: keep-all;
                            margin-bottom: 30px;
                            font-size: $font-size-m-lg;
                            line-height: 27px;

                            &::after {
                                position: absolute;
                                top: 196px;
                                left: 0;
                                display: block;
                                content: '';
                                width: 30px;
                                height: 1px;
                                background-color: rgba(0,0,0,.3);
                            }
                        }

                        .visit-txt {
                            width: 235px;
                            font-size: $font-size-s;
                            line-height: 24px;
                            font-weight: 300;

                        }
                    }

                    .visit-address {
                        flex-direction: column;
                        width: 100%;
                        padding-left: 0;
                        box-sizing: border-box;

                        .address-tit {
                            margin-bottom: 20px;
                            font-size: $font-size-2xl;
                            line-height: 36px;
                            font-family: $font-family-sans-serif;
                        }


                        .address-store {
                            display: flex;
                            margin-bottom: 35px;

                            .store-name {
                                margin-right: 52px;
                                word-break: initial;
                            }

                            p {
                                line-height: 24px;
                                font-size: $font-size-xs;
                                font-family: $font-family-kr;
                                font-weight: 400;
                                .br-none {
                                    display: none;
                                }
                            }

                        }
                        .address-call {
                            display: flex;
                            margin-bottom: 35px;

                            .call-name {
                                margin-right: 30px;
                                font-size: $font-size-xs;
                                font-family: $font-family-sans-serif;
                            }

                            > div {
                                line-height: 24px;
                                font-size: $font-size-xs;
                                font-family: $font-family-kr;
                                font-weight: 400;
                            }
                        }

                        .address-time {
                            display: flex;
                            margin-bottom: 0;

                            .time-name {
                                margin-right: 40px;
                            }

                            p {
                                line-height: 24px;
                                font-size: $font-size-xs;
                                font-family: $font-family-kr;
                                font-weight: 400;
                            }

                        }

                        & .address-name {
                            font-size: $font-size-xs;
                            line-height: 24px;
                            font-family: $font-family-sans-serif;

                            .br-none {
                                display: block;
                            }
                        }
                    }
                }

            }

            .map-wrap {
                height: 100vw;
            }
        }

    }

    .ie{
        .contact-wrap {
            .inner-wrap {
                .contact-cont {
                    .contact-tit {
                        width: 530px;
                    }

                    .contact-txt {
                    }
                }

                .contact-address {
                    width: 510px;
                    .address-tit {
                    }

                    .address-list {
                        .address-list-item {
                            p {
                                a{
                                }
                            }
                        }

                        .address-name {
                        }

                        .address-list-item.last {
                        }
                    }

                    .address-time {
                        ul {
                            li {
                            }
                        }
                    }
                }
            }
        }

        .visit-wrap {
            .inner-wrap {
                .visit-cont {
                    .visit-tit {
                    }

                    .visit-txt {
                    }
                }

                .visit-address {
                    .address-tit {
                    }

                    .address-store {
                        .store-name {
                        }

                        p {
                        }
                    }

                    .address-call {
                        .call-name {
                        }

                        > div {
                        }
                    }

                    .address-time {
                        .time-name {
                        }

                        p {
                        }
                    }

                    & .address-name {
                        .br-none {
                        }
                    }
                }
            }
        }

        .map-wrap {
            iframe {
            }

            &.active {
                iframe {
                }
            }
        }
    }





    .windows{
        .contact-wrap {
            .inner-wrap {
                .contact-cont {
                    .contact-tit {
                        font-size: 29px;
                        line-height: initial;
                    }

                    .contact-txt {
                    }
                }

                .contact-address {
                    .address-tit {
                    }

                    .address-list {
                        .address-list-item {
                            p {
                                a{
                                }
                            }
                        }

                        .address-name {
                        }

                        .address-list-item.last {
                        }
                    }

                    .address-time {
                        ul {
                            li {
                            }
                        }
                    }
                }
            }
        }

        .visit-wrap {
            .inner-wrap {
                .visit-cont {
                    .visit-tit {
                    }

                    .visit-txt {
                    }
                }

                .visit-address {
                    .address-tit {
                    }

                    .address-store {
                        .store-name {
                        }

                        p {
                        }
                    }

                    .address-call {
                        .call-name {
                        }

                        > div {
                        }
                    }

                    .address-time {
                        .time-name {
                        }

                        p {
                        }
                    }

                    & .address-name {
                        .br-none {
                        }
                    }
                }
            }
        }

        .map-wrap {
            iframe {
            }

            &.active {
                iframe {
                }
            }
        }
    }

</style>
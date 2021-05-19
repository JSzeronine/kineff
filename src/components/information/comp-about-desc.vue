
<template>
    <section class="about-desc-wrap">
        <div class="inner-wrap">
            <div class="skin-effect-txt-cont">
                <p>
                    키네프는 “skin effect”,<br>
                    즉 “피부를 위한 효과”라는 의미를 담은<br>
                    이름처럼 고민이 있는 피부에<br>
                    도움을 주기 위해 존재합니다.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../mixin/mixin-contents-sctrigger";
    import {EventBus} from "../../bus";

    export default {
        name: "section-about-desc",
        mixins : [
            MixinContents
        ],

        mounted() {

        },

        methods : {

            setScrollTrigger() {
                if(isMobile) {
                    return;
                }

                const Tl = Timeline({
                    scrollTrigger:{
                        scrub: 0,
                        scroller: this.stWrapper,
                        trigger:".about-desc-wrap",
                        start:"top top",
                        end:"bottom top",
                        onLeave:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
                        },
                        onLeaveBack:() => {},
                        onEnter:() => {},
                        onEnterBack:() => {
                            EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                        }
                    }
                })


                /*Tl.fromTo(
                    '.about-desc-wrap .img-wrap',
                    { opacity: 0},
                    { opacity: 1, ease: Power1.easeOut,
                        scrollTrigger: {
                            scrub: 0,
                            scroller: this.stWrapper,
                            trigger: 'about-main-wrap',
                            start:"top top",
                            end:"bottom top",
                        }}
                )*/

            },

            killScrollTrigger() {

            }
        }
    }
</script>

<style scoped lang="scss">

    .about-desc-wrap {
        width: 100%;
        padding: 166px 0 450px 0;
        background-color: #05140C;
        .inner-wrap {
            width: $stage-contents-width;
            margin: 0 auto;
            .skin-effect-txt-cont {
                color: #fff;
                p {
                    font-size: $font-size-xl;
                    font-weight: 300;
                    line-height: 40px;
                    font-family: $font-family-kr;
                }
            }
        }
    }

    .mobile {
        .about-desc-wrap {
            width: 100%;
            padding: 190px 0 146px 0;
            background-color: #05140C;
            .inner-wrap {
                width: 100%;
                padding: 0 30px;
                box-sizing: border-box;
                background-color: #05140C;
                .skin-effect-txt-cont {
                    p {
                        font-size: $font-size-m-me;
                        line-height: 26px;
                    }
                }
            }
        }
    }

</style>
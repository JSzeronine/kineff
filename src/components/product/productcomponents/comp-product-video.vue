<template>
    <section class="section-wrap-video">
        <div class="inner-wrap unable" @click="setInteraction" >
            <youtube-media class="video-wrap" @ready="ready" :video-id="videoId" player-width="100%" player-height="auto"></youtube-media>
        </div>
    </section>
</template>

<script>

    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import MixinContents from "../../../mixin/mixin-contents-sctrigger";
    import {EventBus} from "../../../bus";


    export default {
        name: "comp-product-video",
        mixins : [
            MixinContents
        ],
        components: {

        },

        data(){
            return {
                videoId:"Z61M0va7isU",
                player:""

            }
        },


        mounted() {

        },

        methods: {

            ready (event) {
                this.player = event.target
            },

            playVideo(){
                if(this.player)
                this.player.playVideo();
            },

            stopVideo(){
                if(this.player)
                this.player.stopVideo();
                // this.player.pauseVideo()
            },

            setInteraction(){
                this.$el.querySelector(".inner-wrap").classList.remove("unable")
            },

            killScrollTrigger() {

            },

            setScrollTrigger() {


                const _this = this;

                if(isMobile) {
                    const TlM = Timeline({
                        scrollTrigger:{
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger:".section-wrap-video",
                            start:"top bottom",
                            end:"bottom top",
                            onLeave:() => {
                                this.stopVideo();
                            },
                            onLeaveBack:() => {
                                this.stopVideo();
                            },
                            onEnter:() => {
                                this.playVideo();

                            },
                            onEnterBack:() => {
                                this.playVideo();
                            },
                        }
                    })


                    return;
                }


                const Tl = Timeline({
                    scrollTrigger:{
                        scrub: scScrub,
                        scroller: this.stWrapper,
                        trigger:".section-wrap-video",
                        start:"top bottom",
                        end:"bottom top",
                        onLeave:() => {
                            this.stopVideo();
                        },
                        onLeaveBack:() => {
                            this.stopVideo();
                        },
                        onEnter:() => {
                            this.playVideo();

                        },
                        onEnterBack:() => {
                            this.playVideo();
                        },
                    }
                })

                //nav control
                Tl.fromTo(".section-wrap-video .video-wrap",
                    {},
                    {
                        scrollTrigger: {
                            scrub: scScrub,
                            scroller: this.stWrapper,
                            trigger: '.section-wrap-video .video-wrap',
                            start:"top top",
                            end:"100% top",
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
                            },
                        }}
                )

            }
        }
    }
</script>

<style scoped lang="scss">

    section {
        position: relative;
        width: 100%;
        height: 100vh;
        background-color: white;

        padding-bottom: 400px;

        .inner-wrap {
            position: relative;
            width: 100%; height: 100%;
            margin: 0 auto;
            display: block;

            .video-wrap {
                z-index: 2;
                position: absolute;
                width: 100%; height: 56vw;
                min-height: 800px;
                max-height: 100vh;

            }

            &.unable {
                cursor: pointer;
                .video-wrap {
                    pointer-events: none;
                }
            }
        }
    }

    .mobile {
        section {
            position: relative;
            width: 100%;
            height: auto;
            padding-bottom: 100px;

            .inner-wrap {
                position: relative;
                /*width: $stage-contents-width;*/
                width: 100%;
                height: auto;
                display: block;
                .video-wrap {
                    position: relative;
                    height: 56vw;
                    min-height: unset;



                }

            }
        }
    }


    .ie, .tablet{
        section {
            //height: auto;
            padding-top: 200px;
            padding-bottom: 200px;


            .inner-wrap {
                height: auto;

                .video-wrap {
                    position: relative;
                    //height: auto;

                }
            }

        }
    }

</style>
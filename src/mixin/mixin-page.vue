<template>
    <div class="scroll-wrap">
    </div>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "../bus";
    import LocomotiveScroll from "locomotive-scroll";

    export default {
        name: "mixin-page",

        components: {

        },

        mounted() {
            if(isIE) return;
            this.imagesLoader();
        },

        data(){
            return {
                isSetComp:false,
                stWrapper:'',
                locoScroll:'',
                saveScrollX:0,
                saveMouseX:0,
            }
        },

        props: [
            "saveScroll"
        ],

        beforeDestroy() {
            if(this.locoScroll != ""){
                this.locoScroll.off("scroll", ScTrigger.update);
                this.locoScroll.destroy();
                this.locoScroll = '';
            }
            document.removeEventListener( "scroll", this.onScroll, {passive: true} );

        },

        destroyed() {

        },



        methods : {
            customInit(){
                //각 페이지별 init
            },

            imagesLoader(){
                var _this = this;
                var imgs = document.images,
                    len = imgs.length,
                    counter = 0;

                if(len){
                    [].forEach.call( imgs, function( img ) {
                        // console.log("img loading : ", len)
                        if(img.complete)
                            incrementCounter();
                        else
                            img.addEventListener( 'load', incrementCounter, false );
                    } );


                    function incrementCounter() {
                        counter++;
                        if ( counter === len ) {
                            _this.init()
                            // console.log("img load comp")
                        }
                    }
                } else {
                    this.init()
                }
            },

            init(){
                Gsap.registerPlugin(ScTrigger);

                if(window.isSmoothScroll && !isMobile){
                    this.stWrapper = this.$el;
                    this.setSmoothScroll();
                } else {
                    this.stWrapper = '';
                    document.addEventListener( "scroll", this.onScroll, {passive: true} );
                }
                this.isSetComp = true;

                EventBus.$emit(EventBus.LOAD_COMPLETE_EVENT);
                this.customInit();

                window.onbeforeunload = function () {
                    document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
                    document.body.scrollLeft = 0; // For Safari
                }

                document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
                document.body.scrollLeft = 0; // For Safari

            },


            setSmoothScroll(){
                this.locoScroll = new LocomotiveScroll({
                    el: this.stWrapper,
                    smooth: true,
                    lerp:0.1
                });

                this.locoScroll.on("scroll", this.onScroll);
                document.body.addEventListener( "scroll", this.onScrollX, {passive: true} );

                const _this = this;
                ScTrigger.scrollerProxy('.scroll-wrap', {
                    scrollTop(value) {
                        if(!_this.locoScroll) return;
                        return arguments.length ? _this.locoScroll.scrollTo(value, 0, 0) : _this.locoScroll.scroll.instance.scroll.y;
                    },
                    getBoundingClientRect() {
                        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                    },
                    pinType: this.stWrapper.style.transform ? "transform" : "fixed"
                });

                this.locoScroll.update();

                window.addEventListener("resize", function(){
                    _this.onResize();
                })
                this.onResize();

            },

            onResize(e){
                const html = document.querySelector("html");
                const scbar = document.querySelector(".h-scrollbar_thumb");
                if(window.innerWidth < 1280){
                    html.classList.add("has-scroll-h");
                    const per = window.innerWidth - (1280 - window.innerWidth);
                    scbar.style.width = per+"px";

                    this.addScrollX();
                } else {
                    html.classList.remove("has-scroll-h");

                    this.removeScrollX();
                }
            },

            onScroll(e){
                let scY = 0;
                if(isMobile){
                    const doc = document.documentElement;
                    scY = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                } else {
                    if(e.scroll)
                    scY = e.scroll.y;
                }

                EventBus.$emit(EventBus.SCROLL_EVENT, scY);
                ScTrigger.update();
            },


            onScrollX(e){
                // saveScrollX = -window.scrollX;
                // console.log(e.target.scrollLeft)
                const nav = document.querySelectorAll("header");
                Gsap.set(nav, {x:-e.target.scrollLeft})
                EventBus.$emit(EventBus.SCROLL_X_EVENT, e.target.scrollLeft);

                const scbar = document.querySelector(".h-scrollbar_thumb");
                Gsap.set(".h-scrollbar_thumb", {x:e.target.scrollLeft})

                /*const nav = document.querySelectorAll("header");

                saveScrollX = -window.scrollX;
                Gsap.set(nav, {x:saveScrollX});
                EventBus.$emit(EventBus.SCROLL_X_EVENT, saveScrollX);*/

                /*const fixCon = document.querySelectorAll(".pin-spacer .inner-wrap");
                const nav = document.querySelectorAll("header");
                // Gsap.set(fixCon, {x:-window.scrollX})
                // Gsap.set(nav, {x:-window.scrollX})
                saveScrollX = -window.scrollX;
                console.log(saveScrollX)
                EventBus.$emit(EventBus.SCROLL_X_EVENT, saveScrollX);*/
            },


            addScrollX(){
                const scbar = document.querySelector(".h-scrollbar_thumb");
                scbar.addEventListener("mouseover", this.onScBarOver);
                scbar.addEventListener("mouseout", this.onScBarOut);

                scbar.addEventListener("mousedown", this.onScBarDown);

                // scbar.addEventListener("mouseup", this.onScBarUp);
                // scbar.addEventListener("mouseleave", this.onScBarOut);

            },

            removeScrollX(){

            },

            onScBarOver(e){
                console.log("onScBarOver")
            },

            onScBarOut(e){
                console.log("onScBarOut")
            },

            onScBarDown(e){
                window.addEventListener("mousemove", this.onScBarMove);
                window.addEventListener("mouseup", this.onScBarUp);

                const html = document.querySelector("html");
                html.classList.add("has-scroll-dragging");

                this.saveScrollX =  e.screenX;
                this.saveMouseX =  document.documentElement.scrollLeft || document.body.scrollLeft;
            },

            onScBarUp(e){
                window.removeEventListener("mousemove", this.onScBarMove);
                window.removeEventListener("mouseup", this.onScBarUp);

                const html = document.querySelector("html");
                html.classList.remove("has-scroll-dragging")
            },

            onScBarMove(e){
                const tgX = e.screenX - this.saveScrollX;

                document.documentElement.scrollLeft = this.saveMouseX + tgX;
                document.body.scrollLeft = this.saveMouseX + tgX;
            },


        }
    }

</script>

<style scoped>

</style>
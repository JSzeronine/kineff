<template>
    <div class="circle-deco-wrap">
        <div class="circle-con">
            <div class="circle"></div>
            <!--<div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>-->
        </div>
    </div>
</template>

<script>
    import { EventBus } from "../../bus";

    export default {
        name: "CircleDecoration",

        mounted() {
            EventBus.$on(EventBus.DECO_CIRCLE_PLAY, this.moveStart);
            EventBus.$on(EventBus.DECO_CIRCLE_BACK, this.moveBack);
            this.randomAlign();
        },

        data(){
          return {
              stX:0,
              stY:0,
              moveGap:50,
          }
        },


        props:[
            "name"
        ],

        methods: {
            moveStart(name){
                if(this.name != name) return;
                // const circle = this.$el.querySelector(".circle-con");
                // Gsap.to(circle, 3, {x:(this.stX +0)+"vw", y:(this.stY+this.moveGap)+"vh", ease:Power2.easeInOut})

                const direction = Gsap.utils.random([-1, 1]);
                // console.log(direction)
                const circle = this.$el.querySelectorAll(".circle");
                Gsap.to(circle, 2.5, {x:direction * (this.moveGap)+"vh", ease:Power2.easeInOut, stagger: 0.2});
            },

            moveBack(name){
                if(this.name != name) return;
                // const circle = this.$el.querySelector(".circle-con");
                // Gsap.to(circle, 3, {x:(this.stX)+"vw", y:(this.stY)+"vh", ease:Power2.easeInOut})

                const circle = this.$el.querySelectorAll(".circle");
                Gsap.to(circle, 2.5, {x:0, ease:Power2.easeInOut, stagger: 0.2});
            },

            randomAlign(){
                this.stX = Gsap.utils.random(-25, 25);
                this.stY = Gsap.utils.random(-25, -20);

                const circle = this.$el.querySelector(".circle-con")
                Gsap.set(circle, {x:this.stX+"vw", y:this.stY+"%"});
            }

        }
    }
</script>

<style scoped lang="scss">
    .circle-deco-wrap {
        position: absolute;
        /*z-index: 999;*/
        top: 0; left: 0;
        width: 100%; height: 100%;


        .circle-con {
            position: fixed;
            width: 100vw;
            height: 100vh;

            display: flex;
            justify-content: center; align-items: center;

            /*top: 80vh;*/

            .circle {
                $circleSize:113px;

                margin-top: -$circleSize/2;
                margin-left: -$circleSize/2;
                position: absolute;
                width: $circleSize;
                height: $circleSize;
                border-radius: $circleSize;
                border: solid 1px #d8d8d8;
            }
        }

        /*&.move {
            .circle-con {
                transform: translate3d(-50vh,0,0);
            }
        }*/


    }

</style>
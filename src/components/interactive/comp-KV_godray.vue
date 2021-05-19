<template>
    <div class="canvas-wrap">

    </div>
</template>

<script>

    import GodraySprite from './godray-sprite'

    export default {
        name: "comp-kv-godray",

        data(){
            return {
                godray:'',
                renderReq:'',
                container:'',
                options:''
            }
        },

        props: [
          "isOnStage", "isSubKv"
        ],

        watch: {
            'isOnStage' (to, from) {
                if(to){
                    this.startRender();
                } else {
                    this.stopRender();
                }

            }
        },

        mounted(){
            this.setStage();
            this.addEvent();

        },

        beforeDestroy() {
            this.removeEvent();
            this.stopRender();
            this.container.removeChild(this.godray.container);
            this.godray.destroy();
        },

        methods: {

            start(){
                this.godray.show();
            },

            startRender(){
                this.$pixiCustom_startRender(this.$el, "0x00000000");
                this.render();
                this.resetSize();
            },

            stopRender(){
                this.$pixiCustom_stopRender();
                cancelAnimationFrame(this.renderReq);
            },

            resetSize(){
                this.$pixiCustom_resetSize(Math.max(window.innerWidth, 1280), (this.isSubKv ? 822 : window.innerHeight));
                this.godray.resetSize();
            },


            render(){
                this.renderReq = requestAnimationFrame(this.render);
                this.godray.render();
            },

            addEvent(){
                window.addEventListener('resize', this.resetSize);
            },

            removeEvent(){
                window.removeEventListener('resize', this.resetSize);
            },

            setEaseScroll(sc){
            },

            drawCircleGroup(){

            },

            setStage(){
                this.$pixiCustom_setting(this.$el);
                this.container = this.$pixiCustom_getContainer();
                this.options = this.$pixiCustom_getOption();

                this.godray = new GodraySprite(this.isSubKv);
                this.godray.render();

                this.container.addChild(this.godray.container);
            }
        }
    }
</script>

<style scoped lang="scss">
    .canvas-wrap {
        position: absolute;
        top: 0;
    }

</style>
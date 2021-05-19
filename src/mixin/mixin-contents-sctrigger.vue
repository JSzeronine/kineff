<template>
    
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import { EventBus } from "../bus";

    export default {
        name: "mixin-contents-sctrigger",

        components: {
        },
        data(){
            return {
                isPin:false,
                pinScrollX:0
            }
        },

        props: ["stWrapper", "isSetComp"],

        watch: {
            'isSetComp' (to, from) {
                if(to){
                    this.setScrollTrigger();
                } else {
                    this.killScrollTrigger();
                }

            }
        },

        methods : {
            onScrollX(x){
                if(this.isPin){
                    this.pinScrollX = x;
                } else {
                    this.pinScrollX = 0;
                }

            },

            init(){
                // EventBus.$emit(EventBus.CHANGE_NAV_WHITE);
                // EventBus.$emit(EventBus.CHANGE_NAV_DEFAULT);
            },

            setScrollTrigger(){
            },

            killScrollTrigger(){

            },




            // text split / container p 안에 " " 기준으로 텍스트 잘라서 span으로 append
            // p 기준으로 줄내림 span 추가해서 줄맞
            // return (자른후에 붙인 모든 span tag)

            $setSplitRowText(textCon){
                const textSplit = textCon.innerHTML.split(" ");
                const row = textCon.querySelectorAll("p");

                textCon.innerHTML = "";
                let appendHtml = "";

                for(let i=0 ; i<row.length ; i++){
                    let splitArr = row[i].innerHTML.split(" ");
                    Array.prototype.forEach.call(splitArr, (elem, index) => {
                        appendHtml += "<span>" + elem + " </span>";
                    });

                    if(i != row.length-1) appendHtml += "<span style='display: block'></span>";
                }

                const new_elem = document.createElement('p');
                new_elem.innerHTML = appendHtml;

                textCon.appendChild(new_elem);
                return textCon.querySelectorAll("span");
            },

            $setSplitText(textCon){
                const textSplit = textCon.innerHTML.split(" ");
                textCon.innerHTML = "";
                let appendHtml = "";
                Array.prototype.forEach.call(textSplit, (elem, index) => {
                    appendHtml += "<span>" + elem + " </span>";
                });
                const new_elem = document.createElement('p');
                new_elem.innerHTML = appendHtml;

                textCon.appendChild(new_elem);

                return textCon.querySelectorAll("span");
            },

            // pin - Top Top / Bottom Top (컨텐츠 상단 / 화면 상단 -> 컨텐츠 하단 / 화면 상단)
            $getPos_ttTobt(el, pos) {
                const BOUND = el.getBoundingClientRect();
                return (BOUND.top) + (BOUND.height * pos)
            },

            // pin - Top Top / Bottom Bottom (컨텐츠 상단 / 화면 상단 -> 컨텐츠 하단 / 화면 하단)
            $getPos_ttTobb(el, pos) {
                const BOUND = el.getBoundingClientRect();
                return (BOUND.top + (BOUND.height-window.innerHeight) * pos)
            },

            // non pin - Top Bottom / Bottom Top (컨텐츠 상단 / 화면 하단 -> 컨텐츠 하단 / 화면 상단)
            $getPos_tbTobt(el, pos) {
                const BOUND = el.getBoundingClientRect();
                return (BOUND.top - window.innerHeight) + ((BOUND.height + window.innerHeight) * pos)
            },

            // non pin - Top Bottom / Bottom Bottom ( 컨텐츠 상단 / 화면 하단 -> 컨텐츠 하단 / 화면 하단 )
            $getPos_tbTobb( el, pos ){
                const BOUND = el.getBoundingClientRect();
                return (BOUND.top - window.innerHeight) + ((BOUND.height ) * pos)
            }
        }
    }

</script>

<style scoped>

</style>

<template>
    <div class="sq-wrap">
        <div class="sq-con">
            <img :src="sqFileName" alt="Hydracica Ampoule">
        </div>

        <div class="loading-con" v-if="isSetComp">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1001.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1002.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1003.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1004.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1005.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1006.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1007.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1008.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1009.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1010.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1011.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1012.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1013.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1014.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1015.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1016.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1017.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1018.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1019.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1020.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1021.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1022.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1023.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1024.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1025.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1026.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1027.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1028.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1029.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1030.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1031.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1032.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1033.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1034.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1035.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1036.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1037.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1038.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1039.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1040.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1041.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1042.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1043.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1044.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1045.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1046.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1047.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1048.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1049.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1050.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1051.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1052.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1053.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1054.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1055.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1056.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1057.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1058.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1059.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1060.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1061.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1062.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1063.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1064.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1065.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1066.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1067.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1068.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1069.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1070.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1071.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1072.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1073.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1074.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1075.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1076.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1077.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1078.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1079.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1080.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1081.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1082.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1083.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1084.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1085.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1086.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1087.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1088.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1089.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1090.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1091.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1092.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1093.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1094.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1095.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1096.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1097.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1098.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1099.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1100.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1101.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1102.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1103.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1104.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1105.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1106.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1107.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1108.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1109.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1110.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1111.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1112.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1113.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1114.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1115.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1116.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1117.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1118.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1119.png' alt="Hydracica Ampoule">
            <img data-src='./images/main/sq_ampoule/kin_ampul.1120.png' alt="Hydracica Ampoule">


        </div>
    </div>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';

    export default {
        name: "comp-sq-ampoulr",

        data(){
            return {
                isNoSq: (isMobile || isIE) ? true : false,
                isLoaded:false,
                sq_tot:119,
                sq_st_tg:0,
                sq_index:0,
                tg_index:0
            }
        },
        watch: {
            productPer: function (val) {
                if(!this.isLoaded) return;
                this.tg_index = this.sq_st_tg + val * (1-this.sq_st_tg);
            },

            tg_index: function (val) {
                Gsap.to(this, 0.5, {sq_index:val, ease:Power1.easeOut})
            },

            isSetComp: function (val) {
                if(this.isNoSq) return;

                if(val && !this.isLoaded){
                    // page setting후에 이미지 로드 시작
                    Gsap.delayedCall(0.01, this.loadStart)
                }
            }
        },

        computed: {
            sqFileName: function () {
                let num = "0"+Math.ceil(this.sq_tot * 0.36);

                if(!this.isNoSq) {
                    num = Gsap.utils.mapRange(0, 1, 1, this.sq_tot+1, this.sq_index);
                    num = Gsap.utils.snap(1, num);

                    if(num < 10) num = "00"+num;
                    else if(num < 100) num = "0"+num;
                }

                return './images/main/sq_ampoule/kin_ampul.1'+num+'.png';
            }
        },

        props: [
            "isSetComp",
            "autoCenter",
            "productPer"
        ],

        mounted() {
        },

        methods : {
            loadStart(){
                const _this = this;

                const con = this.$el.querySelectorAll(".loading-con img");
                const len = con.length;
                let counter = 0;

                Array.prototype.forEach.call(con, (elem, index) => {

                    let src = elem.dataset.src;

                    elem.addEventListener( 'load', incrementCounter, false );
                    elem.src = src;

                    function incrementCounter() {
                        elem.classList.add("hidden");
                        counter++;
                        if ( counter === len ) {
                            _this.loadComplete();
                        }
                    }
                });
            },

            loadComplete(){
                // console.log("ampl sq load Complete")
                this.isLoaded = true;

                if(this.autoCenter){
                    this.sq_st_tg = 0.36;
                    Gsap.to(this, 2, {tg_index:this.sq_st_tg})
                }
            }

        }
    }
</script>

<style scoped lang="scss">
    .sq-wrap{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        .sq-con {
            img{
                width: 100%;
            }
        }

        .loading-con {
            position: absolute;
            left: -1000px;
            visibility: hidden;
            pointer-events: none;
            width: 1px; height: 1px;
            /*pointer-events: none;
            width: 50px;*/
            img{
                width: 100%;

                &.hidden {
                    display: none;
                }
            }
        }


    }

    .mobile {
        .sq-wrap {

        }
    }

    .ie{
        .sq-wrap{
            .sq-con{
                display: inline-block;
                margin: 0 auto;
                img{
                    width: 136px;
                }
            }
        }
    }


</style>
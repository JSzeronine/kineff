<template>
    <div class="comp-store" @mouseenter="mOver" @mouseleave="mOut">
        <a href="https://smartstore.naver.com/kineff" target="_blank">
            <span class="main-app__btn-txt">
                <span class="main-app__btn-txt__content">
                    <span>STORE</span>
                </span>
            </span>
            <img :src="convertLink( `./images/main/icon-app-btn.png` )" alt="스토어">
        </a>
    </div>

</template>

<script>
import { isMobile, isChrome, isIE } from 'mobile-device-detect';
import {EventBus} from "../../bus";

export default {
    name: "comp-store",

    data(){
        return{
            isShow : true,
        }
    },

    props : {
        isMain : {
            type : Boolean,
            default : false,
        }
    },

    mounted() {
        if( isIE ) {
            this.ieScrollListener( null );
            window.addEventListener("scroll", this.ieScrollListener);
        }

        EventBus.$on(EventBus.SCROLL_EVENT, this.scrollListener);
    },

    methods : {
        mOver(){
            if( !this.isShow ){
                this.show();
            }
        },

        mOut(){
            if( !this.isShow ){
                this.hide();
            }
        },

        ieScrollListener( $e ){
            let sT = window.scrollY || document.documentElement.scrollTop;
            this.showScroll( sT );
        },

        scrollListener(scY){
            this.showScroll( scY );
        },

        showScroll( $sT ){
            if( $sT > window.innerHeight ){
                if( this.isShow ){
                    this.hide();
                    this.isShow = false;
                }
            }else{
                if( !this.isShow ){
                    this.show();
                    this.isShow = true;
                }
            }
        },

        hide(){
            this.$el.classList.add( "off" );
        },

        show(){
            this.$el.classList.remove( "off" );
        },


        convertLink(link){
            let convert = link;
            if(!this.isMain){
                convert = "."+link;
            }
            return convert;
        }
    }
}
</script>

<style scoped lang="scss">

// navar smart store btn

.ie{
    .comp-store{
        &.off{
            a{
                .main-app__btn-txt{
                    left: 69px;
                    width: 64px;
                    .main-app__btn-txt__content{
                        > span{
                        }
                    }
                }
            }
        }

        a{
            .main-app__btn-txt{
                .main-app__btn-txt__content{
                    > span{
                        left: -8px;
                    }
                }
            }
        }
    }
}

.comp-store{
    position: fixed;
    z-index: 9999;
    right: 67px;
    bottom: 51px;
    transition: transform 0.1s;
    font-size: 0;
    overflow: hidden;

    &.off{
        a{
            .main-app__btn-txt{
                transition: width 0.5s 0.3s $vars_easeOutCubic;
                //transition: width 0.3s;
                width: 64px;
                .main-app__btn-txt__content{
                    //left: 71px;
                }
            }
        }
    }

    &:hover{
        //transform: scale( 0.95 );
    }

    a{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        .main-app__btn-txt{
            transition: width 0.3s $vars_easeOutCubic;
            z-index: 5;
            display: inline-block;
            position: relative;
            left: 71px;
            top: 3px;
            width: 136px;
            height: 65px;
            overflow: hidden;
            border-radius: 100px;
            -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.13);
            -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.13);
            box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.13);

            .main-app__btn-txt__content{

                box-sizing: border-box;
                padding-left: 21px;
                position: relative;
                background-color: #fff;
                width: 136px;
                height: 65px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border-radius: 100px;
                left: 0;
                top: 0;

                > span{
                    position: relative;
                    top: 2px;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 17px;
                    font-family: $font-family-kr;
                }
            }
        }

        img{
            z-index: 10;
            position: relative;
            display: inline-block;
            width: 77px;
        }
    }
}

.mobile{
    .comp-store{
        right: 20px;
        bottom: 20px;

        &.off{
            a{
                .main-app__btn-txt{
                    width: 46px;
                    .main-app__btn-txt__content{
                    }
                }
            }
        }

        a{
            .main-app__btn-txt{
                left: 54px;
                top: 2px;
                height: 51px;
                width: 123px;
                .main-app__btn-txt__content{
                    height: 51px;
                }
            }

            img{
                width: 60px;
            }
        }
    }
}
</style>
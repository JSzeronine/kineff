
<template>
    <footer>
        <div class="inner-wrap">
            <div class="footer_top">
                <nav class="footer_nav">
                    <ul class="nav-product">
                        <li class="nav-product-group"  @click="onClick_mbMenuGroup">
                            <div class="nav-group-title AllDayCare">
                                <a href="javascript:void(0);">ALL DAY CARE</a>
                                <div class="m-button">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul class="nav-product-group-item">
                                <li class="HydracicaAmpoule"><a :href="convertLink('./all-day-care/hydracica-ampoule.html')" >Hydracica Ampoule</a></li>
                                <li class="HydracicaToner"><a :href="convertLink('./all-day-care/hydracica-toner.html')" >Hydracica Toner</a></li>
                                <li class="HydracicaCream"><a :href="convertLink('./all-day-care/hydracica-cream.html')" >Hydracica Cream</a></li>
                                <li class="HydracicaCalmingMask"><a :href="convertLink('./all-day-care/hydracica-calming-mask.html')" >Hydracica Calming Mask</a></li>
                            </ul>
                        </li>

                        <li class="nav-product-group"  @click="onClick_mbMenuGroup">
                            <div class="nav-group-title CleansingCare">
                                <a href="javascript:void(0);">
                                    CLEANSING CARE
                                </a>
                                <div class="m-button">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul class="nav-product-group-item">
                                <li class="HydracicaCleansingOil"><a :href="convertLink('./cleansing-care/hydracica-cleansing-oil.html')" >Hydracica Cleansing Oil</a></li>
                                <li class="HydracicaCleansingFoam"><a :href="convertLink('./cleansing-care/hydracica-cleansing-foam.html')" >Hydracica Cleansing Foam</a></li>
                                <!-- todo : hide-powder-wash -->
<!--                                <li class="HydracicaPowderWash"><a :href="convertLink('./cleansing-care/hydracica-powder-wash.html')" >Hydracica Powder Wash</a></li>-->
                            </ul>
                        </li>

                        <li class="nav-product-group"  @click="onClick_mbMenuGroup">
                            <div class="nav-group-title SoothingCare">
                                <a href="javascript:void(0);">SOOTHING CARE</a>
                                <div class="m-button">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <ul class="nav-product-group-item">
                                <li class="HydrareliefCoolingGelCream"><a :href="convertLink('./soothing-care/hydrarelief-cooling-gel-cream.html')" >Hydrarelief Cooling Gel Cream</a></li>
                                <li class="HydrareliefCreamonMask"><a :href="convertLink('./soothing-care/hydrarelief-cream-on-mask.html')" >Hydrarelief Cream-on Mask</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul class="nav-info">
                        <li class="About"><a :href="convertLink('./about/')">ABOUT</a></li>
                        <li class="Contact"><a :href="convertLink('./contact/')">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <!-- //footer_top -->

            <div class="footer_bottom">
                <div class="footer_primary">
                    <h2 class="footer_logo">
                        <a :href="convertLink('./')">
                            <Logo :isWhite="true"></Logo>
                        </a>
                    </h2>
                    <p>ⓒ 2020. Holians All rights reserved.</p>
                </div>

                <div class="footer_address">
                    <div class="footer_custom">
                        <p>
                            <span>대표자: 최욱진</span>
                            <span>주소: 서울특별시 강남구 도산대로 229, 6층 (신사동)</span>
                            <span>사업자 등록번호: 269-88-01630</span>
                            <span>이메일: <a href="mailto:help@kineff.co.kr">help@kineff.co.kr</a></span>
                        </p>
                    </div>
                </div>

            </div>
            <!-- //footer_bottom -->
        </div>

    </footer>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import Logo from "../icon/Logo"

    export default {
        name: "comp-footer",

        components: {
            Logo
        },

        data() {
            return {
                mbMenuGroupH:62
            }
        },

        props: ["isMain"],

        mounted() {
            if(isMobile){
                // mobile menu
                this.setMbMenu();
            }

        },

        methods: {
            setMbMenu(){
                this.menuGroup = this.$el.querySelectorAll(".nav-product-group");

                Array.from(this.menuGroup).forEach((elem, index) => {
                    elem.dataset.openHeight = elem.offsetHeight;
                    elem.dataset.index = index;
                    elem.dataset.open = 0;
                    elem.style.height = this.mbMenuGroupH+"px";
                })
            },

            onClick_mbMenuGroup(e){
                if(!isMobile) return;
                const tg = e.currentTarget;
                let tgH = this.mbMenuGroupH;
                const _this = this;

                if(tg.dataset.open != 0){
                    //close
                    tg.dataset.open = 0;
                    tg.classList.remove("open");
                } else {
                    //open
                    Array.from(this.menuGroup).forEach((elem, index) => {
                        _this.mbMenuClose(tg.dataset.index)
                    });

                    tg.dataset.open = 1;
                    tg.classList.add("open");
                    tgH = e.currentTarget.dataset.openHeight;

                }
                Gsap.to(e.currentTarget, 0.5, {height:tgH, ease:Power3.easeInOut})

            },

            mbMenuClose(nonIndex){
                let tgH = this.mbMenuGroupH;
                Array.from(this.menuGroup).forEach((elem, index) => {
                    if(parseInt(nonIndex) != index){
                        elem.dataset.open = 0;
                        elem.classList.remove("open");
                        Gsap.to(elem, 0.5, {height:tgH, ease:Power3.easeInOut})
                    }
                });
            },

            // get
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
    footer {
        padding: 80px 50px;
        box-sizing: border-box;
        color: white;
        background-color: #000;
        position: relative;
        z-index: 888;
        .inner-wrap {
            display: flex;
            flex-direction: column;
            position: relative;
            margin: 0 auto;
            width: 100%;
            padding: 0 50px;
            box-sizing: border-box;
            min-width: 1100px;

            .footer_top {
                position: relative;
                padding-bottom: 120px;
                box-sizing: border-box;
                .footer_nav {
                    display: flex;
                    margin-top: 5px;
                    .nav-product {
                        display: flex;
                        .nav-product-group {
                            overflow: hidden;
                            .nav-group-title {
                                margin: 0 84px 20px 0;
                                a {
                                    pointer-events: none;
                                    display: block;
                                    padding: 20px 0;
                                    font-size: $font-size-s;
                                    font-family: $font-family-sans-serif;
                                    &:hover {
                                        color: $color-set-green;
                                    }
                                }
                            }

                            .nav-product-group-item {
                                a {
                                    display: block;
                                    padding: 8px 0;
                                    font-size: $font-size-s;
                                    font-family: $font-family-sans-serif;

                                    &:hover {
                                        color: $color-set-green;
                                    }
                                }
                            }
                        }
                    }

                    .nav-info {
                        display: flex;
                        li {
                            margin-right: 84px;
                            a {
                                display: block;
                                padding: 20px 0;

                                &:hover {
                                    color: $color-set-green;
                                }
                            }
                        }
                    }

                }
                &::before {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    background-color: rgba(255,255,255,0.25);
                }
            }

            .footer_bottom {
                position: relative;
                display: flex;
                justify-content: space-between;
                padding: 100px 0 0 0;
                box-sizing: border-box;
                font-size: $font-size-s;
                .footer_primary {
                    display: flex;
                    flex-direction: column;
                    .footer_logo {
                        width: 133px;
                        height: 43px;
                        margin-bottom: 30px;
                        a {
                            display: block;
                        }
                    }
                }

                .footer_address {
                    display: flex;
                    box-sizing: border-box;

                    .footer_custom {
                        display: flex;
                        align-items: flex-end;

                        p {
                            line-height: 25px;
                            font-size: $font-size-s;

                            span {
                                display: block;
                                width: 100%;
                                font-weight: 500;
                            }
                        }
                    }
                }

                &::before {
                    position: absolute;
                    top: 0;
                    left: 0;
                    content: '';
                    display: block;
                    width: 100%;
                    height: 1px;
                    background-color: rgba(255,255,255,0.25);
                }
            }
        }
    }


    .mobile, .tablet {
        footer {
            padding: 53px 40px 106px;

            .inner-wrap {

                margin: 0 auto;
                width: 100%;
                padding: 0;
                min-width: 100%;

                .footer_top {
                    padding-bottom: 0;
                    .footer_nav {
                        flex-direction: column;
                        .nav-product {
                            flex-direction: column;
                            .nav-product-group {
                                border-bottom: 1px solid rgba(255,255,255,0.25);
                                .nav-group-title {
                                    display: flex;
                                    justify-content: space-between;
                                    margin: 0;  /* 여백 */
                                    a { /* main nav */
                                        pointer-events: auto;
                                        padding: 24px 0;
                                        font-family: $font-family-sans-serif_medium;
                                        font-size: $h6-font-size;
                                        line-height: 19px;
                                    }

                                    .m-button {
                                        position: relative;
                                        width: 14px;
                                        height: 14px;
                                        margin: 22px 0;
                                        overflow: hidden;

                                        span {
                                            position: absolute;
                                            top: 6px;
                                            left: 0;
                                            display: block;
                                            background-color: #fff;
                                            width: 14px;
                                            height: 2px;
                                            transition: transform 0.2s;
                                            &:last-child {
                                                transform: rotate(90deg);
                                            }
                                        }
                                    }
                                }

                                .nav-product-group-item {
                                    padding: 0 0 8px 0;
                                    box-sizing: border-box;
                                    a { /* sub nav */
                                        padding: 8px 0;
                                        font-family: $font-family-sans-serif_light;
                                        font-size: $font-size-s;
                                    }
                                }

                                &.open {
                                    .m-button {
                                        span {
                                            &:last-child {
                                                transform: rotate(90deg) translateX(100%);

                                            }
                                        }
                                    }
                                }
                            }
                        }

                        .nav-info {
                            flex-direction: column;
                            padding: 15px 0;
                            box-sizing: border-box;
                            li {
                                margin-right: 84px;
                                a { /* main nav */
                                    display: block;
                                    padding: 10px 0;
                                    font-family: $font-family-sans-serif_medium;
                                    font-size: $font-size-base;
                                }
                            }
                        }

                    }
                    &::before {
                        display: none;
                    }
                }

                .footer_bottom {
                    flex-direction: column;
                    padding: 23px 0 0 0;
                    font-size: 13px;

                    .footer_primary {
                        margin-right: 0;
                        margin-bottom: 31px;

                        .footer_logo {
                            width: 59px;
                            height: 19px;
                            margin-bottom: 14px;
                        }
                    }

                    .footer_address {
                        flex-direction: column;

                        .footer_custom {
                            margin-right: 0;
                            margin-bottom: 17px;
                            p {
                                line-height: 22px;
                                font-size: 13px;

                                span {
                                    display: block;
                                    width: 100%;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                }
            }
            & img {
                width: 100%;
            }
        }
    }

    .ie{
        footer {
            .inner-wrap {
                .footer_top {
                    .footer_nav {
                        .nav-product {
                            .nav-product-group {
                                .nav-group-title {
                                    a {
                                        &:hover {
                                        }
                                    }
                                }

                                .nav-product-group-item {
                                    a {
                                        &:hover {
                                        }
                                    }
                                }
                            }
                        }

                        .nav-info {
                            li {
                                a {
                                    &:hover {
                                    }
                                }
                            }
                        }
                    }

                    &::before {
                    }
                }

                .footer_bottom {
                    display: block;
                    overflow: hidden;
                    .footer_primary {
                        float: left;
                        .footer_logo {
                            a {
                                .logo{
                                    height: 43px;
                                }
                            }
                        }
                    }

                    .footer_address {
                        float: right;
                        .footer_custom {
                            p {
                                span {
                                }
                            }
                        }
                    }

                    &::before {
                        top: 1px;
                    }
                }
            }
        }
    }
</style>

<template>
    <header :class="headerStyle">
        <div class="inner-wrap">
            <h1>
                <a :href="convertLink('./')">
                    <Logo class="logo" :isWhite="logoColor"></Logo>
                    <span class="blind">kineff</span>
                </a>
            </h1>

            <button class="btn-menu not-active" @click="onClick_mbMenuBtn">
                <div class="btn">
                    <span></span>
                    <span></span>
                </div>
            </button>

            <nav class="">

                <ul class="nav-product">
                    <li class="nav-product-group" @mouseover="onOver" @mouseout="onOut" @mouseleave="onOut" @click="onClick_mbMenuGroup">
                        <div class="nav-group-title AllDayCare">
                            <a href="javascript:void(0);" >ALL DAY CARE</a>
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

                    <li class="nav-product-group" @mouseover="onOver" @mouseout="onOut" @mouseleave="onOut" @click="onClick_mbMenuGroup">
                        <div class="nav-group-title CleansingCare">
                            <a href="javascript:void(0);" >
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
<!--                            <li class="HydracicaPowderWash"><a :href="convertLink('./cleansing-care/hydracica-powder-wash.html')" >Hydracica Powder Wash</a></li>-->
                        </ul>
                    </li>

                    <li class="nav-product-group" @mouseover="onOver" @mouseout="onOut" @mouseleave="onOut" @click="onClick_mbMenuGroup">
                        <div class="nav-group-title SoothingCare">
                            <a href="javascript:void(0);" >SOOTHING CARE</a>
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
<!--                    <li><a :href="convertLink('./all-day-care/product-all.html')">ALL</a></li>-->
                    <li class="About"><a :href="convertLink('./about/')">ABOUT</a></li>
                    <li class="Contact"><a :href="convertLink('./contact/')">CONTACT</a></li>
                </ul>
            </nav>
        </div>

        <div class="header-bg__black">

        </div>
    </header>
</template>

<script>
    import { isMobile, isChrome, isIE } from 'mobile-device-detect';
    import Logo from "../icon/Logo"
    import { EventBus } from "../../bus";

    export default {
        name: "comp-header",

        data(){
            return {
                saveScroll: 0,
                isWhite: true,
                isMbOpen: false, // mobile nav open / close
                isActive: true,  // scroll nav show / hide
                menuGroup:[],
                mbMenuGroupH:62,
                currentGroupIndex:-1
            }
        },

        props: ["isMain"],

        computed: {
            headerStyle(){
                let style = "";

                style += this.isWhite ? " white" : "";
                style += this.isActive ? "" : " deactive";
                style += this.isMbOpen ? (this.isActive ? " mb-open" : "") : "";

                return style;
            },

            logoColor() {
                let isWhite = false;
                if(this.isMbOpen) isWhite = true;
                if(this.isWhite) isWhite = true;

                return isWhite
            }
        },

        components: {
            Logo
        },


        mounted() {
            EventBus.$on(EventBus.CHANGE_NAV_WHITE, this.changeWhite);
            EventBus.$on(EventBus.CHANGE_NAV_DEFAULT, this.changeDefault);
            EventBus.$on(EventBus.SCROLL_EVENT, this.scrollListener);

            if( isIE ){
                window.addEventListener( "scroll", this.ieScrollListener );
            }


            if(isMobile){
                // mobile menu
                this.setMbMenu();
            } else {

                const _this = this;
                let ableOverTime = 0.5;

                // ableOverTime 지난후에 over 가능
                this.$el.style.pointerEvents = "none";
                Gsap.delayedCall(ableOverTime, function(){
                    _this.$el.style.pointerEvents = 'auto';
                });

                if(this.isMain){
                    this.$el.classList.add("non-pointer");
                    //main 일시에만 등장 모션
                    Gsap.fromTo("header .nav-product .nav-group-title a", 1.5,
                        {y:100}, {y:0, delay:1.5, ease:Power3.easeOut});

                    Gsap.fromTo("header .nav-info a", 1.5,
                        {y:100}, {y:0, delay:1.7, ease:Power3.easeOut, onComplete:function(){
                                _this.$el.classList.remove("non-pointer");
                            }});
                }
            }
        },

        methods: {
            ieScrollListener( $e ){
                var sT = window.scrollY || document.documentElement.scrollTop;

                if( sT > window.innerHeight ){
                    this.isWhite = false;
                }else{
                    this.isWhite = true;
                }
            },


            setMbMenu(){
                this.menuGroup = this.$el.querySelectorAll(".nav-product-group");

                Array.from(this.menuGroup).forEach((elem, index) => {
                    elem.dataset.openHeight = elem.offsetHeight;
                    elem.dataset.index = index;
                    elem.dataset.open = 0;
                    elem.style.height = this.mbMenuGroupH+"px";
                });

                if(GlobalPreset.groupName == "AllDayCare"){
                    this.currentGroupIndex = 0;
                } else if(GlobalPreset.groupName == "CleansingCare"){
                    this.currentGroupIndex = 1;
                } else if(GlobalPreset.groupName == "SoothingCare"){
                    this.currentGroupIndex = 2;
                }

                // this.mbMenuGroupControl(this.currentGroupIndex);
            },




            // mobile menu btn click
            onClick_mbMenuBtn(e){
                const btnMenu = this.$el.querySelector(".btn-menu");
                btnMenu.classList.toggle("active");
                btnMenu.classList.toggle("not-active");

                this.$el.classList.toggle("mb-nav-show");

                let navCon = this.$el.querySelector("nav");
                const html = document.querySelector("html");

                if(this.isMbOpen) {
                    //close
                    // Gsap.delayedCall(0.5, this.changeDefault);
                    // this.changeDefault();
                    this.isMbOpen = false;
                    this.mbMenuGroupControl(-1);

                    Gsap.to(navCon, 1.0, {x:-100+"%", ease:Power3.easeInOut})

                    html.classList.remove("mb-open");

                } else {
                    //open
                    // Gsap.killTweensOf(this.changeDefault);
                    // this.changeWhite();
                    this.isMbOpen = true;

                    Gsap.to(navCon, 0.8, {x:0, ease:Power3.easeInOut});

                    const title = this.$el.querySelectorAll(".nav-product-group .nav-group-title a");
                    Gsap.fromTo(title, 0.8, {y:100}, {y:0, ease:Power3.easeOut, stagger:0.1, delay:0.2})

                    const info = this.$el.querySelectorAll(".nav-info li a");
                    Gsap.fromTo(info, 1.0, {y:100}, {y:0, ease:Power3.easeOut, stagger:0.1, delay:0.2+(0.2)})

                    html.classList.add("mb-open");
                }
            },


            // mobile menuGroup click
            onClick_mbMenuGroup(e){
                if(!isMobile) return;
                const tg = e.currentTarget;

                if(tg.dataset.open != 0){
                    //close
                    this.mbMenuGroupControl(-1);
                } else {
                    //open
                    this.mbMenuGroupControl(tg.dataset.index);
                }
            },


            mbMenuGroupControl(groupIndex){
                const _this = this;
                Array.from(this.menuGroup).forEach((elem, index) => {
                    if(parseInt(groupIndex) != index){
                        // groupindex 제외하고 close
                        elem.dataset.open = 0;
                        elem.classList.remove("open");
                        Gsap.to(elem, 0.5, {height:_this.mbMenuGroupH, ease:Power3.easeInOut})
                    } else {
                        elem.dataset.open = 1;
                        elem.classList.add("open");
                        Gsap.to(elem, 0.5, {height:elem.dataset.openHeight, ease:Power3.easeInOut})
                    }
                });
            },





            // check scroll direction (menu show / hide)
            scrollListener(scY){
                if(this.isMbOpen) return;
                if(scY < 0){
                    //reset
                    this.isActive = true;
                    this.saveScroll = 0;
                    return;
                }

                if(scY < (isMobile ? window.innerHeight*0.6 : (this.isMain ? window.innerHeight*3.5 : window.innerHeight*.2))) return;
                let top = scY;
                let gap = this.saveScroll - top;

                if(Math.abs(gap) < 5) return;

                this.isActive = gap > 0;
                this.saveScroll = top;
            },


            // web menu over / out
            onOver(e){
                if(isMobile) return;
                e.currentTarget.classList.add("open");
            },

            onOut(e){
                if(isMobile) return;
                e.currentTarget.classList.remove("open");
            },


            // change menu color
            changeDefault(){
                this.isWhite = false;
            },

            changeWhite(){
                this.isWhite = true;
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
    .mobile {

    }
    header {


    }
</style>
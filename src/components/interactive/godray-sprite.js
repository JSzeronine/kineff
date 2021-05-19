/*
* background lighting
* */

class GodraySprite {


    constructor(options) {
        this.setting(options);
    }

    setting(options){
        let PIXI = require('pixi.js-legacy');
        let PIXI_filter = require('pixi-filters');

        this.container = new PIXI.Sprite();
        this.bgwrap = new PIXI.Sprite();

        this.container.addChild(this.bgwrap);

        this.winWidth = window.innerWidth;
        this.winHeight = window.innerHeight;

        this.godray;
        this.timeDirec = -1;

        this.isSubKv = options;

        this.setObj(PIXI, PIXI_filter);
    }

    setObj(PIXI, PIXI_filter){

        let url =  "./images/main/main_bg.jpg";
        if(this.isSubKv){
            url = "../images/product/common/bg-keyvisual_1x.jpg";
        }

        this.bgwrap.texture = new PIXI.Texture.from(url);


        this.godray = new PIXI_filter.GodrayFilter();
        this.godray.parallel = false;
        this.godray.center[0] = this.winWidth * .5;
        this.godray.center[1] = this.winHeight * .5 + 335;
        this.godray.lacunarity = 5;
        this.godray.gain = 0.4;

        var colorFilter = new PIXI_filter.AdjustmentFilter();
        colorFilter.gamma = 0.8;
        colorFilter.red = 0.3;
        colorFilter.green = 1.4;
        colorFilter.blue = 1.0;
        colorFilter.saturation = 0.4;
        colorFilter.brightness = 1.2;
        colorFilter.alpha = 0.7;

        this.bgwrap.filters = [this.godray, colorFilter];

    }

    show(){
        let _this = this;
    }



    controlObj(){


    }

    render(){
        this.controlObj();
        this.bgwrap.x = this.winWidth * .5 - (this.bgwrap.width * .5);
        this.bgwrap.y = this.isSubKv ? 0 : this.winHeight * .5 - (this.bgwrap.height * .5) + 0;

        let gap = 2;
        let spd = this.isSubKv ? 0.005 : 0.01;


        if(this.godray){
            this.godray.time += (this.timeDirec * spd);

            if(this.godray.time > gap || this.godray.time < -(gap * 1.5)){
                this.timeDirec *= -1;
            }
        }
    }

    resize(tg){

    }

    resetSize(){
        this.winWidth = window.innerWidth < 1280 ? 1280 : window.innerWidth;
        this.winHeight = window.innerHeight;


        if(this.winWidth > 1920){
            this.godray.center[0] = this.winWidth * .5 - (this.winWidth - 1920) * .5;
        } else {
            this.godray.center[0] = this.winWidth * .5;
        }



        this.godray.center[1] = this.winHeight * .5 + 335;

        if(this.isSubKv){
            this.godray.center[0] += 250;
            this.godray.center[1] = 822
        }

    }



    destroy(){
        this.container.removeChild(this.bgwrap);
        this.godray.destroy()
    }
}


export default GodraySprite;


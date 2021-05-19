

const PIXI_Custom = {};
import * as PIXI from 'pixi.js-legacy'

PIXI_Custom.install = function (Vue) {

  let isSetting = false;
  let container = new PIXI.Container();
  let options;
  let renderer;
  let renderReq;
  let canvasStage;

  const pixiCustom = {

    setting: function(el){
      isSetting = true;

      PIXI.settings.RESOLUTION = window.devicePixelRatio;
      PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

      /*canvasStage = document.createElement('canvas');
      canvasStage.id = "canvasStage";

      document.querySelector(".app").appendChild(canvasStage);*/

      options = {
        "stageWidth" : window.innerWidth,
        "stageHeight" : window.innerHeight
      };

      renderer = new PIXI.autoDetectRenderer(
        options.stageWidth, options.stageHeight,
        {transparent: true}
      );

      canvasStage = renderer.view;
      canvasStage.id = "canvasStage";

      renderer.transparent = true;

      el.appendChild(canvasStage);

      options = {
        "stageWidth" : renderer.view.offsetWidth,
        "stageHeight" : renderer.view.offsetHeight
      };

      // console.log(options.stageWidth, options.stageHeight)

      this.resetSize();
    },

    resetSize: function(w, h){
      if(!isSetting) return;

      options.stageWidth = w || options.stageWidth;
      options.stageHeight = h || options.stageHeight;

      canvasStage.style.width = options.stageWidth+"px";
      canvasStage.style.height = options.stageHeight+"px";

      renderer.resize(options.stageWidth, options.stageHeight);
    },

    startRender: function(){
      if(!renderReq){
        render();
      }

      function render(){
        renderer.render(container);
        renderReq = requestAnimationFrame(render);
      }
    },

    stopRender: function(){
      cancelAnimationFrame(renderReq);
      renderReq = null;
    },

    settingBgColor: function(color){
      renderer.backgroundColor = color;
    }
  };









  ///////////////////////////////////////////////////////////////////////
  // setting
  ///////////////////////////////////////////////////////////////////////
  Vue.prototype.$pixiCustom_setting = function (el) {
    if(!isSetting){
      isSetting = true;
      pixiCustom.setting(el);
      // pixiCustom.resetSize();
    }
  };


  ///////////////////////////////////////////////////////////////////////
  // render
  ///////////////////////////////////////////////////////////////////////

  Vue.prototype.$pixiCustom_startRender = function (el, color) {
    if(el){
      el.appendChild(canvasStage);
    }

    pixiCustom.startRender();
    canvasStage.classList.add("onStage");

    let bgColor = color || "0x00FE5D5E";
    pixiCustom.settingBgColor(bgColor);
  };

  Vue.prototype.$pixiCustom_startRender_relative = function (el, color) {
    if(el){
      el.appendChild(canvasStage);
    }

    pixiCustom.startRender();
    canvasStage.classList.add("onStage");
    canvasStage.classList.add("type-relative");

    let bgColor = color || "0x00FE5D5E";
    pixiCustom.settingBgColor(bgColor);
  };

  Vue.prototype.$pixiCustom_stopRender = function () {

    pixiCustom.stopRender();
    canvasStage.classList.remove("onStage");
    canvasStage.classList.remove("type-relative");
  };




  ///////////////////////////////////////////////////////////////////////
  // util
  ///////////////////////////////////////////////////////////////////////
  Vue.prototype.$pixiCustom_resetSize = function (w, h) {
    pixiCustom.resetSize(w, h);
  };

  Vue.prototype.$pixiCustom_getContainer = function () {
    return container;
  };

  Vue.prototype.$pixiCustom_getOption = function () {
    return options;
  };

  Vue.prototype.$pixiCustom_getPIXI = function () {
    return PIXI;
  };




};

export default PIXI_Custom;

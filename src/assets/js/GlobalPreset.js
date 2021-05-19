window.GlobalPreset = {
    "groupName": "",
    "pageName": ""
}


window.isSmoothScroll = true;//Modernizr.tablet ? false : true;
window.isLoadSq = true;

window.scScrub = 0.5;
window.saveScrollX = 0;

// tween Global
window.Timeline = $gsap.gsap.timeline;
window.Gsap = $gsap.gsap;
window.ScTrigger = $scTrigger.ScrollTrigger;

window.Linear = $gsap.Linear;
window.Power1 = $gsap.Power1;
window.Power2 = $gsap.Power2;
window.Power3 = $gsap.Power3;
window.Expo = $gsap.Expo;
window.Cubic = $gsap.Cubic;



// ie 일시 타블렛 모드 안나오게
if(Modernizr.ie){
    const doc = document.querySelector("html");
    doc.classList.remove("tablet");
}

// check device type Tablet
if(Modernizr.tablet) {
    window.addEventListener('orientationchange', changeOrientation, false );
    changeOrientation();

    function changeOrientation() {
        //console.log('111');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var actual_width = screen.width;
            var min_width = 1280;
            var ratio = Math.min(actual_width / min_width);
            if (ratio < 1) {
                document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + actual_width);
            }else{
                document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1, user-scalable=yes');
            }
        }
    }
}











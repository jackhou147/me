function checkWindowSize(){
    var min480 = window.matchMedia('(min-width: 480px)');
    var min768 = window.matchMedia('(min-width: 768px)');
    var windowSize = {
        "480": false,
        "768":false
    };
    if(min480.matches){
        windowSize["480"] = true;
        if(min768.matches){
            windowSize["768"] = true;
        }
    };
    return windowSize
}

export default checkWindowSize;


// WEBPACK FOOTER //
// ./src/script/plugins.js
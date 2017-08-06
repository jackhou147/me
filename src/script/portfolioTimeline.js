import {Power2,Power4} from "gsap";

function timeLine(tl,windowSize,...Args){
    Args = [].concat.apply([],Args[0]);
    let _big = function(){
        Args.reduce((chain,el,index) => {
            if(index%2===0){ //$project
                let _1 = {
                    width: "5px",
                    height:"5px",
                    opacity: "0",
                    top: "40vw",
                },
                    _3 = {};
                _1[index%4===0?"right":"left"] = "20vw";
                _3[index%4===0?"right":"left"] = "0vw";
                return chain.fromTo(el,0.8,{
                            css: _1,
                            ease:Power2.easeOut
                        },{
                            css: {
                                width: "35vw",
                                height:"35vw",
                                opacity: "1",
                                top: "0"
                            },
                            ease:Power2.easeOut
                        })
                        .to(el,0.4,{
                            css: _3
                        },"+=0.2")
            }
            else{  //$text
                let _4 = {opacity: "0"};
                _4[index%4===1?"left":"right"] = "20vw";
                return chain.from(el,0.4,{
                                css: _4
                            },index)
            }
        },tl)
    };
    let _small = function(){
        Args.reduce((chain,el,index) => {
            if(index % 2 === 0){ //$project
                return chain.from(el,1,{
                            y:500,
                            width: 5,
                            height:5,
                            autoAlpha:0,
                            ease: Power4.easeOut
                        })
            }else{ //$text
                return chain.from(el,0.8,{
                            y:-200,
                            autoAlpha:0,
                            ease: Power4.easeOut
                        },"-=0.5")
            }
        },tl)
    };
    
    return windowSize===768? _big : _small


};

export default timeLine




// WEBPACK FOOTER //
// ./src/script/portfolioTimeline.js
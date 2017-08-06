import React, { Component } from 'react';
import {TimelineLite,Power2, Power4} from "gsap";

class Home extends Component{
    
    componentDidEnter(){
        let that = this;
        var tl = new TimelineLite({
            onComplete: function(){
                that.props.mounted_CallBack();
            }
        });
        this.setState({
            tl: tl
        })
        tl.from(this.$h1,1,{
                    y:30,
                    autoAlpha:0,
                    ease: Power2.easeOut
                })
                .from(this.$h2,1,{
                    y:30,
                    autoAlpha:0,
                    ease: Power2.easeOut
                },"-=0.7")
                .from(this.$btn,1,{
                    y:20,
                    autoAlpha:0,
                    ease: Power2.easeOut
                },"-=0.7")
    }
    
    componentWillLeave(callback){
        let that = this;
        let tl = new TimelineLite({
            onComplete: function(){
                that.state.tl.clear()
                callback()
                that.props.unmount_CallBack();
            } 
        }); 
            tl.to(this.$h1,0.35,{
                y:-150,
                autoAlpha:0,
                ease:Power4.easeOut
            })
            .to(this.$h2,0.35,{
                y:-150,
                autoAlpha:0,
                ease:Power4.easeOut
            },"-=0.15")
            .to(this.$btnText,0.35,{
                autoAlpha:0
            },"-=0.25")
            .to(this.$btn,0.5,{
                rotation: 90,
                width: 40
            },"+=0.1")
            .to(this.$btn,0.4,{
                y:200,
                autoAlpha:0,
                ease: Power4.easeOut
            },"+=0.3")
            .duration(.7).play()
    }
    
    render(){
        return (
            <div className="home">
                <div className="home__title">
                    <h1 ref={h1 => this.$h1 = h1}>JACK HOU</h1>
                    <h2 ref={(h2) => {this.$h2 = h2}}>
                        FRONT-END DEVELOPER
                    </h2>
                </div>
                <div className="action-btn" 
                     ref={btn=>this.$btn=btn}
                     onClick={()=>{this.props.handleClick("portfolio")}}>
                    <span className="action-btn__text" 
                          ref={Text=>this.$btnText=Text}>
                        VIEW PORTFOLIO
                    </span>
                </div>
            </div>
        )
    }
}

export default Home;


// WEBPACK FOOTER //
// ./src/script/Home.js
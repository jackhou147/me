import React, { Component } from 'react';
import {SocialMediaBtns} from "./About.js"
import pin from "../pictures/pin.svg"
import {TweenLite,TimelineLite,Power2, Power3} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

function ContactIntro(props){
    return (
        <div className="contact__intro">
            <h1 ref={props.h1Ref}>CONTACT</h1>
            <p ref={props.pRef}>
                Have a cool project in mind, and think I can help you with it?<br/>
Feel free to e-mail me at <a href="mailto:jackhou147@yahoo.com"><i>jackhou147@yahoo.com</i></a>
            </p>
        </div>
    )
}

class Location extends Component{
    
    constructor(props){
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.state = {
            tl: new TimelineLite()
        }
    }
    
    handleMouseOver(){
        
        this.state.tl.clear()
        
        this.state.tl.to(this.Icon,0.1,{
            y:3
        })
        .to(this.Icon,0.2,{
            y:-8
        })
    }
    
    handleMouseOut(){
        
        this.state.tl.clear();
        
        this.state.tl.to(this.Icon,0.1,{
            y:-10
        })
        .to(this.Icon,0.2,{
            y:0
        })
    }
    
    render(){
        return (
            <div className="location" 
                 onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <a href="https://www.google.com/maps/place/San+Gabriel,+CA/data=!4m2!3m1!1s0x80c2dadb27f1b32b:0xb1f9c7ca3f4be1ec?sa=X&ved=0ahUKEwirjMjT8f_SAhVMxYMKHbt6C6YQ8gEIGTAA" rel="noopener noreferrer" target="_blank">
                    <img src={pin} alt="location" ref={el => this.Icon = el}/>
                </a>
                <p>San Gabriel <br/>
                   California US</p>
            </div>
        )
    }
}


function ContactLocationSocial(props){
    return (
        <div className="contact__location-social">
            <div className="contact__location"
                 ref={props.locationRef}>
                <Location/>
            </div>
            <SocialMediaBtns className="about__social-media social-media"
                             socialRef1={props.socialRef1}
                             socialRef2={props.socialRef2}
                             socialRef3={props.socialRef3}
                             socialRef4={props.socialRef4}
            />
        </div>
    )
}

function ContactForm(props){
    return (
        <div className="form" ref={props.formRef}>
            <form method="POST" action="https://formspree.io/jackhou147@yahoo.com">
                <label>My Name Is
                    <input type="text" name="fullname"/>
                </label>
                <label> My email address is 
                    <input type="email"  name="email"/>
                </label>
                <label> And I would like to get into contact about
                    <textarea name="message"></textarea>
                </label>
                <input type="submit" value="send" className="action-btn"/>
            </form>
        </div>
    )
}

class Contact extends Component{
    
    componentWillEnter(cb){
        cb();
        let $h1 = this.$h1,
                $p = this.$p,
                $location = this.$location,
                $form = this.$form,
                $social1 = this.$social1,
                $social2 = this.$social2,
                $social3 = this.$social3,
                $social4 = this.$social4,
                tl = new TimelineLite();
        this.setState({
            tl: tl
        })
            tl.from($h1,0.5,{
                x: 50,
                autoAlpha:0,
                ease: Power2.easeout
            })
            .from($p,0.5,{
                y:80,
                autoAlpha:0,
                ease: Power2.easeout
            })
            .from($location,0.5,{
                y:40,
                autoAlpha:0,
                ease: Power2.easeout
            })
            .from($social1,1.5,{
                x:-250,
                rotation: 1080,
                autoAlpha:0,
                ease: Power3.easeOut
            },1.2)
            .from($social2,1.5,{
                x:-200,
                rotation: 1080,
                autoAlpha:0,
                ease: Power3.easeOut
            },1.2)
            .from($social3,1.5,{
                x:200,
                rotation: 1080,
                autoAlpha:0,
                ease: Power3.easeOut
            },1.2)
            .from($social4,1.5,{
                x:250,
                rotation:1080,
                autoAlpha:0,
                ease: Power3.easeOut
            },1.2)
            .from($form,0.5,{
                y:80,
                autoAlpha:0,
                ease: Power3.easeOut
            },"-=0.6") 
    }
    
    componentWillLeave(cb){
        this.state.tl.kill()
        TweenLite.to(window,0.3,{
            scrollTo: 0
        })
        cb()
    }
    
    render(){
        return (
            <div className="contact">
                <ContactIntro h1Ref={el => this.$h1 = el}
                              pRef={el => this.$p = el}/>
                <ContactLocationSocial locationRef={el => this.$location = el}
                                       socialRef1={el => this.$social1=el}
                                       socialRef2={el => this.$social2=el}
                                       socialRef3={el => this.$social3=el}
                                       socialRef4={el => this.$social4=el}/>
                <ContactForm formRef={el => this.$form = el}/>
            </div>
        )
    }
}

export default Contact;


// WEBPACK FOOTER //
// ./src/script/Contact.js
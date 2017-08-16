import React, { Component } from 'react';
import {TweenLite,TimelineLite,Power2,Power3} from "gsap";
import pic from '../pictures/jackhou.png'
import checkWindowSize from './plugins.js'
import ScrollToPlugin from "gsap/ScrollToPlugin";
import resume from './resume.pdf'

function CardBack(props){
    
    let style = {
        "width": "100%",
        "height":"100%",
        "transform": props.flipped?"rotateY(180deg)":"initial",
        "display":"flex",
        "align-items":"center",
        "justify-content":"center",
    };
    return(
        <div className="card-back" style={style}>
                <p>
                    Drawn by: <a rel="noopener noreferrer" target="_blank" href="https://www.fiverr.com/rissarare">rissarare</a>
                </p>
        </div>
    )
}

function CardFront(props){
    
    let style = {
        display: props.flipped?"none":"inherit",
        width: "100%",
        height: "100%",
    };
    
    return (
        <div className="card-front" style={style}>
            <img src={pic} alt="me" />
        </div>
    )
}

class AboutPhoto extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            flipped: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        this.setState({
            flipped: !this.state.flipped
        })
    }
    
    
    
    render(){
        let flipped = this.state.flipped;
        
        let containerStyle = { 
                "perspective":"800px",
                "position":"relative",
            },
            cardStyle = { 
                "width":"100%",
                "height":"100%",
                "position":"relative",
                "transform-style":"preserve-3d",
                "transition":"transform .5s ease"
            };
        
        flipped?
            cardStyle.transform="rotateY(180deg)"
            :
            delete cardStyle.transform
        
        
        return (
            
            <div className="about__photo photo"  //container
                 onClick={this.handleClick}
                 ref={this.props.photoRef}
                 style={containerStyle}>
                
                <div className={"card"+(flipped?" flipped":"")} style={cardStyle}>
                    
                    <CardFront photoRef={this.props.photoRef} 
                               flipped={this.state.flipped}/>
                
                    {flipped && 
                    <CardBack flipped={flipped}/>}
                    
                </div>
                
            </div>
            
        )
    }
}

class SocialBtn extends Component{
    
    constructor(props){
        super(props)
        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
    }
    
    handleMouseOver(){
        TweenLite.to(this.btn,0.15,{
            rotation: 360
        })
    }
    
    handleMouseOut(){
        TweenLite.to(this.btn,0.15,{
            rotation:0
        })
    }
    
    
    render(){
        return (
                <a href={this.props.href} 
                   rel="noopener noreferrer"
                   target="_blank">
                    <div 
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}
                        className={"logo-btn "+this.props.className} 
                        ref={el => {this.btn = el; this.props.socialRef(el)}}>
                    </div>
                </a>
        )
    }
}

class SocialMediaBtns extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            buttons: [
                ["linkedin",
                 "https://www.linkedin.com/in/jack-hou-377791121/"
                ],
                
                ["github",
                 "https://github.com/jackhou147"
                ],
                
                ["codepen",
                 "https://codepen.io/jackhou147/"
                ],
                
                ["twitter",
                 "https://twitter.com/JacktheDev1?lang=en"
                ]
            ],
            
            socialRef: [
                props.socialRef1,
                props.socialRef2,
                props.socialRef3,
                props.socialRef4
            ]
        }
    }
    
    render(){
        return (
            <div className={this.props.className?this.props.className:"social-media"}>
                {this.state.buttons.map((arr,indx) => {
                    return <SocialBtn key={indx}
                                      className={arr[0]}
                                      href={arr[1]}
                                      socialRef={this.state.socialRef[indx]}/>})}
            </div>
        )
    }
}

function AboutH1(props){
    return (
        <h1 ref={props.h1Ref}>Hi,</h1>
    )
}

function AboutH2(props){
    return(
        <h2 ref={props.h2Ref}><i>I'm a freelance front-end developer with a passion for learning and collaboration, based in California .</i></h2>
    )
}

function AboutP(props){
    return (
        <p ref={props.pRef}>As a creative thinker and doer, I bring designs to life using cutting edge technologies for fully interactive and responsive websites and apps. <br/>
        As a quick learner and team player, I believe in the power of learning and communication. I'm driven by the constant desire for improvements and the belief that great products come from passion and collaboration.
        </p>
    )
}

function AboutIntro(props){
    return (
        <div className="about__intro" ref={props.introRef} style={props.style}>
            {props.children}
        </div>
    )
}

function AboutSkills(props){
    return (
            <div className="about__skills" ref={props.skillsRef}>
                <h2>Skills and Techniques</h2>
                <div className="sections">
                    <div className="section">
                    <div className="subtitle-with-logo">
                        <span className="subtitle-with-logo__subtitle">DEVELOPMENT</span>
                    </div>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                    </ul>
                    <ul>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Sass</li>
                    </ul>
                </div>
                    <div className="section">
                    <div className="subtitle-with-logo">
                        <span className="subtitle-with-logo__subtitle">DESIGN</span>
                    </div>
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Inkscape</li>
                    </ul>
                </div>
                </div>
            
                <a href={resume} target="_blank" className="resume-link">Download resume </a>
            </div>
        )
}

function AboutThisSite(props){
    return (
            <div className="about__about-this-site" ref={props.atsRef}>
                <h2>About this Website</h2>
                <p>
                    This site has been designed and coded by hand from the ground up. It's written in React and animated through the Green Sock Animation Platform combined with react-transition-group.
                </p>
                <p>
                    The CSS is written with a mobile first approach and incorporated fonts from Google Fonts.
                </p>
            </div>
        )
}


class About extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            intro_visibility: "hidden",
            tl: new TimelineLite()
        }
        this.introTimeLine = this.introTimeLine.bind(this);
        this.restOfTimeLine = this.restOfTimeLine.bind(this);
        this.timeLine = this.timeLine.bind(this);
        this.window_handleScroll = this.window_handleScroll.bind(this);
    }
    
    window_handleScroll(){
        this.introTimeLine(
            window.pageYOffset||
            document.documentElement.scrollTop||
            document.body.scrollTop
        );
    }
    
    timeLine(){
        if(checkWindowSize()["480"]){
            this.introTimeLine();
            this.restOfTimeLine(1);
        }else {
            this.restOfTimeLine();
            window.addEventListener("scroll",this.window_handleScroll)
        }
    }
    
    introTimeLine(scrollTop){
        let that = this;
        function timeLine(){
            var tl = new TimelineLite();
            that.setState({
                intro_visibility: "visible",
                intro_tl: tl
            })
            tl.from(that.$h1,0.5,{
                x:50,
                autoAlpha:0,
            })
            .from(that.$h2,0.3, {
                y:80,
                autoAlpha:0,
                ease: Power2.easeout
            },"-=0.2")
            .from(that.$intro__p,0.3,{
                y:80,
                autoAlpha:0,
                ease: Power2.easeout
            },"-=0.1")
        }
        if(typeof scrollTop !== "undefined"){
            if(scrollTop >= 160){
                window.removeEventListener("scroll",this.window_handleScroll)
                timeLine();
            }
        }else {
            timeLine();
        }
    }
    
    restOfTimeLine(delay){
        this.state.tl.from(this.$social1,1.5,{
                    x:-200,
                    rotation: 1080,
                    autoAlpha: delay?0:1,
                    ease: Power3.easeOut
                },0)
                .from(this.$social2,1.5,{
                    x:-100,
                    rotation: 1080,
                    autoAlpha: delay?0:1,
                    ease: Power3.easeOut
                },0)
                .from(this.$social3,1.5,{
                    x:100,
                    rotation: 1080,
                    autoAlpha: delay?0:1,
                    ease: Power3.easeOut
                },0)
                .from(this.$social4,1.5,{
                    x:200,
                    rotation:1080,
                    autoAlpha: delay?0:1,
                    ease: Power3.easeOut
                },0)
                .from(this.$photo,1,{
                   y:-50,
                   autoAlpha:0,
                   ease: Power2.easeOut,
                   clearProps: "visibility, opacity, transform",
                   onComplete: function(el){
                       el.style.transitionProperty = "all";
                       el.style.transitionDuration = ".3s";
                   },
                   onCompleteParams: [this.$photo]
                },"-=0.55")
                .from(this.$skills,0.5,{
                    y:80,
                    autoAlpha:0,
                    ease: Power2.easeout
                },"-=0.1")
                .from(this.$aboutThisSite,0.5,{
                    y:80,
                    autoAlpha:0,
                    ease: Power2.easeout
                },"-=0.1").delay(delay?delay:0);
    }
    
    componentWillEnter(cb){
        cb()
        this.timeLine()  
    }
    
    componentWillLeave(cb){
        this.state.tl.clear();
        if(this.state.intro_tl){
            this.state.intro_tl.clear()
        } window.removeEventListener("scroll",this.window_handleScroll)
        TweenLite.to(window,0.3,{
            scrollTo: 0
        })
        cb()
    }
    
    render(){
        let intro_style = {
            "visibility": this.state.intro_visibility
        };
        return (
            <div className="about">
                <div className="about__photo-social-intro">
                    <div className="about__photo-social">
                        <AboutPhoto photoRef={el => this.$photo = el}/>
                        <SocialMediaBtns className="about__social-media social-media"
                                         socialRef1={el => this.$social1=el}
                                         socialRef2={el => this.$social2=el}
                                         socialRef3={el => this.$social3=el}
                                         socialRef4={el => this.$social4=el}
                        />
                    </div>
                    <AboutIntro introRef={el => this.$intro=el} style={intro_style}>
                        <AboutH1 h1Ref={el => this.$h1=el}/>
                        <AboutH2 h2Ref={el => this.$h2=el} />
                        <AboutP pRef={el => this.$intro__p=el}/>
                    </AboutIntro>
                </div>
                <AboutSkills skillsRef={el => this.$skills=el}/>
                <AboutThisSite atsRef={el => this.$aboutThisSite=el}/>
            </div>
        )
    }
}

export default About
export {SocialMediaBtns}



// WEBPACK FOOTER //
// ./src/script/About.js
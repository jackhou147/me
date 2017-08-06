import React, { Component } from 'react';
import {TweenMax,TimelineLite,Power2} from "gsap";
import logo from '../pictures/Website Logo.png'

class NavBtn extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.animate = this.animate.bind(this);
        this.animate_reverse = this.animate_reverse.bind(this);
    }
    
    handleClick(){
        this.props.navPage_Open?this.animate_reverse():this.animate();
        this.props.navBtn_HandleClick()
    }
    
    componentDidMount(){
        this.setState({
            line1: document.querySelector(".nav-bar__btn hr:nth-child(1)"),
            line2: document.querySelector(".nav-bar__btn hr:nth-child(2)"),
            line3: document.querySelector(".nav-bar__btn hr:nth-child(3)"),
        })
    }
    
    animate(){ //animate btn
        //alert(this.state.line1)
        TweenMax.to(this.state.line1,0.2,{
            rotation:45,
            transformOrigin:"50% 50%",
            y:12
        });
        TweenMax.to(this.state.line2,0.25,{
            opacity: 0,
            x: 10
        })
        TweenMax.to(this.state.line3,0.2,{
            rotation: -45,
            transformOrigin:"50% 50%",
            y:-8
        })
    }
    
    animate_reverse(){ 
        TweenMax.to(this.state.line1,0.2,{
            rotation: 0,
            transformOrigin:"50% 50%",
            y:0
        });
        TweenMax.to(this.state.line2,0.25,{
            opacity: 1,
            x: 0
        })
        TweenMax.to(this.state.line3,0.2,{
            rotation: 0,
            transformOrigin:"50% 50%",
            y:0
        })
    }
    
    componentDidUpdate(prevProps){
        if(!this.props.navPage_Open){
            this.animate_reverse()
        }
    }
    
    
    render(){
        return (
            <div className="nav-bar__btn" onClick={this.handleClick}>
                <hr/>
                <hr/>
                <hr/>
            </div>
        )
    }
    
}

class Logo extends Component {
    
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(){
        this.props.handleClick("home")
    }
    
    render(){
        return (
            <div className="logo nav-bar__logo" onClick={this.handleClick}>
                <img src={logo} alt="logo" />
            </div>
        )
    }
}

class NavBar extends Component {
    
    render(){
        return (
            <div className="nav-bar">
                <Logo handleClick={this.props.logo_HandleClick}/>
                <NavBtn navPage_Open={this.props.navPage_Open}
                        navBtn_HandleClick={this.props.navBtn_HandleClick}
                />
            </div>
        )
    }
}

function Link(props){
    return (
        <div className={props.className} onClick={function(){props.handleClick(props.pageName)}}>
            <span className={"nav-page"+props.pageName+"-link"}>{props.pageName}</span>
        </div>
    )
}

class NavPageLinks extends Component{
    render(){
        return(
            <div className="nav-page__links">
                <Link className="outline" handleClick={this.props.handleClick} pageName="home"/>
                
                <Link className="outline" handleClick={this.props.handleClick} pageName="portfolio"/>
                
                <Link className="outline" handleClick={this.props.handleClick} pageName="about"/>
                
                <Link className="outline" handleClick={this.props.handleClick} pageName="contact"/>
            </div>
        )
    }
}

class NavPageFooter extends Component{
    render(){
        return (
            <div className="nav-page__footer">
                <div>
                    <a href="https://github.com/jackhou147" rel="noopener noreferrer" target="_blank">My Github Page</a>
                </div>
                <div>
                    <a href="mailto:jackhou147@yahoo.com" rel="noopener noreferrer" target="_blank">jackhou147@yahoo.com</a>
                </div>
                <p>	&copy; 2017 - Jack Hou. All rights reserved.</p>
            </div>
        )
    }
}

class NavPage extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            reverse_time_line: false
        }
    }
    
    componentDidMount(){
        document.body.classList.add("none-scroll-y");
        let $navPage = document.querySelector(".nav-page"),
            $navLink1 = document.querySelector(".nav-page__links .outline:nth-child(1)"),
            $navLink2 = document.querySelector(".nav-page__links .outline:nth-child(2)"),
            $navLink3 = document.querySelector(".nav-page__links .outline:nth-child(3)"),
            $navLink4 = document.querySelector(".nav-page__links .outline:nth-child(4)"),
            $navHr = document.querySelector(".nav-page hr"),
            $navFooter = document.querySelector(".nav-page__footer");
        let timeline = new TimelineLite();
        this.setState({
            timeline:timeline
        })
        timeline.from($navLink1,0.4,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut            
            })
            .from($navLink2,0.4,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut
            },"-=0.25")
            .from($navLink3,0.4,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut
            },"-=0.25")
            .from($navLink4,0.4,{
                y:30,
                autoAlpha:0,
                ease: Power2.easeOut
            },"-=0.3")
            .from([$navFooter,$navHr],0.5,{
                autoAlpha:0
            },"-=0.35")
            .delay(.4);
        
        TweenMax.to($navPage,.5,{
            autoAlpha:1
        })
    }
    
    componentWillLeave(callback){
        document.body.classList.remove("none-scroll-y");
        let $navPage = document.querySelector(".nav-page");
        TweenMax.to($navPage,.1,{
            autoAlpha:0,
            onComplete:callback
        })
        this.state.timeline.timeScale(10).reverse()
    }
    
    render(){
        
        const nav_page_style={
          "visibility":"hidden"  
        };
        
        return (
            <div className="nav-page" style={nav_page_style}>
                <NavPageLinks handleClick={this.props.navLink_HandleClick} />
                <hr/>
                <NavPageFooter />
            </div>
        )
    }
}


export {NavBar, NavPage};


// WEBPACK FOOTER //
// ./src/script/Navigation.js
import React, { Component } from 'react';
import tictactoe from "../pictures/tictactoe.png"
import calc from "../pictures/calculator.png"
import simon from "../pictures/simon.png"
import timer from "../pictures/timer.png"
import weather from "../pictures/weatherapp.png"
import quote from "../pictures/quotescreenshot.png"
import wiki from "../pictures/wikiViewer.png"
import previewer from "../pictures/markdown.jpg"
import checkWindowSize from './plugins.js'
import {TweenLite,TimelineLite,} from "gsap";
import timeLine from "./portfolioTimeline.js"
import ScrollToPlugin from "gsap/ScrollToPlugin";


function Project(props){
    return (
        <div className={"project project"+props.className}>
            {props.children}
        </div>
    )
}

function ProjectPic(props){
    return (
        <div className="project__pic" ref={props.Pic_ref}>
            <a href={props.Pic_href} rel="noopener noreferrer" target="_blank">
                <img src={props.Pic_src} alt={props.Pic_alt}/>
            </a>
        </div>
    )
}

function ProjectDescription(props){
    return (
        <div className="project__description" ref={props.Description_ref}>
            <p>{props.Description_title}</p>
            <p>{props.Description_text}<br/>
                <a href={props.Description_href} 
                    rel="noopener noreferrer" 
                    target="_blank">github link</a>
            </p>
        </div>
    )
}

class Portfolio extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    Pic_href: "http://tictactoejack.surge.sh/",
                    Pic_src: tictactoe,
                    Pic_alt: "tic tic toe game",
                    Description_title: "Tic Tac Toe",
                    Description_text: "This is an unbeatable tic tac toe game that utilizes minimax algorithm and coded with html, css, jquery, and incorporates SVG. ",
                    Description_href: "https://github.com/jackhou147/Tic-Tac-Toe"
                },
                {
                    Pic_href: "http://calcjack.surge.sh/",
                    Pic_src: calc,
                    Pic_alt: "calculator",
                    Description_title:"Javascript Calculator",
                    Description_text:"This is a simple javascript calculator coded with html,css, jquery.",
                    Description_href: "https://github.com/jackhou147/javascriptCalculator"
                },
                {
                    Pic_href: "http://simongamejack.surge.sh/",
                    Pic_src: simon,
                    Pic_alt: "calculator",
                    Description_title: "Simon Game",
                    Description_text: "This is a simple simon game coded with html,css,jquery. ",
                    Description_href: "https://github.com/jackhou147/SImonGame"
                },
                {
                    Pic_href: "http://timerjack.surge.sh/",
                    Pic_src: timer,
                    Pic_alt: "timer",
                    Description_title: "Pomodoro Clock",
                    Description_text: "This is a simple pomodoro clock built with html,css,jquery.",
                    Description_href: "https://github.com/jackhou147/PomodoroClock"
                },
                {
                    Pic_href: "http://weatherjack.surge.sh/",
                    Pic_src: weather,
                    Pic_alt: "weather app",
                    Description_title: "Local Weather with Forecast",
                    Description_text: "This is a simple single page app that shows your local weather and provides forecast for the next couple hours. Page powered by OpenWeatherMap Api.",
                    Description_href: "https://github.com/jackhou147/Local-Weather-SPA"
                },
                {
                    Pic_href: "http://quotejack.surge.sh/",
                    Pic_src: quote,
                    Pic_alt: "random quote generator",
                    Description_title: "Random Quote Generator",
                    Description_text: "This is a single page app that shows famous quotes along with the names of the authors. Page is made with vanilla Javascript, html, css, and powered by Forismatic Api.",
                    Description_href: "https://github.com/jackhou147/randomQuoteMachine"
                },
                {
                    Pic_href: "http://wikijack.surge.sh/",
                    Pic_src: wiki,
                    Pic_alt: "Wikipedia viewer",
                    Description_title: "Wikipedia Viewer",
                    Description_text: "This is a single page app that lets the user search for articles from Wikipedia. Page is made with vanilla Javascript, html, css, and powered by MediaWiki Api. Icon made by Oliver from www.flaticon.com",
                    Description_href: "https://github.com/jackhou147/wikipediaViewer"
                },
                {
                    Pic_href: "http://markdownjack.surge.sh/",
                    Pic_src: previewer,
                    Pic_alt: "markdown previewer",
                    Description_title: "Markdown Previewer",
                    Description_text: "This is a single page app that lets the user see a preview of the Marked output that is updated as typing. Page is made with React and Marked library.",
                    Description_href: "https://github.com/jackhou147/markdown-previewer"
                }
            ],
            tl: new TimelineLite()
        };
    }
    
    componentWillEnter(callback){
        let that = this, 
            _ = this.state.projects;
        timeLine(
            this.state.tl,
            checkWindowSize()["768"]?768:undefined,
            _.map((el,index)=>{ 
                let arr = [],indx = index+1;
                arr.push(that["$project"+indx],that["$text"+indx]);
                return arr
            })
        )();
        callback()
    }
    
    componentWillLeave(callback){
        callback();
        this.state.tl.kill();
        TweenLite.to(window,0.3,{
            scrollTo: 0
        })
    }
    
    
    render(){
        const _ = this.state.projects;
        return (
            <div className="portfolio">
                
                {_.map((proj,index) => {
                    let indx = index+1;
                    return (
                        <Project className={indx} key={indx}>
                            <ProjectPic 
                                Pic_href={proj.Pic_href} 
                                Pic_src={proj.Pic_src} 
                                Pic_alt={proj.Pic_alt}
                                Pic_ref={el=>this["$project"+indx] = el}
                            />
                            <ProjectDescription Description_title={proj.Description_title}
                                Description_text={proj.Description_text}
                                Description_href={proj.Description_href}
                                Description_ref={el => this["$text"+indx] = el}
                            />
                        </Project>
                    )
                })}
                
            </div>
        )
    }
}

export default Portfolio;


// WEBPACK FOOTER //
// ./src/script/Portfolio.js
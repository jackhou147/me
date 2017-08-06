import React, {Component} from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import About from './script/About.js'
import Contact from './script/Contact.js'
import Home from './script/Home.js'
import {NavBar,NavPage} from './script/Navigation.js'
import Portfolio from './script/Portfolio.js'

function FirstChild(props){ //for ReactTransitionGroup.
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
}

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            CURRENT_PAGE: "home",
            NAV_PAGE_OPENED: false,
            MOUNTED: false,
            TO_NEXT: false
        }
        this.navBtn_HandleClick = this.navBtn_HandleClick.bind(this);
        this.navLink_HandleClick = this.navLink_HandleClick.bind(this);
        this.childPage_UnmountCallBack = this.childPage_UnmountCallBack.bind(this);
        this.childPage_MountedCallBack = this.childPage_MountedCallBack.bind(this);
    }
    
    navBtn_HandleClick(){
        let NAV_PAGE_OPENED = !this.state.NAV_PAGE_OPENED;
        this.setState({NAV_PAGE_OPENED: NAV_PAGE_OPENED});
    }
    
    
    navLink_HandleClick(page){
        this.setState({
            CURRENT_PAGE:page,
            NAV_PAGE_OPENED:false
        });
    }
    
    childPage_UnmountCallBack(){
        this.setState({
            TO_NEXT: true
        });
    }
    
    childPage_MountedCallBack(){
        this.setState({
            TO_NEXT: false
        })
    }
    
    
    
    componentDidMount(){
        this.setState({MOUNTED:true})
    }
    
    render() {
        return (
            <div>
                
                <NavBar navPage_Open={this.state.NAV_PAGE_OPENED}
                        navBtn_HandleClick={this.navBtn_HandleClick}
                        logo_HandleClick={this.navLink_HandleClick}
                />
            
                <TransitionGroup component={FirstChild}>
                    {this.state.NAV_PAGE_OPENED && 
                     <NavPage  navLink_HandleClick={this.navLink_HandleClick}/>}
                </TransitionGroup>
                
                <TransitionGroup component={FirstChild}>
                    {this.state.CURRENT_PAGE === "portfolio" && 
                     this.state.TO_NEXT &&
                    <Portfolio 
                             unmount_CallBack={this.childPage_UnmountCallBack}
                             mounted_CallBack={this.childPage_MountedCallBack}/>}
                </TransitionGroup>
            
                <TransitionGroup component={FirstChild}>
                    {this.state.CURRENT_PAGE === "about" && 
                     this.state.TO_NEXT &&
                    <About 
                         unmount_CallBack={this.childPage_UnmountCallBack}
                         mounted_CallBack={this.childPage_MountedCallBack}/>}
                </TransitionGroup>
                
                <TransitionGroup component={FirstChild}>
                {
                    this.state.CURRENT_PAGE === "contact" && 
                    this.state.TO_NEXT &&
                    <Contact unmount_CallBack={this.childPage_UnmountCallBack}
                         mounted_CallBack={this.childPage_MountedCallBack}/>
                }
                </TransitionGroup>
            
                
                
                <TransitionGroup component={FirstChild}>
                    {this.state.CURRENT_PAGE === "home" && 
                     this.state.MOUNTED &&
                     <Home
                         unmount_CallBack={this.childPage_UnmountCallBack}
                         mounted_CallBack={this.childPage_MountedCallBack}
                         handleClick={this.navLink_HandleClick}/>}
                </TransitionGroup>
            
            </div>
        )
    }
}

export default App;



// WEBPACK FOOTER //
// ./src/App.js
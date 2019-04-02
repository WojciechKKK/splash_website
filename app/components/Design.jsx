import React, { Component } from 'react';
// import { SlideDown } from 'react-slidedown'
// import 'react-slidedown/lib/slidedown.css'

import Body from '../components/Body.jsx'
import Nav from '../components/Nav.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ActuallyView from '../components/ActuallyView.jsx'

import language from '../data/language.json'

class Design extends Component{
    constructor(){
        super();
        this.state = {
            menu: language.en.header,          //actually headers
            language: 'EN',                     //actually language
            actuallyView: false,                //show the inside headers
            nameView: ''                        //actually view headers

        }
    }
    //show all headers
    componentDidMount = () => {
        let allHeader = document.querySelectorAll('#header'); 
        allHeader.forEach(el => el.classList.add('show'));
        allHeader.forEach((el,key) => {
            if(key == 0){
                el.classList.add('showAnimationUp');
            } else if(key == 1){
                el.classList.add('showAnimationRight');
            } else if(key == 2){
                el.classList.add('showAnimationCenter');
            } else if(key == 3){
                el.classList.add('showAnimationLeft')
            } else if(key ==4){
                el.classList.add('showAnimationDown')
            }
        });
    }
    
    //show or hide headers for Header Comp
    showOrHideElements = (e) => {
        let elementAllClass = e.currentTarget.classList.value;
        let nameComp = e.currentTarget.dataset.test // from dataset

        if(elementAllClass.search('show') < 0){
                // console.log('double click')
            } else if (this.state.actuallyView){
                //blokuje onClick na headerze przed ponownym pojawieniem
                //blocks the click to not appear again
            } else {
                let allHeader = document.querySelectorAll('#header');
                allHeader.forEach(el => {
                     el.classList.remove('show')
                     el.classList.add('hide')
                })
    
                e.currentTarget.classList.remove('hide');    
                e.currentTarget.classList.add('active');
                
                this.setState({
                    nameView: nameComp,
                })
                //show inside headers
                setTimeout(() => {
                this.setState({
                    actuallyView: !this.state.actuallyView,
                    })
                },300)
            }  
    }

     //set a language for Nav Comp
     setLanguage = (info) => {
        console.log('Change language :', info);
        this.setState({
            language: info,
        })
    }

    // stop render ActuallyView Comp
    hideActuallyView = () => {
        setTimeout(() => {
            this.setState({
                actuallyView: !this.state.actuallyView,
                nameView: ''
            })
        },1000);
    }
   
    render(){
        const { menu, actuallyView, nameView, language } = this.state;
        return(
            <Body>
                <Nav fnClick={this.setLanguage} language={language} />
                {
                    menu.map((el,key) =>  {
                        return <Header language={language} id={key+1} key={el} imie={el} fnClick={this.showOrHideElements} /> 
                    })
                }
                {
                    actuallyView
                    ? <ActuallyView language={language} fnClick={this.hideActuallyView} nameHeader={nameView}/>
                    : null
                }
                <Footer />
            </Body>
        )
    }
}

export default Design
import React, { Component } from 'react'

import HeaderAbout from '../components/HeaderAbout.jsx'
import ButtonHide from '../components/ButtonHide.jsx'
import HeaderContact from './HeaderContact.jsx'
import HeaderLogin from '../components/HeaderLogin.jsx'
import HeaderTeams from '../components/HeaderTeams.jsx'
import HeaderWorks from '../components/HeaderWorks.jsx'

import textInside from '../data/language.json'

class ActuallyView extends Component{

    // hide all Headers Comp and show actually Header
    hideAllHeaders = () => {
        let actuallyView = document.getElementById('view')
        actuallyView.classList.add('actuallyViewHide');
        actuallyView.classList.remove('actuallyView');

        let allHeader = document.querySelectorAll('#header');
        allHeader.forEach(el => {
            el.classList.remove('active')
            el.classList.remove('hide')
            el.classList.add('show')
        });

        //stop render AcuallyViw Comp from Design Comp
        if(typeof this.props.fnClick == 'function'){
            this.props.fnClick();
        }
        //for UserLogin Comp
        let loginUserText = document.querySelector('.nameSubTitle');
        if (loginUserText == null){
            // console.log('nameSubTitle id hide')
        }else {
        loginUserText.classList.remove('nameSubTitle');
        loginUserText.classList.add('hideNameSubTitle');
        }

    }
    render(){
        const { nameHeader, language } = this.props;
        let finalText = language == 'EN' ? textInside.en : textInside.pl;
        let allHeader = [
            <HeaderLogin text={finalText.login} language={this.props.language}/>,
            <HeaderAbout text={finalText.about} />,
            <HeaderTeams text={finalText.teams} />,
            <HeaderWorks text={finalText.works} />,
            <HeaderContact text={finalText.contact} textForm={finalText.form}/>
        ]
        return(
            <div id="view" className="actuallyView">
                {
                    allHeader.map((el,key) => {
                        if(textInside.en.header[key] == nameHeader || textInside.pl.header[key] == nameHeader){
                            return <div key={key}>{allHeader[key]}</div>
                        }
                    })
                }
                <ButtonHide fnShowheader={this.hideAllHeaders} text={finalText.back}/>
            </div>
        )
    }
}

export default ActuallyView
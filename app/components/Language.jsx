import React, { Component } from 'react'

class Language extends Component{

    //set a language
    changeLanguage = (e) => {
        if(typeof this.props.fnSetLang == 'function'){
            this.props.fnSetLang(e.currentTarget.innerText);
            this.setActiveClass(e)
           }
    }

    //set a class active for language elements
    setActiveClass = (e) => {
        // console.log(e.currentTarget)
        let findActive = document.querySelector('.langActive');
        findActive.classList.remove('langActive');
        e.currentTarget.classList.add('langActive')
    }

    render(){
        return(
            <div className="language">    
                <div className="langText" onClick={this.changeLanguage} title="Zmień język PL">pl</div>
                    |
                <div className="langText langActive" onClick={this.changeLanguage} title="Change language EN">en</div>
             </div>
        )
    }
}

export default Language
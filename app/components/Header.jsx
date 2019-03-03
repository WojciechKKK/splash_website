import React, { Component } from 'react'
import language from '../data/language.json'

class Header extends Component{

    showOrHideElement = (e) =>{
        if(typeof this.props.fnClick == 'function'){
            this.props.fnClick(e);
        }
    }
    render(){
        return(
            <div id="header" className={`header${this.props.id} ${this.props.imie}`} data-test={this.props.imie} onClick={this.props.fnClick}>
                <div className="textHeader">
                    <a>
                        {
                            this.props.language == 'EN' 
                            ? language.en.header[this.props.id-1] 
                            : language.pl.header[this.props.id-1]
                        }
                    </a>
                </div>
            </div>
        )
    }
}

export default Header
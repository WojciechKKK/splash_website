import React, { Component } from 'react'

class ButtonHide extends Component{

    //show all Header or stop render Actually View
    showAllHeader = () => {
        if(typeof this.props.fnShowheader == 'function'){
            this.props.fnShowheader();
        }
    }
    render(){
        return(
            <div>
                <button className="btnShow" onClick={this.showAllHeader}>{this.props.text}</button>
            </div>
        )
    }
}

export default ButtonHide
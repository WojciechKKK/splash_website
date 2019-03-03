import React, { Component } from 'react'

//make onClick for img to forward or SCALE 
class HeaderAbout extends Component{
    render(){
        return(
            <div className="headerAbout">
                {
                    this.props.text
                }
                <div className="allCompanyImg">
                    <div className="companyImg1"></div>
                    <div className="companyImg2"></div>
                    <div className="companyImg3"></div>
                </div>
            </div>
        )
    }
}

export default HeaderAbout
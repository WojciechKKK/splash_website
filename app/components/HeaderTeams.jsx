import React, { Component } from 'react'

//add onClick for button join us
class HeaderTeams extends Component{
    sendBtn = () => {
        alert('')
    }
    render(){
        const { text } = this.props
        return(
            <div className="headerTeams">
                <div className="teamsInfo">
                    <a className="teamsInfoHeader">{text[0]}</a>
                    <a className="teamsLine"></a>
                </div>
                <div className="teamsPerson">
                    <div className="teams1">
                        <div className="teamsImg"></div>
                        <br />
                        DIK ADALIN
                        <div className="teamPosition">Engineering</div>
                    </div>
                    <div className="teams1">
                        <div className="teamsImg"></div>
                        <br />
                        JENG KOL
                        <div className="teamPosition">Designer</div>
                    </div>
                    <div className="teams1">
                        <div className="teamsImg"></div>
                        <br />
                        PET ROMAK
                        <div className="teamPosition">Marketing</div>
                    </div>
                </div>
                <a className="teamsJoin">
                    {text[1]}
                </a>
                <button onClick={this.sendBtn} className="teamsBtn">{text[2]}</button>
            </div>
        )
    }
}

export default HeaderTeams
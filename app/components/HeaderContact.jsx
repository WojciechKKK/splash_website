import React, { Component } from 'react'

class HeaderContact extends Component{
    constructor(){
        super();
        this.state = {
            valName: '',    //for input name
            valEmail: '',   //for input email
            valMessage: ''  //for texarea
        }
    }
    //set state name
    handleSetName = (e) => {
        this.setState({
            valName: e.target.value
        })
    }
    //set state email
    handleSetEmail = (e) => {
        this.setState({
            valEmail: e.target.value
        })
    }
    //set state message
    handleSetMessage = (e) => {
        this.setState({
            valMessage: e.target.value
        })
    }
    //example
    sendForm = () => {
        const { valName , valEmail, valMessage } = this.state
        alert(`Formularz został wysłany:, Imię: ${valName}, E-mail: ${valEmail}, Wiadomość: ${valMessage}`)
    }
    render(){
        const { text, textForm } = this.props;
        const { valName , valEmail, valMessage } = this.state
        return(
            <div className="headerContact">
                <div className="allContactElem">
                    <div className="contactInfo"><img src="../image/address.png"></img>{text[1]}</div>
                    <div className="contactInfo"><img src="../image/tel.png"></img>{text[2]}</div>
                    <div className="contactInfo"><img src="../image/email2.png"></img><a style={{color: 'white'}}href="mailto:info@domain.com">{text[3]}</a></div>
                </div>
                <div className="footer_formularz">
                    <div className="contactInfoHeader">{text[0]}</div>
                    <form onSubmit={this.sendForm}>
                        <label>{textForm[0]}<br /><input onChange={this.handleSetName} value={valName} type="text" maxLength={15}></input></label>
                        <label>{textForm[1]} <br /><input onChange={this.handleSetEmail} value={valEmail} type="text" maxLength={25}></input></label>
                        <label>{textForm[2]}<br /><textarea onChange={this.handleSetMessage} value={valMessage} cols="40" rows="4" type="text" maxLength={50}></textarea>
                        <button className="contactBtn" type="submit">{textForm[3]}</button>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default HeaderContact
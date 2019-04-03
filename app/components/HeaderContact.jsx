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
                    <div className="iframeAddress">
                        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6354178276733!2d21.003806315945223!3d52.23184126529641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c92692e49%3A0xc2e97ae5311f2dc2!2sPa%C5%82ac+Kultury+i+Nauki!5e0!3m2!1spl!2spl!4v1554315877464!5m2!1spl!2spl" style={{width: 400, height: 300,frameBorder:0, border: 0}} allowFullScreen></iframe>
                        <div>{text[1]}<br />{text[2]}<br /><a style={{color: 'white'}}href="mailto:info@domain.com">{text[3]}</a></div>
                    </div>
                </div>
                <div className="footer_formularz">
                    <div className="contactInfoHeader">{text[0]}</div>
                    <form onSubmit={this.sendForm}>
                        <label>{textForm[0]}<br /><input onChange={this.handleSetName} value={valName} type="text" maxLength={15} ></input></label>
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
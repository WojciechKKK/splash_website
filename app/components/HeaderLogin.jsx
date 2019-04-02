import React, { Component } from 'react'

import UserLogin from '../components/UserLogin.jsx'

//make validation for input
class HeaderLogin extends Component{
    constructor(){
        super();
        this.state = {
            info: 'login',              //actually view 
            setLoginDiv: 'activeHeader', //class
            setSignUpDiv: 'unActiveHeader', //class
            login: false,               //show user
            usernameText: '',           //state for username
            password: '',            //state for pass
            passwordRepeat: ''             //state for repeat pass
        }   
    }
    //set state login
    setLogin = (e) => {
        this.setState({
            info: 'login',
            setLoginDiv: 'activeHeader',
            setSignUpDiv: 'unActiveHeader'
        })
    }
    //set state sign up
    setSignUp = (e) => {
        this.setState({
            info: 'sign up',
            setSignUpDiv: 'activeHeader',
            setLoginDiv: 'unActiveHeader',
        })
    }
    // for send butto
    // NEED VALIDATION
    sendForm = () => {
        // console.log('Zalogowano');
        this.setState({
            login: !this.state.login
        })
    }
    //state for username
    handleUsernameChange = (e) => {
        this.setState({
            usernameText: e.target.value
        })
    }
    //state for password
    handlePasswordChange = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    //state for password repeat
    handlePasswordRepChange = (e) =>{
        this.setState({
            passwordRepeat: e.target.value
        })
    }
   
    render(){
        const { info, setSignUpDiv, setLoginDiv, login, usernameText, password, passwordRepeat  } = this.state;
        const { text } = this.props
        return(
            <div className="headerLogin">
            <div className="loginAsk"><h4>{text[5]}</h4><button onClick={this.setSignUp}className="btnStart">{text[6]}</button></div>

            <div className="headerLoginInside">
              {
                login
                ? <p>{usernameText}<br />{password}</p>
                : <div className="loginForm1">
                    <div onClick={this.setLogin} className={`loginHeadLogin ${setLoginDiv}`}>{text[0]}</div>
                    <div onClick={this.setSignUp} className={`loginHeadSign ${setSignUpDiv}`}>{text[1]}</div>
                    <div className="loginForm">
                        <label htmlFor="username">{text[2]}</label>
                        <input id="username" type="text" onChange={this.handleUsernameChange} value={usernameText} maxLength={15} placeholder="name@gmail.com"></input>
                        <label htmlFor="password">{text[3]}</label>
                        <input id="password" type="password" onChange={this.handlePasswordChange} value={password} maxLength={15} placeholder="Enter your password"></input>
                        {
                            info == 'sign up'
                            ? <div>
                                <label htmlFor="password2">{text[4]}</label>
                                <input id="password2" type="password" onChange={this.handlePasswordRepChange} value={passwordRepeat}  placeholder="Repeat your password"></input>
                            </div>
                            : null
                        }
                    </div>
                    <button className="loginSend" onClick={this.sendForm}>
                        {
                            info == 'login'
                            ? text[0]
                            : text[1]
                        }
                    </button>
                </div>
            }
            {
                login
                ? <UserLogin language={this.props.language} name={usernameText}/>
                : null
            }
            </div>
            </div>
            
        )
    }
}

export default HeaderLogin
import React, { Component } from 'react'

class UserLogin extends Component{
    render(){
        return(
            <div className="nameSubTitle">
                <a className="nameLogin">
                    {
                        this.props.language == 'EN'
                        ? 'Logged in:'
                        : 'Zalogowany:'
                    }
                </a> 
                <br />
                {this.props.name}
            </div>
        )
    }
}

export default UserLogin
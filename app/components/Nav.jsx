import React, { Component } from 'react'

import Logo from '../components/Logo.jsx'
import Language from '../components/Language.jsx'

class Nav extends Component{
 
    render(){
        return(
            <div className="navigation">
                <Logo />
                <Language fnSetLang={this.props.fnClick} />
            </div>
        )
    }
}

export default Nav
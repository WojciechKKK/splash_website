import React, { Component } from 'react'

class Logo extends Component{
    reload = () => {
        location.reload();
    }
    render(){
        return(
            <div className="logo" onClick={this.reload}>
                 splash <a className="logoDot">.</a><br />
                 <a className="logoSubTitle">welcome do splash</a>
            </div>
        )
    }
}
export default Logo
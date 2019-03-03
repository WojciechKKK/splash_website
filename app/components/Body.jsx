import React, { Component } from 'react'

class Body extends Component{
    render(){
        return(
            <div className="all">
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Body
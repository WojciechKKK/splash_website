import React, { Component } from 'react'

//make a onClick for div .worksInfo
class HeaderWorks extends Component{
    render(){
        const { text } = this.props
        return(
            <div className="headerWorks">
                <div className="worksInfoheader">
                    {text[0]}
                </div>
                <div className="worksInfo">
                    <a href="https://github.com/">
                        {text[1]} <span className="worksAll">&raquo;</span> 
                    </a>
                    {/* &rarr;   &raquo;*/}
                </div>
                <div className="worksAllImg">
                    <div><a href="https://github.com/">Projekt 1</a><br /><img src="https://img.icons8.com/dusk/64/000000/training.png" alt="logo1" title="Projekt 1"></img></div>
                    <div><a href="https://github.com/">Projekt 2</a><br /><img src="https://img.icons8.com/dusk/64/000000/training.png" alt="logo1" title="Projekt 2"></img></div>
                    <div><a href="https://github.com/">Projekt 3</a><br /><img src="https://img.icons8.com/dusk/64/000000/training.png" alt="logo1" title="Projekt 3"></img></div>
                    <div><a href="https://github.com/">Projekt 4</a><br /><img src="https://img.icons8.com/dusk/64/000000/training.png" alt="logo1" title="Projekt 4"></img></div>
                </div>
            </div>
        )
    }
}

export default HeaderWorks
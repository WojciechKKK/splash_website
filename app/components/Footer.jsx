import React , { Component } from 'react'

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            socialMedia: ['linkedin', 'twitter', 'facebook', 'instagram' ,'youtube'],
            designBy: ' Wojciech K.',
            copyright: 'Copyright © 2019 - All Rights Reserved'
        }
    }
    render(){
        const { socialMedia, designBy, copyright } = this.state
        return(
            <div className="footer">
                <div className="copyright">
                    {copyright} <br />
                    Designed by
                    <a href="mailto:wojciech.kmiec@protonmail.com" title="send message"> 
                        {designBy}
                    </a>
                </div>
                {
                    socialMedia.map((el, key) => {
                        return <a href={`https://www.${el}.com/`} target="_blank" key={key} title={el}>
                                    <div className={el}></div>
                                </a>
                    })
                }
            </div>
        )
    }
}

export default Footer
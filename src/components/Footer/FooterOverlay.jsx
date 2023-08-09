import React from 'react'
import './FooterOverlay.css';

const FooterOverlay = ({title,price,tags}) => {
    return (
        <div className='app__footeroverlay'>
            <div className='app__footer-packages'>
                <div className='app__footeroverlay-items'>
                    <p>{title}</p>

                </div>

                <div className='app__footeroverlay-dash'>
                    <div/>

                </div>

                <div className='app__footeroverlay-price'>
                    <p>{price}</p>

                </div>
           </div>

                <div className='app__footeroverlay-tags'>
                    <p>{tags}</p>

                </div>


            

        </div>
    )
}

export default FooterOverlay
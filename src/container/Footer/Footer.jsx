import React from 'react'
import { data } from "../../constants"
import images from '../../constants/images';
import './Footer.css';
import { SubHeading, FooterOverlay } from '../../components';

const Footer = () => {

    return (
        <div className='app__footer '>
            <div className="app__footer-heading ">
               <SubHeading title="vacation calaries dont count!!"/>
               <h3 className="headtext__cormorant app__footer-head">Summer's special</h3> 
            </div>

            <div className="app__footer-img_text section__padding flex__center">
                <div className="app__footer-container">
                    <p className=' app__footer-title'>FAMILY</p>
                    <div className="app__footer-box">
                        {data.Family.map((family, index) => (
                            <FooterOverlay key={family.title + index} title={family.title} price={family.price} tags={family.tags} />
                        ))}
                    </div>

                </div>

                <div className='app__footer-img'>
                    <img src={images.special_offer} alt='special_offer'/>

                </div>


                <div className="app__footer-container">
                    <p className=' app__footer-title'>ADVENTURE</p>
                    <div className="app__footer-box">
                        {data.Adventure.map((adventure, index) => (
                            <FooterOverlay key={adventure.title + index} title={adventure.title} price={adventure.price} tags={adventure.tags} />
                        ))}
                    </div>

                </div>
            </div>
            <button className='custom__button btn' style={{marginTop:"1rem", marginBottom:"2rem"}}>View More</button>

        </div>
    )
}

export default Footer
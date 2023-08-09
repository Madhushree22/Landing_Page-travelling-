import React from 'react'
import { data } from "../../constants"
import images from '../../constants/images';
import './SpecialOffer.css';
import { SubHeading, OfferDetails } from '../../components';

const SpecialOffer = () => {
    return (
        <div className="app__SpecialOffer flex__center section__padding" id="offer">

            <div className="app__SpecialOffer-title">
                <SubHeading title="Don't listen to what they say, go see " />
                <h3 className="headtext__cormorant">Summer's Special </h3>
            </div>


            <div className="app__SpecialOffer-offer">
                <div className="app__SpecialOffer-offer_package">
                    <p className="app__SpecialOffer-menu_heading">FAMILY</p>
                    <div className="app__SpecialOffer_offer_items">
                        {data.Family.map((family, index) => (
                            <OfferDetails key={family.title + index} title={family.title} price={family.price} tags={family.tags} />
                        ))}

                    </div>
                </div>

                <div className="app__SpecialOffer-offer_img">
                    <img src={images.special_offer} alt="special_offer" />
                </div>


                <div className="app__SpecialOffer-offer_package ">
                    <p className="app__SpecialOffer-menu_heading">ADVENTURE</p>
                    <div className="app__SpecialOffer_offer_items">
                        {data.Adventure.map((adventure, index) => (
                            <OfferDetails key={adventure.title + index} title={adventure.title} price={adventure.price} tags={adventure.tags} />
                        ))}

                    </div>
                </div>



            </div>

            <div style={{ marginTop: "0.01px" }}>
                <button className="custom__button">View More!!</button>

            </div>



        </div>
    )
}

export default SpecialOffer;
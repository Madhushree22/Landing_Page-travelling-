import React from 'react'
import './OfferDetails.css';

const OfferDetails = ({ title, price, tags }) => (
    <div className="app__offerdetails">
        <div className="app__offerdetails-head">
            <div className="app__offerdetails-name">
                <p className="p__cormorant" style={{color:'#DCCA87'}}>{title}</p>
            </div>

            <div className="app__offerdetails-dash"/>


            <div className="app__offerdetails-name">
                <p className="p__cormorant" >{price}</p>
            </div>
        </div>

        <div className="app__offerdetails-sub">
            <p className="p__opensans" style={{color:"#AAA"}}>{tags}</p>

        </div>


         
    </div>
)


export default OfferDetails;



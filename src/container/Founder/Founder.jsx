import React from 'react'
import images from '../../constants/images';
import { SubHeading } from '../../components';

import './Founder.css';

const Founder = () => {
    return (
        <div>
            <div className="app__wrapper section__padding app__traveler">
                <div className="app__wrapper_img">
                    <img src={images.traveler} alt="traveler" />

                </div>
                <div className="app__wrapper_info  app__founder_title">
                    <SubHeading title=" Collect Moments, Not Things." />
                    <h1 className="headtext__cormorant">we believe in</h1>
                    <div class="app__traveler-content">
                        <div class="app__traveler-content_qoute">
                            <img src={images.quote} alt="qoute" />
                            <p className="p__opensans">At FLYNATIONS we are passionate about helping the peaople to explore the world.
                            </p>
                        </div>
                        <p className="p__opensans"><p className="p__opensaans">At FLYNATIONS we are passionate about helping the peaople to explore the world. our mission is to make travel accessible and enjoyable for everyone
                            At FLYNATIONS we are passionate about helping the peaople to explore the world. our mission is to make travel accessible and enjoyable for everyone
                        </p>

                        </p>
                    </div>
                    <div className="app__traveler-sign">
                        <p className="app__traveler-name">kavin </p>
                        <p className="p__opensans">co-founder</p>
                       
                    </div>
                    <div className="app__traveler-space"/>
                </div>

            </div>
        </div>
    )
}

export default Founder;
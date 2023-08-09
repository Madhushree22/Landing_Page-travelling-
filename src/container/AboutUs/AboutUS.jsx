import React from 'react'
import images from '../../constants/images';
import './AboutUs.css'
import{SubHeading} from '../../components/'

const AboutUS = () => {
    return (
        <div className="app__aboutus  flex__center section__padding" id="about">
            <div className="app_aboutus-overlay flex__center" >
                <img src={images.f} alt='letter f' />
            </div>
            <div className="app__aboutus-content flex__center">
                <div className="app__aboutus-content_about">
                    <h1 className="headtext__cormorant"> About us</h1>
                    <img src={images.umbrella1} alt="umbrella" className="umberlla__img" />
                   
                    <p className="p__opensans">At FLYNATIONS we are passionate about helping the peaople to explore the world. our mission is to make travel accessible and enjoyable for everyone
                    At FLYNATIONS we are passionate about helping the peaople to explore the world. our mission is to make travel accessible and enjoyable for everyone </p>
                    <button type="button" className="custom__button">Know More</button>
                    
                </div>

                <div className="app__aboutus-content_paris flex__center">
                    {/* <img src={images.about} alt="paris" /> */}
                    <div className="space_between"/>
                </div>

                <div className="app__aboutus-content_history">
                    <h1 className="headtext__cormorant"> Our History </h1>
                    <img src={images.umbrella1} alt="umbrella" className="umberlla__img" />
                    <p className="p__opensans">At FLYNATIONS we are passionate about helping the peaople to explore the world. our mission is to make travel accessible and enjoyable for everyone
                    At FLYNATIONS we are passionate about helping the peaople to explore the world. our mission is to make travel accessible and enjoyable for everyone </p>
                  
                    <button type="button" className="custom__button">Know More</button>
                </div>



            </div>
        </div>
    )
}

export default AboutUS;
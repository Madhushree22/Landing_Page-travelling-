import React from 'react'
import images from '../../constants/images';
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => {
    return (
        <div className="app__header app__wrapper section__padding" id="home">
            <div className="app__wrapper_info">
                <SubHeading title="Chase the new" />
                <h3 className="app__header-h1">Life is short and the world is wide.</h3>
                <p className="p__opensans  app__header-info">At FLYNATIONS we are passionate about helping the people to explore the world. our mission is to make travel accessible and enjoyable for everyone</p>
                <button className="custom__button btn">Explore More!!</button>
            </div>

            <div className="app__wrapper_img">
                <img src={images.welcome} alt="header_img" />

            </div>

        </div>
    )
}

export default Header
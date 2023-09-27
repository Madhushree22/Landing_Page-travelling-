import React from 'react'
import { SubHeading } from '../../components';
import { data } from "../../constants"
import './Awards.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app__awards-award-card">
        <img src={imgUrl} alt="award" />
        <div className="app__awards_award-card_content">
            <p className="p__cormorant" style={{ color: "#DCCA87" }}>{title}</p>
            <p className="p__cormorant" >{subtitle}</p>

        </div>

    </div>
)
const Awards = () => {
    return (
        <div className="app__wrapper section__padding app__awards" >
            <div className="app__wrapper_info">
                <SubHeading title="Awards & recongnition" />
                <div className="app__award-heading  ">
                    <h1 className="headtext__cormorant   flex__center ">Our Laurels </h1>
                </div>
                <div className="app__awards_content">
                    <div className="app__awards_award">
                        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Awards
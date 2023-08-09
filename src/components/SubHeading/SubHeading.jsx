import React from 'react'
import images from '../../constants/images';

const SubHeading = ({title}) => {
    return (
        <div>
            <p className="p__cormorant ">{title}</p>
            <img src={images.umbrella1} alt="umbrella" className="umberlla__img "/>

        </div>
    )
}

export default SubHeading
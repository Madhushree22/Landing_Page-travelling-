import React, { useRef } from 'react'
import { SubHeading } from '../../components';
import images from '../../constants/images';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css';

const galleryimages =[images.gallery_3,images.gallery_2,images.gallery_1,images.gallery_4,images.gallery_5]

const Gallery = () => {


  const galleryRef=useRef(null);
  
    const scroll =(direction) =>{
        const { current } = galleryRef;

        if(direction==='left')
        {
            current.scrollLeft -=300;
        }
        else{
            current.scrollLeft +=300;
        }
    }

    return (
        <div className="app__gallery  flex__center" id='gallery'>
            <div className="app__gallery-content">
                <SubHeading title="instagram"/> 
                <h3 className="headtext__cormorant">Photo Gallery</h3>
                <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>1 SOBHA, 1st Floor, 50, St Mark's Rd, Ashok Nagar, Bengaluru, Karnataka 5600011 SOBHA, 1st Floor, 50, St Mark's Rd, Ashok Nagar, Bengaluru, Karnataka 560001</p>
                <button className="custom__button">View More</button>
            </div>
            <div className='app__gallery-images'>
                <div className='app__gallery-images_container' ref={galleryRef}>
                    {galleryimages.map((image,index)=>(
                        <div className='app__gallery-images_card  flex__center'key={'gallery_image-${index +1}'}>
                            <img src={image} alt="gallery"/>
                            </div>
                    ))}

                </div>
                <div className='app__gallery-images-arrows'>
                    <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')}/>
                    <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />

                </div>
            </div>


        </div>
    )
}

export default Gallery
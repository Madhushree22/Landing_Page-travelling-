import React from 'react'
import images from '../../constants/images';
import "./Designation.css";
import SubHeading from '../../components/SubHeading/SubHeading';



const Designation = () => {
  return (
    <div className="app__designation " id='designation'>
      {/* <h3 className=" app__heading  headtext__cormorant"> Popular Designation</h3> */}
      <div className=" section__padding-des ">
      <SubHeading title="All you need is passport"/>
       
      </div>
      <h3 className=" app__heading  headtext__cormorant"> Popular Designation</h3>
    <div className="app__designation-container">
      <div className="app__designation-box">
       
        <div className="app__designation-img__text">
        <img src={images.dubai_desgantion} alt="dubai_dest" />
        <div className="text">
              <p > <span className="app__designation_name ">MALDIVES</span>
              </p>
              <div className="btn" />
          </div>
        </div>
      </div>

      <div className="app__designation-box">
        
        <div className="app__designation-img__text">
        <img src={images.paris_desgination} alt="paris_dest" />
            <div className="text">
              <p > <span className="app__designation_name ">PARIS</span>
              </p>
              <div className="btn" />
            </div>
        </div>
      </div>
    
     

    </div>


      <div className="app__designation1-container">
      <div className="app__designation1-box">
        
        <div className="app__designation-img__text">
        <img src={images.new_zealand_desgination} alt="newzealand_dest" />
        <div className="text">
              <p > <span className="app__designation_name ">NEW ZEALAND</span>
              </p>
              <div className="btn" />
          </div>
        </div>
      </div>

      <div className="app__designation1-box">
     
        <div className="app__designation-img__text">
        <img src={images.sydney_desgination} alt="sydney_dest" />
            <div className="text">
              <p > <span className="app__designation_name ">SYDNEY</span>
              </p>
              <div className="btn" />
            </div>
        </div>
      </div>

        <div className="app__designation1-box">
         
          <div className="app__designation-img__text">
            <img src={images.maldivies_designation} alt="maldives_dest" />
            <div className="text">
              <p > <span className="app__designation_name ">MALDIVES</span>
              </p>
             <div className="btn"/>
              {/* <button type="button" className="custom__button btn">Know More</button> */}
            </div>
          </div>
        </div>
    
     

    </div>





    </div>
    
  )
}

export default Designation;
import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Packages.css';
import { BsCurrencyRupee } from 'react-icons/bs'



const Packages = () => {
    return (
        <div className="section__padding-des1 app__packages" id="packages"> 
        <div className="app__packages">
            <div className=" section__padding-des app__packages-title">
                <SubHeading title="Vacation calories don’t count. Right?" />
            </div>
            <h3 className="headtext__cormorant   flex__center  app__packages-heading"> Ongoing Packages!!!
            </h3>

            <div className="app__packages-outer">
                <div className="app__packages-center">
                    <div className="app__packages-img_text">
                        <div className="app__packages-img">
                            <img src={images.bali_packages} alt="bali" />
                        </div>
                        <div className="app__packages-text">
                            <div className="p__cormorant app__packages-text_title ">
                                BALI,
                                <div className="app__packages-text_heading" />
                                Indonesia
                                <div className="app__packages-text_heading" />
                                <p> 
                                    <div>
                                        
                                        <pre style={{fontSize:"small"}}>
                                            Bali is an Indonesian island
                                        </pre>
                                       
                                   </div>                         
                               </p>
                               <br/>
                                <div className=" app__packages-text_price">
                                    <BsCurrencyRupee />5698
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className="app__packages-details">
                                <a href="#viewmore"> More Details</a>
                            </div>



                        </div>
                    </div>

                </div>


                <div className="app__packages-center">
                    <div className="app__packages-img_text">
                        <div className="app__packages-img">
                            <img src={images.kashmir_packages} alt="kashmir" />
                        </div>
                        <div className="app__packages-text">
                            <div className="p__cormorant app__packages-text_title ">
                                KASHMIR,
                                <div className="app__packages-text_heading" />
                                India
                                <div className="app__packages-text_heading" />
                                <p>
                                    <div>

                                        <pre style={{ fontSize: "small" }}>
                                            Paradise on Earth     
                                        </pre>

                                    </div>
                                </p>
                                <br />
                                <div className=" app__packages-text_price">
                                    <BsCurrencyRupee />5698
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className="app__packages-details">
                                <a href="#viewmore"> More Details</a>
                            </div>



                        </div>
                    </div>

                </div>
            </div>

            
            <div className="app__packages-outer">
                <div className="app__packages-center">
                    <div className="app__packages-img_text">
                        <div className="app__packages-img">
                            <img src={images.dubai_packages} alt="dubai" />
                        </div>
                        <div className="app__packages-text">
                            <div className="p__cormorant app__packages-text_title ">
                                DUBAI,
                                <div className="app__packages-text_heading" />
                                United Arab Emirates
                                <div className="app__packages-text_heading" />
                                <p>
                                    <div>

                                        <pre style={{ fontSize: "small" }}>
                                            Burj Khalifa, an 830m-tall tower
                                        </pre>

                                    </div>
                                </p>
                                <br />
                                <div className=" app__packages-text_price">
                                    <BsCurrencyRupee />5698
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className="app__packages-details">
                                <a href="#viewmore"> More Details</a>
                            </div>



                        </div>
                    </div>

                </div>


                <div className="app__packages-center">
                    <div className="app__packages-img_text">
                        <div className="app__packages-img">
                            <img src={images.kerala_packages} alt="kerala" />
                        </div>
                        <div className="app__packages-text">
                            <div className="p__cormorant app__packages-text_title ">
                                KERALA,
                                <div className="app__packages-text_heading" />
                                India
                                <div className="app__packages-text_heading" />
                                <p>
                                    <div>

                                        <pre style={{ fontSize: "small" }}>
                                            coconut-lined sandy beaches
                                        </pre>

                                    </div>
                                </p>
                                <br />
                                <div className=" app__packages-text_price">
                                    <BsCurrencyRupee />5698
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className="app__packages-details">
                                <a href="#viewmore"> More Details</a>
                            </div>



                        </div>
                    </div>

                </div>
            </div>

            <div className="app__packages-outer">
                <div className="app__packages-center">
                    <div className="app__packages-img_text">
                        <div className="app__packages-img">
                            <img src={images.signapore_package} alt="signapore" />
                        </div>
                        <div className="app__packages-text">
                            <div className="p__cormorant app__packages-text_title ">
                             SINGAPORE,
                                <div className="app__packages-text_heading" />
                                Southeast_Asia
                                <div className="app__packages-text_heading" />
                                <p>
                                    <div>

                                        <pre style={{ fontSize: "small" }}>
                                            a global financial center
                                        </pre>

                                    </div>
                                </p>
                                <br />
                                <div className=" app__packages-text_price">
                                    <BsCurrencyRupee />5698
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className="app__packages-details">
                                <a href="#viewmore"> More Details</a>
                            </div>



                        </div>
                    </div>

                </div>


                <div className="app__packages-center">
                    <div className="app__packages-img_text">
                        <div className="app__packages-img">
                            <img src={images.himachal_packages} alt="himachal" />
                        </div>
                        <div className="app__packages-text">
                            <div className="p__cormorant app__packages-text_title ">
                                HIMACHAL_PRADESH,
                                <div className="app__packages-text_heading" />
                                India
                                <div className="app__packages-text_heading" />
                                <p>
                                    <div>

                                        <pre style={{ fontSize: "small" }}>
                                            Himalayan landscapes 
                                        </pre>

                                    </div>
                                </p>
                                <br />
                                <div className=" app__packages-text_price">
                                    <BsCurrencyRupee />5698
                                    <br />
                                </div>
                            </div>
                            <br />
                            <div className="app__packages-details">
                                <a href="#viewmore"> More Details</a>
                            </div>
                            

                            </div>



                        </div>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default Packages
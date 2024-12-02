import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Reasons why you will find the PERFECT match on lagnagath.in </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div className="col-sm-12">
                            <div className="features_div_wrap">
                                <img data-aos="zoom-in" data-aos-duration="800" src="https://www.lagnagath.in/assets/images/logo_bg.png" className="aos-init aos-animate" />
                                <ul className="features_ul">
                                    <li data-aos="fade-left" data-aos-duration="1000" className="aos-init aos-animate">
                                        <div className="features_img">
                                            <img src="https://www.lagnagath.in/assets/icons/user.svg" />
                                        </div>
                                        <div className="features_text">Personalized attention is given to each profile. </div>
                                    </li>
                                    <li data-aos="fade-right" data-aos-duration="1000" className="aos-init aos-animate">
                                        <div className="features_img">
                                            <img src="https://www.lagnagath.in/assets/icons/user.svg" />
                                        </div>
                                        
                                        <div className="features_text">All profiles are verified and authentic. </div>
                                    </li>
                                    <li data-aos="fade-left" data-aos-duration="1000" className="aos-init aos-animate">
                                        <div className="features_img">
                                            <img src="https://www.lagnagath.in/assets/icons/user.svg" />
                                        </div>
                                        <div className="features_text">The database includes profiles from all over the world.</div>
                                    </li>
                                    <li data-aos="fade-right" data-aos-duration="1000" className="aos-init aos-animate">
                                        <div className="features_img">
                                            <img src="https://www.lagnagath.in/assets/icons/user.svg" />
                                        </div>
                                        <div className="features_text">High-quality database of eligible individuals of all ages.</div>
                                    </li>
                                    <li data-aos="fade-left" data-aos-duration="1000" className="aos-init">
                                        <div className="features_img">
                                            <img src="https://www.lagnagath.in/assets/icons/user.svg" />
                                        </div>
                                        <div className="features_text">Individualized assistance is offered throughout the process.</div>
                                    </li>
                                    <li data-aos="fade-right" data-aos-duration="1000" className="aos-init">
                                        <div className="features_img">
                                            <img src="https://www.lagnagath.in/assets/icons/user.svg" />
                                        </div>
                                        <div className="features_text">Strict confidentiality of information is maintained. </div>
                                    </li>
                                    <li data-aos="fade-left" data-aos-duration="1000" className="aos-init">
                                        <div className="features_img">
                                            <img src="https://www.lagnagath.in/assets/icons/user.svg" />
                                        </div>
                                        <div className="features_text">One-time nominal registration fee is applicable.</div>
                                    </li>
                                    <li data-aos="fade-right" data-aos-duration="1000" className="aos-init">
                                        <div className="features_img">
                                            <img src="https://www.lagnagath.in/assets/icons/user.svg" />
                                        </div>
                                        <div className="features_text">Pioneers in research on Maharashtrian wedding industry </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner;
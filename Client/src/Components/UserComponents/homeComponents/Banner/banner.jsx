import React, { useEffect } from 'react';
import './Banner.css';

function Banner() {
    const featureTexts = [
        "Personalized attention is given to each profile.",
        "All profiles are verified and authentic.",
        "The database includes profiles from all over the world.",
        "High-quality database of eligible individuals of all ages.",
        "Individualized assistance is offered throughout the process.",
        "Strict confidentiality of information is maintained.",
        "One-time nominal registration fee is applicable.",
        "Pioneers in research on Maharashtrian wedding industry.",
    ];

    useEffect(() => {
        const featureItems = document.querySelectorAll('.feature_item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class when item is in view
                    entry.target.classList.add('visible');
                } else {
                    // Remove the 'visible' class when item leaves the view
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.5 // 50% of the element must be visible to trigger the animation
        });

        featureItems.forEach(item => observer.observe(item));

        return () => {
            featureItems.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <div className="container">
            
            <div className="row">
                <div className="col-lg-12">
                    {/* <div className="section-title"> */}
                    <h2 className="section-title">Reasons why you will find the PERFECT match on lagnagath.in</h2>
                    {/* </div> */}
                </div>
            </div>

            {/* Single-column layout for the features */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="features_div_wrap">
                        <ul className="features_ul">
                            {featureTexts.map((text, index) => (
                                <li key={index} className="feature_item d-flex align-items-center">
                                    {/* Person Icon */}
                                    {/* <div className="features_img" style={{ marginRight: '10px' }}>
                                        <img
                                            src="https://www.lagnagath.in/assets/icons/user.svg"
                                            alt="User Icon"
                                            style={{ width: '40px', height: '40px' }}
                                        />
                                    </div> */}
                                    {/* Text */}
                                    <div className="features_text">{text}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

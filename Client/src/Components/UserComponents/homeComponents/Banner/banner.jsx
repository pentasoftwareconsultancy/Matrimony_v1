import React from 'react';
import './Banner.css';
import { motion } from 'framer-motion';

function Banner() {
    // Variants for sliding effect
    const itemVariantsLeft = {
        hidden: { opacity: 0, x: -300 },  // Start off-screen to the left
        visible: {
            opacity: 1,
            x: 0, // Slide to the center (visible position)
            transition: {
                duration: 2.5,  // Slower transition for left-side items
                ease: 'easeInOut',
            },
        },
    };

    const itemVariantsRight = {
        hidden: { opacity: 0, x: 300 },  // Start off-screen to the right
        visible: {
            opacity: 1,
            x: 0, // Slide to the center (visible position)
            transition: {
                duration: 2.5,  // Slower transition for right-side items
                ease: 'easeInOut',
            },
        },
    };

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

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Reasons why you will find the PERFECT match on lagnagath.in</h2>
                    </div>
                </div>
            </div>

            {/* Wrapper for the entire feature section */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="col-md-12">
                        <div className="col-sm-12">
                            <motion.div className="features_div_wrap">
                                <img
                                    src="https://www.lagnagath.in/assets/images/logo_bg.png"
                                    className="logo"
                                    alt="Logo"
                                />
                                <ul className="features_ul">
                                    {featureTexts.map((text, index) => (
                                        <motion.li
                                            key={index}
                                            variants={index % 2 === 0 ? itemVariantsLeft : itemVariantsRight}  // Alternate left and right sliding
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.2 }}  // Trigger when the item is 20% visible
                                            className="feature_item"
                                        >
                                            <div className="features_img">
                                                <img
                                                    src="https://www.lagnagath.in/assets/icons/user.svg"
                                                    alt="Icon"
                                                />
                                            </div>
                                            <div className="features_text">{text}</div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

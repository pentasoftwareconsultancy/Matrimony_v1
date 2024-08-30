import React from 'react';
import ProfileCreation from '../../../Components/UserComponents/AboutUs/ProfileCreation';
import Content from '../../../Components/UserComponents/AboutUs/Content';
import HeroSection from '../../../Components/UserComponents/AboutUs/HeroSection';
import Text from '../../../Components/UserComponents/AboutUs/Text';
import NewComponent from '../../../Components/UserComponents/AboutUs/NewComponent';
import NewCom from '../../../Components/UserComponents/AboutUs/NewCom';
import WhyChooseUs from '../../../Components/UserComponents/AboutUs/WhyChooseUs';
import WhatsAppButton from '../../../Components/UserComponents/Buttons/WhatsAppButton';

function About() {
  return (
    <div>
      <HeroSection />
      <Text />
      <ProfileCreation />
      <NewComponent />
      {/* Uncomment the components below if you want to use them */}
      {/* <Content /> */}
      <WhyChooseUs />
      {/* <NewCom /> */}
      {/* <Content /> */}
      <WhatsAppButton/>
    </div>
  );
}

export default About;

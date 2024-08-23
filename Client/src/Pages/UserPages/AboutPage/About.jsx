import React from 'react'
import ProfileCreation from '../../../Components/UserComponents/AboutUs/ProfileCreation'
import Content from '../../../Components/UserComponents/AboutUs/Content'
import HeroSection from '../../../Components/UserComponents/AboutUs/HeroSection'
import Text from '../../../Components/UserComponents/AboutUs/text'
import NewComponent from '../../../Components/UserComponents/AboutUs/NewComponent'
import NewCom from '../../../Components/UserComponents/AboutUs/NewCom'
import WhyChooseUs from '../../../Components/UserComponents/AboutUs/WhyChooseUs'
function About() {
  return (
    <div>
      <HeroSection/>
      <Text/>
        <ProfileCreation/>
        <NewComponent/>
        {/* <Content/> */}
        
        <WhyChooseUs/>
        {/* <NewCom/> */}
        {/* <Content/> */}
       
    </div>
  )
}

export default About
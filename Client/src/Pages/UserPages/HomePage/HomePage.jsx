// import About from "../../../Components/UserComponents/homeComponents/About/About";
import Footer from "../../../Components/UserComponents/homeComponents/Footer/Footer";
import Hero from "../../../Components/UserComponents/homeComponents/Hero/Hero";
import AboutSection from "../../../Components/UserComponents/homeComponents/lagngath/AboutSection";
import ProfileSteps from "../../../Components/UserComponents/homeComponents/profilestep/ProfileSteps";

function HomePage() {
  return (
    <div>
      <Hero/>
      <ProfileSteps /> 
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default HomePage;

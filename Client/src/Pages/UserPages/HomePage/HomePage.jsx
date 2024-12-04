// import Hero from "../../../Components/UserComponents/homeComponents/Hero/Hero";



// import About from "../../../Components/UserComponents/homeComponents/About/About";
// import Footer from "../../../Components/UserComponents/homeComponents/Footer/Footer";
// import About from "../../../Components/UserComponents/homeComponents/About/About";
import Hero from "../../../Components/UserComponents/homeComponents/Hero/Hero";
import AboutSection from "../../../Components/UserComponents/homeComponents/lagngath/AboutSection";
import ProfileSteps from "../../../Components/UserComponents/homeComponents/profilestep/ProfileSteps";
import StatsSection from "../../../Components/UserComponents/homeComponents/StatsSection/StatsSection";
import MatchedByMatrimony from "../../../Components/UserComponents/homeComponents/MatchedByMatrimony/MatchedByMatrimony"
import WhatsAppButton from "../../../Components/UserComponents/Buttons/WhatsAppButton";
import Banner from "../../../Components/UserComponents/homeComponents/Banner/banner"; 
import Filter from "../../../Components/UserComponents/homeComponents/Filter/Filter";

function HomePage() {
  return (
    <div>
      <Hero />
      <Banner />
      <ProfileSteps />
      <AboutSection />
      <StatsSection />
      <MatchedByMatrimony />
      <Filter />
<WhatsAppButton/>




    </div>
  );
}

export default HomePage;



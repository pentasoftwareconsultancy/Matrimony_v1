import Footer from "../../../Components/UserComponents/homeComponents/Footer/Footer";
import About from "../../../Components/UserComponents/homeComponents/About/About";
import Hero from "../../../Components/UserComponents/homeComponents/Hero/Hero";
import AboutSection from "../../../Components/UserComponents/homeComponents/lagngath/AboutSection";
import ProfileSteps from "../../../Components/UserComponents/homeComponents/profilestep/ProfileSteps";

function HomePage() {
  return (
    <div>
      <Hero />
      <ProfileSteps />
      <AboutSection />
      <Footer />
      <About />
    </div>
  );
}

export default HomePage;

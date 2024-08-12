import About from "../../../Components/UserComponents/homeComponents/About/About";
import Footer from "../../../Components/UserComponents/homeComponents/Footer/Footer";
import Hero from "../../../Components/UserComponents/homeComponents/Hero/Hero";

function HomePage() {
  return (
    <div>
      <Hero/>
      
      <About />
      <Footer/>
    </div>
  );
}

export default HomePage;

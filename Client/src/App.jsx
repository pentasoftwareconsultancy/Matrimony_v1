import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/UserComponents/homeComponents/Navbar/Navbar";
import FormPage from "./Pages/UserPages/FormPage/FormPage";
import HomePage from "./Pages/UserPages/HomePage/HomePage";
import LoginPage from "./Pages/UserPages/LoginPage/LoginPage";
import RegisterPage from "./Pages/UserPages/RegisterPage/RegisterPage";

import Footer from "./Components/UserComponents/Footer/Footer";
import AboutPage from "./Pages/UserPages/AboutPage/About";
import ForgotPage from "./Pages/UserPages/ForgotPage/Forgotpage";
// import BiodataPage from "./Components/UserComponents/Biodata/BiodataPage";
import Groom from "./Components/UserComponents/Groom/Groom";
import BriedCard from "./Pages/UserPages/Brieddata/Bried";
import ContactPage from "./Pages/UserPages/ContactPage/Contact";
import Service from "./Pages/UserPages/ServicesPage/Service";
// import Banner from "./Components/UserComponents/homeComponents/Banner/banner";
import DataBio from "./Components/UserComponents/DataBio/Databio";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

function App() {

   

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPage />} />
        <Route path="/form" element={<FormPage />} />
        {/* <Route path="/biodatapage" element={<BiodataPage />} /> */}
        <Route path="/services" element={<Service />} />
        <Route path="/briedcard" element={<BriedCard />} />
        <Route path="/groom" element={<Groom />} />
        <Route path="/biodata/:id" element={<DataBio />} />


        {/* pandding */}
        {/* filer */}
        {/* main form */}
        {/* full datailsform */}

        <Route path="/about" element={<AboutPage />} />

        {/* Admin Routes */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/UserPages/HomePage/HomePage";
import LoginPage from "./Pages/UserPages/LoginPage/LoginPage";
import RegisterPage from "./Pages/UserPages/RegisterPage/RegisterPage";
import Navbar from "./Components/UserComponents/homeComponents/Navbar/Navbar";
import FormPage from "./Pages/UserPages/FormPage/FormPage";

import Footer from "./Components/UserComponents/Footer/Footer";
import ForgotPage from "./Pages/UserPages/ForgotPage/Forgotpage";
import AboutPage from "./Pages/UserPages/AboutPage/About";
// import BiodataPage from "./Components/UserComponents/Biodata/BiodataPage";
import ContactPage from "./Pages/UserPages/ContactPage/Contact";
import BriedCard from "./Pages/UserPages/Brieddata/Bried";
import Service from "./Pages/UserPages/ServicesPage/Service";
import Groom from "./Components/UserComponents/Groom/Groom";
// import Banner from "./Components/UserComponents/homeComponents/Banner/banner";
import DataBio from "./Components/UserComponents/DataBio/Databio"

function App() {
  return (
    <>
      <Navbar />
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

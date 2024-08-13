import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/UserPages/HomePage/HomePage";
import LoginPage from "./Pages/UserPages/LoginPage/LoginPage";
import RegisterPage from "./Pages/UserPages/RegisterPage/RegisterPage";
import Navbar from "./Components/UserComponents/homeComponents/Navbar/Navbar";
import FormPage from "./Pages/UserPages/FormPage/FormPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/form" element={<FormPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}

        {/* Admin Routes */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}

export default App;

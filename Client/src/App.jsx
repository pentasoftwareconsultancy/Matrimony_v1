import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/UserPages/HomePages/HomePage";
import LoginPage from "./Pages/UserPages/LoginPage/LoginPage";
import RegisterPage from "./Pages/UserPages/RegisterPage/RegisterPage";


function App() {
  return (
    <Routes>
      {/* user Router */}
       
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        {/* <Route path="about" element={< />} /> */}

        {/* Admin Router */}
        {/* <Route path="/dashboard" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      
    </Routes>
  );
}

export default App;

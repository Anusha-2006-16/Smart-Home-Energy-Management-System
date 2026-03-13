 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import "./components/css/global.css";
import OtpForm from "./components/OtpForm";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
function App() {
  return (
    <>
     
       <Router>
     <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/home" element={<MainPage/>}/>
      <Route path="/about" element={<MainPage/>}/>
      <Route path="/contact" element={<MainPage/>}/>
      <Route path="/faqs" element={<MainPage />} />
      <Route path="/testimonials" element={<MainPage />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/otp" element={<OtpForm/>}/>
      <Route path="/register" element={<Register/>}/> 
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
     </Routes>
   </Router>   
    </>
 

  );
}

export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import AboutUsPage from "@/components/AboutUsPage";
import TeamPage from "@/components/TeamPage";
import ServicesPage from "@/components/ServicesPage";
import ContactPage from "@/components/ContactPage";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import ScrollToTopButton from "@/components/ScrollToTopButton"; 
// ADDED: Import the Chatbot component
import Chatbot from "@/components/Chatbot"; // Ensure this path is correct

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate /> 
      
      <div className="min-h-screen bg-gray-50 relative">
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <Header />
        <main>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} /> 
              <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
        {/* ADDED: The floating chatbot component (Uncomment if needed) */}
        {/* <Chatbot />  */}
      </div>
    </BrowserRouter>
  );
};

export default App;

// --- FIX APPLIED HERE ---
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  * {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    /* 1. Ensure the height of the root elements covers the entire viewport */
    height: 100%; 
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
  }

  /* 2. Optional but recommended: Ensure the React root element is also full height */
  #root {
     height: 100%;
  }

  main, header, section {
    width: 100%;
    max-width: 100%;
  }

  @keyframes logo-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .logo-scroll-container {
    animation: logo-scroll 35s linear infinite;
    width: 200%;
  }
`;
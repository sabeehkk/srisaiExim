import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import AboutUsPage from "@/components/AboutUsPage";
import TeamPage from "@/components/TeamPage";
import ServicesPage from "@/components/ServicesPage";
import ContactPage from "@/components/ContactPage";
import ServiceDetailPage from "@/components/ServiceDetailPage";


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        <Header />
        <main>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />  {/* ✅ Dynamic route */}
              <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

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
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
  }

  #root, main, header, section {
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

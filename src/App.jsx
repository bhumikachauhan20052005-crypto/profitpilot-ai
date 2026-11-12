import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Analysis from "./pages/Analysis";
import Contact from "./components/Contact";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [businessData, setBusinessData] = useState(null);

  const goToAnalysis = () => {
    setCurrentPage("analysis");
  };

  const showDashboard = (data) => {
    setBusinessData(data);
    setCurrentPage("dashboard");
  };

  // ANALYSIS PAGE
  if (currentPage === "analysis") {
    return (
      <Analysis
        goHome={() => setCurrentPage("home")}
        showDashboard={showDashboard}
      />
    );
  }

  // DASHBOARD PAGE
  if (currentPage === "dashboard") {
    return (
      <Dashboard
        businessData={businessData}
        goHome={() => setCurrentPage("home")}
        goBack={() => setCurrentPage("analysis")}
      />
    );
  }

  // HOME PAGE
  return (
    <>
     <Navbar goToAnalysis={goToAnalysis} />

      <Hero goToAnalysis={goToAnalysis} />

      <Features />

      <HowItWorks />
      <Pricing />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
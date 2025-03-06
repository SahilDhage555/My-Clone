import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Posters from "./Components/Header";
import ProductFilters from "./Components/Product&Filters";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollUp";
import { FooterProvider } from "./Contexts/FooterContext";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

// Separate component to conditionally render
function MainContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {/* Hide Posters & ProductFilters if on /signup */}
      {location.pathname !== "/signup" && (
        <>
          <ScrollToTop />
          <Routes>
            <Route path={"/"} element={<Navbar />} />
          </Routes>
          <Posters />
          <ProductFilters />
          <FooterProvider>
            <Footer />
          </FooterProvider>
        </>
      )}
    </>
  );
}

export default App;

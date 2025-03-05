import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const FooterContext = createContext();

// Footer Provider Component
export const FooterProvider = ({ children }) => {
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch footer content from backend API
    axios
      .get("http://localhost:5000/api/footer/aboutFooter")
      .then((response) => {
        if (response.data.success) {
          setFooterData(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching footer data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <FooterContext.Provider value={{ footerData, loading }}>
      {children}
    </FooterContext.Provider>
  );
};

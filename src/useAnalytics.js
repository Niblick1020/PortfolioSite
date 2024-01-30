// src/useAnalytics.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-4MMWSBJ4KE", {
        page_path: location.pathname,
        page_name: document.title,
      });
    }
  }, [location]);
};

export default useAnalytics;

import React, { useEffect } from "react";
import "./CSS/PreLoader.css"; // Make sure this path is correct based on your folder structure

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Show preloader for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="preloader-container">
      <img
        src="/logo.svg" // Replace with your actual logo path
        alt="Loading Logo"
        className="preloader-logo"
      />
    </div>
  );
};

export default Preloader;

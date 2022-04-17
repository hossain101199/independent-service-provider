import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="mt-3 bg-dark text-center text-white p-3">
      <h5>
        <i className="fa-regular fa-copyright"></i> {year} | Samiha's Mehendi |
        All Rights Reserved.
      </h5>
    </footer>
  );
};

export default Footer;

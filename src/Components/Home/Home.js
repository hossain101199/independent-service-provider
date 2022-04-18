import React from "react";
import { Link } from "react-router-dom";
import Contactextrasection from "../Contactextrasection/Contactextrasection";
import usePackagesData from "../Hooks/PackagesData";
import Banner from "./Banner/Banner";
import HomePackege from "./HomePackege/HomePackege";

const Home = () => {
  const [PackagesData, setPackagesData] = usePackagesData();
  const thethreePackages = PackagesData.slice(0, 3);
  return (
    <div>
      <Banner></Banner>
      <h2 className="mt-3 text-center">Packages</h2>
      <div className="mt-3 row g-4">
        {thethreePackages.map((thethreePackage) => (
          <HomePackege
            key={thethreePackage.id}
            thethreePackage={thethreePackage}
          ></HomePackege>
        ))}
        <div className="text-end">
          <Link to="/Packages">
            <button className="btn btn-primary w-25">
              See more package &#x21e5;
            </button>
          </Link>
        </div>
        <Contactextrasection></Contactextrasection>
      </div>
    </div>
  );
};

export default Home;

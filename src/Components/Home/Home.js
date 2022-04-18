import React from "react";
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
        <Contactextrasection></Contactextrasection>
      </div>
    </div>
  );
};

export default Home;

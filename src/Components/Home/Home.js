import React from "react";
import usePackagesData from "../Hooks/PackagesData";
import Banner from "./Banner/Banner";
import HomePackege from "./HomePackege/HomePackege";

const Home = () => {
  const [PackagesData, setPackagesData] = usePackagesData();
  const threePackages = PackagesData.splice(0, 3);
  return (
    <div>
      <Banner></Banner>
      <h2 className="mt-3 text-center">Packages</h2>
      <div className="mt-3 row g-4">
        {threePackages.map((threePackage) => (
          <HomePackege
            key={threePackages.id}
            threePackage={threePackage}
          ></HomePackege>
        ))}
      </div>
    </div>
  );
};

export default Home;

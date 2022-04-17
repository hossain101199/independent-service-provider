import React from "react";
import usePackagesData from "../Hooks/PackagesData";
import Packege from "./Package/Package";

const Packages = () => {
  const [PackagesData, setPackagesData] = usePackagesData();

  return (
    <div className="mt-3 row g-4">
      {PackagesData.map((Package) => (
        <Packege key={Package.id} Package={Package}></Packege>
      ))}
    </div>
  );
};

export default Packages;

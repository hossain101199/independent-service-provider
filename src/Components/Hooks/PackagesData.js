import { useEffect, useState } from "react";

const usePackagesData = () => {
  const [PackagesData, setPackagesData] = useState([]);
  useEffect(() => {
    fetch("Packages.json")
      .then((res) => res.json())
      .then((data) => setPackagesData(data));
  }, []);
  return [PackagesData, setPackagesData];
};

export default usePackagesData;

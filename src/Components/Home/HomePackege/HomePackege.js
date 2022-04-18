import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Contesxtapp } from "../../../App";

const HomePackege = ({ thethreePackage }) => {
  // const selectedItem = useContext(Contesxtapp);
  const { price, picture, name, shortDescription } = thethreePackage;
  return (
    <div className="col-md-4">
      <div className="card " style={{ height: "700px" }}>
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5>{price}</h5>
          <p className="card-text">{shortDescription}</p>
        </div>
        <div className="card-footer bg-white">
          <Link to="/Booking">
            <button className="btn btn-primary w-100 fs-5">
              Book appointment <i className="fa-regular fa-calendar-check"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePackege;

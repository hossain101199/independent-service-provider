import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Contesxtapp } from "../../../App";

const HomePackege = ({ thethreePackage, Hendleselpackage }) => {
  // const selectedItem = useContext(Contesxtapp);

  const { id, price, picture, name, shortDescription } = thethreePackage;

  const Navigate = useNavigate();
  const navigateToappointment = (id) => {
    Navigate(`/Booking/${id}`);
  };
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
          <button
            onClick={() => Hendleselpackage(thethreePackage)}
            className="btn btn-primary w-100 fs-5"
          >
            Book appointment <i className="fa-regular fa-calendar-check"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePackege;

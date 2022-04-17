import React from "react";

const Package = ({ Package }) => {
  const { price, picture, name, shortDescription } = Package;
  return (
    <div className="col-md-4">
      <div className="card ">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5>{price}</h5>
          <p className="card-text">{shortDescription}</p>
        </div>
        <div class="card-footer bg-white">
          <button className="btn btn-primary w-100 fs-5">
            Book appointment <i class="fa-regular fa-calendar-check"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;

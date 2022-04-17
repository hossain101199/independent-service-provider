import React from "react";
import { Link } from "react-router-dom";
import page404 from "../Images/000-404.png";

const Page404 = () => {
  return (
    <div className="mt-3">
      <img src={page404} className="w-100 m-auto" />
      <Link to="/">
        <button type="button" className="btn btn-primary w-100 mt-3">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default Page404;

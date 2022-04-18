import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logoIMG from "../Images/logo.jpeg";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center fw-bolder fs-3"
          >
            <img
              src={logoIMG}
              alt=""
              width="50"
              height="50"
              className="d-inline-block align-text-top me-3"
            />
            Samiha's Mehendi
          </NavLink>

          <div className="d-flex fw-bolder fs-4">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Packages">
                    Packages
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
                {user ? (
                  <li onClick={logout} className="nav-item">
                    <Link className="nav-link" to="#">
                      Log Out
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Login">
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-50 m-auto">
      <h1 className="text-center w-100 mt-3">Log in to your account</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="form-check-label text-center w-100"
            for="exampleCheck1"
          >
            Forgot Your Passwoed?
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100 fs-5">
          Login
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center">
        <hr className="w-50 " />
        <h4 className="m-3">or</h4>
        <hr className="w-50 h-" />
      </div>
      <button type="submit" className="btn btn-primary w-100 fs-5 mb-3">
        <i class="fa-brands fa-google"></i> Continue with google
      </button>
      <button type="submit" className="btn btn-primary w-100 fs-5">
        <i class="fa-brands fa-facebook"></i> Continue with Facebook
      </button>
      <hr />
      <Link to="/CreateAccount">
        <button type="submit" className="btn btn-primary w-100 fs-5">
          Create New Account
        </button>
      </Link>
    </div>
  );
};

export default Login;

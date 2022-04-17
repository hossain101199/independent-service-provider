import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateAccount = () => {
  const [userInfo, setuserInfo] = useState({
    Email: "",
    Password: "",
    Confirmpassword: "",
  });

  const [myreeoes, setmyreeoes] = useState({
    Email: "",
    Password: "",
    Confirmpassword: "",
    allError: "",
  });
  const [createUserWithEmailAndPassword, user, loading, HookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleEmail = (e) => {
    const emilRegex = /\S+@\S+\.\S+/;
    const validEmail = emilRegex.test(e.target.value);
    if (validEmail) {
      setuserInfo({ ...userInfo, Email: e.target.value });
      setmyreeoes({ ...myreeoes, Email: "" });
    } else {
      setmyreeoes({ ...myreeoes, Email: "❌ Invalid email" });
      setuserInfo({ ...userInfo, Email: "" });
    }
  };

  const handlePassword = (e) => {
    const PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const validPassword = PasswordRegex.test(e.target.value);
    if (validPassword) {
      setuserInfo({ ...userInfo, Password: e.target.value });
      setmyreeoes({ ...myreeoes, Password: "" });
    } else {
      setmyreeoes({
        ...myreeoes,
        Password:
          "Password must be minimum eight characters,at least one letter and one number",
      });
      setuserInfo({ ...userInfo, Password: "" });
    }
  };

  const handleConfirmPassword = (e) => {
    if (e.target.value === userInfo.Password) {
      setuserInfo({ ...userInfo, Confirmpassword: e.target.value });
      setmyreeoes({ ...myreeoes, Password: "" });
    } else {
      setmyreeoes({
        ...myreeoes,
        Password: "Password don't match",
      });
      setuserInfo({ ...userInfo, Confirmpassword: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.Email, userInfo.Password);
  };
  useEffect(() => {
    if (HookError) {
      toast.warn(HookError?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [HookError]);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);
  return (
    <div className="w-50 m-auto">
      <h1 className="text-center w-100 mt-3">Create a New Account</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Your name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            required
          />
          {myreeoes?.Email && (
            <div id="emailHelp" className="text-danger">
              {myreeoes.Email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handlePassword}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
          />
          {myreeoes?.Password && (
            <div id="emailHelp" className="text-danger">
              {myreeoes?.Password}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm password
          </label>
          <input
            onChange={handleConfirmPassword}
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 fs-5">
          Create account
        </button>
      </form>
      <div className="d-flex justify-content-center align-items-center">
        <hr className="w-50 " />
        <h4 className="m-3">or</h4>
        <hr className="w-50 h-" />
      </div>
      <button type="submit" className="btn btn-primary w-100 fs-5 mb-3">
        <i className="fa-brands fa-google"></i> Continue with google
      </button>
      <button type="submit" className="btn btn-primary w-100 fs-5">
        <i className="fa-brands fa-facebook"></i> Continue with Facebook
      </button>
      <hr />
      <Link to="/Login">
        <button type="submit" className="btn btn-primary w-100 fs-5">
          Already have an account
        </button>
      </Link>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
    </div>
  );
};

export default CreateAccount;

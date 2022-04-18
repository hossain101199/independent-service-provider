import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [userInfo, setuserInfo] = useState({
    Email: "",
    Password: "",
  });

  const [myreeoes, setmyreeoes] = useState({
    Email: "",
    Password: "",
    allError: "",
  });

  const [signInWithEmailAndPassword, user, loading, HookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [signInWithFacebook, FBuser, fbloading, FBerror] =
    useSignInWithFacebook(auth);

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

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.Email, userInfo.Password);
  };

  const handleForgotpassword = () => {
    sendPasswordResetEmail(auth, userInfo.Email).then(() => {
      toast.success("An email has been sent", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
  };
  useEffect(() => {
    const Error = googleerror || HookError || FBerror;
    if (Error) {
      toast.warn(Error?.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [HookError, googleerror, FBerror]);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user || googleuser || FBuser) {
      navigate(from);
    }
  }, [user, googleuser, FBuser]);
  return (
    <div className="w-50 m-auto" style={{ minHeight: "80vh" }}>
      <h1 className="text-center w-100 mt-3">Log in to your account</h1>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
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
        <div className="mb-3 text-center fw-normal w-100 pe-auto">
          <Link
            to="#"
            onClick={handleForgotpassword}
            className="link-dark text-decoration-none"
          >
            Forgot Your password?
          </Link>
        </div>

        <button type="submit" className="btn btn-primary w-100 fs-5">
          Login
        </button>
      </form>
      {/* continue with google facebok */}
      <div className="d-flex justify-content-center align-items-center">
        <hr className="w-50 " />
        <h4 className="m-3">or</h4>
        <hr className="w-50 h-" />
      </div>
      <button
        onClick={() => signInWithGoogle()}
        type="submit"
        className="btn btn-primary w-100 fs-5 mb-3"
      >
        <i className="fa-brands fa-google"></i> Continue with google
      </button>
      <button
        onClick={() => signInWithFacebook()}
        type="submit"
        className="btn btn-primary w-100 fs-5"
      >
        <i className="fa-brands fa-facebook"></i> Continue with Facebook
      </button>
      {/* continue with google facebok */}
      <hr />
      <Link to="/CreateAccount">
        <button type="submit" className="btn btn-primary w-100 fs-5">
          Create New Account
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

export default Login;

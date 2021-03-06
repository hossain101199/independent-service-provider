import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Packages from "./Components/Packages/Packages";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Navbar from "./Components/Navbar/Navbar";
import Page404 from "./Components/page404/Page404";
import Blogs from "./Components/Blogs/Blogs";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";
import Footer from "./Components/Footer/Footer";
import BookingPage from "./Components/BookingPage/BookingPage";
import { useState } from "react";

function App() {
  const [selectedPackage, setselectedPackage] = useState();
  const Hendleselpackage = (data) => {
    setselectedPackage(data);
  };
  return (
    <div className="App container">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Packages" element={<Packages></Packages>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Blogs></Blogs>}></Route>
        <Route
          path="/Booking/:selectedPackage"
          element={
            <RequireAuth>
              <BookingPage></BookingPage>
            </RequireAuth>
          }
        ></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route
          path="/CreateAccount"
          element={<CreateAccount></CreateAccount>}
        ></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    // </Contesxtapp.Provider>
  );
}

export default App;

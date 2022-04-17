import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Packages from "./Components/Packages/Packages";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App container">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Packages" element={<Packages></Packages>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route
          path="/CreateAccount"
          element={<CreateAccount></CreateAccount>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

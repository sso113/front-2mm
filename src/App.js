import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Passwd from "./pages/Passwd";
//import Splash from "./pages/Splash";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route path="/" element={<Splash />} /> */}
          <Route path="/" element={<Login />} />{" "}
          <Route path="/Passwd" element={<Passwd />} />{" "}
          <Route path="/Home" element={<Home />} />{" "}
          <Route path="/Passwd" element={<Passwd />} />{" "}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

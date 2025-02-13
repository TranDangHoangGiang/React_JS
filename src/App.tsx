import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Body />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <HomePage></HomePage>
    //   <Login></Login>
    // </>
  );
}

export default App;

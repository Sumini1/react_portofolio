import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/login/login";
import MenuDetail from "./pages/MenuDetail/MenuDetail";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/menu"  element={<Menu />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/menu-detail/:id"  element={<MenuDetail />} />
        
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;

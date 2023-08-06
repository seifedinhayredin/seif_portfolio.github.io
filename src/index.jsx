import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/home";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Comp1 from "./pages/Comp1";

function Rou() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route exact path="blog" element={<Blog />} />
            <Route exact path="contact" element={<Contact />} />
            <Route exact path="about" element={<About />} />
            <Route exact path="comp1" element={<Comp1 />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Rou;
const root = ReactDOM.createRoot(document.getElementById("seif"));
root.render(<Rou />);

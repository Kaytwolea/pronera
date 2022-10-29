import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path="/">
          <Route index element={<Hero />}/>
          <Route path="about" element={ <About />} />
          <Route path="contact" element={<Contact />} />
         </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./pages/home";
import Cats from "./pages/cats";
import { Dogs } from "./pages/dogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Header } from "./components/header";
import { DogsBreedsPage } from "./pages/dogs/dogs-breed";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div>Hello World</div>} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/dogs/:id" element={<DogsBreedsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

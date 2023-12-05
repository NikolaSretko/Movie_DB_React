import React from "react";
import './App.scss'
import FilmDetails from './components/FilmDetails/FilmDetails';
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<FilmDetails />} />
      </Routes>
    </>
  );
}

export default App;

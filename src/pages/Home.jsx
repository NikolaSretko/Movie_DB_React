import React, { useState } from "react";
import FilmList from "../components/FilmList/FilmList";
import Nav from "../components/Nav/Nav";
import movies from "../data/movies";
import './Home.scss'

const Home = () => {
    const [filmArr, setFilmArr] = useState(movies);

    const [filteredFilmArr, setFilteredFilmArr] = useState(movies);
  

    const sortBy = (sortFunction) => {

      const sortedFilms = [...filmArr].sort(sortFunction);
      setFilteredFilmArr(sortedFilms);
    };
  

    const searchFunction = (searchTerm) => {

      const filteredFilms = filmArr.filter((film) =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFilmArr(filteredFilms);
    };
  
    // Rendern
    return (
      <section>
        <h1>Movie.it</h1>
        <Nav
          filterByDateAsc={() => sortBy((a, b) => a.year - b.year)}
          filterByDateDesc={() => sortBy((a, b) => b.year - a.year)}
          filterByBestRate={() => sortBy((a, b) => b.rate - a.rate)}
          filterByAZ={() => sortBy((a, b) => a.title.localeCompare(b.title))}
          filterByZA={() => sortBy((a, b) => b.title.localeCompare(a.title))}
          searchFunction={searchFunction}
        />
        <FilmList filmArr={filteredFilmArr} />
      </section>
    );
  };

export default Home;

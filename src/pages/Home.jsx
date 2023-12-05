import React, { useState } from "react";
import FilmList from "../components/FilmList/FilmList";
import Nav from "../components/Nav/Nav";
import movies from "../data/movies";
import './Home.scss'

const Home = () => {
    // Zustand für die gesamte Filmliste
    const [filmArr, setFilmArr] = useState(movies);
    // Zustand für die gefilterte Filmliste, die durch Sortier- oder Suchfunktionen aktualisiert wird
    const [filteredFilmArr, setFilteredFilmArr] = useState(movies);
  
    // Funktion für die Sortierung der Filme
    const sortBy = (sortFunction) => {
      // Erstelle eine Kopie der Filmliste und wende die übergebene Sortierfunktion an
      const sortedFilms = [...filmArr].sort(sortFunction);
      // Aktualisiere den Zustand für die gefilterte Filmliste
      setFilteredFilmArr(sortedFilms);
    };
  
    // Funktion für die Suche nach Filmen basierend auf einem Suchbegriff
    const searchFunction = (searchTerm) => {
      // Filtere die Filmliste nach Titeln, die den Suchbegriff enthalten
      const filteredFilms = filmArr.filter((film) =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // Aktualisiere den Zustand für die gefilterte Filmliste
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
        {/* Übergebe die gefilterte Filmliste an die FilmList-Komponente */}
        <FilmList filmArr={filteredFilmArr} />
      </section>
    );
  };

export default Home;

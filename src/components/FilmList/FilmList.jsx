import React from "react";
import FilmCard from "../FilmCards/FilmCard";

const FilmList = ({ filmArr }) => {
  return (
    <section className="filmCard">
      {filmArr.map((movie, index) => (
        <div key={index} className="filmCardItem">
          <FilmCard
            id={index}
            title={movie.title}
            year={movie.year}
            director={movie.director}
            duration={movie.duration}
            rate={movie.rate}
          />
        </div>
      ))}
    </section>
  );
};

export default FilmList;

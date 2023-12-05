import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movies from "../../data/movies";

const FilmDetails = () => {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState(null);

  useEffect(() => {

    const selectedIndex = parseInt(id, 10);


    const selectedFilm = movies[selectedIndex];


    setFilmDetail(selectedFilm);
  }, [id]);

  return (
    <article>
      {filmDetail ? (
        <>
          <h2>{filmDetail.title}</h2>
          <p>{filmDetail.year}</p>
          <p>{filmDetail.director}</p>
          <p>{filmDetail.duration}</p>
          <p>{filmDetail.rate}</p>
          <Link to="/">Back</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
};

export default FilmDetails;

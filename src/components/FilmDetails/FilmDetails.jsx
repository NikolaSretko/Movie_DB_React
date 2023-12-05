import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movies from "../../data/movies";
import './FilmDetails.scss'
import BackIcon from "../../assets/svg/BackIcon";

const FilmDetails = () => {
  const { id } = useParams();
  const [filmDetail, setFilmDetail] = useState(null);

  useEffect(() => {

    const selectedIndex = parseInt(id, 10);


    const selectedFilm = movies[selectedIndex];


    setFilmDetail(selectedFilm);
  }, [id]);

  return (
    <article className="filmDetails">
      {filmDetail ? (
        <div className="detailWrapper">
          <h2 className="detailHead">{filmDetail.title}</h2>
          <p>{filmDetail.year}</p>
          <p>{filmDetail.director}</p>
          <p>{filmDetail.duration}</p>
          <p>{filmDetail.rate}⭐️</p>
          <p>Genres: <br></br> {filmDetail.genre[0]} , {filmDetail.genre[1]}</p>
          <Link to="/"><BackIcon/></Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
};

export default FilmDetails;

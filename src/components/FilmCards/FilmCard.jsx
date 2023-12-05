import React from "react";
import { Link, useParams } from "react-router-dom";
import "./FilmCard.scss"
import MoreIcon from "../../assets/svg/More";

const FilmCard = ({title,year,director,duration,rate,id}) => {
    useParams()

  return (
    <article className="filmCardContent">
      <div>

      <h2>{title}</h2>
      <p>{year}</p>
      <p>{director}</p>
      <p>{duration}</p>
      <p>{rate}</p>
      <Link to={`/details/${id}`}><MoreIcon/></Link>
      </div>
    </article>
  );
};

export default FilmCard;

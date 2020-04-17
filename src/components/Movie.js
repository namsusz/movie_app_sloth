import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({
  id,
  title,
  subtitle,
  comeout,
  genres,
  summary,
  poster,
  link,
}) {
  return (
    <Link
      to={{
        pathname: `movie/${id}`,
        state: {
          title,
          subtitle,
          comeout,
          genres,
          summary,
          poster,
          link,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <div className="movie__header">
            <p className="movie__title">{title}</p>
            <p className="movie__subtitle">{subtitle}</p>
          </div>
          <div className="movie__info">
            <p className="movie__comeout">
              <span className="span__comeout">개봉일</span>
              {comeout}
            </p>
            <ul className="movie__genres">
              <span className="span__genres">장르</span>
              {genres.map((genres, id) => (
                <li key={id} className="genres__genre">
                  {genres}
                </li>
              ))}
            </ul>
            <span>줄거리</span>
            <p className="movie__summary">{summary.slice(0, 100) + " ..."}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  comeout: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Movie;

import React from "react"
import PropTypes from "prop-types";
import "./Movie.css"
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }) {
    return <div className="movie" style={{ minWidth: "350px", minHeight: "250px" }}>
        <img className="movie_img" src={poster} alt={title} title={title}></img>
        <div className="movie_data">
            <h4 className="movie_title">
                <Link to={`/movie/${id}`}>
                {title.length > 30 ? `${title.slice(0, 30)}...` : title}
                </Link>
            </h4>
            <h3 className="movie_year">{year}</h3>
            <p className="movie_summary">{summary.length === 0 ? "" : summary.length > 235 ? `${summary.slice(0,250)}`:summary}</p>
            <ul className="movie_genres">{genres.map((genre, index) => (
                <li key={index} className="genres_genre">{genre}</li>
            ))}</ul>
        </div>
    </div>;
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;



import PropTypes from "prop-types";
import {
    Link,
} from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres, year, rating }) {
    return (
        <div>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
                {/* <a href="/movie">{title}</a> */}
            </h2>
            <img src={coverImage} alt={title} />
            <p>{summary}</p>
            [장르]
            <ul>
                {genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
            <p>개봉년도 : {year}년 / 평점 : {rating}</p>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
}
export default Movie; 
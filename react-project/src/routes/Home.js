import Movie from "../components/Movie";
import { useState, useEffect } from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies()
    }, [])
    return (
        <div>
            {loading ? (<h1>Loading...</h1>) : (
                <div>
                    <h1>평점 8.5 이상 영화들</h1>
                    {movies.map((movie) => <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImage={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                        year={movie.year}
                        rating={movie.rating}
                    />
                    )}
                    <hr />
                </div >
            )}

        </div >
    );
}

export default Home;
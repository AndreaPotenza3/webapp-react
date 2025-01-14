import { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "../comonents/MovieCard"

export default function Home() {

    const BASE_API = 'http://localhost:3000'
    const [movies, setMovies] = useState([])

    function fetchMovies() {

        axios.get(`${BASE_API}/movies/`)
            .then(res => {
                setMovies(res.data)
                console.log(res.data)
            }).catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <section>
                <div className="container min-vh-100">
                    <h2 className="py-3">Lista dei film</h2>
                    <div className="row mb-5 g-3">
                        {movies.map(movie => (
                            <div key={movie.id} className="col-lg-4 col-md-6 col-sm-12">
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

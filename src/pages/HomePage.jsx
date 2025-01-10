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
                <div>
                    {movies.map(movie => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
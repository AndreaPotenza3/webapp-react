import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"

export default function Details() {

    const { id } = useParams()

    const [movie, setMovie] = useState(null)

    function fetchMovie() {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data)
                console.log(res.data)
            }).catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])


    return (
        <>
            {movie ? <section className="vh-100">
                <div className="p-4 d-flex">
                    <img src={movie.image} alt="" className="w-25" />
                    <div className="d-flex flex-column px-4">
                        <h1>{movie.title}</h1>
                        <p className="fw-bold"> {movie.director}</p>
                        <p>{movie.genre}</p>
                        <p>{movie.abstract}</p>
                    </div>
                </div>

            </section > : ''
            }
        </>

    )
}
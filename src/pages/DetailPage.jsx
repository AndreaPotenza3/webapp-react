import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
import Form from "../comonents/ReviewForm"
import ReviewCard from "../comonents/ReviewCard"

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
            {movie ? <section className="min-vh-100">
                <div className="p-4 d-flex">
                    <img src={movie.image} alt="" className="w-25" />
                    <div className="d-flex flex-column px-4">
                        <h1>{movie.title}</h1>
                        <p className="fw-bold"> {movie.director}</p>
                        <p>{movie.genre}</p>
                        <p>{movie.abstract}</p>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <h1 className="px-4 pb-2">Recensioni</h1>
                    {movie.reviews.map((review) => {
                        return (
                            <div key={review.id}>
                                <ReviewCard review={review} />
                            </div>
                        )
                    }
                    )
                    }</div>
                <Form id={id} onSuccess={fetchMovie} />
            </section > : ''
            }
        </>

    )
}
{/* <FontAwesomeIcon icon="fa-solid fa-star" />
<FontAwesomeIcon icon="fa-regular fa-star" /> */}
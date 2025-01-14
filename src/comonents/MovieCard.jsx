import { Link } from "react-router"

export default function MovieCard({ movie }) {

    const { id, title, director, genre, abstract, image } = movie

    return (
        <div className="card h-100">
            <img src={image} alt="" className="rounded-top-1 h-100" />
            <div className="card-body bg-light">
                <h1>{title}</h1>
                <p className="fw-bold">{director}</p>
                <p>{genre}</p>
                <p className="text-secondary fs-6">{abstract}</p>
                <Link to={`movie/${id}`} className="btn btn-primary">Dettagli</Link>
            </div>

        </div>
    )
}
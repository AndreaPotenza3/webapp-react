export default function MovieCard({ movie }) {

    const { title, director, genre, abstract, image } = movie

    return (
        <div>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>{director}</p>
            <p>{genre}</p>
            <p>{abstract}</p>

        </div>
    )
}
export default function ReviewCard({ review }) {
    const { name, text, vote } = review
    return (
        <div className="card mx-4 p-3 bg-light">
            <p className="fw-bold  fs-5">{text}</p>
            <p><strong>Voto:</strong> {vote}</p>
            <p>by {name}</p>
        </div>
    )
}
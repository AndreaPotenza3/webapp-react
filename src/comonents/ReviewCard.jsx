export default function ReviewCard({ review }) {
    const { name, text, vote } = review
    return (
        <div className="card mx-4 px-3 py-2 bg-light mb-3">
            <p className="fw-bold  fs-5">{text}</p>
            <p><strong>Voto:</strong> {vote}</p>
            <p>by {name}</p>
        </div>
    )
}

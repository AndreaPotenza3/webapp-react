import { Link } from "react-router";

export default function Footer() {
    return (
        <div className="py-4 px-2 bg-dark text-white text-center">
            {!'/' ? <Link to="/">Torna alla Home</Link> : ''}
        </div>
    )
}
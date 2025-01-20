import { Link, } from "react-router";

export default function Header() {

    return (
        <Link to='/' className="text-decoration-none bg-primary py-4 px-3 text-white fs-1 fw-bold d-block">My Movies</Link>
    )
}
import { Link, useLocation } from "react-router";

export default function Footer() {

    const { pathname } = useLocation()

    return (
        <div className="py-4 px-2 bg-dark text-white text-center">
            {pathname === '/' ? '' : <Link className="text-white" to="/">Torna alla Home</Link>}
        </div>
    )
}
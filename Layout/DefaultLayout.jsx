
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../src/comonents/Loader";
import { useContext } from "react";
import GlobalContext from "../src/contexts/GlobalContext";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </>
    )
}
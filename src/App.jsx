import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/HomePage"
import Details from "./pages/DetailPage"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import DefaultLayout from "../Layout/DefaultLayout"


function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="movie/:id" element={<Details />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default App

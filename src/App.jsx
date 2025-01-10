import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/HomePage"
import Details from "./pages/DetailPage"


function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movie/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}


export default App

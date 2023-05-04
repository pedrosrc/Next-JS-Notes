import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projeto from "../pages/Projeto";

export default function NavRoute() {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projeto/:id" element={<Projeto/>}/>
        </Routes>
    </BrowserRouter>
}
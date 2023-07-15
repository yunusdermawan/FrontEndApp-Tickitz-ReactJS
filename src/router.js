import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/home"
import Movie from "./page/movie"
import MovieDetail from "./page/movie-detail"
import SignIn from "./page/sign-in"
import SignUp from "./page/sign-up"
import Admin from "./page/admin"


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<Movie />} />
                <Route path="/detail" element={<MovieDetail />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/manage" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
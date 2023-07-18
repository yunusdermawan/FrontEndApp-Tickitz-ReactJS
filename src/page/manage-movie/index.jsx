import React, { useState, useEffect } from "react"
import Header from "../../component/header"
import HeaderAdmin from "../../component/header-admin"
import Footer from "../../component/footer"
import PaymentCard from "../../component/payment-card"
import PlainCard from "../../component/plain-card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import card1 from '../../assets/movie-banner1.png'
import axios from 'axios'
import useApi from "../../helpers/useApi"
import { useSelector } from "react-redux"
import { Show } from "../../helpers/toast"
import { useNavigate } from "react-router-dom"

function ManageMovie() {
    const { role } = useSelector((s) => {
        return s.users.role
      })

    const [genres, setGenres] = useState([])
    const [movies, setMovies] = useState([])
    const [singleMovie, setSingleMovie] = useState([])

    const api = useApi()

    const navigate = useNavigate()

    const getGenres = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/genre')
            setGenres(data)
        } catch(error) {
        console.log(error)
        }
    }

    const getMovies = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/movie/items?page=1&limit=8')
        setMovies(data)
        } catch(error) {
        console.log(error)
        }
    }

    const getSingleMovie = async (e) => {
        try {
            const data = await axios.get(`http://localhost:8000/movie/${e}`)
            setSingleMovie(data)
        } catch(error) {
            console.log(error)
        }
    }

    const handleDelete = async (e) => {
        await axios.delete(`http://localhost:8000/movie/${e}`)
        Show('You deleted a movie', 'warning')
    }

    const handleUpdate = (e) => {
        getSingleMovie()
        alert(singleMovie)
    }

    useEffect(() => {
        getGenres()
        getMovies()
    }, [movies])

    return (
        <>
            { role === 'admin' ? <HeaderAdmin /> : <Header /> }
            <main className="bg-gray-100">
                <div className="px-24 pt-10 pb-4">
                    <span className="text-xl font-medium">Form Movie</span>
                </div>
                <div className="bg-white mx-12 px-12 py-4 rounded-xl">
                    <div className="flex w-full py-6 pb-8">
                        <div className="bg-white mx-20 lg:mx-0 px-5 py-4 mb-6 lg:mb-0 border-2 rounded w-1/3">
                            <PlainCard
                            // image={  }
                            />
                        </div>
                        <div className="ml-4 rounded-lg py-4 px-5 drop-shadow-md w-full">
                        {/* {movies.map((v) => {
                                    return ( */}
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 pb-3">
                                <div className="">
                                <label className="block pb-2" htmlFor="movie_name">
                                    Movie Name
                                </label>
                                <input
                                    className="w-full border-2 rounded-xl p-2 bg-gray-100"
                                    id="movie_name"
                                    type="text"
                                    placeholder="Spiderman: Homecoming"
                                />
                                </div>
                                <div className="">
                                <label className="block pb-2" htmlFor="category">
                                    Category
                                </label>
                                <input
                                    className="w-full border-2 rounded-xl p-2 bg-gray-100"
                                    id="category"
                                    type="text"
                                    placeholder="Action"
                                />
                                </div>
                                <div className="">
                                <label className="block pb-2" htmlFor="director">
                                    Director
                                </label>
                                <input
                                    className="w-full border-2 rounded-xl p-2 bg-gray-100"
                                    id="director"
                                    type="text"
                                    placeholder="rodriguez"
                                />
                                </div>
                                <div className="">
                                <label className="block pb-2" htmlFor="casts">
                                    Casts
                                </label>
                                <input
                                    className="w-full border-2 rounded-xl p-2 bg-gray-100"
                                    id="casts"
                                    type="text"
                                    placeholder="tom holland, noob saibot"
                                />
                                </div>
                                <div className="">
                                <label className="block pb-2" htmlFor="release_date">
                                    Release Date
                                </label>
                                <input
                                    className="w-full border-2 rounded-xl p-2 bg-gray-100"
                                    id="release_date"
                                    type="text"
                                    placeholder="17-09-2020"
                                />
                                </div>
                                <div className="flex gap-4">
                                    <div className="">
                                    <label className="block pb-2" htmlFor="duration_hour">
                                        Duration Hour
                                    </label>
                                    <input
                                        className="w-full border-2 rounded-xl p-2 bg-gray-100"
                                        id="duration_hour"
                                        type="text"
                                        placeholder="1 hour"
                                    />
                                    </div>
                                    <div className="">
                                    <label className="block pb-2" htmlFor="duration_min">
                                        Duration Minutes
                                    </label>
                                    <input
                                        className="w-full border-2 rounded-xl p-2 bg-gray-100"
                                        id="duration_min"
                                        type="text"
                                        placeholder="26 mins"
                                    />
                                    </div>
                                </div>
                                
                            </div>
                        </div> 
                        {/* ) })} */}
                    </div>
                    <div className="py-2 pb-6">
                        <span className="text-lg">Synopsis</span>
                        <div className="p-10 border-2 mt-4 bg-gray-100 text-gray-500">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam eum nemo necessitatibus rerum, alias, nostrum veniam molestias doloribus totam, placeat id ipsam! Earum, voluptate aut harum porro, ipsa aperiam odit doloribus, soluta ipsam voluptatum adipisci eveniet quae in nulla sunt ipsum nam illum corporis maiores dolores tempora. Qui, animi.</p>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 py-3 mb-2">
                        <button className="btn btn-outline border-2 btn-primary w-36 capitalize text-lg">Reset</button>
                        <button className="btn btn-primary w-36 capitalize text-lg">Submit</button>
                    </div>
                </div>
            </main>
            <div className="bg-gray-100 px-10 lg:px-12 xl:px-44 pt-12 w-25 pb-20">
                <div className="pb-10">
                <section id="top" className="mx-auto px-12">
                    <div className="flex flex-col md:flex-row justify-between ">
                    <h1 className="font-medium text-xl">Data Movie</h1>
                    <div className="flex justify-between md:justify-start items-center pt-4 md:pt-0 mb-3">
                        <div id="sort" className="mr-5">
                        <select className="border-2 rounded-full md:rounded-lg px-3 md:px-5 py-1">
                            <option className="mr-3 md:mr-7" selected>All</option>
                            {
                            genres.map((v) => {
                                return <option>{v.genre_name}</option>
                            })
                            }
                            <FontAwesomeIcon icon={faAngleDown} />
                        </select>
                        </div>
                        <div id="sort">
                        <input
                            className="border-2 rounded-full md:rounded-lg px-5 py-1 bg-white"
                            type="text"
                            placeholder="Search Movie Name"
                        />
                        </div>
                    </div>
                    </div>
                </section>
                <section id="mid" className="container mx-auto px-10 lg:px-20 pt-7 bg-white rounded-lg">
                    <div className="rounded" >
                    <span className="inline-grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                        {
                        movies.map((v) => {
                            return (
                                <div className="">
                                    <PlainCard
                                    image={v.banner == null ? card1 : v.banner}
                                    name={v.movie_name}
                                    genre={v.category}
                                    />
                                    <div className="flex flex-col justify-center px-4">
                                        <button className="btn btn-outline btn-primary mb-4" onClick={(e) => handleUpdate(e = v.movie_id)}>Update</button>
                                        <button className="btn btn-outline btn-secondary" onClick={(e) => handleDelete(e = v.movie_id)}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </span>
                    </div>
                </section>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12">
                    <PaymentCard />
                    <PaymentCard />
                    <PaymentCard />
                    <PaymentCard />
                    <PaymentCard />
                    <PaymentCard />
                </div>
            </div>
        
            <Footer />
        </>
    )
}

export default ManageMovie
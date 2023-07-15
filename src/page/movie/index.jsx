import React, {useEffect, useState} from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import Card from '../../component/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import card1 from '../../assets/movie-banner1.png'
import ButtonGroups from '../../component/button-groups'

function Movie() { 

  const [genres, setGenres] = useState([])
  const [movies, setMovies] = useState([])

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
      //console.log(`Data movies ${data}`)
      setMovies(data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getGenres()
    getMovies()
  }, [])

  return (
    <>
        <Header />
        <main className="bg-gray-100 pb-10">
          <section id="top" className="container mx-auto px-10 lg:px-40 pt-7">
            <div className="flex flex-col md:flex-row justify-between pb-5">
              <h1 className="font-medium">List Movie</h1>
              <div className="flex justify-between md:justify-start items-center pt-4 md:pt-0">
                <div id="sort" className="mr-5">
                  <select className="border-2 rounded-full md:rounded-lg px-3 md:px-5 py-1 bg-white">
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
            <ButtonGroups />
          </section>
          <section id="mid" className="container mx-auto px-10 lg:px-40 pt-7">
            <div className="bg-white px-10 rounded">
              <span className="inline-grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
                {
                  movies.map((v) => {
                    return <Card
                    image={v.banner == null ? card1 : v.banner}
                    name={v.movie_name}
                    genre={v.category}
                    />
                  })
                }
              </span>
            </div>
          </section>
          <section id="bot" className="pt-10 flex justify-center">
            <div className="w-40">
              <div className="grid grid-cols-4 gap-4">
                <div className="w-10 h-10 border-2 rounded flex justify-center items-center">
                  1
                </div>
                <div className="w-10 h-10 border-2 rounded flex justify-center items-center">
                  2
                </div>
                <div className="w-10 h-10 border-2 rounded flex justify-center items-center">
                  3
                </div>
                <div className="w-10 h-10 border-2 rounded flex justify-center items-center">
                  4
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
    </>
  )
}

export default Movie

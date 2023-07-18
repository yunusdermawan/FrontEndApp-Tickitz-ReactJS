import React, { useEffect, useState } from 'react'
import Header from '../../component/header'
import HeaderAdmin from '../../component/header-admin'
import Footer from '../../component/footer'
import ButtonGroups from '../../component/button-groups'
import HeroHome from '../../component/hero-home'
import NowShowing from '../../component/now-showing'
import Card from '../../component/card'
import PlainCard from '../../component/plain-card'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'



function Home() {
  const [movies, setMovies] = useState([])

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
    getMovies()
  }, [])

  const { role } = useSelector((s) => {
    return s.users.role
  })
  // const userRole = users.role
  return (
    <>
      { role === 'admin' ? <HeaderAdmin /> : <Header /> }
      <div className=' md:px-6 lg:px-36 w-full'>
        <HeroHome />
      </div>
      <div className='px-5 md:px-10 lg:px-44 pt-14 pb-14 bg-gray-100'>
        <div className="flex justify-between">
          <span className="text-primary font-bold text-lg">Now Showing</span>
          <span className="text-primary font-medium">
          <Link to="/movie" >view all</Link> 
          </span>
        </div>
        <div className='grid grid-cols-5 gap-4'>
          {
            movies.map((v) => {
              return <PlainCard image={v.banner} />
            })
          }
        </div>
      </div>
      <div className='px-5 md:px-10 lg:px-44 pt-14 pb-8'>
        <div>
          <div className="flex justify-between pb-10">
            <span className="text-primary font-bold text-lg">Upcoming</span>
            <span className="text-primary font-medium">
            </span>
          </div>
          <ButtonGroups />
        </div>
      </div>
      <div className='px-5 md:px-10 lg:px-44 pb-14'>
        <div className='grid grid-cols-5 gap-4'>
          {
            movies.map((v) => {
              return <PlainCard image={v.banner} />
            })
          }
        </div>
      </div>
      <Footer />     
    </>
  )
}

export default Home

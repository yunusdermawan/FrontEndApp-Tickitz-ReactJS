import React, { useEffect, useState } from 'react'
import Header from '../../component/header'
import HeaderAdmin from '../../component/header-admin'
import Footer from '../../component/footer'
import ButtonGroups from '../../component/button-groups'
import HeroHome from '../../component/hero-home'
import NowShowing from '../../component/now-showing'
import Card from '../../component/card'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
  const { role } = useSelector((s) => s.users)
  console.log(role)
  return (
    <>
      { role == 'admin' ? <HeaderAdmin /> : <Header /> }
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
        <NowShowing />
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
        
        <NowShowing />
      </div>
      <Footer />     
    </>
  )
}

export default Home

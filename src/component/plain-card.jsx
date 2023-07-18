import React from 'react'
import banner from '../assets/movie-banner1.png'
import card1 from '../assets/movie-banner1.png'
import { Link } from 'react-router-dom'

function PlainCard({ image, name, genre }) {
  return (
    <>
        <span className="border-2 rounded">
            <div className="p-2 md:p-5">
            <img
                className="hover:opacity-50"
                src={image}
                alt="banner"
            />
            {/* <div className="text-center pt-3 pb-2">
                <h1 className="font-medium text-sm pb-1">{name}</h1>
                <p className="text-xs text-gray-400 pb-5 ">
                {genre}
                </p>
            </div> */}
            </div>
        </span>
    </>
  )
}

export default PlainCard

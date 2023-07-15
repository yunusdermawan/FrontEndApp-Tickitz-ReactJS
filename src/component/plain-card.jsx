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
                alt=""
            />
            </div>
        </span>
    </>
  )
}

export default PlainCard

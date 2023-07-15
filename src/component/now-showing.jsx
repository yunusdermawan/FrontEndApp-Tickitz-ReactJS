import React from "react"
import banner from '../assets/movie-banner1.png'
import { Link } from "react-router-dom"

function NowShowing() {
    return (
        <>
            <div className="">
               <Link to='/detail'>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-10">
                    <div className="border-2 p-4 rounded">
                        <img src={banner} alt="" />
                    </div>
                    <div className="border-2 p-4 rounded">
                        <img src={banner} alt="" />
                    </div>
                    <div className="hidden md:block border-2 p-4 rounded">
                        <img src={banner} alt="" />
                    </div>
                    <div className="hidden md:block border-2 p-4 rounded">
                        <img src={banner} alt="" />
                    </div>
                    <div className="hidden md:block border-2 p-4 rounded">
                        <img src={banner} alt="" />
                    </div>
                </div>
               </Link>
            </div>
        </>
    )
}

export default NowShowing
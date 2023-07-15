import React from "react"
import hero from '../assets/hero-home.png'
import left from '../assets/left-hero.png'
import right from '../assets/right-hero.png'

function HeroHome() {
    return (
        <>
            <div className="hidden md:block w-full">
                <img className="w-full" src={hero} alt="" />
            </div>
            <div className="md:hidden pl-10 w-60">
                <img src={left} alt="" />
            </div>
            <div className="md:hidden text-center w-full">
                <img src={right} alt="" />
            </div>
        </>
    )
}

export default HeroHome
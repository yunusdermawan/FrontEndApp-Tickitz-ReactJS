import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/Vector.png'
import logo2 from '../assets/Vector2.png'
import logo3 from '../assets/Vector3.png'
import logo4 from '../assets/Vector4.png'


function Footer() {
  return (
    <>
    <footer>
        <div className="container mx-auto px-10 lg:px-40 pt-7">
            <div className="grid md:grid-cols-4 pr-5 md:pr-0">
            <div className="pr-5">
                <img src={logo} alt="" />
                <p className="text-gray-500 text-sm">
                Stop waiting in line. Buy tickets conveniently, watch movies quietly.
                </p>
            </div>
            <div className="pl-0 md:pl-16 pt-5 md:pt-0 mt-5 md:mt-0">
                <h1 className="font-medium text-sm">Explore</h1>
                <a className="inline md:block pt-3 text-xs pr-10 md:pr-0" href="">
                Home
                </a>
                <a className="inline md:block pt-2 text-xs" href="">
                List Movie
                </a>
            </div>
            <div className="mt-5 md:mt-0">
                <h1 className="font-medium text-sm pt-5 md:pt-0">Our Sponsor</h1>
                <div className="flex items-center md:block">
                <img
                    className="inline md:block pt-3 mr-5 w-20"
                    src={logo2}
                    alt=""
                />
                <img
                    className="inline md:block pt-3 mr-5 w-20"
                    src={logo3}
                    alt=""
                />
                <img
                    className="inline md:block pt-3 mr-5 w-20"
                    src={logo4}
                    alt=""
                />
                </div>
            </div>
            <div className="pt-5 md:pt-0 mt-5 md:mt-0">
                <h1 className="font-medium text-sm">Follow us</h1>
                <div className="flex gap-10 md:gap-0 md:justify-around md:block">
                <a className="block pt-3 text-xs" href="">
                
                    <i className="fa-brands fa-facebook-f inline" />
                    <p className="hidden md:inline">Tickitz Cinema id</p>
                </a>
                <a className="block pt-3 text-xs" href="">
                    <i className="fa-brands fa-instagram inline" />
                    <p className="hidden md:inline">tickitz.id</p>
                </a>
                <a className="block pt-3 text-xs" href="">
                    <i className="fa-brands fa-twitter inline" />
                    <p className="hidden md:inline">tickitz.id</p>
                </a>
                <a className="block pt-3 text-xs" href="">
                    <i className="fa-brands fa-youtube inline" />
                    <p className="hidden md:inline">Tickitz Cinema id</p>
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="text-center pt-16 pb-10">
            <p className="text-gray-500">© 2020 Tickitz. All Rights Reserved.</p>
        </div>
        </footer>

    </>
  )
}

export default Footer

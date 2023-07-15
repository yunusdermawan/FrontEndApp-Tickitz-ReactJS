import React from "react"
import Header from "../../component/header"
import Footer from "../../component/footer"
import PaymentCard from "../../component/payment-card"
import synopsis from "../../assets/synopsis.png"
import banner from '../../assets/movie-banner1.png'
import PlainCard from "../../component/plain-card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'

function MovieDetail() {
    return (
        <>
            <Header />
            <div className="block lg:flex lg:px-20 lg:px-52">
                <div className="mx-20 lg:mx-0 px-5 py-4 mb-6 lg:mb-0 border-2 rounded">
                    <PlainCard />
                </div>
                <div>
                    <div className="pl-5 text-center lg:text-left lg:pl-16">
                        <h1 className="text-xl font-medium">Spider-Man: Homecoming</h1>
                        <span className="text-gray-400 font-medium">Adventure</span>
                    </div>
                    <div className="pl-5 lg:pl-14 pr-5 py-10">
                        <img src={synopsis} alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 px-10 lg:px-12 xl:px-44 pt-12 w-25 pb-20">
                <div className="flex justify-center my-20">
                    <div className="text-center">
                        <span className="font-bold text-2xl">Showtimes and Tickets</span>
                        <div className="mt-10">
                            <form action="form-control" className="flex gap-10">
                                <input type="date" className="bg-gray-200 w-60 h-14 p-4 rounded-lg font-medium"/>
                                <div className="bg-gray-200 p-4 rounded-lg font-medium flex justify-between w-60">
                                    <select className="bg-gray-200" name="" id="">
                                        <option value="">Purwokerto</option>
                                    </select>
                                    <FontAwesomeIcon icon={faMapLocationDot} />
                                </div>
                            </form>
                        </div>
                    </div>
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

export default MovieDetail
import React from 'react'
import image1 from '../assets/Vector4.png'

function PaymentCard() {
  return (
    <>
      <div className=''>
        <div className="bg-white flex flex-col rounded-xl md:drop-shadow-lg">
          <div className="flex flex-col">
            <div className="text-start">
              <div className="flex justify-center items-center gap-3 px-4">
                <div className="p-2">
                  <img
                    src={image1}
                    alt=""
                    className=""
                  />
                </div>
                <div className="py-3">
                  <h6 className='font-bold'>CineOne21</h6>
                  <p className='text-sm'>Downcare street No. 21, East Purwokerto</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="container px-6">
              <div className="grid grid-cols-4">
                <div className="">
                  <p className='text-xs text-gray-400 font-medium mt-5'>08:30am</p>
                </div>
                <div className="">
                  <p className='text-xs text-gray-400 font-medium mt-5'>10:30am</p>
                </div>
                <div className="">
                  <p className='text-xs text-gray-400 font-medium mt-5'>12:00pm</p>
                </div>
                <div className="">
                  <p className='text-xs text-gray-400 font-medium mt-5'>02:00pm</p>
                </div>
                <div className="">
                  <p className='text-xs text-gray-400 font-medium mt-5'>04:30pm</p>
                </div>
                <div className="">
                  <p className='text-xs text-gray-400 font-medium mt-5'>7:00pm</p>
                </div>
                <div className="">
                  <p className='text-xs text-gray-400 font-medium mt-5'>08:30pm</p>
                </div>
                <div className="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between px-6 mt-8">
            <p className="text-gray-500">Price</p>
            <h6 className='font-medium'>$10.00/seat</h6>
          </div>
          <div className="text-center px-6 mt-6 mb-5">
            <form className="book-btn">
              <button className="btn btn-primary w-full">Book now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentCard

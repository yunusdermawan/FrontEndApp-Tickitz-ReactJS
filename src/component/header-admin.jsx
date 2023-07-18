import React from 'react'
import logo from '../assets/Vector.png'
import profile from '../assets/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/reducer/user'
import { Show } from '../helpers/toast'

function HeaderAdmin() {
  const dispatch = useDispatch()
  const { isAuth } = useSelector((s) => s.users)
  //const isAuth = false
  return (
    <header className="mb-7">
      <div className="mx-auto px-10 lg:px-40 pt-7 flex items-center justify-between xl:w-4/5">
        <nav>
          <div className="md:flex items-center justify-end gap-7">
            <Link to="/">
              <img className="me-7 xl:w-full" src={logo} alt="logo" />
            </Link>
            <div className="hidden md:flex gap-3 ">
              <Link className="font-medium text-gray-500 ms-2" to="/">
                Dashboard
              </Link>
              <Link className="font-medium text-gray-500 ms-3" to="/manage">
                Manage Movie
              </Link>
              <Link className="font-medium text-gray-500 ms-3" to="/movie">
                Manage Schedule
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex md:hidden">
          <FontAwesomeIcon icon={faBars} />
        </div>
        { isAuth ? (
          <div className="hidden md:flex items-center justify-end gap-7">
          <a href="/#">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <div className="dropdown dropdown-hover">
            <Link>
              <img src={profile} alt="profile" />
            </Link>
            <div >
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link  to="/">Update Profile</Link></li>
                <li><Link onClick={() => {
                  Show('Successfully logged out', 'warning')
                  setTimeout(() => {
                    dispatch(logout())
                  }, 4500)
                }} to="/" className='text-red-400 hover:bg-red-100 font-bold'>Sign Out</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-gray-100 border-2 border-gray-300 rounded h-36 w-44 absolute top-14 gap-1 focus-group:flex hidden">
            <span className="hover:bg-gray-500 hover:text-white">
              <a className="ms-5" href="/#">
                Update Profile
              </a>
            </span>
            <span className="hover:bg-gray-500 hover:text-white">
              <a className="ms-5" href="/#">
                Log Out
              </a>
            </span>
          </div>
        </div>
        ) : (
          <div className="hidden md:flex items-center justify-end gap-7">
            <button className='btn btn-primary h-4 w-28'>
              <Link to="/signin">Sign In</Link>
            </button>
          </div>
        )}
      </div>
      <div className="hidden grid-cols-1 divide-y text-center">
        <div className="pt-5" />
        <div className="py-3 font-medium hover:bg-gray-100">
          <Link to="/">Home</Link>
        </div>
        <div className="py-3 font-medium hover:bg-gray-100">
          <Link to="/movie">List Movie</Link>
        </div>y
        <div className="py-3 font-medium hover:bg-gray-100">
          <Link to="/signin">Sign In</Link>
        </div>
        <div className="pt-7 text-gray-400">
          © 2020 Tickitz. All rights reserved.
        </div>
      </div>
    </header>
  )
}

export default HeaderAdmin

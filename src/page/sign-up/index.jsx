import React, { useState} from "react"
import hero from '../../assets/hero.png'
import logo from '../../assets/Vector.png'
import { Link } from "react-router-dom"
import axios from "axios"
import { Show } from "../../helpers/toast"
import { useNavigate } from "react-router-dom"



function SignUp() {

    const navigate = useNavigate()

    const url = 'http://localhost:8000/users/add'
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        phone_no: '',
        email: '',
        user_password: '',
        username: '',
        user_role: 'user'
    })

    const inputChange = (e) => {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url,{
            firstname: data.firstname,
            lastname: data.lastname,
            phone_no: data.phone_no,
            email: data.email,
            user_password: data.user_password,
            username: data.username,
            user_role: data.user_role
        }).then(res=>{
            Show('Success registered', 'success')
            setTimeout(()=>{
                navigate('/signin')
            }, 3000)
        })
    }

    return (
        <>
            <div className="block md:flex items-center pl-10 md:pl-0">
                <div className="w-full pr-14 hidden md:block">
                    <img className="w-full" src={hero} alt="" />
                </div>
                <div className="block md:hidden mt-12 mb-10">
                    <img className="" src={logo} alt="" />
                </div>
                <div className="mr-10">
                    <div className="mb-10 md:mb-5 lg:mb-10 ">
                        <h1 className="md:text-2xl lg:text-4xl font-bold mb-3 md:pt-5 lg:pt-0">Sign Up</h1>
                        <span className="text-gray-400">Fill your additional detail</span>
                    </div>
                    <form action="" >
                        <div className="md:mb-4 lg:mb-7">
                            <label htmlFor="firstname">First Name</label>
                            <input onChange={(e)=>inputChange(e)} id="firstname" value={data.firstname} type="text" placeholder="Write your first name" className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div className="md:mb-4 lg:mb-7">
                            <label htmlFor="lastname">Last Name</label>
                            <input onChange={(e)=>inputChange(e)} id="lastname" value={data.lastname} type="text" placeholder="Write your last name" className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div className="md:mb-4 lg:mb-7">
                            <label htmlFor="phone">Phone Number</label>
                            <input onChange={(e)=>inputChange(e)} id="phone_no" value={data.phone_no} type="number" placeholder="Write your phone number" className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div className="md:mb-4 lg:mb-7">
                            <label htmlFor="email">Email</label>
                            <input onChange={(e)=>inputChange(e)} id="email" value={data.email} type="text" placeholder="Write your email" className="input input-bordered w-full max-w-xs" required/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange={(e)=>inputChange(e)} id="user_password" value={data.user_password} type="password" placeholder="Write your password" className="input input-bordered w-full max-w-xs" required/>
                        </div>
                    </form>
                    <div className="block md:hidden lg:block mt-10 w-full text-center">
                    <button className="btn btn-primary w-full" onClick={(e)=>handleSubmit(e)} type="submit">
                        <Link to="/signin">Sign Up</Link>
                    </button>
                        <div className="mt-4">
                            <span>Already have an account? </span>
                            <Link className="text-primary font-medium" to="/signin">Sign in</Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="hidden md:block lg:hidden mt-10 w-full text-center">
                <button className="btn btn-primary w-full" type="submit">
                    <Link to="/signin">Sign Up</Link>
                </button>
                <div className="mt-4">
                    <span>Already have an account? </span>
                    <Link className="text-primary font-medium" to="/signin">Sign in</Link>
                </div>
            </div>
        </>
    )
}

export default SignUp
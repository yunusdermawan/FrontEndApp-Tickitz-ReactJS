import React, {useEffect, useState} from "react"
import hero from '../../assets/hero.png'
import logo from '../../assets/Vector.png'
import { Link, useNavigate } from "react-router-dom"
import useApi from "../../helpers/useApi"
import { Show } from "../../helpers/toast"
import { login } from '../../store/reducer/user'
import { useDispatch, useSelector } from "react-redux" 

function SignIn() {

    const [formData, setFormData] = useState({})
    const api = useApi()
    
    const { isAuth } = useSelector((s) => s.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleInput = (e) => {
        const inputVal = { ...formData }
        inputVal[e.target.id] = e.target.value
        setFormData(inputVal)
    }

    const handleSubmit = () => {
        api({
            method: 'POST',
            url: '/auth',
            data: formData
        }).then(({ data }) => {
            const token = data.token
            const role = data.role
            Show('You succesfully logged in', 'success')
            console.log(data)
            setTimeout(()=>{
                dispatch(login({token, role}))
                navigate('/')
                
            }, 4500)
        }).catch((err) => {
            const axiosErr = err.response.data
                if (axiosErr.message !== undefined) {
                    Show(axiosErr.message, 'warning')
                } else if (axiosErr.error !== undefined) {
                    Show(axiosErr.error, 'error')
                } else if (err.response.status === 401) {
                    Show('Check your username or password', 'error')
                }
        })
        
    }

    useEffect(() => {
        if(isAuth) {
            navigate('/')
        }
    }, [isAuth])

    return (
        <>
            <div className="block md:flex items-center pl-10 md:pl-0">
                <div className="w-full xl:w-1/2 pr-14 hidden md:block">
                    <img className="w-full" src={hero} alt="" />
                </div>
                <div className="block md:hidden mt-12 mb-10">
                    <img className="" src={logo} alt="" />
                </div>
                <div className="mr-10">
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold mb-3">Sign In</h1>
                        <span className="text-gray-400">Sign in with your data that you entered during your registration</span>
                    </div>
                    <div className="mb-7">
                        <label htmlFor="email">Username</label>
                        <input onChange={(e)=>handleInput(e)} id="username" type="text" placeholder="Write your username" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={(e)=>handleInput(e)} id="password" type="password" placeholder="Write your password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="mt-10 w-full text-center">
                        <button onClick={(e)=>handleSubmit(e)} className="btn btn-primary w-full">Sign In</button>
                        <div className="mt-4">
                            <span>Forgot your password?  </span>
                            <a className="text-primary font-medium" href="/#">Reset now</a>
                        </div>
                        <div className="mt-2">
                            <span>Don't have an account?  </span>
                            <Link className="text-primary font-medium" to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default SignIn
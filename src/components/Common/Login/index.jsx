import React, { useState } from 'react'
import loginimg from '../../../assets/login.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const LoginComponent = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password })
            .then(response => {
                if (response.data === "success") {
                    navigate('/home')
                }else {
                    alert('Invalid user email or password')
                }
            })
            .catch(error => console.error(error));

    }


    return (
        <>
            <div className='w-full min-h-screen flex flex-col md:flex-row justify-center items-center'>
                {/* Image section - hidden on small screens, visible and takes 2/3 width on medium screens and up */}
                <div className='hidden md:block md:w-2/3 lg:w-3/5 h-screen bg-gray-500'>
                    <img src={loginimg} alt="Login background" className='object-cover w-full h-full' />
                </div>

                {/* Login form section - full width on small screens, 1/3 width on medium screens and up */}
                <div className='w-full md:w-1/3 lg:w-2/5 min-h-screen p-4 md:p-6 flex flex-col justify-center items-center gap-4 md:gap-6'>
                    <div className='font-bold text-2xl md:text-3xl mb-2'>
                        LOGIN PAGE
                    </div>

                    {/* Social login buttons - responsive spacing */}
                    <div className='flex gap-2 md:gap-4 w-full justify-center'>
                        <button className='px-3 py-2 md:px-4 border rounded-md hover:bg-gray-100 text-sm md:text-base'>
                            Google
                        </button>
                        <button className='px-3 py-2 md:px-4 border rounded-md hover:bg-gray-100 text-sm md:text-base'>
                            Facebook
                        </button>
                        <button className='px-3 py-2 md:px-4 border rounded-md hover:bg-gray-100 text-sm md:text-base'>
                            Apple
                        </button>
                    </div>

                    {/* Divider line */}
                    <div className='w-full text-center my-2'>
                        <span className='relative px-4 bg-white'>
                            <span className='relative z-10 text-gray-500'>OR</span>
                            <div className='absolute inset-0 flex items-center'>
                                <div className='w-full border-t border-gray-300'></div>
                            </div>
                        </span>
                    </div>

                    {/* Login form - full width with responsive padding */}
                    <div className='flex flex-col gap-3 w-full max-w-md px-4 md:px-0'>
                        {/* <input
                            type='text'
                            placeholder='Username'
                            className='w-full p-2 rounded-md border-2 focus:outline-none focus:border-blue-400'
                            onChange={(e) => setName(e.target.value)}
                        /> */}
                        <input
                            type='text'
                            placeholder='Email'
                            className='w-full p-2 rounded-md border-2 focus:outline-none focus:border-blue-400'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Re-enter Password'
                            className='w-full p-2 rounded-md border-2 focus:outline-none focus:border-blue-400'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className='w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition' onClick={handleSubmit}>
                            Login
                        </button>
                    </div>

                    <span className=''>
                        if you'r not registered yet, <strong className='cursor-pointer text-blue-400 hover:text-blue-600' onClick={() => (navigate('/signup'))}>please SignUP </strong>
                    </span>

                </div>

            </div>
        </>
    )
}

export default LoginComponent

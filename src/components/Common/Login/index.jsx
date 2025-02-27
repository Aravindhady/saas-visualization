import React from 'react'

const LoginComponent = () => {
    return (
        <>
            <div className='w-full h-screen flex justify-center items-center '>
                <div className='w-4/6 h-screen bg-gray-500' >
                </div>
                <div className='w-2/6 h-screen  p-6 flex flex-col justify-center items-center gap-5' >
                    <div className='text-bold text-2xl'>
                        LOGIN PAGE
                    </div>
                    <div className=' flex gap-2'>
                        <h1>
                            Google
                        </h1>
                        <h1>xs
                            Facebook
                        </h1>
                        <h1>
                            Apple
                        </h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <input type='text' placeholder='User Name' className='w-full p-2 rounded-md border-2' />
                        <input type='text' placeholder='Password' className='w-full p-2 rounded-md border-2' />
                        <button className='w-full p-2 bg-blue-400 text-white rounded-md'>
                            Login
                        </button>
                    </div>

                    <span className=''>
                        if you'r not registered yet, <strong className='cursor-pointer text-blue-400 hover:text-blue-600'>please SignUP </strong>
                    </span>

                </div>

            </div>
        </>
    )
}

export default LoginComponent

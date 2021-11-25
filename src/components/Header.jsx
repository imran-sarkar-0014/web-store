import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {


    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/search/' + query)
    }

    return (
        <div className="bg-gray-200 pb-3 sm:pb-0">

            {/* top layer  */}
            <div className='flex items-center justify-between py-2 px-4'>
                <Link to='/' className='cursor-pointer' >
                    <img className='h-8' src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1HOIkg3ZC2uNjSZFnXXaxZpXa.png" />
                </Link>
                {/* Input */}
                <form onSubmit={handleSubmit} className='hidden sm:flex md:items-between mx-4 max-w-md flex-1 h-10 bg-white w-auto rounded-md overflow-hidden'>
                    <input value={query} onChange={handleChange} placeholder='Search your product' type="text" className='flex-1 outline-none px-2 py-1 bg-transparent' />
                    <button type='submit' onClick={handleSubmit} className='bg-yellow-600 '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>

                <div className='flex items-center space-x-4'>
                    <div className='flex items-center cursor-pointer'>
                        <p className='font-semibold'>Sign In </p>
                        <img className='h-6 font-bold' src="/assests/user.png" />
                    </div>

                    <div className="relative cursor-pointer p-1 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                        <p
                            className="absolute -right-1 -top-1 font-semibold bg-yellow-300 w-5 h-5 text-center rounded-full"
                        >{1}</p>
                    </div>

                    <div className="relative cursor-pointer p-1 bg-yellow-500 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <p
                            className="absolute right-0 top-0 font-semibold bg-white w-5 h-5 text-center rounded-full"
                        >{2}</p>
                    </div>


                </div>
            </div>

            {/* bottom layer */}
            <form onSubmit={handleSubmit} className='flex sm:hidden items-between  mx-4 flex-1 h-10 bg-white w-auto rounded-md overflow-hidden'>
                <input value={query} onChange={handleChange} placeholder='Search your product' type="text" className='flex-1 outline-none px-2 py-1 bg-transparent' />

                <button onClick={handleSubmit} type='submit' className='bg-yellow-600 '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default Header

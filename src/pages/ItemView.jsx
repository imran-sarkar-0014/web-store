import React, { useState, useRef, useEffect } from 'react'
import items from '../data/items.json'
import { useParams } from 'react-router-dom'

const ItemView = () => {

    const params = useParams()
    const filter = items.filter(it => it.id === params.id)
    const [count, setCount] = useState(1)
    const topRef = useRef(null)

    useEffect(() => {
        if (topRef?.current != null)
            topRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
    }, [])


    const addCount = (add) => {
        if (add)
            setCount(count + 1)
        else {
            if (count > 1)
                setCount(count - 1)
        }
    }

    const item = filter[0]
    if (!item) return (
        <div className='flex flex-col items-center  justify-center my-8 py-8 px-2 space-x-4'>
            <h4 className='text-red-500 font-semibold text-2xl'>404, product not found!</h4>
            <p className='py-8 text-gray-800 font-medium text-lg'>Oops, Sorry your product is not availble right now.</p>
        </div>
    )


    return (
        <div className=''>
            <div ref={topRef}></div>

            {/*  Top view  */}
            <div className=' max-w-xl mx-auto flex space-x-4 border-b border-gray-300 mb-2 pb-4 items-center'>
                <img className='w-48 h-48 sm:w-56 sm:h-56 :w-72 rounded-lg md:h-72 object-contain' src={item.image_url} alt="" />
                <div className=''>
                    <h3 className='text-md sm:font-semibold sm:text-lg text-sm'>{item.name}</h3>
                    <p className='text-sm pt-2 text-green-800'>Brand : {item.brand}</p>
                    <h4 className='py-2 text-2xl font-bold px-4'>${item.price}</h4>
                    <div className="flex">
                        {
                            item?.rating?.major?.map(i => (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))
                        }
                        {
                            item?.rating?.minor?.map(i => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>))
                        }
                    </div>

                    <div>
                        <button className='border px-2 font-bold text-xl hover:bg-white rounded-md' onClick={() => addCount(false)}>-</button>
                        <span className="font-semibold px-2 text-xl text-yellow-600">{count}</span>
                        <button className="border px-2 font-bold text-xl hover:bg-white rounded-md" onClick={() => addCount(true)}>+</button>
                    </div>

                    <button className="flex my-2 py-1 px-2 rounded-md bg-yellow-600 hover:bg-yellow-700 text-gray-100">
                        <h3>Add To Cart</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg></button>

                </div>
            </div>

            {/* spacifications */}

            <div className='max-w-xl mx-auto border-b border-gray-200 pb-4'>

                <h4 className="font-bold text-2xl">Spacifications</h4>
                <ul className="px-4 flex flex-col">
                    {
                        Object?.keys(item?.spacifications)?.map(key => (
                            <li key={key} className="flex items-center">
                                <h4 className="w-24 font-semibold py-1">{key}</h4>
                                <p>{item.spacifications[key]}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* About */}

            <div className="max-w-xl mx-auto border-b border-gray-200 px-2">
                <h4 className="font-bold text-2xl ">About</h4>

                <ul className="list-disc px-4">
                    {
                        item?.About?.map((ia, idx) => (
                            <li className="py-1" key={idx}>{ia}</li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default ItemView

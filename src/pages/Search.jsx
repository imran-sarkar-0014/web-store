import React from 'react'
import { useParams } from 'react-router-dom'
import Item from '../components/Item'
import items from '../data/items.json'

const Search = () => {

    const params = useParams()

    const regex = new RegExp(params.query, 'i')

    const result = items.filter(item => {
        if (regex.test(item?.name))
            return item
        return null
    })


    if (!result.length) {
        return (
            <div className='flex flex-col items-center  justify-center my-8 py-8 px-2 space-x-4'>
                <h4 className='text-red-500 font-semibold text-2xl'>404, product not found!</h4>
                <p className='py-8 text-gray-800 font-medium text-lg'>Oops, Sorry your product is not availble right now.</p>
            </div>
        )

    }

    return (
        <div className='my-2 p-y-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-2'>
            {
                result?.map(item => (
                    <Item key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Search

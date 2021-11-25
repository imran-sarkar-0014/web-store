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
    })

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

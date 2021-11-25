import React from 'react'
import Item from '../components/Item'
import items from '../data/items.json'

const Home = () => {

    return (
        <div className='w-full'>

            <div className='my-2 p-y-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-2'>
                {
                    items.map(item => (
                        <Item item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home

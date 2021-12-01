import React from 'react'

const get2knowus = [
    'Careers',
    'Blog',
    'About Daraz',
    'Investor Relations',
    'Daraz Devices',
]


const makeMoneyWithUs = [
    'Sell products on Daraz',
    'Sell on Daraz Business',
    'Sell apps on Daraz',
    'Become an Affiliate',
    'Advertise Your Products',
    'Self - Publish with Us',
    'Host an Daraz Hub',
]

const paymentProducts = [
    'Daraz Business Card',
    'Shop with Points',
    'Reload Your Balance',
    'Daraz Currency Converter'
]

const helpUs = [
    'Amazon and COVID - 19',
    'Your Account',
    'Your Orders',
    'Shipping Rates & Policies',
    'Returns & Replacements',
    'Manage Your Content and Devices',
    'Amazon Assistant',
    'Help',
]






const Footer = () => {
    return (
        <div className='bg-gray-700 text-white space-y-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols- mt-8 pt-4 px-4 sm:px-8 md:px-10 lg:px-12'>

            {/* Get to know us */}
            <ul className='pt-3'>
                <li className='text-lx font-bold'>Get to Know Us</li>
                {
                    get2knowus.map((item, index) => (
                        <li key={index} className='text-sm leading-6'>{item}</li>
                    ))
                }
            </ul>

            {/* Make Money */}
            <ul>
                <li className='text-lx font-bold'>Make Money with Us</li>
                {
                    makeMoneyWithUs.map((item, index) => (
                        <li key={index} className='text-sm leading-6'>{item}</li>
                    ))
                }
            </ul>

            {/* Daraz Payment Products */}
            <ul>
                <li className='text-lx font-bold'>Amazon Payment Products</li>
                {
                    paymentProducts.map((item, index) => (
                        <li key={index} className='text-sm leading-6'>{item}</li>
                    ))
                }
            </ul>

            {/* Help Us */}
            <ul>
                <li className='text-lx font-bold'>Let Help Us</li>
                {
                    helpUs.map((item, index) => (
                        <li key={index} className='text-sm leading-6'>{item}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Footer

import React from 'react'
import './Banners.css'
import BannerCard from './BannerCard'
const Banners = ({ Data }) => {
    return (
        <div>
            <div className='Banners'>
                {Data.map((ele, id) => {
                    return (
                        <BannerCard ele={ele} key={id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Banners
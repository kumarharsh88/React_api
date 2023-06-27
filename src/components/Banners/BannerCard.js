import React from 'react'

const BannerCard = ({ele}) => {
    return (
        <div className='BannerDiv'>
            <img src={`https://img.crofarm.com/images/promotions/${ele.image_id}`} className='BannerImg'/>
        </div>
    )
}

export default BannerCard
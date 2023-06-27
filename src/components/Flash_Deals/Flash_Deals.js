import React from 'react'
import './Flash_Deals.css'
import Flash_DealsCard from './Flash_DealsCard'
const Flash_Deals = ({ Data }) => {
    return (
        <div>
            <h1 style={{textAlign:"left",marginLeft:"5%"}}>FlashDeal: Avail any 4 Deals</h1>
            <div className='Flash_Deal'>
                {Data.map((ele, id) => {
                    return (
                        <Flash_DealsCard ele={ele} key={id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Flash_Deals
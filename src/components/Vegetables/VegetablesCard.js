import React from 'react'

const VegetablesCard = ({ele}) => {
    return (
        <div className='VegetablesDiv'>
            {/* {console.log(ele)} */}
            <img src={`https://img.crofarm.com/images/prodsmall/${ele.image_id}`} className='FlashImg'/>
            <div className='nameSize' style={{textAlign:"left",marginLeft:"8%"}}><p>{ele.name}</p></div>
            
            <div style={{textAlign:"left",marginLeft:"11%"}}><strike style={{color:"grey"}}>₹{ele.striked_price}</strike><span>₹{ele.selling_price}/{ele.weight_unit}</span></div>
            <div className='Bottom'>
            <div style={{textAlign:"left",marginLeft:"11%"}}><span style={{fontWeight:"bold"}}>₹{ele.price}</span><p style={{marginTop:"0%"}}>{ele.pack_qt}</p></div>
            <div style={{marginRight:"5%",marginTop:"4%",marginLeft:"5%"}}><div className='btn1'>Add</div></div>
            </div>
        </div>
    )
}

export default VegetablesCard
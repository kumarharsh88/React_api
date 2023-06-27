import React from 'react'

const Flash_DealsCard = ({ele}) => {
    return (
        <div className='Flash_DealDiv'>
            <img src={`https://img.crofarm.com/images/category/${ele.bg_image}`} className='FlashImg'/>
            <div className='setPrice'>₹{ele.price}<div style={{fontSize:'0.7em'}}>{ele.normal_product.pack_qt}</div></div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"-15%",padding:"10px"}}><div style={{marginLeft:"5%",fontSize:"20px"}}>Limited offer</div> <div style={{background:"rgb(0,153,0,0.2)",borderRadius:"10px",width:"70px",height:"30px",textAlign:"center",display:"flex",justifyContent:'center',alignItems:"center",marginRight:"5%",border:"1px solid #090"}}><div style={{color:"#090"}}>Add</div></div></div>
        </div>
    )
}

export default Flash_DealsCard
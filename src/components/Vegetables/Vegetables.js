import React from 'react'
import './Vegetables.css'
import VegetablesCard from './VegetablesCard'

const Vegetables = ({ Data,name }) => {
    return (
        <div>
            <h1 style={{textAlign:"left",marginLeft:"5%"}}>{name}</h1>
            <div className='Vegetables'>
                {Data.map((ele,id) => {
                    return (
                       <VegetablesCard ele={ele} key={id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Vegetables
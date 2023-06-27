import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
import './ApiData.css'
import Banners from './Banners/Banners';
import Flash_Deals from './Flash_Deals/Flash_Deals';
import Vegetables from './Vegetables/Vegetables';
import Loader from './Loader/Loader.js'

const ApiData = () => {
  const [Banner, setBanner] = useState([])
  const [Flash_Deal, setFlash_Deal] = useState([])
  const [vegetables, setVegetables] = useState([])
  const [fruits, setFruits] = useState([])
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get("https://api.crofarm.com/otipy/web/feed/v1/");
    const widget_list = response.data.data.widget_list
    setLoader(false)
    setBanner(widget_list[0].data.items)
    setFlash_Deal(widget_list[1].data.items)
    setVegetables(widget_list[2].data.items)
    setFruits(widget_list[3].data.items)
  }
  return (
    <div style={{ marginBottom: "5%" }}>
      <div style={{ background: "green", padding: "5px" }}>
        <h1 style={{ color: "green", backgroundColor: "green" }}><span style={{ color: "white" }}>Otipy</span></h1>
      </div>
      {loader ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}><Loader /></div> :
        <React.Fragment>
          <Banners Data={Banner} />
          <Flash_Deals Data={Flash_Deal} />
          <Vegetables Data={vegetables} name="Vegetables" />
          <Vegetables Data={fruits} name="Fruits" />
        </React.Fragment>
      }
    </div>
  )
}

export default ApiData
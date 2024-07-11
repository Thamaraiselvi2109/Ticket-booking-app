import React, { useEffect } from 'react';
import Header from '../components/Header'
import { useDispatch } from 'react-redux';
import { getDatas } from '../redux/slices/BusDataSlice';
import Searchpart from '../Modules/homeModules/Searchpart';
import BusQueue from '../Modules/homeModules/BusQueue';
import Features from '../Modules/homeModules/Features';
import Footer from '../components/Footer';

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getDatas(`https://my-json-server.typicode.com/thamaraiselvi2109/busdataapi/Buses`))
  },[dispatch])
  return (
    <div>
        <Header/>
        <Searchpart/>
        <Features/>
        <BusQueue/>
        <Footer/>
    </div>
  )
}

export default Home
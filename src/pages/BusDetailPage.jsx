import React, { useEffect } from "react";
import Header from "../components/Header";
import Banner from "../Modules/Bus/Banner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from '../components/Footer';
import { getDataById, singleBus } from "../redux/slices/SingleBus";
import SeatLayout from "../Modules/Bus/SeatLayout";

const BusDetailPage = () => {
  const { id } = useParams();
  const Eachbus = useSelector(singleBus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDataById(id));
    if (parseInt(id) > 12) {
      navigate('*');
    }
  
  }, [id, dispatch, navigate]);


  return (
    <>
      <Header />
      <Banner data={Eachbus}/>
      <SeatLayout/>
      <Footer/>
    </>
  );
};

export default BusDetailPage;

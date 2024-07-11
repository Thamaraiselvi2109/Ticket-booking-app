import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterFunction } from '../../redux/slices/BusDataSlice';
import { from, to } from "../../redux/slices/RouteSlice";

const Click = () => {
    const dispatch = useDispatch();
    const source = useSelector(from);
    const destination = useSelector(to);
  
    const disable = Boolean(source && destination && source !== destination);

    const searchSubmit = (e) => {
        e.preventDefault();
        dispatch(FilterFunction({source, destination}))
      };
  return (
    <>
    <button
        className="btn btn-enquiry"
        type="submit"
        disabled={!disable}
        onClick={searchSubmit}
      >
        Search Buses
      </button>
    </>
  )
}

export default Click

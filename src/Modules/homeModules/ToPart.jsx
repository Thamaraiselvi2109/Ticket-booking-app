import React from 'react'
import { ToValue, places } from "../../redux/slices/RouteSlice";
import { useDispatch, useSelector } from 'react-redux';

const ToPart = () => {
    const FromStationList = useSelector(places);
    const dispatch = useDispatch();
  
    const handleselect = (e) => {
      dispatch(ToValue(e.target.value));
    };
  return (
    <>
    <select defaultValue="Destination city" onChange={handleselect}>
          <option disabled>Destination city</option>
          {FromStationList.map((data) => (
            <option key={data.id}>{data.place}</option>
          ))}
        </select>
    </>
  )
}

export default ToPart
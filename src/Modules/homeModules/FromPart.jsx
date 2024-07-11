import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FromValue, places } from "../../redux/slices/RouteSlice";


const FromPart = () => {
    const FromStationList = useSelector(places);
    const dispatch = useDispatch();
  
    const handleselect = (e) => {
      dispatch(FromValue(e.target.value))
    };
  return (
    <>
    <select defaultValue="Source city" onChange={handleselect}>
      <option disabled>Source city</option>
        {FromStationList.map((data) => (
          <option key={data.id}>{data.place}</option>
        ))}
      </select></>
  )
}

export default FromPart
import { useDispatch } from "react-redux";
import Routing from "./Routing";
import "./styles/global.scss";
import { useEffect } from "react";
import { getDatas } from "./redux/slices/BusDataSlice";


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getDatas())
  },[dispatch])
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;

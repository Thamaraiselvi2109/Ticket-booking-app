import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BusesArray, loadings } from "../../redux/slices/BusDataSlice";
import nobus from "../../assets/no-bus.png";

const BusQueue = () => {
  const buses = useSelector(BusesArray);
  const loading = useSelector(loadings);

  // Loading
  if (loading === "loading") {
    return (
      <div className="container loading d-flex align-items-center justify-content-center mt-5 py-5 ">
        <h1>Wait a moment</h1>
      </div>
    );
  }

  // no buses if array is null
  if (buses.length === 0 && loading === "succeeded") {
    return (
      <div className="container loading d-flex flex-column align-items-center justify-content-center mt-5 py-5">
        <h1>No bus available at the moment</h1>
        <img src={nobus} alt="no bus" />
      </div>
    );
  }

  // if we have data
  return (
    <div className="container py-5">
      <h2 className="text-center">Buses available at the moment</h2>
      <div className="p-4 banner">
        {buses.map((singleBus) => (
          <div className="row bg-white p-3 rounded mb-3 row-1 align-items-center text-center justify-content-center key" key={singleBus.id}>
            <div className="col-md-10 col-sm-8">
              <div className="row border-bottom align-items-center">
                <div className="col-md-4 text-center">
                  <h5>{singleBus.name}</h5>
                </div>
                <div className="col-md-2 none">
                  <p>{singleBus.departureTime}</p>
                  <h6>{singleBus.source}</h6>
                </div>
                <div className="col-md-4 none">
                  <p>{singleBus.busType}</p>
                </div>
                <div className="col-md-2 none">
                  <p>{singleBus.arrivalTime}</p>
                  <h6>{singleBus.destination}</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <p className="text-danger text-center my-2">
                    Save min ₹100 with Flash Offer!
                  </p>
                </div>
                <div className="col-sm-6">
                  <h6 className="my-2 text-center">
                    {singleBus.numberOfSeats} Seates available
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4 text-end Cta">
              <h6>Starting at</h6>
              <p>{singleBus.price}</p>
              <Link to={`/${singleBus.id}`}>
              <button className="btn btn-enquiry">Book</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusQueue;

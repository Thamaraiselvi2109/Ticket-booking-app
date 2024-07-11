import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = (Eachbus) => {
  const singleBus = Eachbus.data;
  const notify = () => toast("Development is in Progress");
  return (
    <div className="container">
      {singleBus ? (
        <div className="continer p-2 mt-5 banner">
          <div className="row bg-white p-3 rounded row-1 align-items-center text-center justify-content-center">
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
              <button className="btn btn-enquiry" onClick={notify}>
                Book
              </button>
              <ToastContainer className="" />
            </div>
          </div>
        </div>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Banner;

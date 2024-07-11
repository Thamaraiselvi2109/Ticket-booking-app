import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="row bg-lightred">
        
      </div>
      <div className="row bg-darkRed py-2">
        <div className="col-md-1"></div>
        <div className="col-md-5 text-start">
          <h6>
            <Link to="/">ScarletBus</Link> | ixigo | ConfirmTkt
          </h6>
        </div>
        <div className="col-md-5 text-end">
          <h6>Copyright @ ScarletBus. All Rights Reserved.</h6>
        </div>
        <div className="col-md-1"></div>
      </div>
    </footer>
  );
};

export default Footer;

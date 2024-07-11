import React from "react";
import nothing from "../assets/nothing.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="d-flex align-items-center justify-content-center">
                <img src={nothing} alt="no bus" />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

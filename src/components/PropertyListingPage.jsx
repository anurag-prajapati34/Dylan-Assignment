import React, { useRef } from "react";
import NavBar from "./NavBar";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function PropertyListingPage() {

  const popupRef = useRef();
  const location = useLocation();
  const path = location.pathname;



  const getNextPage = (path) => {
    if (path.includes("propertyDetail")) {
      return "locationDetails";
    } else if (path.includes("locationDetails")) {
      return "featuresAminities";
    } else if (path.includes("featuresAminities")) {
      return "priceDetails";
    } else if (path.includes("priceDetails")) {
      return "propertyImageDetails";
    }
     
  };

  const setPopUp=()=>{
     if (path.includes("propertyImageDetails")) {
      
      popupRef.current.classList.add('show')
    }
  }
  return (
    <div className="h-screen w-full flex flex-col  items-center">
      
      {/* details submit confirmation popup */}
      <div ref={popupRef} className="confirmation-popup">

        <div className="popup-content">
          <h1 className="text-xl font-semibold mb-6">
            POST PROPERTY ON DYLAN ESTATE?
          </h1>
          <NavLink
          to={'/final-submission-page'}

        
            style={{ backgroundColor: "rgba(18, 43, 73, 1)" }}
            className="w-[331px] h-[33px] font-semibold text-white text-xl mb-3 rounded text-center"
          >
            Continue
          </NavLink>
          <p className="text-[12px]">
            By continuing you agree to our{" "}
            <u>Terms and Conditions & Privacy Policy</u>
          </p>
        </div>

      </div>

      <NavBar />
      <div className="h-full w-full flex justify-center items-center">
        <div
          style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          className="flex flex-col w-[976px] h-[552px] mt-[100px] rounded-2xl overflow-hidden justify-between"
        >
          <div className="flex ">
            <NavLink
              to={"propertyDetail"}
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "rgba(237, 242, 248, 1)"
                  : "rgba(252, 248, 244, 1)",
              })}
              className=" flex flex-1 h-[80px] items-center justify-center"
            >
              PROPERTY DETAILS
            </NavLink>

            <NavLink
              to={"locationDetails"}
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "rgba(237, 242, 248, 1)"
                  : "rgba(252, 248, 244, 1)",
              })}
              className=" flex flex-1 h-[80px] items-center justify-center"
            >
              LOCATION DETAILS
            </NavLink>
            <NavLink
              to={"featuresAminities"}
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "rgba(237, 242, 248, 1)"
                  : "rgba(252, 248, 244, 1)",
              })}
              className=" flex flex-1 h-[80px] items-center justify-center"
            >
              FEATURES & AMINTIES
            </NavLink>
            <NavLink
              to={"priceDetails"}
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "rgba(237, 242, 248, 1)"
                  : "rgba(252, 248, 244, 1)",
              })}
              className=" flex flex-1 h-[80px] items-center justify-center"
            >
              PRICE DETAILS
            </NavLink>
            <NavLink
              to={"propertyImageDetails"}
              style={({ isActive }) => ({
                backgroundColor: isActive
                  ? "rgba(237, 242, 248, 1)"
                  : "rgba(252, 248, 244, 1)",
              })}
              className=" flex flex-1 h-[80px] items-center justify-center"
            >
              PROPERTY IMAGES
            </NavLink>
          </div>

          <div
            style={{ backgroundColor: "rgba(214, 214, 214, 1)" }}
            className="w-full h-2 bg-"
          ></div>

          <div className="flex w-full flex-1 px-16 py-9 overflow-auto">
            <Outlet />
          </div>

          <div
            style={{ backgroundColor: "rgba(18, 43, 73, 1)" }}
            className=" text-white h-[60px] w-full flex justify-between px-16 items-center  "
          >
            <h1>Need Help? Call 9999999999</h1>

            <NavLink
              to={getNextPage(path)}

              onClick={setPopUp}


              style={{ backgroundColor: "rgba(18, 43, 73, 1)" }}
              className="px-[65px] py-[10px] border border-1 border-white rounded-lg"
            >
              {path.includes("propertyImageDetails") ? "SAVE & POST" : "NEXT"}
            </NavLink>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PropertyListingPage;

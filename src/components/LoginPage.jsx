import React, { useRef, useState } from "react";
import "../styling/styles.css";
import NavBar from "./NavBar";
import bulletPoint from "../assets/bulletPoint.png";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import FormContext from "../context/FormContext";


function LoginPage() {

const [nextPage ,setNextPage]=useState('')

const location=useLocation();




const formRef=useRef();

const handleSubmit=(e)=>{

    console.log(e.target);
e.preventDefault();
alert("form submitted")
}


  return (
    <FormContext.Provider value={

{
    formRef,
    handleSubmit

}

    } >
        <div className="Login-page w-full h-[100vh] absolute">
      <NavBar />

      {/* Login page top most heading */}
      <div className="w-[821px] overflow-auto mt-[128px] ml-[116px] gap-[16px] text-white">
        <h1 className="text-[32px]">Sell or Rent your Property For Free</h1>
        <p className="text-[16px]">
          Whether you’re ready to sell or looking for answers, we’ll guide you
          with data and expertise specific to your needs.
        </p>
      </div>

      <div className="flex justify-between mx-[186px] my-12 items-center ">
        <div className="flex flex-col gap-[24px] text-white">
          <h1 className="text-[20px] font-semibold">
            Upload your property in 4 simple steps
          </h1>
          <div>
            <div className="flex items-center">
              <img src={bulletPoint} />
              <p>
                Add your properties<b> Basic Details</b>
              </p>
            </div>
            <div className="flex items-center">
              <img src={bulletPoint} />
              <p>
                Add your properties<b> Basic Details</b>
              </p>
            </div>
            <div className="flex items-center">
              <img src={bulletPoint} />
              <p>
                Add your properties<b> Basic Details</b>
              </p>
            </div>
            <div className="flex items-center">
              <img src={bulletPoint} />
              <p>
                Add your properties<b> Basic Details</b>
              </p>
            </div>
            <div className="flex  items-center">
              <img src={bulletPoint} />
              <p>
                Add your properties<b> Basic Details</b>
              </p>
            </div>
          </div>
        </div>

        {/* Login form box */}
        <div className="login-info-box h-[376px] w-[608px] rounded-2xl flex flex-col justify-evenly ">
          <h1
            style={{ color: "rgba(18, 43, 73, 1)" }}
            className="font-semibold text-2xl px-[64px]"
          >
            Let's Get You Started !
          </h1>

          <div className="h-[60%] w-full overflow-auto bg-white px-[64px] py-4 ">
            <Outlet />
          </div>

          <div className="flex justify-between px-8 ">
            <h1 className="text-xs">
              Need Help? <b>Call 9999999999</b>
            </h1>{" "}



          <NavLink to={(location.pathname.includes('/otp')?'/listing-page/propertyDetail' :'/otp')}>
          <button
            type="submit"
            onClick={()=>{
                
                formRef.current.requestSubmit();
            }}
              style={{ backgroundColor: "rgba(18, 43, 73, 1)" }}
              className="px-8 py-2 text-white rounded-lg 
"
            >
              NEXT
            </button>

          </NavLink>


          </div>
        </div>
      </div>
    </div>
    </FormContext.Provider>
  );
}

export default LoginPage;

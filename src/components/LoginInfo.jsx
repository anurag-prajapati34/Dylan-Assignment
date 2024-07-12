import React, { useContext } from "react";
import FormContext from "../context/FormContext";


function LoginInfo({}) {

const {formRef,handleSubmit}=useContext(FormContext);

  return (
    <div className="h-full w-full flex flex-col gap-[60px] text-xl">
      <form ref={formRef} onSubmit={(e)=>{e.preventDefault()}} id="login_info" className="flex flex-col gap-10">
        <div className="flex flex-col h-full w-full gap-2">
          <label htmlFor="owner builder" className="requiredField start ">
            I am:
          </label>
          <div className="flex justify-between">
            <div className="flex gap-4 items-center">
              <input
                required
                className="custom-radio"
                type="radio"
                name="category"
                id="owner"
                value={"owner"}
              ></input>
              <label htmlFor="owner">Owner</label>
            </div>
            <div className="flex gap-4 items-center">
              <input
              
                className="custom-radio"
                type="radio"
                name="category"
                id="builder"
                value={"builder"}
                required
              ></input>
              <label htmlFor="builder">Builder</label>
            </div>
          </div>
        </div>

        {/* 
Name field */}
        <div className="flex flex-col gap-2">
          <label className="requiredField">Your Name</label>
          <input
            className="input-field"
            type="text"
            name="full name"
            placeholder="Name"
            required
          ></input>
        </div>

        {/* Country selction field */}

        <div className="flex flex-col gap-2">
          <label className="requiredField">Country</label>
          <select
            className="input-field"
            type="text"
            name="full name"
            placeholder="Name"
            required
          >
            <option>India</option>
            <option>US</option>
            <option>Australia</option>
            <option>Singapore</option>
          </select>
        </div>

        {/* Phone no. fill Field */}

        <div className="flex flex-col gap-2">
          <label className="requiredField">Phone</label>

          <div className="flex">
            <select
              className="h-[40px] w-[70px] mr-1 input-field
            "
            required
            >
              <option>+91</option>
              <option>+1</option>
              <option>+23</option>
              <option>+43</option>
            </select>
            <input
              className="input-field gap-1 flex-1 "
              type="tel"
              pattern="[0-9]{10}"
              name="full name"
              placeholder="0000"
              required
            ></input>
          </div>
        </div>

        {/* Email fill field */}

        <h1 className="text-xl text-black font-semibold">OR</h1>

        <div className="flex flex-col gap-2 mb-10">
          <label className="requiredField">Email</label>
          <input
            className="input-field"
            type="email"
            name="full name"
            placeholder="email"
            required
          ></input>
        </div>
      </form>
    </div>
  );
}

export default LoginInfo;

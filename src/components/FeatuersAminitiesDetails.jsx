import { faWatchmanMonitoring } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import wathchman from "../assets/watchman.png";
import lift from '../assets/lift.png'
import camera from '../assets/camera.png'
import car from '../assets/car.png'

function FeatuersAminitiesDetails() {
  return (
    <div className="w-full h-full flex flex-col gap-[60px]">
      <h1 className="text-xl font-semibold flex flex-start">
        General Features
      </h1>

      {/* non veg allowed or not */}
      <div className="w-[40%] flex flex-col gap-2 flex-start">
        <label className="requiredField  text-xl font-semibold">Non-veg</label>
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-2">
            <input
              className="custom-radio"
              type="radio"
              name="nonveg-y-n"
            ></input>
            <label>Allowed</label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              className="custom-radio"
              type="radio"
              name="nonveg-y-n"
            ></input>

            <label>Not Allowed</label>
          </div>
        </div>
      </div>

      {/* pet allowed or not */}
      <div className="w-[40%] flex flex-col gap-2 flex-start">
        <label className="requiredField  text-xl font-semibold">
          Pets Allowed
        </label>
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-2">
            <input
              className="custom-radio"
              type="radio"
              name="pets-y-n"
            ></input>
            <label>Yes</label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              className="custom-radio"
              type="radio"
              name="pets-y-n"
            ></input>

            <label>No</label>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* furnishing */}
      <div className="w-full flex flex-col gap-2 flex-start">
        <label className="requiredField  text-xl font-semibold">
          Furnishing
        </label>
        <div className="w-full flex justify-between">
          <div className="flex items-center gap-2">
            <input
              className="custom-radio"
              type="radio"
              name="furnished-y-n"
            ></input>
            <label>Fully Furnished</label>
          </div>

          <div className="flex gap-2 items-center">
            <input
              className="custom-radio"
              type="radio"
              name="furnished-y-n"
            ></input>

            <label>Simi Furnished</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              className="custom-radio"
              type="radio"
              name="furnished-y-n"
            ></input>

            <label>Unfurnished</label>
          </div>
        </div>
      </div>

      <hr></hr>
      {/* Society AMINTIES */}

      <div className="w-full flex flex-col gap-8 flex-start ">
        <label className="requiredField  text-xl font-semibold">
          Society Aminities
        </label>
        <div className="w-full flex justify-between mb-9">

          <div className="flex flex-col gap-2 items-center">
            <img className="h-[30px]" src={wathchman} />
            <p className="mb-2">24/7 security</p>



         <div className="custom-checkbox">

         <input type="checkBox"></input>
         <span><FontAwesomeIcon icon={faCheck}/></span>

         </div>


          </div>
          
          <div className="flex flex-col gap-2 items-center">
            <img className="h-[30px]" src={camera} />
            <p className="mb-2">CCTV Camera</p>



         <div className="custom-checkbox">

         <input type="checkBox"></input>
         <span><FontAwesomeIcon icon={faCheck}/></span>

         </div>


          </div>
          <div className="flex flex-col gap-2 items-center">
            <img className="h-[30px]" src={lift} />
            <p className="mb-2">Lift</p>



         <div className="custom-checkbox">

         <input type="checkBox"></input>
         <span><FontAwesomeIcon icon={faCheck}/></span>

         </div>


          </div>
          <div className="flex flex-col gap-2 items-center">
            <img className="h-[30px] " src={car} />
            <p className="mb-2">Reserved Parking</p>



         <div className="custom-checkbox">

         <input type="checkBox"></input>
         <span><FontAwesomeIcon icon={faCheck}/></span>

         </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatuersAminitiesDetails;

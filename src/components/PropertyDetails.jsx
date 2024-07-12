import React from "react";
import "../styling/styles.css";

function PropertyDetails() {
  return (
    <div className="h-full w-full flex flex-col ">
      <form className="flex flex-col gap-[60px]">
        {/* property for inpute field */}
        <div className="w-[40%] flex flex-col gap-2 flex-start">
          <label className="requiredField property-for text-xl font-semibold">
            Property for
          </label>
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-2">
              <input
                className="custom-radio"
                type="radio"
                name="purpose"
              ></input>
              <label>Rent</label>
            </div>

            <div className="flex gap-2 items-center">
              <input
                className="custom-radio"
                type="radio"
                name="purpose"
              ></input>

              <label>Sale</label>
            </div>
          </div>
        </div>

        {/* property type inpute field */}
        <div className="w-[60%] flex flex-col gap-2 flex-start">
          <label
            className="requiredField text-xl font-semibold"
            htmlFor="property-for"
          >
            Property Type
          </label>
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-2">
              <input
                className="custom-radio"
                type="radio"
                name="property-type"
              ></input>
              <label>Residential</label>
            </div>

            <div className="flex gap-2 items-center">
              <input
                className="custom-radio"
                type="radio"
                name="property-type"
              ></input>

              <label>Commercial</label>
            </div>
            <div className="flex gap-2 items-center">
              <input
                className="custom-radio"
                type="radio"
                name="property-type"
              ></input>

              <label>Land/Plot</label>
            </div>
          </div>
        </div>

        {/* property aria */}

        <div className="flex  w-full justify-between">
          <div className="flex flex-col justify-start gap-2 w-[380px]">
            <label className="requiredField">Built up Area</label>

            <input
              className="input-field text-black"
              placeholder="0000"
            ></input>
          </div>
          <div className="flex flex-col justify-start gap-2 w-[380px]">
            <label className="requiredField">Carpet Area</label>

            <input
              className="input-field text-black"
              placeholder="0000"
            ></input>
          </div>
        </div>

        {/* property floors and facing */}

        <div className="flex  w-full justify-between">
          <div className="flex  justify-between items-center w-[380px]">
            <div className="flex flex-col flex-start gap-2">
              <label className="requiredField">Built up Area</label>

              <input
                className="input-field text-black"
                placeholder="0000"
              ></input>
            </div>

            <div className="flex flex-col flex-start gap-2">
              <label className="requiredField">Built up Area</label>

              <input
                className="input-field text-black"
                placeholder="0000"
              ></input>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-2 w-[380px]">
            <label className="requiredField">property facing</label>

            <input
              className="input-field text-black"
              placeholder="0000"
            ></input>
          </div>
        </div>

        {/* property age */}

        <div className="w-full flex flex-col flex-start gap-4">
          <label htmlFor="property-age">Property Age</label>

          <div className="w-full flex justify-between ">
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="property-age"
              ></input>
              <span>Less than 1 Year</span>
            </div>

            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="property-age"
              ></input>
              <span>1-3 Years</span>
            </div>
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="property-age"
              ></input>
              <span>5-10 Years</span>
            </div>
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="property-age"
              ></input>
              <span>Greater than 10 Years</span>
            </div>
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="property-age"
              ></input>
              <span>5 years</span>
            </div>
          </div>
        </div>

        {/* BHK information */}

        <div className="w-full flex flex-col flex-start gap-4">
          <label htmlFor="bhk">BHK type</label>

          <div className="w-full flex justify-between mb-10">
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="bhk-type"
              ></input>
              <span>1RK</span>
            </div>

            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="bhk-type"
              ></input>
              <span>1BHK</span>
            </div>
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="bhk-type"
              ></input>
              <span>2BHK</span>
            </div>
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="bhk-type"
              ></input>
              <span>3BHK</span>
            </div>
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="bhk-type"
              ></input>
              <span>4BHK</span>
            </div>
            <div className="slect-option-radio">
              <input
                className="custom-input-radio"
                type="radio"
                name="bhk-type"
              ></input>
              <span>5+BHK</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PropertyDetails;

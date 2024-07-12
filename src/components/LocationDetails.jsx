import React from 'react'

function LocationDetails() {
  return (
    <div className="h-full w-full flex flex-col ">
      <form className="flex flex-col gap-[60px]">


      <div className="flex  w-full justify-between">
          <div className="flex flex-col justify-start gap-2 w-[380px]">
            <label className="requiredField">Building/ Society name</label>

            <input
              className="input-field text-black"
              placeholder="Enter Apartment Name"
            ></input>
          </div>
          <div className="flex flex-col justify-start gap-2 w-[380px]">
            <label className="requiredField">Locality/ Area</label>

            <input
              className="input-field text-black"
              placeholder="Eg. Sheetal Nagar"
            ></input>
          </div>
        </div>


        <div className="flex  w-full justify-between">
          <div className="flex flex-col justify-start gap-2 w-[380px]">
            <label className="requiredField">Landmark / Street Name</label>

            <input
              className="input-field text-black"
              placeholder="Prominent Landmark"
            ></input>
          </div>
          <div className="flex flex-col justify-start gap-2 w-[380px]">
            <label className="requiredField">City</label>

            <input
              className="input-field text-black"
              placeholder="Eg. Mumbai"
            ></input>
          </div>
        </div>

        <div className='flex flex-1 w-full mb-10'>
        <iframe className='flex flex-1 ' style={{width:"100%", height:"100%" , border:"0" , allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292644334!2d72.71637190093988!3d19.082502005909245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720757347324!5m2!1sen!2sin" ></iframe>
        </div>

        </form>
        </div>
  )
}

export default LocationDetails
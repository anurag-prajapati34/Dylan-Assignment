import React from 'react'

function PriceDetails() {
  return (
    <div className="h-full w-full flex flex-col ">
    <form className="flex flex-col gap-[60px]">


    <div className="flex  w-full justify-between">
        <div className="flex flex-col justify-start gap-2 w-[380px]">
          <label className="requiredField">Rent</label>

          <input
            className="input-field text-black"
            placeholder="rs. /month"
          ></input>
        </div>
        <div className="flex flex-col justify-start gap-2 w-[380px]">
          <label className="requiredField">Security</label>

          <input
            className="input-field text-black"
            placeholder="rs. /month"
          ></input>
        </div>
      </div>


      <div className="flex  w-full justify-between">
        <div className="flex flex-col justify-start gap-2 w-[380px]">
          <label className="requiredField">Maintenance</label>

          <input
            className="input-field text-black"
            placeholder="Maintenance"
          ></input>
        </div>
        <div className="flex flex-col justify-start gap-2 w-[380px]">
          <label className="requiredField">Maintenance</label>

          <div className='flex gap-4'><input
            className="input-field text-black"
            placeholder="Maintenance"
          ></input>
          <input
            className="input-field text-black"
            placeholder="monthly"
          ></input></div>
        </div>
       
      </div>

  <div className='flex flex-col gap-4'>
    <label className='font-semibold'>Additional Pricing details to convey to agent?</label>
  <input style={{height:"96px"}} className='w-full input-field mb-[60px] ' placeholder='Do you have any concerns regarding pricing of your property? Add your concerns here or call us. '></input>

  </div>
      </form>

      </div>
  )
}

export default PriceDetails
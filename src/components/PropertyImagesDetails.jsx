import { faCamera, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import photoCamera from '../assets/photoCamera.png'

function PropertyImagesDetails() {
  return (
    <div className='flex flex-col gap-[60px]'>
<h1 className='text-xl'>Add Photos / videos to attract more tenants! </h1>
<div className='w-full flex flex-col gap-4 pb-[60px]'>

<p className='font-semibold'>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood, etc</p>

<div className='h-[309px] border-2 border-gray-400 flex flex-col justify-center items-center'>
   <img src={photoCamera} className='h-[30px]'></img>
   <input type='file' accept='image/jpeg, image/png , image/jpg'></input>
</div>

<h1 className='text-xl font-semibold'>OR</h1>
<p className='font-semibold'>We can upload them for you! You can email the pictures and videos to us at Dylansetate.com</p>
<p className='text-sm'>Accepted formats are .jpg, .gif, .bmp & .png<br/> Maixmum size allowed is 20 MB, Minimum dimensons allowed 600*400 Pixel</p>
</div>

    </div>
  )
}

export default PropertyImagesDetails
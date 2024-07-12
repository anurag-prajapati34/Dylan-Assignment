import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginInfo from './components/LoginInfo'
import OtpPage from './components/OtpPage'
import PropertyListingPage from './components/PropertyListingPage'
import PropertyDetails from './components/PropertyDetails'
import LocationDetails from './components/LocationDetails'
import FeatuersAminitiesDetails from './components/FeatuersAminitiesDetails'
import PriceDetails from './components/PriceDetails'
import PropertyImagesDetails from './components/PropertyImagesDetails'
function App() {



const routers=createBrowserRouter([

{
  path:'/',
  element:<LoginPage/>,
  children:[
    {
      path:'',
      element:<LoginInfo/>
    },
    {
      path:'/otp',
      element:<OtpPage/>
    }
  ]
},
{
  path:'/listing-page',
  element:<PropertyListingPage/>,
  children:[

    {
      path:'propertyDetail',
      element:<PropertyDetails/>
    },
    {
      path:'locationDetails',
      element:<LocationDetails/>
    },
    {
      path:'featuresAminities',
      element:<FeatuersAminitiesDetails/>
    },
    {
      path:'priceDetails',
      element:<PriceDetails/>
    },
    {
      path:'propertyImageDetails',
      element:<PropertyImagesDetails/>
    }
  ]
  
},
{
  path:'/final-submission-page',
  element: <div>fianl submission check</div>
}


])






  const [count, setCount] = useState(0)

  return (

    <RouterProvider router={routers}/>
    
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout/MainLayout'
import Home from './page/Home/Home'
import Donation from './component/Header/Donation/Donation'
import Statistics from './component/Header/Statistics/Statistics'
import DonationCard from './page/DonationCard/DonationCard'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
        loader:()=>fetch('/card.json')

      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader:()=>fetch('/card.json')
      },
      {
        path:'/donationCard/:id',
        loader:()=>fetch('/card.json'),
        element:<DonationCard></DonationCard>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

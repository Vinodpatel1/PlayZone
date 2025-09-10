import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import Feed from './components/Feed'
import Watch from './components/Watch'
const appRouter = createBrowserRouter([
  { 
    path: '/',
    element: <Body/>,
    children: [
      {
        path :"/",
        element: <Feed/>
      },
      {
        path :"/watch",
        element: <Watch/>
      }
    ]
    
  }
])

export default function App() {
  return (
    <>
    <Navbar/>
    <RouterProvider router={appRouter}/>
    </>
  )
}


import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
   
    <>
      <Sidebar />
      
      <Outlet />
      
    
    </>
  );
}

export default Body;

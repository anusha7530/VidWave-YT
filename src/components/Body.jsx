import React from 'react'
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      <div className="flex mt-24 gap-4">
        <Sidebar />
        <Outlet/>
      </div>
    </div>
  )
}

export default Body

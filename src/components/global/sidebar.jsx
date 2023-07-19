import React, { useState } from 'react'
import {
  FaBars,
  FaBell,
  FaClipboardList,
  FaPhone,
  FaTh,
  FaUsers,
 
}from "react-icons/fa"
import {
  FiSettings 
  
} from 'react-icons/fi';
import {
  RxDashboard 
 
} from 'react-icons/rx';


import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen]=useState(true);
    const toggle = () => setIsOpen(!isOpen);

  const menuItem=[
    {
      path:"/Dashboard",
      name:"Dashboard",
      icon:<RxDashboard/>
    },
    {
      path:"/Department",
      name:"Department",
      icon:<FaTh/>
    },
    {
      path:"/Employee",
      name:"Employee",
      icon:<FaUsers/>
    },
    {
      path:"/LeaveManagement",
      name:"Leave Management",
      icon:<FaClipboardList/>
    },
    {
      path:"/Notification",
      name:"Notification",
      icon:<FaBell/>
    },
    {
      path:"/Setting",
      name:"Setting",
      icon:<FiSettings/>
    },
    {
      path:"/Support",
      name:"Support",
      icon:<FaPhone/>
    }
  ]
  return (
    <div className='container'>
      <div style={{width: isOpen ? "240px":"50px"}} className='sidebar'>
        <div className='top_section'>
          <h1 style={{display: isOpen ? "block":"none"}} className='logo'>Logo</h1>
          <div style={{marginLeft: isOpen ? "30px":"-30px"}}className='bars'>
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item,index)=>(
              <NavLink to={item.path} key={index} className="link" activeClassname="active">
                <div className='icon'>{item.icon}</div>
                <div style={{display: isOpen ? "block":"none"}} className="link_text">{item.name}</div>

              </NavLink>
          ))
        }
      </div> 
      <main>{children}</main> 
    </div>
  )
}

export default Sidebar

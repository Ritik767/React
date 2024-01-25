import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import { useState } from "react"
const Layout = () => {
     const [isOpen, setIsOpen] = useState(false);
  return (
   
   <div>
    <Nav setIsOpen={setIsOpen}/>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <Outlet/>
   </div>
  )
}

export default Layout
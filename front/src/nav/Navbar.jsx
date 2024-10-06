import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/star1.png";


export default function Navbar() {
  return (
    <div className="mt-4 ml-6">
     <Link to="/" className="inline-block">
       <img className="h-14 w-auto" src={logo} alt="Logo" />
     </Link>
   </div>
  )
}

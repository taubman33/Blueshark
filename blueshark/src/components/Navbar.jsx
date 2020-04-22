import React from 'react'
import { Link, Route }  from 'react-router-dom'
import Contact from './Contact'




 function Navbar () {
    
    return (
        <div className="Navbar"
        style={{textAlign:"center",
                color:"orange"}}>
            <h2> contact home about</h2>
{/* 
            <Link>
            <Contact />
            </Link> */}
        </div>


    )


 }

export default Navbar
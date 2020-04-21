import React from 'react'
import Navbar from './Navbar'

function Header () {
    return (
    <div className="header"
     style={{textAlign:"center",
            backgroundColor:"blue",
             color:"white",
            padding:"3rem"
            }}>
         
         <div className="header-text">
         <h1>Header Blue Shark</h1>
        </div>

    
        <div className="header-Navbar">
          <Navbar />
        </div>


            </div>


    )
}

export default Header
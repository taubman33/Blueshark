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
         
         <div className="header-text"
         style={{fontSize:"2rem",
                letterSpacing:"1rem"
           }}>
         <h1> Blue Shark Tutoring</h1>
        </div>

    
        <div className="header-Navbar">
          <Navbar />
        </div>


            </div>


    )
}

export default Header
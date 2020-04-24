import React from 'react'
import Navbar from './Navbar'
import Shark from './assets/shark4.png'

function Header () {
    return (
    <div className="header"
     style={{textAlign:"center",
             color:"white",
            padding:"3rem"
            }}>
         
         <div className="header-text"
         style={{fontSize:"2rem",
                letterSpacing:"1rem"
           }}>
         <h1> Blue Shark Tutoring</h1>
         {/* <img src={Shark}/> */}
        </div>

    
        <div className="header-Navbar">
          <Navbar />
        </div>


            </div>


    )
}

export default Header
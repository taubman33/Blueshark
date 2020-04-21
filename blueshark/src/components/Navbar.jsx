import React from 'react'
import { Link, Route }  from 'react-router-dom'
import Contact from './Contact'


{/* <Route exact path="/Contact"component={Contact}/> */}

 function Navbar () {
    
    return (
        <div className="Navbar"
        style={{textAlign:"center",
                color:"orange"}}>
            <h2>  nav nav nav</h2>
{/* 
            <Link>
            <Contact />
            </Link> */}
        </div>


    )


 }

export default Navbar
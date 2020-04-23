import React from 'react'
import {  BrowserRouter as Router, Link, Route, Switch }  from 'react-router-dom'
import Contact from './Contact'




 function Navbar () {
    
    return (
        <div className="Navbar"
        style={{display:"flex",
                flexDirection:"Row",
                justifyContent:"Space-Evenly"}}>
       
            <Link to='/Contact'>
                <h3> Contact Me</h3>
            </Link>

            <Link to='/'>
                <h3> Home</h3>
            </Link>

            <Link to='/AboutMe'>
                <h3> About Me</h3>
            </Link>



        </div>


    )


 }

export default Navbar
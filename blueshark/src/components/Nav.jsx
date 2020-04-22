import React from 'react'
import  { Link } from 'react-router-dom'
import Algebra from './topics/Algebra'
import Geometry from './topics/Geometry'
import Quadratics from './topics/Quadratics'
import Trig from './topics/Trig'

 function Nav () {
    return (
        <div className="Nav"
        style={{textAlign:"center"}}>


        <Link to='/Algebra' className='nav-link'> <h3>Algebra</h3> </Link>

        <Link to='/Geometry' className='nav-link'> <h3>Geometry</h3> </Link>

        <Link to='/Quadratics' className='nav-link'> <h3>Quadratics</h3> </Link>

        <Link to='/Trig' className='nav-link'> <h3>Trigonometry</h3> </Link>

        </div>



    )


 }

export default Nav
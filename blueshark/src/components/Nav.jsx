import React from 'react'
import  { Link} from 'react-router-dom'


 function Nav () {
    return (
        <div className="Nav-Container">
        
        <div className="Nav-aside"
        style={{textAlign:"center", marginTop:'-4rem'}}>

        

        <div className="Nav"
            style={{backgroundColor:"#FCC69D", paddingBottom:"15rem"}}>
        <h2>Test Help</h2>
        <h3> Strategies</h3>
        <h3> What to study</h3>
        <h3>Resources</h3>




        <h2> Math Topics</h2>
        <Link to='/Algebra' className='nav-link'> <h3>Algebra</h3> </Link>

        <Link to='/Geometry' className='nav-link'> <h3>Geometry</h3> </Link>

        <Link to='/Quadratics' className='nav-link'> <h3>Quadratics</h3> </Link>

        <Link to='/Trig' className='nav-link'> <h3>Trigonometry</h3> </Link>

        <Link to='/Stats' className='nav-link'> <h3>Statistics</h3> </Link>

        <Link to='/Ratios' className='nav-link'> <h3>Ratios</h3> </Link>

        <Link to='/Logic' className='nav-link'> <h3>Logic</h3> </Link>

        <Link to='/Other' className='nav-link'> <h3>Other</h3> </Link>
        
        </div>

        </div>
        </div>
    )


 }

export default Nav
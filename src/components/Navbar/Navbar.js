import '../Navbar/Navbar.css'
import {Link} from "react-router-dom"
import Logo from '../../Assets/Images/picx-removebg-preview.png'

const Navbar=()=>{
    return(
        <div className="Maindiv">
            <img src={Logo} className="Log" alt={Logo} />
            <nav>
                <ul>
            
                 <Link to="/" style={{textDecoration:"none"}}>
                 <li> <a href='#'>Home</a> </li>  
                    </Link>

                    <Link to="/Products" style={{textDecoration:"none"}}>
                    <li> <a href='#'>Products</a></li>
                    </Link>   

                    <Link to="/Signup" style={{textDecoration:"none"}}>
                    <li> <a  href='#'>Signup</a></li>
                    </Link>   

                   <Link to="/Login" style={{textDecoration:"none"}}>
                   <li> <a href=''>Login</a></li>
                    </Link>   
          
                    </ul>
            </nav>
            
        </div>
    )

}
export default Navbar;
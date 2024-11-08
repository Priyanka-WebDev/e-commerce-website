import './Navbar.css'
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
      <h1> <Link to='/' style={{color:"#fff",textDecoration:"none",fontWeight:"600",fontSize:"2rem"}}> PreMART</Link></h1>
        <ul>
            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact us</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><input type="search" placeholder='Search'/></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

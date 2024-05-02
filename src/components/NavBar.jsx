import { Link } from 'react-router-dom'
import logo from '../assets/images/logo1.png'
function NavBar() {
  return (
    <div id="nav-main">
        <Link to={"/"}><img style={{width:"450px"}} src={logo} alt="logo" /></Link>
        <h1>KANHACK</h1>
    </div>
    
  )
}

export default NavBar
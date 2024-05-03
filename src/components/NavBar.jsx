import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import lupa from '../assets/images/lens.svg'
function NavBar(props) {
  const handleSearch = (event) => {
    //console.log(event.target.value)
    props.setSearchValue(event.target.value)
  }
  return (
    <div id="nav-main">
      <Link to={"/"}>
          <img style={{height:"55px"}} src={logo} alt="logo" />      
      </Link>
        <div className='nav'>
          <input type="text" placeholder='buscar' value={props.searchValue} onChange={handleSearch}></input>
          <img style={{height:"35px"}} src={lupa} alt="lupa"/>
        </div>
    </div>
    
  )
}

export default NavBar
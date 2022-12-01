import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="comp nav">
        <ul>
          <li>
        <NavLink 
        activeStyle={{ fontWeight: 'bold' }}
        activeClassName='purple' 
        exact to="/" >home</NavLink>
          </li>
          <li>
        <NavLink 
        activeStyle={{ fontWeight: 'bold' }}
        activeClassName='purple' exact to="/stocks">stocks</NavLink>
        </li>
        <li>
        <NavLink 
        activeStyle={{ fontWeight: 'bold' }}
        activeClassName='purple' exact to="/movies">movies</NavLink>
        </li>
        </ul>
      </nav>

      )
}

export default Navbar
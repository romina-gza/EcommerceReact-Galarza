import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {

    return (
        <nav>
            <Link to='/' className="Logo">PeanutGo!</Link>
            <div className="divButtons">
                <NavLink to='/category/frutos_secos' className={({isActive}) => isActive ? 'SitesActive' : 'Sites' } >Frutos Secos</NavLink>
                <NavLink to='/category/harinas' className={({isActive}) => isActive ? 'SitesActive' : 'Sites' } >Harinas</NavLink>
                <NavLink to='/category/chocolates' className={({isActive}) => isActive ? 'SitesActive' : 'Sites' } >Chocolates</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar
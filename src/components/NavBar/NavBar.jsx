import CartWidget from "../CartWidget/CartWidget"

function NavBar() {
    return (
        <nav>
            <h3>PeanutGo!</h3>
            <div className="divButtons">
                <button>Frutos Secos</button>
                <button>Lácteos</button>
                <button>Embasados</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar
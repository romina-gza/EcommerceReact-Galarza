import { useCartContext } from "../../Context/CartContext"

import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {    
    const {cartList, vaciarCart, eliminarPorItem, precioTotal} = useCartContext()
    console.log('the cart list: ',cartList)

    return (
        cartList.length === 0 ?

            <div className="CartContainer">
            <h2>Mi Carrito</h2>
                <article className="EmptyCart">
                <img src={'https://www.jeninbay.com/img/empty_cart.png'} alt="carrito vacío" />
                <Link to='/'>
                    <button className="BtnGoShop" > Empezar a Comprar </button>
                </Link>
                </article>
            </div>
        
        :

            <div className="CartContainer">
                <h2>Mi Carrito</h2>
                {
                    cartList.map(prod => <li key={prod.id}>

                        <section className="ItemCartCard">
                            <img src={prod.img} alt={prod.descripcion} />
                            <div className="TextItemCartCard">
                                <h3>{prod.nombre}</h3>
                                <span>{prod.descripcion}</span>
                            </div>
                            
                            <span>{prod.count} unidades</span>
                            
                            <span>${prod.count * prod.precio}</span>

                            <span className="TrashSVG" onClick={ () => eliminarPorItem(prod.id) } >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="IconTrashSVG"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg>                    
                            </span>
                        </section>
                        </li>)

                }
                        <section>
                            <button onClick={vaciarCart} className="BtnVaciarCarrito"> Vaciar Carrito 🗑️ </button>
                            <span>${precioTotal()}</span>
                        </section>
                        <section>
                            <Link to='/checkout'>
                                <button className="BtnGenerarOrden" /* onClick={BtnGenerarOrden} */>Ir a Checkout </button>
                            </Link>
                        </section>
            </div>
    )
}
export default Cart
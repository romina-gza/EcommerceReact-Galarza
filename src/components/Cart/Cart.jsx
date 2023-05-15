import { useCartContext } from "../../Context/CartContext"
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {    
    const {cartList, vaciarCart, eliminarPorItem, precioTotal} = useCartContext()
    console.log('the cart list: ',cartList)

    return (
        cartList.length === 0 ?

            <div className="CartContainer">
            <h1>Mi Carrito</h1>
                <article className="EmptyCart">
                <img src={'https://www.jeninbay.com/img/empty_cart.png'} alt="carrito vacío" />
                <Link to='/'>
                    <button className="BtnGoShop" > Empezar a Comprar </button>
                </Link>
                </article>
            </div>
        
        :

            <div className="CartContainer">
                <h1>Mi Carrito</h1>
                <div className="TableBox">        
                    <table>
                        <thead>
                            <tr>
                                <th> Descripción de producto </th>
                                <th> Cantidad </th>
                                <th> Precio Total </th>
                            </tr>
                            
                        </thead>
                        
                        <tbody>
                        {
                            cartList.map(prod => <tr key={prod.id}>
                        
                                <td>
                                    <img src={prod.img} alt={prod.descripcion}/>
                                    <div className="TextItemCartCard">
                                        <h3>{prod.nombre}</h3>
                                        <span>{prod.descripcion}</span>
                                    </div>
                                    
                                    </td>
                                <td> <span>{prod.count} unidades</span> </td>
                                <td> <span>${prod.count * prod.precio}</span> </td>
                                <td> 
                                    <span className="TrashSVG" onClick={ () => eliminarPorItem(prod.id) } >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="IconTrashSVG"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                                        </svg>                    
                                    </span> 
                                </td>
                            </tr>)
                        }
                        </tbody>

                        <tfoot>
                            <tr>
                                <td>Total a pagar:</td>
                                <td></td>
                                <td> <span>${precioTotal()}</span> </td>
                            </tr>
                        </tfoot>
                    </table>
                    <article className="BtnsCart">
                        <button onClick={vaciarCart} className="BtnVaciarCarrito"> Vaciar Carrito 🗑️ </button>
                        <Link to='/checkout'>
                            <button className="BtnGenerarOrden" > Terminar mi compra </button>
                        </Link>
                    </article>
                </div>
            </div>
    )
}
export default Cart
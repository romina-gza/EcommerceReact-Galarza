import { Link } from 'react-router-dom'
import cart from './assets/cart-shopping-solid.svg'
import { useCartContext } from '../../Context/CartContext'

const CartWidget = () => {
    const {cantidadTotal} = useCartContext()
    return (
        <div className='divCart' style={{ visibility: cantidadTotal() > 0 ? 'visible' : 'hidden'}}>
            <Link to='/cart'>
            <img src={cart} alt="cart widget" className='iconCart'/>
            </Link> 
            {cantidadTotal()}
        </div>
    )
}
export default CartWidget
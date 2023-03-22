import cart from './assets/cart-shopping-solid.svg'
const CartWidget = () => {
    return (
        <div className='divCart'>
            <img src={cart} alt="cart widget" className='iconCart'/>
            0
        </div>
    )
}
export default CartWidget
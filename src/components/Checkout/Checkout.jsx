import { useCartContext } from "../../Context/CartContext"
import Form from "../Form/Form"
import ResumenCompra from "../ResumenCompra/ResumenCompra"
import './Checkout.css'
const Checkout = () => {
    const {ordenId} = useCartContext()
    return (
        <>
        {ordenId != null ? 
            <div>
                <h1>¡Gracias por su compra!</h1>
                <h2>El Id de su orden de compra es:</h2>
                <p>{ordenId}</p>
            </div>
        :
            <div className="CheckoutBox">
                <h1>Finalizar Compra</h1>
                    <Form></Form>
                    <ResumenCompra></ResumenCompra>
            </div>
        }
        </>
        
    )
}

export default Checkout
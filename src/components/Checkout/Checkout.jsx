import Form from "../Form/Form"
import ResumenCompra from "../ResumenCompra/ResumenCompra"
import './Checkout.css'
const Checkout = () => {

    return (
        <div className="CheckoutBox">
            <h1>Finalizar Compra</h1>
                <Form></Form>
                <ResumenCompra></ResumenCompra>
        </div>
    )
}

export default Checkout
import { useCartContext } from "../../Context/CartContext"
import './ResumenCompra.css'

const ResumenCompra = () => {
    const {cartList, vaciarCart, precioTotal} = useCartContext()
    console.log(cartList)

    return(
        <article className="ArticleBox">
            <h1>Finalizar Compra</h1>
            <table>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                
                <tbody>
                {
                    cartList.map(prod => <tr key={prod.id}>
                            <td className="ImagenResumenCompra">
                                <img src={prod.img} alt={prod.descripcion} />
                            </td>
                            <td className="DescripcionResumenCompra">
                                <h3>{prod.nombre}</h3>
                                <span>{prod.count} unidades x ${prod.precio}</span>
                                <span>Total: ${prod.count * prod.precio}</span>
                            </td>
                        
                        </tr>)
                }
                </tbody>

                <tfoot>
                    <tr>
                        <td>Subtotal:</td>
                        <td>${precioTotal()}</td>
                    </tr>
                </tfoot>
            </table>
        </article>
    )
}
export default ResumenCompra
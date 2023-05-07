import { useCartContext } from "../../Context/CartContext"
import './ResumenCompra.css'

const ResumenCompra = () => {
    const {cartList, vaciarCart, precioTotal} = useCartContext()
    console.log(cartList)

    return(
        <article className="ArticleBox">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Resumen de compra</th>
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
                        <td>Subtotal $9999</td>
                    </tr>
                </tfoot>
            </table>
        </article>
    )
}
export default ResumenCompra
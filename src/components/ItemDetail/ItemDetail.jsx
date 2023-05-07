import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { AdditionalButtons } from "../AdditionalButtons/AdditionalButtons"

const ItemDetail = ( { id, img, nombre, precio, stock, descripcion } ) => {

    const [btns, setBtns] = useState('btn')

    const { agregadoAlCart, cartList } = useCartContext()

    const onAdd = (count) => {
        setBtns('AdditionalsBtns')
        agregadoAlCart( { id, img, nombre, precio, stock, count, descripcion } ) // Guardo el producto (id, img, name...) con la cantidad agregada en un OBJETO.
        
    }
    return (
        <article className="ItemCard">
            
            <section className="ItemCardHead">
                <img src={img} alt={nombre}></img>
            </section>

            <section className="ItemCardBody">
                <h2>{nombre}</h2>
                <p>$ {precio}</p>
                <p>Stock Disponible: {stock}</p>
            </section>

            <section className="ItemFooter">
                {
                    btns === 'btn' ? 
                    <ItemCount stock={stock} initial={1} onAdd={ onAdd }/> 
                    :
                    <AdditionalButtons />
                }
            </section>

        </article>
    )
}
export default ItemDetail
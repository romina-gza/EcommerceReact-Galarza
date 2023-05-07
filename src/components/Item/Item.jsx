import { Link } from "react-router-dom"
import "./Item.css"
const Item = ({id, nombre, precio, img, stock, descripcion}) => {

    return (
        <article className="ItemCard">
            
            <section className="ItemCardHead">
                <img src={img} alt={nombre}></img>
            </section>

            <section className="ItemCardBody">
                <h2>{nombre}</h2>
                <p>Stock Disponible: {stock}</p>
            </section>
            <section className="ItemFooter">
                <Link to={ `/detail/${id}` }>
                    <button className="BtnDetalle">Ver detalles</button>
                </Link>
            </section>

        </article>
    )
}
export default Item
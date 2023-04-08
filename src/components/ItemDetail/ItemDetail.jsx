import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, img, name, precio, stock}) => {
    return (
        <article className="ItemCard">
            
            <section className="ItemCardHead">
                <img src={img} alt={name}></img>
            </section>

            <section className="ItemCardBody">
                <h2>{name}</h2>
                <p>$ {precio}</p>
                <p>Stock Disponible: {stock}</p>
            </section>

            <section className="ItemFooter">
            <ItemCount stock={stock} initial={1} onAdd={ (count)=> console.log("se agregregó ", count) }/> 
            </section>

        </article>
    )
}
export default ItemDetail
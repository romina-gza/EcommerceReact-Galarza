import Item from "../Item/Item"
import "./ItemList.css"
const ItemList = ({items}) => {
    return(
        <div className="ItemL">
            {
            items.length !== 0 ? (
            items.map(prod => (
            <Item key={prod.id} {...prod}/>
            ))
            ) : (
                <span className="Load">Loading...</span>
            )
            }
        </div>
    )
}
export default ItemList
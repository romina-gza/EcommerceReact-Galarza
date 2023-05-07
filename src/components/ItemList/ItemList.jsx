import Item from "../Item/Item"
import { Loading } from "../Loading/Loading"
import "./ItemList.css"
const ItemList = ({items}) => {
    return(
        <div className="ItemL">
            {
                items.length !== 0 ? (
                items.map( prod => (
                    <Item key={prod.id} {...prod}/>
                ))
                ) : (
                    <Loading></Loading>
                )
            }
        </div>
    )
}
export default ItemList
import { useCount } from "../../hooks/useCount"
import './ItemCount.css'


function ItemCount( { stock, initial, onAdd } ) {

    const {count, btnAdd, btnLess} = useCount(stock, 1, onAdd)
    
    return (
        <div className="divCounter">
            <div className="counterOfControls">
                <button onClick={btnLess}>-</button>
                <span>{count}</span>
                <button onClick={btnAdd}>+</button>
            </div>
            <div className="addToCart">
                <button className="btnAddToCart" onClick={ ()=> onAdd(count) } disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}
export default ItemCount
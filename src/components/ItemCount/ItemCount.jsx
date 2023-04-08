import { useState } from "react"
import './ItemCount.css'
function ItemCount( { stock, initial, onAdd } ) {
    const [count, setCount] = useState(initial)
    function btnAdd() {
        if (count < stock){
            setCount( count + 1 )
        }
    }
    function btnLess() {
        if (count > 1) {
            setCount( count - 1 ) 
        }
    }

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
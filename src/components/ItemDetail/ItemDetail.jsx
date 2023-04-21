import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { AdditionalButtons } from "../AdditionalButtons/AdditionalButtons"

const ItemDetail = ({id, img, name, precio, stock}) => {
    const [btns, setBtns] = useState('btn')
    const onAdd = (count) => {
        console.log("se agregregó ", count)
        setBtns('AdditionalsBtns')
    }
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
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import mFetch from "../../utils/mockFetch"
import { useEffect, useState } from "react"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        mFetch()
            .then((resp)=>setProducts(resp))
            .catch((err)=>console.log(err))
            .finally(()=>console.log('proceso terminado!'))
    },[])

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={ (count)=> console.log("se agregregó ", count) }/> 
            <ItemList items={products}/>
        </div>
    )
}
export default ItemListContainer
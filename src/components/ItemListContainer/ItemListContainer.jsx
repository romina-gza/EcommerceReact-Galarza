import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import mFetch from "../../utils/mockFetch"
import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {section} = useParams()
    
    useEffect(()=>{
            if (section) {
                mFetch()
                    .then((resp)=>setProducts(resp.filter(prod => prod.tipo === section)))
                    .catch((err)=>console.log(err))
                    .finally(()=>console.log('proceso terminado!')) 
            } else {
                mFetch()
                    .then((resp)=>setProducts(resp))
                    .catch((err)=>console.log(err))
                    .finally(()=>console.log('proceso terminado!'))                
            }

    },[section])

    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={1} onAdd={ (count)=> console.log("se agregregó ", count) }/> 
            <ItemList items={products}/>
        </div>
    )
}
export default ItemListContainer
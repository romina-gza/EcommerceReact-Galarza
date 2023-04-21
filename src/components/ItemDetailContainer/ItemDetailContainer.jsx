import { useEffect, useState } from "react"
import { getProductById } from "../../utils/mockFetch"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {idprod} = useParams()
    
    useEffect( () => {
        getProductById(idprod)
            .then(resp => setProducto(resp))
            .catch(err => console.error(err))

    },[])
    
    return (
        <div className="ItemDetailCss">
            <ItemDetail {...producto}/>
        </div>
    )
}
export default ItemDetailContainer
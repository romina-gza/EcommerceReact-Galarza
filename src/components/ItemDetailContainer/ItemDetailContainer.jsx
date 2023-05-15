import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import { Loading } from "../Loading/Loading"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    const [loading, setLoading] = useState(true)

    const {idprod} = useParams()

    useEffect(()=>{
        const database = getFirestore()

        const query = doc( database , 'productos', idprod )
        getDoc(query)
            .then( resp => setProducto( { id : resp.id, ...resp.data() }  ) )
            .catch( err => err )
            .finally( () => setLoading(false) )
    },[])
    return (
        <div className="ItemDetailCss">
            {
                loading ?
                <Loading></Loading>
                :
                <ItemDetail {...producto}/>
            }
        </div>
    )
}
export default ItemDetailContainer
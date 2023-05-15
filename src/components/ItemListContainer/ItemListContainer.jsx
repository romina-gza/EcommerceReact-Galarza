import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loading } from "../Loading/Loading"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {section} = useParams()
    
    useEffect(()=>{
            if (section) {
                const database = getFirestore()
                const queryCollection = collection( database , 'productos' )
                const queryFilter = query(queryCollection, where('tipo', '==', section))
                getDocs(queryFilter)
                    .then( resp => setProducts(resp.docs.map(producto => ( { id : producto.id, ...producto.data() } ) ) ) )
                    .catch( err => err )
                    .finally( () => setLoading(false) )

            } else {

                const database = getFirestore()
                const queryCollection = collection( database , 'productos' )
                getDocs(queryCollection)
                    .then( resp => setProducts(resp.docs.map(producto => ( { id : producto.id, ...producto.data() } ) ) ) )
                    .catch( err => err )
                    .finally( () => setLoading(false) )
        
            }

    },[section])


    return (
        <div className="itemListContainer">
            <h1>{greeting}</h1>
            {
                loading ? 
                    <Loading></Loading>
                : 
                <ItemList items={products}/>
            }
        </div>
    )
}
export default ItemListContainer
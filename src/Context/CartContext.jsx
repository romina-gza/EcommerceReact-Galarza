import { createContext, useContext, useState } from "react";

const CartContext = createContext( [] )

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ( {children} ) => {
    
    const [cartList, setCartList] = useState( [ ] )
    const [ordenId, setOrdenId] = useState(null)
    // Functions
    const agregadoAlCart = (newProduct) => {
        const metFindIndex = cartList.findIndex( prod => prod.id === newProduct.id) // Si es igual devuelve el id, de lo contrario --> -1

        if (metFindIndex === -1 ){
            setCartList([
                ...cartList,
                newProduct
            ])
        } else {
            // Si la cantidad agregada de un nuevo producto existe y excede el stock este devolverá la cantidad de stock disponible.
            ( cartList[metFindIndex].count + newProduct.count ) > ( cartList[metFindIndex].stock ) ? 
                ( cartList[metFindIndex].count = cartList[metFindIndex].stock ) 
            :
            // de lo contrario, sumará la cantidad que hay y la nueva cantidad agregada
            ( cartList[metFindIndex].count += newProduct.count )
            
                setCartList( [
                ...cartList
            ] )
        }
    }

    const vaciarCart = () => {
        setCartList( [] )
    }

    const eliminarPorItem = (id) => {
        const newList = cartList.filter( prod => prod.id !== id ) 
        setCartList(newList)
    }  

    //cantidad total por producto - renderiza en Cartwidget
    let cantidadTotal = () => {
        let CantidadTtl = cartList.reduce( ( acumulador, productoAgregado ) => {
            let Cttl = acumulador += productoAgregado.count
            return Cttl 
        },0)

        return CantidadTtl
    }

    //precio total.
    let precioTotal = () => {
        let PrecioTotal = cartList.reduce((acumulador, productoAgregado)=> {
            return acumulador += (productoAgregado.precio * productoAgregado.count)
        },0)

        return PrecioTotal
    }

    return (
        <CartContext.Provider value={{
            // Estados
            cartList,
            ordenId,
            setOrdenId,
            // Functions
            agregadoAlCart,
            vaciarCart,
            eliminarPorItem,
            
            cantidadTotal,
            precioTotal
        }} >
            {children}
        </CartContext.Provider>
    )
}
import { useState } from "react"
// el onAdd está de más en el parámetro?
export const useCount = (stock, initial, onAdd) => {
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
    return {count, btnAdd, btnLess}
}
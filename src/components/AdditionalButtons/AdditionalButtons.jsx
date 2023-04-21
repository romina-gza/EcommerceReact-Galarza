import { Link } from 'react-router-dom'
import './AdditionalButtons.css'

export const AdditionalButtons = () => {
    return (
        <article className='AdditionalButtons'>
            <Link to='/'>
                <button className='BtnFirst' onClick={()=> console.log('ir a... carrito')}>
                Terminar mi compra
                </button>
            </Link>
            <Link to='/'>
                <button onClick={()=> console.log('ir a... home')}>
                    Seguir Comprando
                </button>
            </Link>
        </article>
    )
}
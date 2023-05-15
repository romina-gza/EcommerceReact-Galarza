import { Link } from 'react-router-dom'
import './AdditionalButtons.css'

export const AdditionalButtons = () => {
    return (
        <article className='AdditionalButtons'>
            <Link to='/cart'>
                <button className='BtnFirst'>
                Terminar mi compra
                </button>
            </Link>
            <Link to='/'>
                <button>
                    Seguir Comprando
                </button>
            </Link>
        </article>
    )
}
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useCartContext } from '../../Context/CartContext'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import './Form.css'

const Form = () => {

    const {cartList, vaciarCart, precioTotal, setOrdenId} = useCartContext()
    const formik = useFormik({
        initialValues: {nombre: '', apellido: '', tel: '', email: '', repeatEmail: ''},
        validationSchema: Yup.object({
            nombre : Yup.string()
                .min(1, 'Demasiado corto!')
                .max(30, 'Demasiado largo!')
                .required('* El campo "nombre" es requerido'),
            apellido : Yup.string()
                .required('* El campo "apellido" es requerido'),
            tel : Yup.number()
                .required('* El campo "telefono/celular" es requerido'),
            email : Yup.string()
                .required('* El campo "correo electrónico" es requerido')
                .oneOf([Yup.ref('repeatEmail')],'Los correos electrónicos no son iguales'),
            repeatEmail : Yup.string()
                .required('* El campo "repetir correo electrónico" es requerido')
                .oneOf([Yup.ref('email')],'* Los correos electrónicos no son iguales'),

        }),
        onSubmit: values => {
            return values
        }
    })

    // Generar Orden

    const BtnGenerarOrden = (e) => {
        e.preventDefault()
        const values = formik.values; // Obtiene valores del formulario

        formik.handleSubmit(); // Llama a la función onSubmit de formik
    
        const isValid = formik.isValid; // Obtener el estado de validación de Formik

        if (!isValid) {
            return formik.errors; // Devolver formik.errors si el formulario no es válido
        }

        const orden = {
            buyer: values, // Asignar los valores del formulario a la propiedad buyer
            items: cartList.map(({ id, nombre, precio }) => ({ id, nombre, precio })),
            total: precioTotal()
        }


        const database = getFirestore()
        const queryCollection = collection(database, 'orden')

        addDoc(queryCollection, orden)
            .then( resp => setOrdenId(resp.id) )
            .catch( err => err)
            .finally( () => { vaciarCart() } )

    }

    return (
        <section className='SectionForm'>
            <form onSubmit={ BtnGenerarOrden }>
                <div>
                    <label >Nombre</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        placeholder="Ramona" 
                        id="nombre" 
                        onChange={formik.handleChange}
                        value={formik.values.nombre}
                    ></input>
                    {<span> {formik.errors.nombre} </span> }
                </div>
                <div>
                    <label >Apellido</label>
                    <input 
                        type="text" 
                        placeholder="Barnes" 
                        name="apellido" 
                        id="apellido" 
                        onChange={formik.handleChange}
                        value={formik.values.apellido}
                    ></input>
                        { <span>{formik.errors.apellido}</span> }
                </div>
                <div>
                    <label >Teléfono Celular</label>
                    <input 
                        type="number" 
                        placeholder="261 5123456" 
                        name="tel" 
                        id="tel" 
                        onChange={formik.handleChange}
                        value={formik.values.tel}>
                    </input>
                        { <span>{formik.errors.tel}</span> }
                </div>
                <div>
                    <label >Correo electrónico</label>
                    <input 
                        type="email" 
                        placeholder="example@gmail.com" 
                        name="email" 
                        id="email" 
                        onChange={formik.handleChange}
                        value={formik.values.email}>
                    </input>
                        { <span>{formik.errors.email}</span> }
                </div>
                <div>
                    <label >Repetir correo electrónico</label>
                    <input 
                        type="email" 
                        placeholder="example@gmail.com" 
                        name="repeatEmail" 
                        id="repeatEmail" 
                        onChange={formik.handleChange}
                        value={formik.values.repeatEmail}>
                    </input>
                        { <span>{formik.errors.repeatEmail}</span> }
                </div>
                <input type="submit" value="Generar mi orden" id="submit"/>
            </form>
        </section>
    )
}
export default Form
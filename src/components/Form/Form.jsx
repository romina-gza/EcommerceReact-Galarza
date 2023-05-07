import {useFormik} from 'formik'
import * as Yup from 'yup'
import { initializeFirebase } from '../../firebase/config'
import { useCartContext } from '../../Context/CartContext'
import { addDoc, collection } from 'firebase/firestore'


const Form = () => {
    const {cartList, vaciarCart, precioTotal} = useCartContext()
    const formik = useFormik({
        initialValues: {nombre: '', apellido: '', tel: '', email: '', repeatEmail: ''},
        validationSchema: Yup.object({
            nombre : Yup.string()
                .required('El campo "nombre" es requerido'),
            apellido : Yup.string()
                .required('El campo "apellido" es requerido'),
            tel : Yup.number()
                .required('El campo "telefono/celular" es requerido'),
            email : Yup.string()
                .required('El campo "correo electrónico" es requerido')
                .oneOf([Yup.ref('repeatEmail')],'Los correos electrónicos no son iguales'),
            repeatEmail : Yup.string()
                .required('El campo "repetir correo electrónico" es requerido')
                .oneOf([Yup.ref('email')],'Los correos electrónicos no son iguales'),

        }),
        onSubmit: values => {
            console.log('este es el valor onSubmit',values)
            return values
        }
    })

    // Generar Orden

    const BtnGenerarOrden = (e) => {
        const values = formik.values.length; // Obtiene valores del formulario
        console.log('este es VALUES ->',values )

        formik.handleSubmit(); // Llama a la función onSubmit de formik
    
        if ( Object.keys(formik.values).length === 0  || formik.errors ) {
            // Maneja el error 
            console.log('errores')
            formik.handleSubmit()
            e.preventDefault()
            
        }
        console.log('el resto del codigo', values)

        const orden = {
            buyer: values, // Asignar los valores del formulario a la propiedad buyer
            items: cartList.map(({ id, nombre, precio }) => ({ id, nombre, precio })),
            total: precioTotal()
        };
        console.log(orden)

        const database = initializeFirebase()
        const queryCollection = collection(database, 'orden')

        addDoc(queryCollection, orden)
            .then( resp => console.log(resp.id) )
            .catch( err => console.log(err))
            .finally( () => { 
                console.log('terminó la promesa')
                vaciarCart()} )
        
        console.log('Generando orden: ',orden)
    }


    return (
        <section>
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
                    {formik.errors.nombre}
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
                        {formik.errors.apellido}
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
                        {formik.errors.tel}
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
                        {formik.errors.email}
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
                        {formik.errors.repeatEmail}
                </div>
                <input type="submit" value="Generar mi orden" id="submit"/>
            </form>
        </section>
    )
}
export default Form
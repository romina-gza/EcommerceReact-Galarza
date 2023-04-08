const productosLista = [
        {
            id : "LA1",
            name : "pasas de uvas",
            marca : "piwen",
            precio : 94,
            gramos : 250,
            descripcion : "Pasas de uvas con bolsa reciclable",
            img : "../assets/img-productos/pasas-de-uvas.jpg",
            tipo: "frutos_secos",
            stock: 12
        },
        {
            id : "LA2",
            name : "avena",
            marca : "piwen",
            precio : 130,
            gramos : 400,
            descripcion : "Avena integral",
            img : "../assets/img-productos/avena.jpg",
            tipo: "frutos_secos",
            stock: 5
        },
        {
            id : "LA3",
            name : "nuez",
            marca : "piwen",
            precio : 180,
            gramos : 100,
            descripcion : "Nuez sin pelar",
            img : "../assets/img-productos/nuez.jpg",
            tipo: "frutos_secos",
            stock: 9
        },
        {
            id : "LA4",
            name : "almendra",
            marca : "piwen",
            precio : 390,
            gramos : 250,
            descripcion : "Almendras con bolsa reciclable",
            img : "../assets/img-productos/almendras-piwen.jpg",
            tipo: "frutos_secos",
            stock: 21
        },
        {
            id : "LA5",
            name : "almendras chocolate butter",
            marca : "nutsGo",
            precio : 230,
            gramos : 500,
            descripcion : "Caja de almendras chocolate butter",
            img : "../assets/img-productos/almendras-con-chocolate.png",
            tipo: "chocolates",
            stock: 15
        },
        {
            id : "LA6",
            name : "mani chocolate con leche",
            marca : "nutsGo",
            precio : 280,
            gramos : 500,
            descripcion : "Caja de mani chocolate con leche",
            img : "../assets/img-productos/mani-con-chocolate.png",
            tipo: "chocolates",
            stock: 4
        },
        {
            id: "LA7",
            name: "mani",
            marca: "nutsGo",
            precio: 1250,
            gramos: 350,
            descripcion: "Mani en mantequilla",
            img: "../assets/img-productos/crema-de-cacahuete.jpg",
            tipo: "frutos_secos",
            stock: 3
        },
        {
            id: "LA8",
            name: "mix tropical",
            marca: "piwen",
            precio: 200,
            gramos: 250,
            descripcion: "Frutos secos incluidos: \\'almendras\\', \\'nueces\\', \\'pasas de uvas\\' y \\'mani\\'.",
            img: "../assets/img-productos/mix-tropical.jpg",
            tipo: "frutos_secos",
            stock: 9
        },
        {
            id: "LA9",
            name: "harina de almendras",
            marca: "nutsGo",
            precio: 190,
            gramos: 250,
            descripcion: "Harina de almendras pelados",
            img: "../assets/img-productos/harina-de-almendras.jpg",
            tipo: "harinas",
            stock: 9
        },
        {
            id: "LA10",
            name: "avellanas chocolate butter",
            marca: "nutsGo",
            precio: 360,
            gramos: 250,
            descripcion: "avellanas chocolate butter listo para el consumo",
            img: "../assets/img-productos/avellanas-con-chocolate.png",
            tipo: "chocolates",
            stock: 0
        }
]

const mFetch = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productosLista)
        }, 1000)
    })
}

export const getProductById = (productoId) => {
    return new Promise( ( res, rej ) => {
        setTimeout( () => {
            res( productosLista.find( prod => prod.id === productoId ) )
        }, 1500)
    })

}

export default mFetch
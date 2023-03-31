const productosLista = [
    {
        id : "LA1",
        name : "pasas de uvas",
        marca : "piwen",
        precio : 94,
        gramos : 250,
        descripcion : "Pasas de uvas con bolsa reciclable",
        //img: 'https://piwencl.vtexassets.com/arquivos/ids/155752-500-auto?v=1766665483&width=500&height=auto&aspect=true',
        img : "pasas-de-uvas.jpg",
        tipo: "frutos secos"
    }, 
    {
        id : "LA2",
        name : "avena",
        marca : "piwen",
        precio : 130,
        gramos : 400,
        descripcion : "Avena integral",
        img : "avena.jpg",
        tipo: "frutos secos"
    },
    {
        id : "LA3",
        name : "nuez",
        marca : "piwen",
        precio : 180,
        gramos : 100,
        descripcion : "Nuez sin pelar",
        img : "nuez.jpg",
        tipo: "frutos secos"
    },
    {
        id : "LA4",
        name : "almendra",
        marca : "piwen",
        precio : 390,
        gramos : 250,
        descripcion : "Almendras con bolsa reciclable",
        img : "almendras-piwen.jpg",
        tipo: "frutos secos"
    },
    {
        id : "LA5",
        name : "almendras chocolate butter",
        marca : "nutsGo",
        precio : 230,
        gramos : 500,
        descripcion : "Caja de almendras chocolate butter",
        img : "almendras-con-chocolate.png",
        tipo: "chocolate"
    },
    {
        id : "LA6",
        name : "mani chocolate con leche",
        marca : "nutsGo",
        precio : 280,
        gramos : 500,
        descripcion : "Caja de mani chocolate con leche",
        img : "mani-con-chocolate.png",
        tipo: "chocolate"
    },
    {
        id: "LA7",
        name: "mani",
        marca: "nutsGo",
        precio: 1250,
        gramos: 350,
        descripcion: "Mani en mantequilla",
        img: "crema-de-cacahuete.jpg",
        tipo: "frutos secos"
    },
    {
        id: "LA8",
        name: "mix tropical",
        marca: "piwen",
        precio: 200,
        gramos: 250,
        descripcion: "Frutos secos incluidos: \\'almendras\\', \\'nueces\\', \\'pasas de uvas\\' y \\'mani\\'.",
        img: "mix-tropical.jpg",
        tipo: "frutos secos"
    },
    {
        id: "LA9",
        name: "harina de almendras",
        marca: "nutsGo",
        precio: 190,
        gramos: 250,
        descripcion: "Harina de almendras pelados",
        img: "harina-de-almendras.jpg",
        tipo: "harina"
    },
    {
        id: "LA10",
        name: "avellanas chocolate butter",
        marca: "nutsGo",
        precio: 360,
        gramos: 250,
        descripcion: "avellanas chocolate butter listo para el consumo",
        img: "avellanas-con-chocolate.png",
        tipo: "chocolate"
    }
]
const mFetch = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productosLista)
        },2000)
    })
}

export default mFetch
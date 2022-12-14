const products =[
{id:'1',nombre:'Cree Led',precio:5500,categoria:'moto',img:'./images/productos/creeled.jpg',stock:30,descipcion:'Descripcion de Cree Led'},
{id:'2',nombre:'Cubre Auto',precio:12000,categoria:'auto',img:'./images/productos/cubreautos.jpg',stock:12,descipcion:'Descripcion de Cubre Auto'}, 
{id:'3',nombre:'Funda Acientos',precio:6500,categoria:'auto',img:'./images/productos/fundaacientos.jpg',stock:40,descipcion:'Descripcion de Funda Acientos'},
{id:'4',nombre:'Polarizados',precio:4300,categoria:'Camioneta',img:'./images/productos/polarizados.jpg',stock:500,descipcion:'Descripcion de Polarizados'}    
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products)
        }, 5000);
    })
};

export const getProductId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}


export const getProductsCategory = (cat) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.categoria === cat))
        }, 500)
    })
}
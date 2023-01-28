const products =[
{id:'1',nombre:'Cree Led',precio:5500,categoria:'motos',img:'../images/productos/creeled.jpg',stock:10,descripcion:'Descripcion de Cree Led'},
{id:'2',nombre:'Cubre Auto',precio:12000,categoria:'autos',img:'../images/productos/cubreautos.jpg',stock:12,descripcion:'Descripcion de Cubre Auto'}, 
{id:'3',nombre:'Funda Acientos',precio:6500,categoria:'autos',img:'../images/productos/fundaacientos.jpg',stock:15,descripcion:'Descripcion de Funda Acientos'},
{id:'4',nombre:'Polarizados',precio:4300,categoria:'camionetas',img:'../images/productos/polarizados.jpg',stock:19,descripcion:'Descripcion de Polarizados'}    
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
};

export const getProductId = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === categoryId))
        }, 500)
    })
}
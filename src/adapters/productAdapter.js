export const creatAdapterProdcutsFormFirestore = (doc)=>{
    const data = doc.data()
    const productAdpated={
        id:doc.id,
        img:data.img,
        nombre:data.nombre,
        categoria:data.categoria,
        descripcion:data.descripcion,
        precio:data.precio,
        stock:data.stock
    }
    return productAdpated
}
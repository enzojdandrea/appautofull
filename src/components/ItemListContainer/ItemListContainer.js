import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { getProdcuts } from "../../asyncMock"
const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProdcuts().then(productsApi => {
            setProducts(productsApi)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <h1>Cargando....</h1>
    }
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
            <ItemCount stock={14} />
        </div>
    )
}

export default ItemListContainer
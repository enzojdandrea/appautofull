import ItemList from "../ItemList/ItemList"
import Plaseholder from "../Placeholder/Plaseholder"
import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProducts().then(productsApi => {
            setProducts(productsApi)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <Plaseholder/>
    }
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
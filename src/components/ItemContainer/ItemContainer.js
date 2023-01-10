import ItemDetail from "../ItemDetail/ItemDetail"
import Plaseholder from "../Placeholder/Plaseholder"
import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
const ItemContainer= ({ greeting }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getProduct().then(productsApi => {
            setProduct(productsApi)
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
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemContainer
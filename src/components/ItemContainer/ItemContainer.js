import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { getProductId } from "../../asyncMock"
import { useParams } from "react-router-dom"
import Plaseholder from "../Placeholder/Plaseholder"
const ItemContainer = ({ greeting }) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    useEffect(() => {
        getProductId(productId).then(productsApi => {
            setProduct(productsApi)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

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
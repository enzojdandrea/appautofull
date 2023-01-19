import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { getProducts, getProductsCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"
import PlaseholderContainer from "../PlaseholderContainer/PlaseholderContainer"
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const asynkFunction = categoryId ? getProductsCategory : getProducts
        asynkFunction(categoryId).then(productsApi => {
            setProducts(productsApi)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    if (loading) {
        return <PlaseholderContainer condition='multi'/>

    }
    return (
        <div>
            <h1 className="text-center m-4">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
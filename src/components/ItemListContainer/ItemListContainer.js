import ItemList from "../ItemList/ItemList"
import PlaseholderContainer from "../PlaseholderContainer/PlaseholderContainer"

import { useParams } from "react-router-dom"
import { useAsync } from '../../hooks/useAsync'
import { useTitle } from "../../hooks/useTitle"

import {getProducts} from '../../services/firebase/firestore/products'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()
    useTitle('Todos los Productos',[categoryId])
    const getProductsWithCategory = () => getProducts(categoryId)
    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])

    if (loading) {
        return <PlaseholderContainer />
    }
    if (error) {
        return <h1>Hubo un error y no se puedo traer los produectos</h1>
    }

    return (
        <div>
            <h1 className="text-center m-4">{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer
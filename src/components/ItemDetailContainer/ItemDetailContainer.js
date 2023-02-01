import ItemDetail from "../ItemDetail/ItemDetail"
import Plaseholder from "../Placeholder/Plaseholder"

import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { useTitle } from "../../hooks/useTitle"

import {getProductById} from '../../services/firebase/firestore/products'

const ItemDetailContainer = () => {
    const { productId } = useParams()
    useTitle('Todos los Productos',[productId])
    const getProductWithId = () => getProductById(productId)
    const { data: product, error, loading } = useAsync(getProductWithId, [productId])

    if (loading) {
        return <Plaseholder/>
    }
    if(error){
        return <h3>Huno un error y no se puedo traer el producto</h3>
    }
    return (
        <div className="container p-5">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
import ItemDetail from "../ItemDetail/ItemDetail"
import Plaseholder from "../Placeholder/Plaseholder"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    useEffect(()=>{
        document.title = "Detalles de Productos"
    },[])

    useEffect(() => {
        const productRef = doc(db, 'bdProductos', productId)
        getDoc(productRef).then(product => {
            const productData = product.data()
            const productAdapted={id: product.id,...productData}

            setProduct(productAdapted)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])

    if (loading) {
        return <Plaseholder/>
    }
    return (
        <div className="container p-5">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
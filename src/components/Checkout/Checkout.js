import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { UserContext } from "../../context/UserContext"
import { db } from "../../services/firebase/firebaseConfig"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, total, clearCart } = useContext(CartContext)
    const {user} = useContext(UserContext)
    const navigate = useNavigate()
    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name:user.name,
                    phone:user.phone,
                    email:user.email
                },
                items: cart,
                total
            }
            const batch = writeBatch(db)
            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'bdProductos'), where(documentId(), 'in', ids))
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'ordenes')
                const orderAdded = await addDoc(orderRef, objOrder)

                const { id } = orderAdded
                setOrderId(id)
                clearCart()
                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } else {
                console.error('hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1 className="text-center">Generando orden...</h1>
    }

    if (orderId) {
        return (
            <div className="container">
                <h1 className="text-center">El Id de su compra es: {orderId}</h1>
            </div>
        )
    }

    if (cart.length === 0) {
        return (
            <h1 className="text-center">No hay productos en el carrito</h1>
        )
    }

    return (
        <div className="container text-center">
            <h1 className="mt-5">Confirmar Compra</h1>
            <button onClick={createOrder} className="mt-5">Generar orden</button>
        </div>
    )
}

export default Checkout
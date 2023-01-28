import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"

const CartContainer = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className="container text-center">
            <h1 className="text-center m-4">Carro de Compras</h1>
            <CartList cart={cart} />
            <Link to='/checkout'><button>Terminar Compra</button></Link>
        </div>
    )
}

export default CartContainer
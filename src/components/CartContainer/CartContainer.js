import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"

const CartContainer = () => {
    const { cart, total } = useContext(CartContext)

    return (
        <div className="container text-center">
            <h1 className="text-center m-4">Carro de Compras</h1>
            <CartList cart={cart} />
            {(cart.length === 0)
                ? <h3>Carro Vacio</h3>
                : <h4>Total: ${total}</h4>
            }
            {(cart.length === 0)
                ? <Link to='/'><button>Ir a Store</button></Link>
                : <Link to='/userform'><button>Terminar Compra</button></Link>
            }

        </div>
    )
}

export default CartContainer
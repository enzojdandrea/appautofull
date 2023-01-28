import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const CartWidget = () =>{
    const {totalQuantity}=useContext(CartContext)
    return(
        <div className="text-light">
            <img src="../images/shopping-cart.png" alt="cart-widget"/>
            <span className="position-absolute top-10 start-95 translate-middle badge rounded-pill bg-danger">
                {totalQuantity}
            </span>
        </div>
    )
}

export default CartWidget
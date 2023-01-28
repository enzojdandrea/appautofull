import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import UserForm from "../UserForm/UserForm"
const UserFormContainer = () => {
    const { cart } = useContext(CartContext)

    return (
        <div className="container text-center p-4">
            {(cart.length === 0) ?
                (
                    <h1>El Carrito Esta Vacio</h1>
                ):(
                <UserForm/>
                )}
        </div>
    )
}
export default UserFormContainer
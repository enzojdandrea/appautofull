import { useContext } from 'react'
import { CartContext } from "../../context/CartContext"

const CartDetail = ({ id, nombre, precio, quantity }) => {
    const { removeItem } = useContext(CartContext)
    return (
        <div className="card container text-bg-secondary">
            <div className="row card-body">
                <h5 className="col card-title text-dark">{nombre}</h5>
                <p className="col card-text">Cantidad {quantity}</p>
                <p className="col card-text">${precio}</p>
                <p className="col card-text">SubTotal: {precio * quantity}</p>
                <button className="col" onClick={() => removeItem(id)}>Remover</button>
            </div>
        </div>
    )
}

export default CartDetail
const CartWidget = () =>{
    return(
        <div className="text-light">
            <img src="./images/shopping-cart.png" alt="cart-widget"/>
            <span className="position-absolute top-10 start-95 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">mensajes no leídos</span>
            </span>
        </div>
    )
}

export default CartWidget
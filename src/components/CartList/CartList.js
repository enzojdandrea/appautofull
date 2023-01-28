import CartDetail from '../CartDetail/CartDetail'

const CartList = ({cart}) =>{
    return(
        <div className="container">
            {cart.map(prod=> <CartDetail key={prod.id} {...prod}/>)}
        </div>
    )
}

export default CartList
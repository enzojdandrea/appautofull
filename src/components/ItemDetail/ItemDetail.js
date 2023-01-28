import './ItemDetail.css'
import { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ id, img, nombre, descripcion, precio, stock}) => {
    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, nombre, precio, quantity })
    }
    const ifstock = (stock>0) ? true : false

    return (
        <div className='container text-bg-secondary border border-info rounded' key={id}>
            <div className="row">
                <div className="col-4">
                    <img src={img} className="card-img rounded" alt={nombre} />
                </div>
                <div className="col-4">
                    <h2 className="title text-center text-dark">{nombre}</h2>
                    <p className="text-center fs-5 text-break" >{descripcion}</p>
                </div>
                <div className="col-4">
                    <h3 className="price mb-4">${precio}</h3>                       

                {!ifstock ? (
                    <h3>Fuera de Stock</h3>
                ):(
                    isInCart(id) ? (
                        <Link to='/cart'><button>Ir al Carrito</button></Link>
                    ) : (
                        <ItemCount stock={stock} onAdd={handleOnAdd} />
                    )
                )}
                

                </div>
            </div>
        </div>
    )
}

export default ItemDetail
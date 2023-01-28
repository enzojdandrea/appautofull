import { Link } from 'react-router-dom'
import './ItemCard.css'
const ItemCard = ({ id, nombre, precio, img, descipcion }) => {
    return (
            <div className="card col-3 text-bg-secondary">
                <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-dark">{nombre}</h5>
                    <p className="card-text">${precio}</p>
                    <Link to={`/detail/${id}`}><button>Detalle</button></Link>
                </div>
            </div>
    )
}

export default ItemCard
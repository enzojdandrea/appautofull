import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({ product }) => {
    return (
        <div className='container text-bg-secondary border border-info rounded' key={product.id}>
            <div className="row">
                <div className="col-4">
                    <img src={product.img} className="card-img rounded" alt="..." />
                </div>
                <div className="col-4">
                    <h2 className="title text-dark">{product.nombre}</h2>
                    <p className="text-center fs-5 text-break" >{product.descipcion}</p>
                </div>
                <div className="col-4">
                    <p className="price">${product.precio}</p>
                    <ItemCount stock={product.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
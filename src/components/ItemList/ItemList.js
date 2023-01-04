import ItemCard from "../ItemCard/ItemCard"
import "./ItemList.css"
const ItemList = ({products}) =>{
    return(
        <div className="row productsContainer">
            {products.map(prod=> <ItemCard key={prod.key} {...prod}/>)}
        </div>
    )

}

export default ItemList
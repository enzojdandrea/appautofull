import ItemCount from "../ItemCount/ItemCount"
const ItemListContainer = ({greeting}) =>{
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemCount stock={14}/>
        </div>
    )
}

export default ItemListContainer
import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [quantity, setQuantity] = useState(1);
    
    const decrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };
    const increment = () => {
        if (quantity < stock) {
            setQuantity((previo) => previo + 1);
        }
    };

    return (
        <div className="count-container">
            <div className="count-container__contador row">
                <button className="count-container__button col" onClick={decrement}>-</button>
                <span className="count-container__count col">{quantity}</span>
                <button className="count-container__button col" onClick={increment}>+</button>
            </div>
            <div className='row'>
                <button className="Button" onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;




// const ItemCount = ({ onAdd, stock }) => {
//     const [count, setCount]= useState(1)
//     const decrement = () => {
//         if (count>1){
//             setCount(prev => prev - 1)
//         }
//     }
//     const increment = () => {
//         if (count<stock){
//             setCount(previo => previo + 1)
//         }
//     }

//     const reset = () => {
//         setCount(1)
//     }
//     return (
//         <div>
//             <h1>Contador</h1>
//             <h2>{count}</h2>
//             <button onClick={decrement}>-</button>
//             <button onClick={increment}>+</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
// }

// export default ItemCount
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);
    const decrement = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };
    const increment = () => {
        if (count < stock) {
            setCount((previo) => previo + 1);
        }
    };
    const reset = () => {
        setCount(1);
    };

    const [qty, setQty] = useState(1);
    const addProduct = (num) => {
        setQty(qty + num);
    };

    return (
        <div className="count-container">
            <div className="count-container__contador">
                <button className="count-container__button" onClick={decrement}>-</button>
                <span className="count-container__count">{count}</span>
                <button className="count-container__button" onClick={increment}>+</button>
            </div>
            <button className="button-primary" onClick={reset}>Reset</button>
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
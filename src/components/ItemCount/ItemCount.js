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

    return (
        <div className="count-container">
            <div className="count-container__contador row">
                <button className="count-container__button col" onClick={decrement}>-</button>
                <span className="count-container__count col">{count}</span>
                <button className="count-container__button col" onClick={increment}>+</button>
            </div>
            <div className='row'>
                <button className="button-primary reset col" onClick={reset}>Reset</button>
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
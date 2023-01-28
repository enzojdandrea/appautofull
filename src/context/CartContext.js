import { useState, createContext } from "react"
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart(prev => {
        return [...prev, productToAdd]
      })
    } else {
      console.error('YA ESTA AGREGADO')
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => id === prod.id)
  }

  const getTotalQuantity = () => {
    let accu = 0
    cart.forEach(prod => {
      accu += prod.quantity
    })
    return accu
  }
  const totalQuantity = getTotalQuantity()

  const getTotal = () => {
    let total = 0
    cart.forEach(prod => {
      console.log(prod)
      total += prod.quantity * prod.precio
    })
    return total
  }
  const total = getTotal()

  const clearCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    const cartUpdated = cart.filter(prod => prod.id !== id)
    setCart(cartUpdated)
  }


  return (
    <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clearCart, totalQuantity ,total}}>
      {children}
    </CartContext.Provider>
  )
}
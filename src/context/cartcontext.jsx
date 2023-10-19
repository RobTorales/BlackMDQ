import { createContext, useState} from 'react'

export const CartContext = createContext ({
    cart:[]
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        }else{
            console.error('El producto ya fue agregado')
        }
    }

    const deleteItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId))
    };

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0)
    }

    const quantityInCart = () => {
        return cart.reduce((acc, producto) => acc + producto.quantity, 0);
    }
    return(
        <CartContext.Provider value={{ cart, addItem, clearCart, total, quantityInCart, deleteItem}}>
            { children }
        </CartContext.Provider>
    )
}
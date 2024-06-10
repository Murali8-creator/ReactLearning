import { createContext } from "react"

export const CartContext = createContext({
    cartItems:[],
    handleAddCartItems:() => {},
    handleRemoveCartItem:() => {},
    setCartItems:() => {}
})
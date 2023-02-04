import { createContext, ReactNode, useContext, useState } from "react"

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CatItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
    return (
        useContext(ShoppingCartContext)
    )
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [carItem, setCartItems] = useState<CartItem[]>([])
    return (
        <ShoppingCartContext.Provider value={{}}>{children}</ShoppingCartContext.Provider>
    )
}
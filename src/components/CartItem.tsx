import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

type CartItemProps = {
    id: number
    quantity: number
}

export const CartItem = ({id, quantity}: CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems
}
import {useSelector} from "react-redux";

import './CartItems.css'
import {CartItem} from "../CartItem";
import {selectCart} from "../../../store";

export function CartItems() {
    const cart = useSelector(selectCart)

    return (
        <div className="cart-items">
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                cart.map(item => (
                    <CartItem item={item}/>
                ))
            )}
        </div>
    )
}
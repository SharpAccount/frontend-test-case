import {useSelector} from "react-redux";

import './CartFooter.css'
import {selectTotalPrice} from "../../../store/slices/cartSlice";
import {CheckoutButton} from "../CheckoutButton";

export function CartFooter({onCheckout}) {
    const totalPrice = useSelector(selectTotalPrice)

    return (
        <div className="cart-footer">
            <div className="total">Итого: ${totalPrice}</div>
            <CheckoutButton
                onCheckout={onCheckout}
            />
        </div>
    )
}
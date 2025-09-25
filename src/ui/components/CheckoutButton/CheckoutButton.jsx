import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import './CheckoutButton.css'
import {clearCart, selectCart} from "../../../store";

export function CheckoutButton({onCheckout}) {
    const dispatch = useDispatch()
    const cart = useSelector(selectCart)

    const [showCheckout, setShowCheckout] = useState(false)

    const handleCheckout = () => {
        setShowCheckout(true)
        setTimeout(() => {
            alert('Заказ оформлен!')
            dispatch(clearCart())
            setShowCheckout(false)
            onCheckout()
        }, 1000)
    }

    return (
        <button
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={cart.length === 0 || showCheckout}
        >
            {showCheckout ? 'Оформляем...' : 'Оформить заказ'}
        </button>
    )
}
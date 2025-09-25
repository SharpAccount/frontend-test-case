import './CartToggle.css'

export function CartToggle({onClick, cartCount}) {
    return (
        <button
            className="cart-toggle"
            onClick={onClick}
        >
            Корзина ({cartCount})
        </button>
    )
}
import './CartHeader.css'

export function CartHeader({onClick}) {
    return (
        <div className="cart-header">
            <h3>Корзина</h3>
            <button onClick={onClick}>×</button>
        </div>
    )
}
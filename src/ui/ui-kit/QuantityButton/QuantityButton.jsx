import './QuantityButton.css'

export function QuantityButton({increment, decrement, quantity}) {
    return (
        <div className="quantity-controls">
            <button onClick={decrement}>
                -
            </button>
            <span>{quantity}</span>
            <button onClick={increment}>
                +
            </button>
        </div>
    )
}
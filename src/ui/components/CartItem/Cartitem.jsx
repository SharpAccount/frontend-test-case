import {useDispatch} from "react-redux";

import './Cartitem.css'
import { removeFromCart, updateQuantity } from '../../../store'
import {QuantityButton} from "../../ui-kit";

export function CartItem({item}) {
    const dispatch = useDispatch()

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id))
    }
    const handleUpdateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            handleRemoveItem(id)
            return
        }
        dispatch(updateQuantity({ id, quantity }))
    }
    
    return (
        <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                    <QuantityButton
                        quantity={item.quantity}
                        increment={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        decrement={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    />
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Удалить
                  </button>
        </div>
    )
}
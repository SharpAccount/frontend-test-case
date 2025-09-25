import {useDispatch} from "react-redux";

import './ProductCard.css'
import {addToCart} from '../../../store'

export function ProductCard({product}) {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
            <button 
              onClick={handleAddToCart}
            >
              Добавить в корзину
            </button>
          </div>
    )
}
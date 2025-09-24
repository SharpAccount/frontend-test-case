import {useDispatch} from "react-redux";

import './ProductCard.css'

export function ProductCard({product}) {
    const dispatch = useDispatch()

    return (
        <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
            <button 
              onClick={() => {
                const action = { type: 'app/addToCart', payload: product }
                dispatch(action)
              }}
            >
              Добавить в корзину
            </button>
          </div>
    )
}
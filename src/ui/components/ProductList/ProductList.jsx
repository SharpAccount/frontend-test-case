import {useSelector} from "react-redux";

import './ProductList.css'
import { ProductCard } from "../ProductCard"
import {selectLoading} from "../../../store";

export function ProductList({filteredProducts}) {
  const loading = useSelector(selectLoading)

  if (loading) {
    return <div className="loading">Загрузка товаров...</div>
  }

  return (
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard product={product}/>
        ))}
      </div>
  )
}
import {useSelector} from "react-redux";
import {useState} from "react";

import './Cart.css'
import {selectCartCount} from '../../../store/slices/cartSlice'
import {CartToggle} from "../CartToggle";
import {CartDropdown} from "../CartDropdown";

export function Cart() {
  const cartCount = useSelector(selectCartCount)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="cart">
      <CartToggle
          cartCount={cartCount}
          onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <CartDropdown onClick={() => setIsOpen(false)}/>
      )}
    </div>
  )
}
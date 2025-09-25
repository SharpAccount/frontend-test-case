import './CartDropdown.css'
import {CartItems} from "../CartItems";
import {CartHeader} from "../CartHeader";
import {CartFooter} from "../CartFooter";

export function CartDropdown({onClick}) {
    return (
        <div className="cart-dropdown">
            <CartHeader onClick={onClick}/>
            <CartItems/>
            <CartFooter onCheckout={() => onClick(false)}/>
        </div>
    )
}
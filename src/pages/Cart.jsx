import "../App.css"
import {useSelector} from "react-redux";
export function Cart(){
    const products= useSelector(state => state.cart.cart)
    return (
        <div className='cart-wrapper'>
                 {products.map((product) => (
                     <ol className='cart-list' key={product._id}>
                        <li  className="cart-item">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                         </li>
                         <div className='counter-wrapper'>
                            <span className='cart-decrement' >-</span>
                            <span>{product.quantity}</span>
                            <span className='cart-decrement'>+</span>
                             <p><b>{product.price}</b></p>
                        </div>
                     </ol>
                ))}
        </div>
    )
}
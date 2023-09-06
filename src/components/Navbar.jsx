import "../App.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";

export function Navbar(){
    const counter = useSelector(state => state.products.value)
    return (
        <>
           <nav>
               <ul className='navbar-list'>
                   <li className="navbar-item">
                       <NavLink to="/" className='product-link'>Товары</NavLink>
                   </li>
                   <li className="navbar-item">
                       <NavLink to="/cart">Корзина
                            <FontAwesomeIcon icon={faCartShopping} className="cart-icon"/>
                            <span className="counter">{counter}</span>
                       </NavLink>
                   </li>
               </ul>
           </nav>
        </>
    )
}
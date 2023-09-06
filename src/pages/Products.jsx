import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {increaseAction} from "../store/productsSlice.js";
import {addCart} from "../store/cartSlice.js";
export function Products(){
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const handleAdd=(product)=>{
        dispatch(increaseAction.increaseQuantity())
        dispatch(addCart(product))
    }
    return (
        <div className="product-wrapper">
            <ol className="product-list">
                {products.map((product) => (
                    <li key={product._id} className="product-item">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: <b>{product.price}</b></p>
                        <div className='button-wrapper'>
                            <button onClick={()=>handleAdd(product)}>Купить</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}
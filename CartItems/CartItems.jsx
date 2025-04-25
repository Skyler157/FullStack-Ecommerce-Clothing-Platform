import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {

    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    const navigate = useNavigate();

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>  {/* Adding the key here */}
                            <div className="cartitems-format">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>Ksh{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>Ksh{e.new_price * cartItems[e.id]}</p>
                                <i className="fa fa-close cartitems-remove-icon" onClick={() => { removeFromCart(e.id) }}></i>
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>Ksh{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Delivery Fee</p>
                            <p>Ksh{getTotalCartAmount() === 0 ? 0 : 200}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>Ksh{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200}</h3>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;

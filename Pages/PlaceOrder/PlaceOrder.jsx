import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { ShopContext } from '../../../Context/ShopContext';
import PayPal from '../../PayPal';

const PlaceOrder = () => {


    const { getTotalCartAmount } = useContext(ShopContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const [showPayPal, setShowPaypal] = useState(false);

    const handleProceedToCheckout = () => {
        setShowPaypal(true);
    };


    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                    <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First name' />
                    <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
                </div>
                <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' />
                <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
                    <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
                </div>
                <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
                <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>Ksh {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>Ksh {getTotalCartAmount() === 0 ? 0 : 200}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>Ksh {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 200}</b>
                        </div>
                    </div>
                    {!showPayPal && (
                        <button onClick={handleProceedToCheckout} type='submit'>PROCEED TO PAYMENT</button>)}
                    {showPayPal && (
                        <div className="paypal-container">
                            <PayPal />
                        </div>
                    )}

                </div>
            </div>
        </form>
    )
}


export default PlaceOrder
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // const { cart } = props;
    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {

        if (product.quantity === 0) {
            product.quantity = 1;
        }

        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>order summary </h4>
            <p>selected items:{quantity}</p>
            <p>totalPrice price:${totalPrice}</p>
            <p>totalPrice Shipping:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h6>Grand totalPrice:${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
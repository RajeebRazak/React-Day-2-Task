import React from "react";
import { Link } from "react-router-dom";
import './components/style.css'

const Carts = ({ cart }) => {
    console.log(cart);

    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h2 className="empty_cart">Cart Is Empty Please Select a Product</h2>
                    <Link to="/home">
                        <button className="cart_shop">Shop Now</button>
                    </Link>
                </>
            ) : (
                <>
                    {/* Render your cart items here */}
                    {cart.map((item, index) => (
                        <div key={index}>{item.planName}</div>
                    ))}
                </>
            )}
        </>
    );
};

export default Carts;
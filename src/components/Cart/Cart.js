import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true or false
    // 3. && Operator (shorthand)
    // 4. || 
    let command;
    if(cart.length === 0){
        command = 
        <div>
            <h5>Ohh kipta, khors kor</h5>
        </div>
    }
    else if(cart.length === 1){
        command = <p>Please add more...</p>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h2>Item Selected: {cart.length}</h2>
           {
               cart.map(tShirt => <p>
                   {tShirt.name}
                   <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                   </p>)
           }
            {cart.length === 0 || <p className='orange'>YAY! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ka ki gift diva</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;
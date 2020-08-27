import React from 'react';


const Cart = (props) => {
    const cart = props.cart;
  
   let total = 0;

   for(let i=0; i<cart.length; i++){
       const course = cart[i];
       total = total + course.price;
   }

   

   return (
        <div >
            <h4>Course Summary</h4>
            <p>Total Enroll: {cart.length}</p>
            <p>Total Price: {total.toFixed(2)}</p>
            

        </div>
    );
};

export default Cart;
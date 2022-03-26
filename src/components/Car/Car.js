import React from 'react';
import './Car.css';

const Car = (props) => {
   const {addToCart , car }=props
   const {image,model,price,manufacturer,category}=car;
   return (
      <div className='cars'>
         
               <img src={image} alt="" ></img>
               <h3>Model:{model}</h3>
               <h4>category : {category}</h4>
               <h4>Price :${price}</h4>
               <h3>Brand : {manufacturer}</h3>
               <button className='cart-button' onClick={()=>addToCart(car)}>
                  <p>Add to cart</p>
               </button>

      </div>
   );
};

export default Car;
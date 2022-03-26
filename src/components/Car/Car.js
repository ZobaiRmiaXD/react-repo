import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                  <FontAwesomeIcon icon={faShoppingCart } ></FontAwesomeIcon>
               </button>

      </div>
   );
};

export default Car;
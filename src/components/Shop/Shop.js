import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Shop.css';

const Shop = () => {

   const [cars,setCars]=useState([])
   useEffect( ()=>{
      fetch('product.json')
      .then(res=>res.json())
      .then(cars=>setCars(cars))
   }
      ,[]
   )
   return (
      <div className='shops'>

           <div className='cars-container'>
            {
               cars.map(car=>  <Car
                 key={car.id}
                 car={car}
               ></Car>)
            }
           </div>

           <div className='cart-container'>
            <h3>carts content</h3>
           </div>
      </div>
   );
};

export default Shop;
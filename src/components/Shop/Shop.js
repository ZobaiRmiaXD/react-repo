import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Showcar from '../Showcar/Showcar';
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

   const [cart , setCart] = useState([])
   const addToCart =(car)=>{
      console.log(car);
      const newCart = [...cart , car] ;
      let count=0

      if(cart.length<=3){
         setCart(newCart);
         
      }
      else{
         alert("You Can't Select More than four cars");
      }

   }



   return (
      <div className='shops'>

           <div className='cars-container'>
            {
               cars.map(car=>  <Car
                 key={car.id}
                 car={car}
                 addToCart={addToCart}
               ></Car>)
            }
           </div>

           <div className='cart-container'>
            <h1>carts content</h1>
            <h3>cars choosed:</h3>
            {
               cart.map(car=> <Showcar key={car.id}
                  info={car}
                  ></Showcar>)
            }
            


           </div>
      </div>
   );
};

export default Shop;
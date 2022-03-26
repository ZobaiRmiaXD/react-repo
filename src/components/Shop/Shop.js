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
    //  console.log(car);
       let newCart = [...cart , car] ;
      let count=0

      if(cart.length<=3){
         setCart(newCart);
         
      }
      else{
         alert("You Can't Select More than four cars");
         
      }

   }

   let [update ,setupDate] = useState([])
   const updateCart= (data)=>{
     // console.log(data);
       //console.log(cart)
         update =cart
       //let updatedNewCart=update.getAttribute(data)
       //setupDate(updatedNewCart)
       setCart(cart.filter( items=>items !==data))
      // console.log(cart)

   }

   const removeAll=()=>{
         let removedCart = []
         setCart(removedCart);

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
                  updateCart={updateCart}
                  ></Showcar>)
            }
            
            <button className='remov-btn' onClick={removeAll}>
               <p>remove all</p>
            </button>


           </div>
      </div>
   );
};

export default Shop;
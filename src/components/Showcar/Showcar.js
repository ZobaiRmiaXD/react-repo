import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Showcar.css';

const Showcar = (props) => {
   const {updateCart}=props;
   
   const{model,image}=props.info;
   return (
      <div className='showcase'>
          <img id="inside-image"     src={image} alt="" ></img>
          <h5>{model}</h5>
           <button className='delete-btn' onClick={()=>updateCart(props.info)}>
           <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
           </button>
      </div>
   );
};

export default Showcar;
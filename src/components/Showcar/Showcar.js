import React from 'react';
import './Showcar.css';

const Showcar = (props) => {
   
   const{model,image,}=props.info;
   return (
      <div className='showcase'>
          <img id="inside-image"     src={image} alt="" ></img>
          <h5>{model}</h5>
      </div>
   );
};

export default Showcar;
import React from 'react';
import './PopularStays.css'
import { FiPlayCircle } from 'react-icons/fi';
function PopularStays({ pname, type, pricePerNight, rating, numberOfVw, imageUrl }) {
  return (
    <div className='card pp rounded-lg p-2'>
      <img src={imageUrl} alt={pname} className='card-image' />
      <div className='card-content'>
        <div className="row">
        <h3 className='pname col-9'>{pname}</h3>
        
        <FiPlayCircle className='test col-3 top-3 right-2 text-blue-500 text-xl' />
      
        </div>
        <p className='type'>{type}</p>
        <p>${pricePerNight}/night</p>
        <p>{rating} ⭐ ({numberOfVw} reviews)</p>
      </div>
      <button className='morebtn'>
          MORE DETAILS
        </button>
    </div>
  );
}

export default PopularStays;
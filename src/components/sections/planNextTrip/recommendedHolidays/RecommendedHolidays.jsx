import React from 'react';
import './/RecommendedHolidays.css'
function RecommendedHolidays({ name, imgTrip, pr, numberOfTrip }) {
  return (
    <>
    
    <div class="card reh " >
    <img class="card-img-top " src={imgTrip} alt="Card image cap"/>
    <div class="card-body">
      <div className='row'>
        <div className='col-7'>

        {name}
        <br />
        {numberOfTrip}
        </div>
        <div className='col-5'>
            {pr}
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default RecommendedHolidays;

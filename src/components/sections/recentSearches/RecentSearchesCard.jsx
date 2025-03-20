import React from 'react';
import './RecentSearchesCard.css';
import pain from '../../../assets/pain.jpg'
function RecentSearchesCard({ departure, arrival, date }) {
  return (
    <div className="container">
      <div className="card p-3">
        <div className="row align-items-center">
          <div className="col-3 text-center departure fw-bold">{departure}</div>
          <div className="col-6 text-center">
            <img src={pain} alt="Flight Path" className="plane-img" />
          </div>
          <div className="col-3 text-center arrival fw-bold">{arrival}</div>
        </div>
        <div className="text-center mt-2">
          <span className="fw-bold">Depart On</span> {date}
        </div>
      </div>
    </div>
  );
}

export default RecentSearchesCard;

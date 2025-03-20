import React, { useState } from 'react';
import './flightSearch.css';

function FlightSearch({ onSearch }) {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('one-way');

  const handleSearch = () => {
    const data = {
      departure,
      arrival,
      date,
      tripType,
    };
    onSearch(data); // Send the search data to the parent
  };

  return (
    <div className="flightSearch container">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto">
          <h2 className="text-start">Search Flights</h2>
        </div>

        <div className="col-auto tripType">
          <label className="me-3">
            <input
              className="me-2"
              type="radio"
              name="trip"
              value="return"
              checked={tripType === 'return'}
              onChange={() => setTripType('return')}
            />
            Return
          </label>
          <label>
            <input
              type="radio"
              className="me-2"
              name="trip"
              value="one-way"
              checked={tripType === 'one-way'}
              onChange={() => setTripType('one-way')}
            />
            One-way
          </label>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="departure" className="form-label">
              Departure
            </label>
            <input
              type="text"
              id="departure"
              placeholder="e.g., Singapore (SIN)"
              className="form-control"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="arrival" className="form-label">
              Arrival
            </label>
            <input
              type="text"
              id="arrival"
              placeholder="e.g., Los Angeles (LAX)"
              className="form-control"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-3">
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-3 d-flex align-items-end">
          <button className="btn w-100" onClick={handleSearch}>
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightSearch;

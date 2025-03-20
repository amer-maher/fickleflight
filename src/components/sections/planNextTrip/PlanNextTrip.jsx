import React from 'react';
import { MostPopularCard, RecommendedHolidays, PopularStays } from './router';
import './PlanNextTrip.css';

const mostPopularDestinations = [
  { backimg: 'src/assets/Greece.png', price: 1079 },
  { backimg: 'src/assets/Norway.png', price: 895 },
  { backimg: 'src/assets/paric.png', price: 699 },
  { backimg: 'src/assets/Tuscany.png', price: 1245 }
];

const recommendedHolidays = [
  { name: 'Bali', price: 899, backimg: 'src/assets/Bali.png', numberOfTrip: '4D3N' },
  { name: 'Swiss', price: 900, backimg: 'src/assets/swiss.png', numberOfTrip: '6D5N' },
  { name: 'Boracay', price: 699, backimg: 'src/assets/Boracay.png', numberOfTrip: '5D4N' },
  { name: 'Palawan', price: 789, backimg: 'src/assets/Palawan.png', numberOfTrip: '4D3N' }
];

const popularStays = [
  {
    name: 'Entire Bungalow',
    backimg: 'src/assets/Entirebungalow.png',
    price: 575,
    type: 'Matterhorn Suites',
    rating: 4.9,
    numberOfVw: 60
  },
  {
    name: 'Arctic Hut',
    backimg: 'src/assets/ArcticHut.png',
    price: 360,
    type: 'Matterhorn Suites',
    rating: 4.8,
    numberOfVw: 116
  },
  {
    name: 'Lake Louise Inn',
    backimg: 'src/assets/LakeLouiseInn.png',
    price: 244,
    type: 'Deluxe King Room',
    rating: 4.6,
    numberOfVw: 63
  },
  {
    name: 'Lake Louise Inn',
    backimg: 'src/assets/LakeLouiseInn.png',
    price: 244,
    type: 'Deluxe King Room',
    rating: 4.6,
    numberOfVw: 63
  }
];

function PlanNextTrip() {
  return (
    <div className="container">
      <h4 className="primary">PLAN YOUR NEXT TRIP</h4>
      <div className="Destination-container">
        {/* Most Popular Destinations */}
        <div className="row">
          <h2 className="col-9">Most Popular Destinations</h2>
          <a href="#" className="col-3">View all destinations</a>
          <div className="card-conta row">
            {mostPopularDestinations.map((destination, index) => (
              <div className="col-3" key={index}>
                <MostPopularCard
                  name={destination.backimg.split('/').pop().split('.')[0]}
                  price={destination.price}
                  backimg={destination.backimg}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Holidays */}
        <div className="row">
          <h2 className="col-9">Recommended Holidays</h2>
          <a href="#" className="col-3">View all destinations</a>
          <div className="card-conta row">
            {recommendedHolidays.map((holiday, index) => (
              <div className="col-3" key={index}>
                <RecommendedHolidays
                  name={holiday.name}
                  price={holiday.price}
                  numberOfTrip={holiday.numberOfTrip}
                  imgTrip={holiday.backimg}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Popular Stays */}
        <div className="row">
          <h2 className="col-9">Popular Stays</h2>
          <a href="#" className="col-3">View all stays</a>
          <div className="card-conta row">
            {popularStays.map((stay, index) => (
              <div className="col-3" key={index}>
                <PopularStays
                  pname={stay.name}
                  imageUrl={stay.backimg}
                  pricePerNight={stay.price}
                  type={stay.type}
                  rating={stay.rating}
                  numberOfVw={stay.numberOfVw}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanNextTrip;
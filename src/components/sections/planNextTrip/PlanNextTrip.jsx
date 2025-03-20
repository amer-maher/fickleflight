import React from 'react';
import { MostPopularCard, RecommendedHolidays, PopularStays } from './router';
import './PlanNextTrip.css';
import GreeceImg from '../../../assets/Greece.png';
import NorwayImg from '../../../assets/Norway.png';
import ParisImg from '../../../assets/paric.png';
import TuscanyImg from '../../../assets/Tuscany.png';
import BaliImg from '../../../assets/Bali.png';
import SwissImg from '../../../assets/swiss.png';
import BoracayImg from '../../../assets/Boracay.png';
import PalawanImg from '../../../assets/Palawan.png';
import EntireBungalowImg from '../../../assets/Entirebungalow.png';
import ArcticHutImg from '../../../assets/ArcticHut.png';
import LakeLouiseInnImg from '../../../assets/LakeLouiseInn.png';

const mostPopularDestinations = [
  { backimg: GreeceImg, price: 1079 },
  { backimg: NorwayImg, price: 895 },
  { backimg: ParisImg, price: 699 },
  { backimg: TuscanyImg, price: 1245 }
];

const recommendedHolidays = [
  { name: 'Bali', price: 899, backimg: BaliImg, numberOfTrip: '4D3N' },
  { name: 'Swiss', price: 900, backimg: SwissImg, numberOfTrip: '6D5N' },
  { name: 'Boracay', price: 699, backimg: BoracayImg, numberOfTrip: '5D4N' },
  { name: 'Palawan', price: 789, backimg: PalawanImg, numberOfTrip: '4D3N' }
];

const popularStays = [
  {
    name: 'Entire Bungalow',
    backimg: EntireBungalowImg,
    price: 575,
    type: 'Matterhorn Suites',
    rating: 4.9,
    numberOfVw: 60
  },
  {
    name: 'Arctic Hut',
    backimg: ArcticHutImg,
    price: 360,
    type: 'Matterhorn Suites',
    rating: 4.8,
    numberOfVw: 116
  },
  {
    name: 'Lake Louise Inn',
    backimg: LakeLouiseInnImg,
    price: 244,
    type: 'Deluxe King Room',
    rating: 4.6,
    numberOfVw: 63
  },
  {
    name: 'Lake Louise Inn',
    backimg: LakeLouiseInnImg,
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

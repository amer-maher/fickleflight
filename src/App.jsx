import React, { useState } from 'react';
import { Navbar, Hero, RecentSearchesCard, FlightSearch,PlanNextTrip,SupscripeCardSection,Footer } from './components/index';
import './App.css';

function App() {
  const [searchHistory, setSearchHistory] = useState([
    { departure: 'SIN', arrival: 'LAX', date: '7 Sep 2021' },
    { departure: 'DXB', arrival: 'JFK', date: '15 Mar 2025' },
  ]);

  const handleSearch = (data) => {
    setSearchHistory((prev) => {
      
      const updatedHistory = [data, ...prev];
      return updatedHistory.slice(0, 2); 
    });
  };

  return (
    <>
      <Navbar />
      <Hero comp={<FlightSearch onSearch={handleSearch} />} />
      <div className="container">
        <h3>Recent Searches</h3>
        <div className="row">
          {searchHistory.map((search, index) => (
            <div className="col-6" key={index}>
              <RecentSearchesCard
                departure={search.departure}
                arrival={search.arrival}
                date={search.date}
              />
            </div>
          ))}
        </div>
      </div>
      <PlanNextTrip/>
      <SupscripeCardSection/>
      <Footer/>
    </>
  );
}

export default App;

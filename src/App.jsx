import React from 'react';
import { useState, useEffect } from 'react';

import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';

import { extractLocations, getEvents } from './api';

import './App.css';


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <CitySearch allLocations={allLocations}/>
      <NumberOfEvents setCurrentNOE={setCurrentNOE} />
      <EventList events={events}/>


    </div>
  )
}


export default App;
import React, { useState } from 'react';

import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';


const App = () => {
  const [eventCount, setEventCount] = useState(32);
  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents setEventCount={setEventCount}/>
      <EventList />
      
      
    </div>
  )
}


export default App;
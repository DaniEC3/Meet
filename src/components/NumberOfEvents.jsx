import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [eventNumber, setEventNumber] = useState(32);

  const handleInputChange = (event) => {
    const value = Number(event.target.value); // Convert input to number
    setEventNumber(value);
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events">Number of Events:</label>
      <input
        type="number"
        className="events-num"
        role="textbox"
        value={eventNumber}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;

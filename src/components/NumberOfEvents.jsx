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
      <label htmlFor="events-num">Number of Events:</label>
      <input
        type="number"
        id="events-num"  // 👈 Make sure this matches htmlFor in <label>
        className="events-num"
        role="textbox"
        value={eventNumber}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default NumberOfEvents;

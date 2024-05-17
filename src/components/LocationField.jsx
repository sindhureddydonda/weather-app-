import React from "react";
const cityNameField = { 
  borderRadius: "15px",
  width: "334px",
  height: "42px",
  borderColour: "#4C4DDB",




}
function LocationField({ location, setLocation, searchLocation }) {
  return (
    <div className="search">
      <input
      style={ cityNameField}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default LocationField;
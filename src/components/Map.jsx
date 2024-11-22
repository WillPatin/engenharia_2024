import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultLocation = { lat: -29.76028973668929, lng: -51.15069201332265 };

const Map = ({ location }) => {
  const googleMapsApiKey = "AIzaSyCzKn8kSaCDisK5BYVTIRCBL9ht-rJ1ORM";

  const center = location || defaultLocation;

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {location && <Marker position={location} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -23.55052,
  lng: -46.633308,
};

// Substitua 'YOUR_GOOGLE_MAPS_API_KEY' pela sua chave de API
const googleMapsApiKey = "AIzaSyCzKn8kSaCDisK5BYVTIRCBL9ht-rJ1ORM";

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

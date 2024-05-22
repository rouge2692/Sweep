// React Libraries
import { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

// Components
import NavBar from "../../../components/CleanerRegistration/NavBar/NavBar";
// Connections
import { fetchRegions } from "../../../connections/ServiceFetch";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 43.65107,
  lng: -79.347015,
};

function RegiLocation() {
  const [regions, setRegions] = useState<{ [key: string]: any }[]>([]);
  useEffect(() => {
    fetchRegions().then((data) => setRegions(data));
  }, []);
  return (
    <div>
      <NavBar />
      <div>
        <h1>EY BAI</h1>
      </div>
      <div>
        <LoadScript googleMapsApiKey="AIzaSyCF3EcDdPrDzbn8gNNDJUN41StOy1tZEPo">
          <GoogleMap center={center} mapContainerStyle={containerStyle}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default RegiLocation;

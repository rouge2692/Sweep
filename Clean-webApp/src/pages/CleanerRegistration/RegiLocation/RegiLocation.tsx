// React Libraries
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// Components
import NavBar from "../../../components/CleanerRegistration/NavBar/NavBar";
// Connections
import { fetchRegions } from "../../../connections/ServiceFetch";

function RegiLocation() {
  const [regions, setRegions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [selectedCities, setSelectedCities] = useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    fetchRegions().then((data) => {
      console.log("Fetched data:", data);
      const cities = data.map((region: { [key: string]: string | number }) => ({
        value: region.SP06D1006,
        label: region.SP06D1006,
      }));
      console.log("Processed cities:", cities);
      setRegions(cities);
    });
  }, []);

  const handleCityChange = (
    selectedOptions: { value: string; label: string }[]
  ) => {
    setSelectedCities(selectedOptions);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Select Cities</h1>
        <Select
          components={makeAnimated()}
          isMulti
          options={regions}
          value={selectedCities}
          onChange={handleCityChange}
          className="mb-4"
          placeholder="Type or select cities..."
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Selected Cities:</h2>
          {selectedCities.length > 0 ? (
            <ul className="mt-2">
              {selectedCities.map((city) => (
                <li
                  key={city.value}
                  className="bg-blue-100 px-4 py-2 rounded mb-2"
                >
                  {city.label}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No cities selected</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RegiLocation;

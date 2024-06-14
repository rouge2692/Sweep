// React Libraries
import { useEffect, useState } from "react";

// Components
import NavBar from "../../../components/CleanerRegistration/NavBar/NavBar";
// Connections
import { fetchRegions } from "../../../connections/ServiceFetch";

function RegiLocation() {
  const [regions, setRegions] = useState<{ [key: string]: string | number }[]>(
    []
  );
  const [selectedCities, setSelectedCities] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchRegions().then((data) => {
      const cities = data.map((region: { [key: string]: number | string }) => ({
        value: region.SP06D1001,
        label: region.SP06D1001,
      }));
      setRegions(cities);
    });
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddCity = () => {
    if (
      inputValue &&
      !selectedCities.find((city) => city.value === inputValue)
    ) {
      setSelectedCities([
        ...selectedCities,
        { value: inputValue, label: inputValue },
      ]);
      setInputValue("");
    }
  };

  const handleRemoveCity = (cityToRemove) => {
    setSelectedCities(
      selectedCities.filter((city) => city.value !== cityToRemove.value)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Select Cities</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type a city..."
            className="border border-gray-300 rounded px-4 py-2 mr-2 w-full"
          />
          <button
            onClick={handleAddCity}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Add City
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Selected Cities:</h2>
          {selectedCities.length > 0 ? (
            <ul className="mt-2">
              {selectedCities.map((city) => (
                <li
                  key={city.value}
                  className="bg-blue-100 px-4 py-2 rounded mb-2 flex justify-between items-center"
                >
                  {city.label}
                  <button
                    onClick={() => handleRemoveCity(city)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                  >
                    Remove
                  </button>
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

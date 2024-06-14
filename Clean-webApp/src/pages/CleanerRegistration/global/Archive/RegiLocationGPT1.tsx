// // React Libraries
// import { useEffect, useState } from "react";

// // Components
// import NavBar from "../../../components/CleanerRegistration/NavBar/NavBar";
// // Connections
// import { fetchRegions } from "../../../connections/ServiceFetch";

// function RegiLocation() {
//   const [regions, setRegions] = useState<{ [key: string]: any }[]>([]);
//   useEffect(() => {
//     fetchRegions().then((data) => setRegions(data));
//   }, []);
//   return (
//     <div>
//       <NavBar />
//       <div className="flex bg-blue-50">
//         <h1 className="font-bold mr-2">City</h1>
//         <input className="border" />
//       </div>
//       <div></div>
//     </div>
//   );
// }

// export default RegiLocation;

// React Libraries
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

// Components
import NavBar from "../../../components/CleanerRegistration/NavBar/NavBar";
// Connections
import { fetchRegions } from "../../../connections/ServiceFetch";

function RegiLocation() {
  const [regions, setRegions] = useState<{ [key: string]: string | number }[]>(
    []
  );
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    fetchRegions().then((data) => {
      const cities = data.map((regions) => ({
        value: regions.SP06D1001,
        label: regions.SP06D1001,
      }));
      setRegions(cities);
    });
  }, []);

  const handleCityChange = (selectedOptions) => {
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

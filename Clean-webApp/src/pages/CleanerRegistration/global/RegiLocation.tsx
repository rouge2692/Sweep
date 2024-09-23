// React Libraries
import { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";
import { useLocation, useNavigate } from "react-router-dom";

// Components
import NavBar from "../../../components/CleanerRegistration/NavBar/NavBar";
// Connections
import { fetchRegions } from "../../../connections/ServiceFetch";
import { postCities } from "../../../connections/HandleCuenta";

interface RegionOption {
  value: string;
  label: string;
}

function RegiLocation() {
  const navigate = useNavigate();
  const location = useLocation();

  const [regions, setRegions] = useState<RegionOption[]>([]);
  const [selectedCities, setSelectedCities] = useState<
    MultiValue<RegionOption>
  >([]);
  // const [profcuent, setProfCuenta] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetchRegions().then((data) => {
      const cities = data.map((region: { [key: string]: string | number }) => ({
        value: region.SP06D1006 as string,
        label: region.SP06D1006 as string,
      }));
      setRegions(cities);
    });
    // getCuenta(location.state.st02D1002).then((data) => setProfCuenta(data));
  }, []);

  // useEffect(() => {
  //   console.log(selectedCities);
  // }, [selectedCities]);

  const handleCityChange = (selectedOptions: MultiValue<RegionOption>) => {
    setSelectedCities(selectedOptions);
  };

  return (
    <div className="min-h-screen">
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
        <div
          className={`${
            selectedCities.length > 0 ? "flex justify-center" : "hidden"
          }`}
        >
          <button
            className={`p-3 bg-pink-600 rounded-lg text-white font-bold`}
            onClick={() =>
              postCities(location.state.st02D1002, selectedCities).then(
                (data) =>
                  navigate("/RegiProperties", {
                    state: { st02D1002: data["ST02D1002"] },
                  })
              )
            }
          >
            Next
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Your Cities:</h2>
          {selectedCities.length > 0 ? (
            <ul className="mt-2">
              {selectedCities.map((city) => (
                <li
                  key={city.value}
                  className="bg-pink-100 px-4 py-2 rounded mb-2"
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

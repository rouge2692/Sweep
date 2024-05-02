// React
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Components
import NavBar from "../../../components/JobPosting/NavBar/NavBar";
import AddRoom from "../../../components/JobPosting/JobRooms/AddRoomButton";
import RoomOptions from "../../../components/JobPosting/JobRooms/RoomOptions";

// Connections
import { _fetchData } from "../../../connections/TableFetch";
import { _fetchService } from "../../../connections/ServiceFetch";
import ServiceSelection from "../../../components/JobPosting/JobRooms/ServiceSelection";

//icons

function JobRooms() {
  // Initialize Navigate
  const navigate = useNavigate();

  // Params
  const { st01_D1002 } = useParams();
  const { st01_D1007D1006 } = useParams();
  const { sp01_D1002 } = useParams();

  const [response, setResponse] = useState<{ [key: string]: string }[]>([]);
  const [serviceResponse, setServiceResponse] = useState<
    { [key: string]: string }[]
  >([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serFilter, setSerFilter] = useState("");

  const [serRooms, setSerRooms] = useState<
    { [key: string]: string | number }[]
  >([]);
  const getSerRooms = (title: string, amount: number) => {
    if (serRooms.filter((item) => item.Category == title).length > 0) {
      if (amount == 0) {
        return setSerRooms((preData) =>
          preData.filter((item) => item.Category != title)
        );
      } else {
        setSerRooms((preData) => {
          const updated = { Category: title, Amount: amount };
          return [...preData.filter((item) => item.Category != title), updated];
        });
      }
    } else {
      return setSerRooms((preData) => [
        ...preData,
        { Category: title, Amount: amount },
      ]);
    }
  };

  useEffect(() => {
    _fetchData().then((data) => {
      setResponse(data);
    });
    _fetchService().then((data) => {
      setServiceResponse(data);
    });
  }, []);

  useEffect(() => {
    console.log(serRooms);
  }, [serRooms]);

  return (
    <>
      <NavBar />
      <section className="relative items-center flex flex-col">
        {/* Header */}
        <div className="w-full justify-center items-center flex flex-col">
          {/* Title */}
          <div className="flex justify-center items-end">
            <h1 className="font-semibold text-4xl text-center my-2 mx-5 mt-10">
              Add rooms that require service...
            </h1>
          </div>
          {/* ^Title */}

          {/* Next */}
          {response.length < 0 && (
            <div className="m-2 shadow-md bg-green-600 p-2 px-4 rounded-xl hover:bg-green-400 transition-colors duration-300">
              <Link
                to="/JourneyFinal"
                className="text-2xl text-white font-bold"
              >
                NEXT
              </Link>
            </div>
          )}
          {/* Next */}

          {/* Open Search Options */}
          <div className="mb-2 mt-2 shadow-md flex flex-col rounded-xl border-white border p-3 bg-gray-100">
            <div className="flex flex-col sm:flex-row mb-3">
              <div className="">
                <input
                  placeholder="Search"
                  className="p-3 rounded-full flex mb-2 sm:mb-0"
                  onChange={(e) => setSerFilter(e.target.value)}
                  value={serFilter}
                ></input>
              </div>

              <select
                className="p-3 sm:mx-3 rounded-full bg-white"
                defaultValue={"Apartment/Condo"}
              >
                <optgroup label="Residential">
                  <option>House</option>
                  <option>Apartment/Condo</option>
                </optgroup>
                <optgroup label="Commerical">
                  <option>Events</option>
                  <option>Restaurant</option>
                  <option>Office</option>
                </optgroup>
                <optgroup label="Airbnb">
                  <option>House</option>
                  <option>Apartment/Condo</option>
                </optgroup>
              </select>
            </div>
            <h1 className="font-bold mb-1">Selected Services:</h1>
            <div className="overflow-x-auto flex flex-wrap w-full">
              {serviceResponse.map((item, index) => {
                return <ServiceSelection keys={index} data={item} />;
              })}
            </div>
          </div>
          {/* Open Search Options */}
        </div>
        {/* Header */}

        {/* Selections */}
        <div className="relative flex flex-col rounded-full items-center p-5 justify-center w-full lg:w-3/4">
          <div className="overflow-x-auto flex w-full">
            {selectedServices.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-sm border p-3 m-1 rounded-full bg-white border-collapse hover:cursor-pointer"
                >
                  {item}
                </div>
              );
            })}
          </div>
          {/* Table */}
          <div className="w-full p-5 border">
            <AddRoom />

            <table className="w-full">
              {response
                .filter((item) => item.Space == "House")
                .filter((item) =>
                  serFilter != "" ? item.Category == serFilter : item
                )
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <RoomOptions
                        data={item}
                        getSerRoom={getSerRooms}
                        cate={item.Category}
                      />
                    </tr>
                  );
                })}
            </table>
          </div>
          {/* Table */}
        </div>
        {/* Selections */}
      </section>
    </>
  );
}

export default JobRooms;

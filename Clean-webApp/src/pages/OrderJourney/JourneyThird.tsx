import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import NavBar from "../../components/Journey/NavBar/NavBar";

// Connections
import { _fetchData } from "../../connections/TableFetch";
import SerOptions from "../../components/Journey/ThirdStep/Options";

function JourneyThird() {
  const [response, setResponse] = useState<
    { [key: string]: string | number }[]
  >([]);
  const [serRooms, setSerRooms] = useState<
    { [key: string]: string | number }[]
  >([]);
  const [serFilter, setSerFilter] = useState("");

  const getSerRooms = (title: string, amount: number) => {
    if (serRooms.filter((item) => item.Category == title).length > 0) {
      if (amount == 0) {
        setSerRooms((preData) =>
          preData.filter((item) => item.Category != title)
        );
      } else {
        setSerRooms((preData) => {
          const updated = { Category: title, Amount: amount };
          return [...preData.filter((item) => item.Category != title), updated];
        });
      }
    } else {
      setSerRooms((preData) => [
        ...preData,
        { Category: title, Amount: amount },
      ]);
    }
  };

  useEffect(() => {
    _fetchData().then((data) => {
      setResponse(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <section className="relative items-center flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-50 w-full justify-center items-center flex flex-col bg-white">
          {/* Title */}
          <div className="flex justify-center items-end">
            <h1 className="font-semibold text-4xl text-center my-2 mt-10">
              Add rooms that require service...
            </h1>
          </div>
          {/* ^Title */}

          {/* Next */}
          {response.length > 0 && (
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
          <div className="md:w-1/2 mb-5 mt-2 shadow-xl rounded-full flex items-center p-3">
            <div className="md:w-1/2">
              <input
                placeholder="Search"
                className="border-2 p-3 rounded-full flex md:w-full"
                onChange={(e) => setSerFilter(e.target.value)}
                value={serFilter}
              ></input>
            </div>

            <select
              className="p-3 md:w-1/2 mx-3 rounded-full bg-white"
              defaultValue={"Apartment/Condo"}
            >
              <optgroup label="Residential">
                <option>House</option>
                <option>Apartment/Condo</option>
              </optgroup>
              <optgroup label="Commerical">
                <option>Events</option>
                <option>Restaurant</option>
              </optgroup>
              <optgroup label="Airbnb">
                <option>House</option>
                <option>Apartment/Condo</option>
              </optgroup>
            </select>
          </div>
          {/* Open Search Options */}
        </div>
        {/* Header */}

        {/* Selections */}
        <div className="relative flex rounded-full items-center p-5 justify-center w-full md:w-1/2">
          {/* Table */}
          <div className="border-2 border-dashed border-slate-400 rounded-lg w-full p-5">
            <table className="w-full">
              {response
                .filter((item) => item.SpaceType == "Residential")
                .filter((item) =>
                  serFilter == "" ? item : item.Category == serFilter
                )
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <SerOptions data={item} getSerRoom={getSerRooms} />
                    </tr>
                  );
                })}
            </table>
          </div>
          {/* Table */}
          {/* Header */}
          <h1 className="absolute top-1 text-slate-500 bg-white px-3 font-bold text-xl">
            Rooms
          </h1>
          {/* Header */}
        </div>
        {/* Selections */}
      </section>
    </>
  );
}

export default JourneyThird;

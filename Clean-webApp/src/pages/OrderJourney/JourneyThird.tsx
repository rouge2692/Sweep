import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Components
import NavBar from "../../components/Journey/NavBar/NavBar";

// Connections
import { _fetchData } from "../../connections/TableFetch";
import SerOptions from "../../components/Journey/ThirdStep/Options";

function JourneyThird() {
  const [response, setResponse] = useState<{ [key: string]: string }[]>([]);
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
  }, []);

  useEffect(() => {
    console.log(serRooms);
  }, [serRooms]);

  return (
    <>
      <NavBar />
      <section className="relative items-center flex flex-col bg-gray-50">
        {/* Header */}
        <div className="w-full justify-center items-center flex flex-col bg-gray-50">
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
          <div className="sticky top-0 lg:w-1/2 mb-5 mt-2 shadow-xl rounded-lg sm:rounded-full flex flex-col sm:flex-row items-center p-3 bg-white border border-sky-600">
            <div className="lg:w-1/2">
              <input
                placeholder="Search"
                className="border-2 p-3 rounded-full flex lg:w-full mb-2 sm:mb-0"
                onChange={(e) => setSerFilter(e.target.value)}
                value={serFilter}
              ></input>
            </div>

            <select
              className="p-3 lg:w-1/2 mx-3 rounded-full bg-white"
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
        <div className="relative flex rounded-full items-center p-5 justify-center w-full lg:w-2/3">
          {/* Table */}
          <div className="border-2 border-dashed border-slate-400 rounded-lg w-full p-5">
            <h1 className="text-black justify-center mb-5 italic text-center">
              -- Click the tabs to open more information --
            </h1>
            <table className="w-full">
              {response
                .filter((item) => item.SpaceType == "Residential")
                .filter((item) =>
                  serFilter != "" ? item.Category == serFilter : item
                )
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <SerOptions
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
          {/* Header */}
          <h1 className="absolute top-1 text-slate-500 bg-gray-50 px-3 font-bold text-xl">
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

import { useEffect, useState } from "react";
import NavBar from "../../components/Journey/NavBar/NavBar";
import Search from "../../components/Journey/ThirdStep/Search";
import { _fetchData } from "../../connections/TableFetch";
import SelectedRow from "../../components/Journey/ThirdStep/Selected";
import { Link } from "react-router-dom";

function JourneyThird() {
  const [response, setResponse] = useState<
    { [key: string]: string | number }[]
  >([]);
  const [selection, setSelection] = useState<string[]>([]);

  const setSelectionList = (select: string) => {
    return setSelection((pre) => [...pre, select]);
  };

  const removeFromSelection = (itemToRemove: string) => {
    setSelection((pre) => pre.filter((item) => item !== itemToRemove));
  };

  useEffect(() => {
    _fetchData().then((data) => {
      setResponse(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <section className="items-center flex flex-col h-screen">
        {/* Title */}
        <div className="w-full h-1/5 flex justify-center items-end">
          <h1 className="font-semibold text-4xl text-center mb-2">
            Add Rooms and Areas that require Service
          </h1>
        </div>
        {/* ^Title */}

        {/* Open Search Options */}
        <div className="m-5">
          <Search
            data={response
              .filter((item) => {
                return item.Space == "House";
              })
              .filter((item) => {
                return !selection.includes(String(item.Category));
              })}
            selection={setSelectionList}
          />
        </div>
        {/* Open Search Options */}

        {/* Selections */}
        <div className="relative flex rounded-full items-center p-5 justify-center w-full md:w-1/2">
          {/* Table */}
          <div className="border-2 border-dashed border-slate-400 rounded-lg w-full p-5">
            <table className=" w-full">
              {selection.length == 0 ? (
                <tr className="text-slate-500">
                  Search Above to Add Rooms Here
                </tr>
              ) : (
                selection.map((item, index) => (
                  <SelectedRow
                    index={index}
                    data={item}
                    removeFromSelection={removeFromSelection}
                  />
                ))
              )}
            </table>
          </div>
          {/* Table */}
          {/* Header */}
          <h1 className="absolute top-1 text-slate-500 bg-slate-100 px-3 font-bold text-xl">
            Rooms
          </h1>
          {/* Header */}
        </div>
        {/* Next */}
        {selection.length > 0 && (
          <div className="m-2 shadow-md bg-green-600 p-2 px-4 rounded-xl hover:bg-green-400 transition-colors duration-300">
            <Link to="/JourneyFinal" className="text-2xl text-white font-bold">
              NEXT
            </Link>
          </div>
        )}

        {/* Next */}
        {/* Selections */}
      </section>
    </>
  );
}

export default JourneyThird;

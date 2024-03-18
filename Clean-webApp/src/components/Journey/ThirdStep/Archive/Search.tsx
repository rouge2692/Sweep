import { useState } from "react";

interface Props {
  data: { [key: string]: string | number | null }[];
  selection: (select: string) => void;
}

function Search({ data, selection }: Props) {
  const [search, setSearch] = useState("");

  return (
    <div className="relative">
      <div className="bg-white p-3 rounded-full  shadow-md">
        <input
          type="search"
          value={search}
          id="service-search"
          className="rounded-full bg-white border-slate-300 border-2 hover:border-blue-300 p-3 px-5 font-semibold transition-transform sm:w-96 ease-out duration-500"
          placeholder="Search Rooms to Add"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </div>

      <div
        className={`${
          search === "" ? "hidden" : ""
        } bg-white absolute z-50 shadow-md w-full mt-2 rounded-xl items-center justify-center overflow-scroll`}
        style={{ maxHeight: "300px" }}
      >
        <div className="rounded-xl flex items-center justify-center">
          <table className="m-5 w-full">
            {data
              .filter((item) => {
                return search === ""
                  ? item
                  : String(item.Category).toLowerCase().includes(search);
              })
              .map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="flex flex-row p-3 border border-collapse hover:bg-slate-50 justify-between items-center"
                  >
                    <div className="flex flex-row">
                      <h1 className="p-3">img</h1>
                      <h1 className="p-3">{item.Category}</h1>
                    </div>
                    <div
                      className="text-white bg-green-600 rounded-full p-5 w-10 h-10 hover:bg-green-400 transition-colors duration-200 items-center justify-center flex"
                      onClick={() => {
                        selection(String(item.Category));
                        setSearch("");
                      }}
                    >
                      <h1 className="font-bold">+</h1>
                    </div>
                  </tr>
                );
              })}
          </table>
          <div className="absolute flex justify-center items-center top-2 bg-white px-3 z-50 rounded-full">
            <h2 className="text-slate-300 bg-white">Rooms</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

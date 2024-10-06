// React
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Components
import NavBar from "../../../components/JobPosting/NavBar/NavBar";
// Icons
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCircle, BsBuildingsFill } from "react-icons/bs";
import { GiFamilyHouse } from "react-icons/gi";
import { IoStorefrontSharp } from "react-icons/io5";
// import { TbBrandAirbnb } from "react-icons/tb";
// Conections
import { fetchProperties } from "../../../connections/ServiceFetch";
import { postProps } from "../../../connections/HandleCuenta";

function RegiJobProperty() {
  // Initialize Navigate
  const navigate = useNavigate();
  const location = useLocation();

  // Params
  // const { st01_D1002 } = useParams();
  // const { sp01_D1002 } = useParams();

  // Button States
  const [homeCheck, setHomeCheck] = useState(false);
  const [aptCheck, setAptCheck] = useState(false);
  const [comCheck, setComCheck] = useState(false);
  const [airHomeCheck, setAirHomeCheck] = useState(false);
  const [airAptCheck, setAirAptCheck] = useState(false);

  // Get Staged Data
  const [serProperties, setSerProperties] = useState<
    {
      [key: string]: any;
    }[]
  >([]);

  function handlePropPostNav(a: any) {
    postProps(location.state.st02D1002, a).then((data) =>
      navigate("/RegiRooms", {
        state: { st02D1002: data["ST02D1002"], sp02d1002: "CLES1" },
      })
    );
  }

  useEffect(() => {
    fetchProperties("CLES1").then((data) => {
      setSerProperties(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      {/* Parent */}
      <section className="items-center flex flex-col p-3">
        {/* Title */}
        <div className="w-full h-1/5 flex justify-center items-end">
          <h1 className="font-semibold text-2xl sm:text-4xl text-center mb-2 p-3">
            Which properties you would like to service?
          </h1>
        </div>
        {/* ^ Title */}

        {/* Next */}
        {(homeCheck || aptCheck || comCheck || airHomeCheck || airAptCheck) && (
          <button
            onClick={() =>
              handlePropPostNav({
                data: [
                  {
                    Property: "Residential",
                    Building: "House",
                    Active: homeCheck,
                  },
                  {
                    Property: "Residential",
                    Building: "Condo-Apartment",
                    Active: aptCheck,
                  },
                  {
                    Property: "Commercial",
                    Building: "Events",
                    Active: comCheck,
                  },
                  {
                    Property: "AirBnb",
                    Building: "House",
                    Active: airHomeCheck,
                  },
                  {
                    Property: "AirBnb",
                    Building: "Condo-Apartment",
                    Active: airAptCheck,
                  },
                ],
              })
            }
            className="text-2xl text-white font-bold shadow-md bg-pink-600 p-2 px-4 rounded-xl hover:bg-pink-400 transition-colors duration-300"
          >
            NEXT
          </button>
        )}
        {/* ^ Next */}

        <div className="flex flex-col sm:flex-row sm:justify-center w-full sm:space-y-0 space-y-5 mt-5">
          {/* Buttons */}
          {/* Residential Buttons */}
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold">Residential</h1>
            </div>
            {/* Selections */}
            <div className="flex flex-col">
              {/* House Selection */}
              <div
                className={`flex flex-col justify-center items-center border m-1 border-solid bg-white hover:cursor-pointer ${
                  homeCheck
                    ? "transition-color duration-500 border-pink-600"
                    : "border-slate-300"
                } transition-transform duration-200 hover:scale-95 shadow-lg rounded-xl px-3 p-1 sm:p-2 bg-white`}
                onClick={() => {
                  setHomeCheck(!homeCheck);
                }}
              >
                <div className="flex flex-row items-center w-full justify-between mx-5">
                  {homeCheck ? (
                    <AiFillCheckCircle className="text-pink-600" />
                  ) : (
                    <BsCircle className="text-slate-300" />
                  )}
                  <div className="flex flex-row items-center">
                    <GiFamilyHouse
                      className={`text-5xl ${
                        homeCheck
                          ? "transition-color duration-500 text-pink-600"
                          : "text-slate-300"
                      } m-1`}
                    />
                    <h2
                      className={`text-base ${
                        homeCheck
                          ? "transition-color duration-500 text-pink-600"
                          : "text-black"
                      }`}
                    >
                      House
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-white">h</h1>
                  </div>
                </div>
              </div>
              {/* ^ House Selection */}
              {/* Apt Selection */}
              <div
                className={`flex flex-col justify-center items-center border m-1 border-solid hover:cursor-pointer ${
                  aptCheck
                    ? "transition-color duration-500 border-pink-600"
                    : "border-slate-300"
                } transition-transform duration-200 hover:scale-95 shadow-lg rounded-xl px-3 p-1 sm:p-2 bg-white`}
                onClick={() => {
                  setAptCheck(!aptCheck);
                }}
              >
                <div className="flex flex-row items-center justify-between w-full mx-5">
                  {aptCheck ? (
                    <AiFillCheckCircle className="text-pink-600" />
                  ) : (
                    <BsCircle className="text-slate-300" />
                  )}
                  <div className="flex items-center">
                    <BsBuildingsFill
                      className={`text-5xl ${
                        aptCheck
                          ? "transition-color duration-500 text-pink-600"
                          : "text-slate-300 "
                      } m-1`}
                    />
                    <h2
                      className={`text-base ${
                        aptCheck
                          ? "transition-color duration-500 text-pink-600"
                          : "text-black"
                      }`}
                    >
                      Apartment
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-white">h</h1>
                  </div>
                </div>
              </div>
              {/* ^ Apt Selection */}
            </div>
            {/* ^ Selections */}
          </div>
          {/* ^ Residential */}
          {/* Commercial */}
          <div className="flex flex-col sm:mx-5">
            <div>
              <h1 className="font-bold">Commercial</h1>
            </div>
            {/* Selections */}
            <div className="flex flex-col">
              {/* Commercial Selection */}
              <div
                className={`flex flex-col justify-center items-center border m-1 border-solid hover:cursor-pointer ${
                  comCheck
                    ? "transition-color duration-500 border-pink-600"
                    : "border-slate-300"
                } transition-transform duration-200 hover:scale-95 shadow-lg rounded-xl px-3 p-1 sm:p-2 bg-white`}
                onClick={() => {
                  setComCheck(!comCheck);
                }}
              >
                <div className="flex flex-row items-center w-full justify-between mx-5">
                  {comCheck ? (
                    <AiFillCheckCircle className="text-pink-600" />
                  ) : (
                    <BsCircle className="text-slate-300" />
                  )}
                  <div className="flex flex-row items-center">
                    <IoStorefrontSharp
                      className={`text-5xl ${
                        comCheck
                          ? "transition-color duration-500 text-pink-600"
                          : "text-slate-300 "
                      } m-1`}
                    />
                    <h2 className="">Commercial</h2>
                  </div>
                  <div>
                    <h1 className="text-white">h</h1>
                  </div>
                </div>
              </div>
              {/* ^ Commercial Selection */}
            </div>
          </div>
          {/* ^ Commercial */}
          {/* AirBnb */}
          <div className="flex flex-col">
            <div>
              <h1 className="font-bold">AirBnb</h1>
            </div>

            {/* AirBnb House Selection */}
            <div
              className={`flex flex-col justify-center items-center border m-1 border-solid bg-white hover:cursor-pointer ${
                airHomeCheck
                  ? "transition-color duration-500 border-pink-600"
                  : "border-slate-300"
              } transition-transform duration-200 hover:scale-95 shadow-lg rounded-xl px-3 p-1 sm:p-2 bg-white`}
              onClick={() => {
                setAirHomeCheck(!airHomeCheck);
              }}
            >
              <div className="flex flex-row items-center w-full justify-between mx-5">
                {airHomeCheck ? (
                  <AiFillCheckCircle className="text-pink-600" />
                ) : (
                  <BsCircle className="text-slate-300" />
                )}
                <div className="flex flex-row items-center">
                  <GiFamilyHouse
                    className={`text-5xl ${
                      airHomeCheck
                        ? "transition-color duration-500 text-pink-600"
                        : "text-slate-300 "
                    } m-1`}
                  />
                  <h2 className="">House</h2>
                </div>
                <div>
                  <h1 className="text-white">h</h1>
                </div>
              </div>
            </div>
            {/* ^ Airbnb House Selection */}
            {/* Airbnb Apt Selection */}
            <div
              className={`flex flex-col justify-center items-center border m-1 border-solid hover:cursor-pointer ${
                airAptCheck
                  ? "transition-color duration-500 border-pink-600"
                  : "border-slate-300"
              } transition-transform duration-200 hover:scale-95 shadow-lg rounded-xl px-3 p-1 sm:p-2 bg-white`}
              onClick={() => {
                setAirAptCheck(!airAptCheck);
              }}
            >
              <div className="flex flex-row items-center justify-between w-full mx-5">
                {airAptCheck ? (
                  <AiFillCheckCircle className="text-pink-600" />
                ) : (
                  <BsCircle className="text-slate-300" />
                )}
                <div className="flex items-center">
                  <BsBuildingsFill
                    className={`text-5xl ${
                      airAptCheck
                        ? "transition-color duration-500 text-pink-600"
                        : "text-slate-300 "
                    } m-1`}
                  />
                  <h2 className="">Apartment</h2>
                </div>
                <div>
                  <h1 className="text-white">h</h1>
                </div>
              </div>
            </div>
            {/* ^ Airbnb Apt Selection */}
          </div>
          {/* ^ AirBnb */}
          {/* ^ Buttons */}
        </div>
      </section>
      {/* ^Parent */}
    </>
  );
}

export default RegiJobProperty;

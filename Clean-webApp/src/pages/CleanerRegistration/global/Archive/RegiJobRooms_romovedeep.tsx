// React
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

// Components
import NavBar from "../../../components/JobPosting/NavBar/NavBar";
import { getCuenta } from "../../../connections/HandleCuenta";

// Connections

//icons
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function RegiJobRooms() {
  // Initialize Navigate
  const navigate = useNavigate();
  const location = useLocation();

  // Params
  // const {} = useParams();

  // State
  const [selProp, setSelProp] = useState<string[]>([]);

  // Get Selected Props & Builds
  const [tmpProfProp, setTmpProfProp] = useState<{ [key: string]: any }[]>([]);
  function propsFromProf(a: string) {
    getCuenta(a).then((data) => setTmpProfProp(data["ST02D1007"]));
  }

  // Handle Room Accordian
  const [openTasks, setOpenTasks] = useState(99);
  function handleOpenAcc(accIndex: number) {
    setOpenTasks((prevIndex) => (prevIndex == accIndex ? 99 : accIndex));
  }

  // Handle Next
  function handleNavProf() {
    null;
  }

  // Handle General and Deep Rates
  function handleRates(a: string, b: string, c: string, d: string, e: number) {
    setTmpProfProp((prevData) =>
      prevData.map((property) => {
        if (property.Property == a && property.Building == b) {
          return {
            ...property,
            Rooms: property.Rooms.map((room: { [key: string]: any }) => {
              if (room.Room == c && d == "General") {
                return { ...room, General: e };
              } else if (room.Room == c && d == "Deep") {
                return { ...room, Deep: e };
              }
              return room;
            }),
          };
        }
        return property;
      })
    );
  }

  // Handle Task Selection
  function handleTaskSel(a: string, b: string, c: string, d: string) {
    setTmpProfProp((prevData) =>
      prevData.map((property) => {
        if (property.Property == a && property.Building == b) {
          return {
            ...property,
            Tasks: property.Tasks.map((task: { [key: string]: any }) =>
              task.SPXD1017 == c && task.SPXD1001 == d
                ? { ...task, SPXD1020: !task.SPXD1020 }
                : task
            ),
          };
        }
        return property;
      })
    );
  }

  // useEffect
  useEffect(() => {
    propsFromProf(location.state.st02D1002);
  }, []);

  return (
    <>
      <NavBar />
      <div className="relative py-5">
        {/* Navigation */}
        <div className="flex justify-between items-center px-5 pb-7">
          <div className="text-lg flex items-center text-gray-400 hover:text-gray-800 active:text-gray-800 duration-500 transition-colors">
            <IoIosArrowBack />
            <h1>Back</h1>
          </div>

          <button className="sm:text-lg text-white font-bold shadow-md bg-pink-600 p-2 px-4 rounded-xl hover:bg-pink-400 transition-colors duration-300">
            NEXT
          </button>
        </div>
        {/* Navigation */}
        {/* Properties */}
        <section>
          {/* Header */}
          <div className="px-5">
            <h1 className="font-bold text-slate-800 text-2xl sm:text-4xl">
              Properties & Buildings
            </h1>
            <p className="text-sm sm:text-base">
              Switch between your selected buildings to set your Rooms & Tasks.
            </p>
          </div>
          {/* Header */}
          {/* Props */}
          <div className="flex space-x-3 overflow-x-auto px-5 pt-5 pb-3">
            {tmpProfProp
              .filter((item) => item.Active == true)
              .map((profProp, index) => {
                let profileProperty = profProp.Property;
                let profileBuilding = profProp.Building;

                return (
                  <div
                    key={index}
                    className={`${
                      selProp[0] == profileProperty &&
                      selProp[1] == profileBuilding
                        ? "text-white bg-pink-600 border-pink-600"
                        : ""
                    }  border shadow-md p-3 rounded-lg hover:cursor-pointer flex flex-grow min-w-48 items-center justify-between`}
                    onClick={() =>
                      setSelProp([profileProperty, profileBuilding])
                    }
                  >
                    <div>
                      <h1 className="font-bold text-sm sm:text-lg">
                        {profileProperty}
                      </h1>
                      <h2 className="text-sm sm:text-lg">{profileBuilding}</h2>
                    </div>
                    <div>
                      <h1>
                        {
                          tmpProfProp
                            .filter(
                              (property) =>
                                property.Property == profileProperty &&
                                property.Building == profileBuilding
                            )[0]
                            .Tasks.filter(
                              (task: { [key: string]: any }) =>
                                task.SPXD1020 == true
                            ).length
                        }
                      </h1>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* Props */}
          {/* Prop Stats */}
          <div
            className={`px-5 py-3 shadow-md mx-5 rounded-lg my-2 space-y-2 ${
              selProp.length == 2 && "border-pink-600"
            } border`}
          >
            {selProp.length == 2 ? (
              <h1 className="font-bold">
                {selProp[0]}, {selProp[1]}:
              </h1>
            ) : (
              <h1 className="font-bold">Summary:</h1>
            )}
            {/* Task Stats */}
            {selProp.length == 2 ? (
              <div className="flex justify-around">
                <h1 className="font-bold text-pink-600">
                  {
                    tmpProfProp
                      .filter(
                        (property) =>
                          property.Property == selProp[0] &&
                          property.Building == selProp[1]
                      )[0]
                      .Tasks.filter(
                        (task: { [key: string]: any }) => task.SPXD1020
                      ).length
                  }{" "}
                  Selected Tasks
                </h1>
                <h1 className="font-bold">/</h1>
                <h1 className="font-bold">
                  {
                    tmpProfProp.filter(
                      (property) =>
                        property.Property == selProp[0] &&
                        property.Building == selProp[1]
                    )[0].Tasks.length
                  }{" "}
                  Available Tasks
                </h1>
              </div>
            ) : (
              <span className="text-sm text-center w-full justify-center">
                Select a property above
              </span>
            )}
            {/* Task Stats */}
          </div>
          {/* Prop Stats */}
        </section>
        {/* Properties */}

        {/* Rooms */}
        <section className="mt-7">
          {/* Header */}
          <div className="px-5">
            <h1 className="font-bold text-slate-800 text-2xl sm:text-4xl">
              Rooms & Tasks
            </h1>
            <p className="text-sm sm:text-base">
              Set your perfered services below.
            </p>
          </div>
          {/* Header */}
          {/* Room Maps */}
          <div className="px-5 flex flex-col space-y-4">
            {tmpProfProp
              .filter(
                (item) =>
                  item.Property == selProp[0] && item.Building == selProp[1]
              )
              .map((profProp, index) => {
                return (
                  // Dropdown Container
                  <div key={index} className="space-y-3 mt-3">
                    {profProp.Rooms.map(
                      (profRoom: { [key: string]: any }, index: number) => {
                        let room = profRoom.Room;
                        return (
                          // Parent Div Acc Header + Drop Down
                          <div
                            key={index}
                            className={`${
                              openTasks == index ? "border-pink-600" : ""
                            } rounded-md border shadow-md`}
                          >
                            {/* Ac Header */}
                            <div className="flex justify-between space-x-2">
                              <div
                                className={`${
                                  openTasks == index
                                    ? "text-white bg-pink-600 border-white border-4 rounded-lg"
                                    : ""
                                } w-1/2 flex items-center hover:cursor-pointer space-x-1 pl-2`}
                                onClick={() => handleOpenAcc(index)}
                              >
                                {openTasks == index ? (
                                  <IoIosArrowUp />
                                ) : (
                                  <IoIosArrowDown />
                                )}
                                <h1 className="font-bold">{room}</h1>
                              </div>

                              <div className="space-x-2 flex w-2/3 py-3 pr-3">
                                <div className="flex flex-col w-1/2 space-y-2">
                                  <h1 className="text-sm font-bold">
                                    General:
                                  </h1>
                                  <input
                                    placeholder="per hour"
                                    value={
                                      profRoom.General == 0
                                        ? ""
                                        : profRoom.General
                                    }
                                    type="number"
                                    className="border-b-2 w-full"
                                    onChange={(e) =>
                                      handleRates(
                                        selProp[0],
                                        selProp[1],
                                        room,
                                        "General",
                                        Number(e.target.value)
                                      )
                                    }
                                  />
                                </div>

                                {/* <div className="flex flex-col w-1/2 space-y-2">
                                  <h1 className="text-sm font-bold">Deep:</h1>
                                  <input
                                    placeholder="per hour"
                                    value={
                                      profRoom.Deep == 0 ? "" : profRoom.Deep
                                    }
                                    type="number"
                                    className="border-b-2 w-full"
                                    onChange={(e) =>
                                      handleRates(
                                        selProp[0],
                                        selProp[1],
                                        room,
                                        "Deep",
                                        Number(e.target.value)
                                      )
                                    }
                                  />
                                </div> */}
                              </div>
                            </div>
                            {/* Ac Header */}
                            {/* Drop Down Part */}
                            <div
                              className={
                                openTasks == index
                                  ? "max-h-[1000px] overflow-hidden transition-all duration-500 ease-in-out pt-3 space-y-2 p-3"
                                  : "max-h-0 overflow-hidden transition-all duration-500 ease-in-out space-y-0 p-0"
                              }
                            >
                              <div className="flex">
                                <h1 className="text-sm sm:text-base font-bold">
                                  General Clean Tasks
                                </h1>
                              </div>

                              {profProp.Tasks.filter(
                                (task: { [key: string]: any }) =>
                                  task.SPXD1017 == room &&
                                  task.SPXD1015 == "General"
                              ).map(
                                (
                                  task: { [key: string]: any },
                                  index: number
                                ) => {
                                  let taskName = task.SPXD1001;
                                  return (
                                    <div
                                      key={index}
                                      className="flex space-x-2 items-center"
                                    >
                                      <input
                                        type="checkbox"
                                        checked={task.SPXD1020 ?? false}
                                        onChange={() =>
                                          handleTaskSel(
                                            selProp[0],
                                            selProp[1],
                                            room,
                                            taskName
                                          )
                                        }
                                      />
                                      <p className="text-sm sm:text-base">
                                        {taskName}
                                      </p>
                                    </div>
                                  );
                                }
                              )}
                              <div className="flex">
                                <h1 className="text-sm sm:text-base font-bold">
                                  Deep Clean Tasks
                                </h1>
                              </div>
                              {profProp.Tasks.filter(
                                (task: { [key: string]: any }) =>
                                  task.SPXD1017 == room &&
                                  task.SPXD1015 == "Deep"
                              ).map(
                                (
                                  task: { [key: string]: any },
                                  index: number
                                ) => {
                                  let taskName = task.SPXD1001;
                                  return (
                                    <div
                                      key={index}
                                      className="flex space-x-2 items-center"
                                    >
                                      <input
                                        type="checkbox"
                                        checked={task.SPXD1020 ?? false}
                                        onChange={() =>
                                          handleTaskSel(
                                            selProp[0],
                                            selProp[1],
                                            room,
                                            taskName
                                          )
                                        }
                                      />
                                      <p className="text-sm sm:text-base">
                                        {taskName}
                                      </p>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                            {/* Drop down header */}
                          </div>
                          // Parent Div Header + Drop Down
                        );
                      }
                    )}
                  </div>
                  // Parent Div Container
                );
              })}
          </div>
          {/* Rooms Maps */}
        </section>
        {/* Rooms */}
      </div>
    </>
  );
}

export default RegiJobRooms;

// React
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// Components
import NavBar from "../../../components/JobPosting/NavBar/NavBar";
import AddRoom from "../../../components/JobPosting/JobRooms/AddRoomButton";
import RoomOptions from "../../../components/JobPosting/JobRooms/RoomOptions";

// Connections
import {
  _fetchService,
  fetchSerRooms,
  fetchTasks,
} from "../../../connections/ServiceFetch";
import ServiceSelection from "../../../components/JobPosting/JobRooms/ServiceSelection";

//icons

function JobRooms() {
  // Initialize Navigate
  const navigate = useNavigate();

  // Params
  const { st01_D1002 } = useParams();
  const { st01_D1007D1006 } = useParams();
  const { sp01_D1002 } = useParams();

  const [rooms, setRooms] = useState<{ [key: string]: any }[]>([]);
  const [tasks, setTasks] = useState<{ [key: string]: any }[]>([]);
  useEffect(() => {
    fetchSerRooms(st01_D1007D1006).then((data) => {
      setRooms(data);
    });
    fetchTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  const handleCleanLevel = (cleanLevel: string, roomLevel: string) => {
    setTasks((preTaskData) =>
      preTaskData
        .map((item) => {
          return { ...item, SPXD1020: false };
        })
        .map((item: { [key: string]: any }) => {
          if (cleanLevel == "General") {
            return item.SPXD1015 == cleanLevel && item.SPXD1019 == roomLevel
              ? { ...item, SPXD1020: true }
              : item;
          } else if (cleanLevel == "Deep") {
            return item.SPXD1019 == roomLevel
              ? { ...item, SPXD1020: true }
              : item;
          } else {
            return { ...item, SPXD1020: false };
          }
        })
    );
  };

  const handleTaskSelect = (taskSel: boolean, taskNum: string) => {
    setTasks((preTaskData) =>
      preTaskData.map((item) => {
        const updatedSelect = taskSel;
        return item.SPXD1002 == taskNum
          ? { ...item, SPXD1020: updatedSelect }
          : item;
      })
    );
  };

  const [serRooms, setSerRooms] = useState<{ [key: string]: any }[]>([]);
  const getSerRooms = (title: string, amount: number) => {
    if (serRooms.filter((item) => item.Room == title).length > 0) {
      if (amount == 0) {
        return setSerRooms((preData) =>
          preData.filter((item) => item.Room != title)
        );
      } else {
        setSerRooms((preData) => {
          const updated = { Room: title, Amount: amount };
          return [...preData.filter((item) => item.Room != title), updated];
        });
      }
    } else {
      return setSerRooms((preData) => [
        ...preData,
        { Room: title, Amount: amount },
      ]);
    }
  };

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
          {rooms.length < 0 && (
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
        </div>
        {/* Header */}

        {/* Selections */}
        <div className="relative flex flex-col rounded-full items-center p-5 justify-center w-full lg:w-3/4">
          {/* Table */}
          <div className="w-full p-5 bg-zinc-50 rounded-2xl">
            <AddRoom />

            <div className="w-full">
              {rooms
                .filter((item) => item.SP05D1010 == true)
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <RoomOptions
                        roomData={item}
                        getSerRoom={getSerRooms}
                        cate={item.SP05D1001}
                        taskData={tasks.filter(
                          (taskItem) => taskItem.SPXD1019 == item.SP05D1015
                        )}
                        handleCleanLevel={handleCleanLevel}
                        handleTaskSelect={handleTaskSelect}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          {/* Table */}
        </div>
        {/* Selections */}
      </section>
    </>
  );
}

export default JobRooms;

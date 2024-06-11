import { useEffect, useState } from "react";
import Modal from "react-modal";
import ProfileHomeHeader from "../../../components/CleanerProfile/ProfileHomeHeader/ProfileHomeHeader";
import {
  fetchPropBuilds,
  fetchProperties,
  fetchSerRooms,
  fetchTasks,
} from "../../../connections/ServiceFetch";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

Modal.setAppElement("#root");

function ProfileHome() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [propertyData, setPropertyData] = useState<{ [key: string]: any }[]>(
    []
  );
  const [buildingData, setBuildingData] = useState<{ [key: string]: any }[]>(
    []
  );
  const [building, setBuilding] = useState<string | null>(null);
  const [serRoomsData, setSerRoomsData] = useState<{ [key: string]: any }[]>(
    []
  );
  const [taskData, setTaskData] = useState<{ [key: string]: any }[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null); // Track selected room

  const openModal = (content: string) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent("");
    setSelectedRoom(null); // Reset selected room on modal close
    setBuilding(null);
    setSerRoomsData([]);
  };

  useEffect(() => {
    fetchProperties("CLES1").then((data) =>
      setPropertyData(
        data.filter((item: { [key: string]: any }) => item.SP02D1010 == true)
      )
    );
    fetchPropBuilds("CLES1").then((data) =>
      setBuildingData(
        data.filter((item: { [key: string]: any }) => item.SP03D1010 == true)
      )
    );
    fetchTasks().then((data) =>
      setTaskData(
        data.filter((item: { [key: string]: any }) => item.SPXD1010 == true)
      )
    );
  }, []);

  const handleBuildGet = (building: string, buildingName: string) => {
    fetchSerRooms(building).then((data) => {
      const getBuild = data.filter(
        (item: { [key: string]: any }) => item.SP05D1010 == true
      );
      setSerRoomsData(getBuild);
      setSelectedRoom(null); // Reset selected room when fetching new rooms
      setBuilding(buildingName);
    });
  };

  const handleTaskSelect = (task: string) => {
    setTaskData((prevData) =>
      prevData.map((item) =>
        item.SPXD1001 == task ? { ...item, SPXD1020: !item.SPXD1020 } : item
      )
    );
  };

  const handleRoomSelect = (room: string) => {
    setSelectedRoom((prevData) => (prevData == room ? null : room));
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="md:ml-3 lg:ml-5 md:w-7/12 flex flex-col">
        {/* Header */}
        <ProfileHomeHeader />
        {/* ^ Header */}
        <div className="space-y-3 md:mt-5 mt-3">
          <h1>Content</h1>
        </div>
        <div>
          <h1>Content</h1>
        </div>
      </div>
      {/* ^ Left Panel */}
      {/* Right Panel */}
      <div className="md:ml-2 lg:ml-3 flex flex-col mt-3 sm:mt-0 md:w-5/12 w-full">
        {/* Header */}
        {/* Accounting Header */}
        <div>
          <div className="flex w-full justify-between items-baseline">
            <h1 className="text-sm font-semibold">Total Paid 2024:</h1>
            <h1 className="text-2xl sm:text-4xl font-bold">$52.60</h1>
          </div>

          <div className="flex w-full justify-between items-baseline">
            <h1 className="text-sm italic">Last Payment:</h1>
            <h1 className="text-lg sm:text-2xl text-right italic text-green-600">
              +$12.60
            </h1>
          </div>
        </div>
        {/* ^ Account Header */}
        <div className="bg-blue-50 rounded-xl p-5 mt-3 sm:mt-5 h-full">
          <h1 className="font-bold text-slate-600 text-xl sm:text-3xl xl:text-4xl">
            Services
          </h1>
          <h2 className="text-xs text-slate-600 italic">
            Manage your property types, buildings, and services you can provide.
          </h2>
          <div className="mt-5 w-full flex flex-col justify-center items-center space-y-3">
            {propertyData.map((item, index) => (
              <button
                className="bg-white w-11/12 p-3 shadow-md flex justify-between rounded-lg hover:bg-pink-600 hover:text-white transition-colors duration-200"
                onClick={() => openModal(item.SP02D1001)}
                key={index}
              >
                <h1 className="font-bold">{item.SP02D1001}</h1>
                <h1>+</h1>
              </button>
            ))}
          </div>
        </div>
        {/* ^ Header */}
      </div>
      {/* ^ Right Panel */}

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Service Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Background */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          {/* ^ Background */}

          {/* Modal Panel */}
          <div className="fixed inset-0 z-10 flex flex-col items-center justify-center">
            <div className="relative sm:w-9/12 sm:h-4/5 w-full h-full rounded-t-xl bg-white shadow-lg transition-all">
              <div className="bg-white p-4 sm:p-6 rounded-t-xl">
                <div className="flex justify-between items-center border-b pb-3">
                  <h1
                    className="font-semibold text-2xl text-gray-700"
                    id="modal-title"
                  >
                    {modalContent} Properties
                  </h1>
                  <button onClick={closeModal}>
                    <RxCross1 className="text-gray-500 text-3xl sm:text-4xl" />
                  </button>
                </div>
                <div className="mt-4">
                  <h2 className="text-gray-800 text-lg font-bold">
                    Select your buildings:
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {buildingData
                      .filter((item) => item.SP03D1012 == modalContent)
                      .map((item, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 border rounded-lg hover:bg-gray-100 cursor-pointer"
                          onClick={() =>
                            handleBuildGet(item.SP03D1008, item.SP03D1001)
                          }
                        >
                          <h1 className="text-gray-800 text-sm">
                            {item.SP03D1001}
                          </h1>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="bg-pink-600 rounded-lg px-1 pt-2 pb-1">
                    <div>
                      <h1 className="font-bold text-white px-1">
                        Master Setting:
                      </h1>
                    </div>
                    <div className="flex justify-between border-pink-600 bg-white border-2 rounded-lg p-2 m-1">
                      {/* Selected Building */}
                      {serRoomsData.length > 0 ? (
                        <>
                          <h1 className="font-bold text-lg text-slate-600 text-center">
                            {building}
                          </h1>
                          // {/* ^ Selected Building */}
                          <div className="flex flex-col justify-end">
                            <div>
                              <input
                                type="number"
                                placeholder="Flat Rate"
                                className="p-1 rounded w-32 sm:w-36 text-sm sm:text-lg"
                              />
                            </div>
                            <select className="p-1 rounded text-sm sm:text-lg bg-white text-slate-600">
                              <option value="select">Cleaning Level</option>
                              <option value="General">General</option>
                              <option value="Deep">Deep</option>
                            </select>
                          </div>
                        </>
                      ) : (
                        <h1 className="text-gray-600 p-2 font-bold bg-white mx-2 rounded-lg h-1/2 flex justify-center items-center">
                          Select Building Above
                        </h1>
                      )}
                    </div>
                  </div>

                  {/* Selection */}
                  <div className="h-96 sm:h-96 overflow-y-scroll mt-5 bg-pink-600 rounded-lg">
                    <div>
                      <h1 className="text-white font-bold p-2">
                        Room Settings:
                      </h1>
                    </div>
                    {serRoomsData.length > 0 ? (
                      serRoomsData.map((room, index) => (
                        <div
                          key={index}
                          className="relative bg-white mx-2 rounded-lg"
                        >
                          {/* Room Header */}
                          <div className="flex justify-between py-2 mb-1 border-gray-200">
                            {/* Header */}
                            <div
                              className="text-slate-600 hover:cursor-pointer flex items-center px-2"
                              onClick={() => handleRoomSelect(room.SP05D1001)}
                            >
                              <div className="mr-1 text-xs">
                                {selectedRoom === room.SP05D1001 ? (
                                  <FaAngleUp />
                                ) : (
                                  <FaAngleDown />
                                )}
                              </div>

                              <h1 className="sm:text-lg font-bold">
                                {room.SP05D1001}
                              </h1>
                            </div>
                            {/* ^ Header */}
                            {/* Room Header Options */}
                            <div className="flex flex-col items-center">
                              <div className="bg-green-50">
                                <input
                                  type="number"
                                  placeholder="Flat Rate"
                                  className="p-1 rounded w-32 sm:w-36 text-sm sm:text-lg"
                                />
                              </div>
                              <select className="p-1 rounded text-sm sm:text-lg bg-white text-slate-600 mr-1 sm:mr-3">
                                <option value="select">Cleaning Level</option>
                                <option value="General">General</option>
                                <option value="Deep">Deep</option>
                              </select>
                            </div>
                            {/* ^ Room Header Options */}
                          </div>
                          {/* ^ Room Header */}
                          {selectedRoom === room.SP05D1001 && (
                            <div className="mt-2 mb-1">
                              {taskData
                                .filter(
                                  (task) =>
                                    task.SPXD1017 == room.SP05D1001 &&
                                    task.SPXD1013 == "CLES1" &&
                                    task.SPXD1019 == room.SP05D1015
                                )
                                .map((item, taskIndex) => (
                                  <div
                                    key={taskIndex}
                                    className="flex justify-between mt-1 items-center pl-3 pb-3"
                                  >
                                    <div className="flex space-x-1 sm:space-x-2">
                                      <input
                                        type="checkbox"
                                        checked={item.SPXD1020}
                                        onChange={() =>
                                          handleTaskSelect(item.SPXD1001)
                                        }
                                      />
                                      <h1 className="text-gray-800 text-xs sm:text-sm">
                                        {item.SPXD1001}
                                      </h1>
                                      <h1 className="text-gray-800 text-xs sm:text-sm">
                                        ({item.SPXD1015})
                                      </h1>
                                    </div>

                                    <div className="text-gray-800 text-sm flex items-center">
                                      <input
                                        type="number"
                                        placeholder="Flat Rate"
                                        className="border p-1 rounded mr-2 w-24 sm:w-32"
                                      />
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <h1 className="text-gray-600 p-2 font-bold bg-white mx-2 rounded-lg h-1/2 flex justify-center items-center">
                        Select Building Above
                      </h1>
                    )}
                  </div>
                  {/* ^ Selection */}
                </div>
              </div>
            </div>
            {/* Bottom Controls */}
            <div className="z-10 sm:w-9/12 w-full flex justify-end space-x-2 px-6 py-4 rounded-b-xl bg-gray-100">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-white text-gray-900 font-semibold border border-gray-300 hover:bg-gray-50"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-pink-600 text-white font-semibold hover:bg-pink-500"
                onClick={closeModal}
              >
                Save {modalContent} Properties
              </button>
            </div>
            {/* ^ Bottom Controls */}
          </div>
          {/* Modal Panel */}
        </div>
      </Modal>
      {/* ^ Modal */}
    </div>
  );
}

export default ProfileHome;

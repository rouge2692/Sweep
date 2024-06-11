// import { useEffect, useState } from "react";
// import Modal from "react-modal";
// import ProfileHomeHeader from "../../../components/CleanerProfile/ProfileHomeHeader/ProfileHomeHeader";
// import {
//   fetchPropBuilds,
//   fetchProperties,
//   fetchSerRooms,
//   fetchTasks,
// } from "../../../connections/ServiceFetch";

// Modal.setAppElement("#root");

// function ProfileHome() {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [modalContent, setModalContent] = useState("");
//   const [propertyData, setPropertyData] = useState<{ [key: string]: any }[]>(
//     []
//   );
//   const [buildingData, setBuildingData] = useState<{ [key: string]: any }[]>(
//     []
//   );
//   const [serRoomsData, setSerRoomsData] = useState<{ [key: string]: any }[]>(
//     []
//   );
//   const [taskData, setTaskData] = useState<{ [key: string]: any }[]>([]);

//   const openModal = (content: string) => {
//     setModalContent(content);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setModalContent("");
//   };

//   useEffect(() => {
//     fetchProperties("CLES1").then((data) =>
//       setPropertyData(
//         data.filter((item: { [key: string]: any }) => item.SP02D1010 == true)
//       )
//     );
//     fetchPropBuilds("CLES1").then((data) =>
//       setBuildingData(
//         data.filter((item: { [key: string]: any }) => item.SP03D1010 == true)
//       )
//     );
//     fetchTasks().then((data) =>
//       setTaskData(
//         data.filter((item: { [key: string]: any }) => item.SPXD1010 == true)
//       )
//     );
//   }, []);

//   const handleBuildGet = (building: string) => {
//     fetchSerRooms(building).then((data) => {
//       const getBuild = data.filter(
//         (item: { [key: string]: any }) => item.SP05D1010 == true
//       );
//       setSerRoomsData(getBuild);
//     });
//   };

//   const handleTaskSelect = (task: string) => {
//     setTaskData((prevData) =>
//       prevData.map((item) =>
//         item.SPXD1001 == task ? { ...item, SPXD1020: !item.SPXD1020 } : item
//       )
//     );
//   };

//   return (
//     <div className="min-h-screen w-full flex flex-col md:flex-row">
//       {/* Left Panel */}
//       <div className="md:ml-3 lg:ml-5 md:w-7/12 flex flex-col">
//         {/* Header */}
//         <ProfileHomeHeader />
//         {/* ^ Header */}
//         <div className="space-y-3 md:mt-5 mt-3">
//           <h1>Content</h1>
//         </div>
//         <div>
//           <h1>Content</h1>
//         </div>
//       </div>
//       {/* ^ Left Panel */}
//       {/* Right Panel */}
//       <div className="md:ml-2 lg:ml-3 flex flex-col mt-3 sm:mt-0 md:w-5/12 w-full">
//         {/* Header */}
//         {/* Accounting Header */}
//         <div>
//           <div className="flex w-full justify-between items-baseline">
//             <h1 className="text-sm font-semibold">Total Paid 2024:</h1>
//             <h1 className="text-2xl sm:text-4xl font-bold">$52.60</h1>
//           </div>

//           <div className="flex w-full justify-between items-baseline">
//             <h1 className="text-sm italic">Last Payment:</h1>
//             <h1 className="text-lg sm:text-2xl text-right italic text-green-600">
//               +$12.60
//             </h1>
//           </div>
//         </div>
//         {/* ^ Account Header */}
//         <div className="bg-blue-50 rounded-xl p-5 mt-3 sm:mt-5 h-full">
//           <h1 className="font-bold text-slate-600 text-xl sm:text-3xl xl:text-4xl">
//             Services
//           </h1>
//           <h2 className="text-xs text-slate-600 italic">
//             Select your property types, buildings, and services you can provide.
//           </h2>
//           <div className="mt-5 w-full flex flex-col justify-center items-center space-y-3">
//             {propertyData.map((item, index) => {
//               return (
//                 <button
//                   className="bg-white w-11/12 p-3 shadow-md flex justify-between rounded-lg hover:bg-pink-600 hover:text-white transition-colors duration-200"
//                   onClick={() => openModal(item.SP02D1001)}
//                   key={index}
//                 >
//                   <h1 className="font-bold">{item.SP02D1001}</h1>
//                   <h1>+</h1>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//         {/* ^ Header */}
//       </div>
//       {/* ^ Right Panel */}

//       {/* Modal */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Service Modal"
//         className="Modal"
//         overlayClassName="Overlay"
//       >
//         <div
//           className="relative z-10"
//           aria-labelledby="modal-title"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

//           <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//             <div className="flex min-h-screen items-end justify-center text-center sm:items-center">
//               <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
//                 <div className="bg-white p-3">
//                   <div className="flex p-3">
//                     <div className="text-left">
//                       <h1
//                         className="font-semibold text-2xl text-slate-600"
//                         id="modal-title"
//                       >
//                         {modalContent} Properties
//                       </h1>
//                       <div className="mt-5 flex flex-col sm:flex-row sm:items-center">
//                         <h1 className="text-slate-600 font-bold">
//                           Select your buildings:
//                         </h1>
//                         <div className="sm:ml-3 mt-2 sm:flex sm:flex-wrap sm:space-x-2 space-y-1 sm:space-y-0">
//                           {buildingData
//                             .filter((item) => item.SP03D1012 == modalContent)
//                             .map((item, index) => {
//                               return (
//                                 <div
//                                   key={index}
//                                   className="px-2 py-1 sm:px-3 sm:py-2 border rounded-lg hover:cursor-pointer"
//                                   onClick={() => handleBuildGet(item.SP03D1008)}
//                                 >
//                                   <h1 className="text-slate-600 text-sm">
//                                     {item.SP03D1001}
//                                   </h1>
//                                 </div>
//                               );
//                             })}
//                         </div>
//                       </div>
//                       <div className="mt-5">
//                         <h1 className="text-slate-600 font-bold">
//                           Rooms, Levels, and Rates:
//                         </h1>
//                         <p className="text-sm text-slate-600">
//                           Hint: Setting rates for tasks will help include
//                           customers with smaller jobs.
//                         </p>
//                         {/* Selection */}
//                         <div className="mt-3">
//                           {serRoomsData.length > 0 ? (
//                             serRoomsData.map((room, index) => (
//                               <div key={index}>
//                                 <div className="text-slate-600 font-bold text-sm">
//                                   {room.SP05D1001}
//                                 </div>
//                                 <div>
//                                   {taskData
//                                     .filter(
//                                       (task) =>
//                                         task.SPXD1017 == room.SP05D1001 &&
//                                         task.SPXD1013 == "CLES1" &&
//                                         task.SPXD1016 == room.SP05D1013
//                                     )
//                                     .map((item, taskIndex) => (
//                                       <div key={taskIndex} className="flex">
//                                         <div className="text-slate-600 text-sm">
//                                           {item.SPXD1001}
//                                         </div>
//                                         <div className="text-slate-600 text-sm">
//                                           <input
//                                             type="checkbox"
//                                             checked={item.SPXD1020}
//                                             onChange={() =>
//                                               handleTaskSelect(item.SPXD1001)
//                                             }
//                                           />
//                                         </div>
//                                       </div>
//                                     ))}
//                                 </div>
//                               </div>
//                             ))
//                           ) : (
//                             <h1>Select Building Above</h1>
//                           )}
//                         </div>
//                         {/* ^ Selection */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-slate-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//                   <button
//                     type="button"
//                     className="inline-flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 sm:ml-3 sm:w-auto"
//                   >
//                     Save {modalContent}
//                   </button>
//                   <button
//                     type="button"
//                     className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
//                     onClick={closeModal}
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal>
//       {/* ^ Modal */}
//     </div>
//   );
// }

// export default ProfileHome;

import { useEffect, useState } from "react";
import Modal from "react-modal";
import ProfileHomeHeader from "../../../components/CleanerProfile/ProfileHomeHeader/ProfileHomeHeader";
import {
  fetchPropBuilds,
  fetchProperties,
  fetchSerRooms,
  fetchTasks,
} from "../../../connections/ServiceFetch";

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
  const [serRoomsData, setSerRoomsData] = useState<{ [key: string]: any }[]>(
    []
  );
  const [taskData, setTaskData] = useState<{ [key: string]: any }[]>([]);

  const openModal = (content: string) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent("");
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

  const handleBuildGet = (building: string) => {
    fetchSerRooms(building).then((data) => {
      const getBuild = data.filter(
        (item: { [key: string]: any }) => item.SP05D1010 == true
      );
      setSerRoomsData(getBuild);
    });
  };

  const handleTaskSelect = (task: string) => {
    setTaskData((prevData) =>
      prevData.map((item) =>
        item.SPXD1001 == task ? { ...item, SPXD1020: !item.SPXD1020 } : item
      )
    );
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
            Select your property types, buildings, and services you can provide.
          </h2>
          <div className="mt-5 w-full flex flex-col justify-center items-center space-y-3">
            {propertyData.map((item, index) => {
              return (
                <button
                  className="bg-white w-11/12 p-3 shadow-md flex justify-between rounded-lg hover:bg-pink-600 hover:text-white transition-colors duration-200"
                  onClick={() => openModal(item.SP02D1001)}
                  key={index}
                >
                  <h1 className="font-bold">{item.SP02D1001}</h1>
                  <h1>+</h1>
                </button>
              );
            })}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl transition-all">
              <div className="bg-white p-3">
                <div className="flex p-3">
                  <div className="text-left">
                    <h1
                      className="font-semibold text-2xl text-slate-600"
                      id="modal-title"
                    >
                      {modalContent} Properties
                    </h1>
                    <div className="mt-5 flex flex-col sm:flex-row sm:items-center">
                      <h1 className="text-slate-600 font-bold">
                        Select your buildings:
                      </h1>
                      <div className="sm:ml-3 mt-2 sm:flex sm:flex-wrap sm:space-x-2 space-y-1 sm:space-y-0">
                        {buildingData
                          .filter((item) => item.SP03D1012 == modalContent)
                          .map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="px-2 py-1 sm:px-3 sm:py-2 border rounded-lg hover:cursor-pointer"
                                onClick={() => handleBuildGet(item.SP03D1008)}
                              >
                                <h1 className="text-slate-600 text-sm">
                                  {item.SP03D1001}
                                </h1>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <div className="mt-5">
                      <h1 className="text-slate-600 font-bold">
                        Rooms, Levels, and Rates:
                      </h1>
                      <p className="text-sm text-slate-600">
                        Hint: Setting rates for tasks will help include
                        customers with smaller jobs.
                      </p>
                      {/* Selection */}
                      <div className="mt-3 h-64 overflow-y-auto">
                        {serRoomsData.length > 0 ? (
                          serRoomsData.map((room, index) => (
                            <div key={index}>
                              <div className="text-slate-600 font-bold text-sm">
                                {room.SP05D1001}
                              </div>
                              <div>
                                {taskData
                                  .filter(
                                    (task) =>
                                      task.SPXD1017 == room.SP05D1001 &&
                                      task.SPXD1013 == "CLES1" &&
                                      task.SPXD1016 == room.SP05D1013
                                  )
                                  .map((item, taskIndex) => (
                                    <div key={taskIndex} className="flex">
                                      <div className="text-slate-600 text-sm">
                                        {item.SPXD1001}
                                      </div>
                                      <div className="text-slate-600 text-sm">
                                        <input
                                          type="checkbox"
                                          checked={item.SPXD1020}
                                          onChange={() =>
                                            handleTaskSelect(item.SPXD1001)
                                          }
                                        />
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          <h1>Select Building Above</h1>
                        )}
                      </div>
                      {/* ^ Selection */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 sm:ml-3 sm:w-auto"
                >
                  Save {modalContent}
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* ^ Modal */}
    </div>
  );
}

export default ProfileHome;

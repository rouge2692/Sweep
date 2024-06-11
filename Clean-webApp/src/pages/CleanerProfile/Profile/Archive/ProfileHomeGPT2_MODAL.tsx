// import ProfileHomeHeader from "../../../components/CleanerProfile/ProfileHomeHeader/ProfileHomeHeader";

// function ProfileHome() {
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
//             <h1 className="text-2xl sm:text-4xl font-bold">$1,000,000.00</h1>
//           </div>

//           <div className="flex w-full justify-between items-baseline">
//             <h1 className="text-sm italic">Last Payment:</h1>
//             <h1 className="text-lg sm:text-2xl text-right italic text-green-600">
//               +$100,000.00
//             </h1>
//           </div>
//         </div>
//         {/* ^ Account Header */}
//         <div className="bg-blue-50 rounded-xl p-5 mt-3 sm:mt-5 h-full">
//           <h1 className="font-bold text-slate-600 text-xl sm:text-3xl xl:text-4xl">
//             Services
//           </h1>
//           <h2 className="text-xs text-slate-600 italic ">
//             Select your property types, buildings, and services you can provide.
//           </h2>
//           <div className="mt-5 w-full flex flex-col justify-center items-center space-y-3">
//             <button className="bg-white w-11/12 p-3 shadow-md flex justify-between rounded-lg">
//               <h1 className="font-bold text-slate-600">Residential</h1>
//               <h1>+</h1>
//             </button>
//             <button className="bg-white  w-11/12 p-3 shadow-md  flex justify-between rounded-lg">
//               <h1 className="font-bold text-slate-600">Commercial</h1>
//               <h1>+</h1>
//             </button>
//             <button className="bg-white  w-11/12 p-3 shadow-md  flex justify-between rounded-lg">
//               <h1 className="font-bold text-slate-600">AirBnb</h1>
//               <h1>+</h1>
//             </button>
//           </div>
//         </div>
//         {/* ^ Header */}
//       </div>
//       {/* ^ Right Panel */}
//     </div>
//   );
// }

// export default ProfileHome;

import React, { useState } from "react";
import Modal from "react-modal";
import ProfileHomeHeader from "../../../components/CleanerProfile/ProfileHomeHeader/ProfileHomeHeader";

Modal.setAppElement("#root"); // Adjust this according to your app's root element

function ProfileHome() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalContent("");
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
            <h1 className="text-2xl sm:text-4xl font-bold">$1,000,000.00</h1>
          </div>

          <div className="flex w-full justify-between items-baseline">
            <h1 className="text-sm italic">Last Payment:</h1>
            <h1 className="text-lg sm:text-2xl text-right italic text-green-600">
              +$100,000.00
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
            <button
              className="bg-white w-11/12 p-3 shadow-md flex justify-between rounded-lg"
              onClick={() => openModal("Residential")}
            >
              <h1 className="font-bold text-slate-600">Residential</h1>
              <h1>+</h1>
            </button>
            <button
              className="bg-white w-11/12 p-3 shadow-md flex justify-between rounded-lg"
              onClick={() => openModal("Commercial")}
            >
              <h1 className="font-bold text-slate-600">Commercial</h1>
              <h1>+</h1>
            </button>
            <button
              className="bg-white w-11/12 p-3 shadow-md flex justify-between rounded-lg"
              onClick={() => openModal("Airbnb")}
            >
              <h1 className="font-bold text-slate-600">Airbnb</h1>
              <h1>+</h1>
            </button>
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
        <h2>{modalContent}</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default ProfileHome;

import { useState } from "react";
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
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div> */}
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Deactivate account
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>{modalContent}</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default ProfileHome;

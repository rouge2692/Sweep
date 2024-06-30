// React
import { Route, Routes } from "react-router-dom";
// Components
import NavBar from "../../../components/CleanerProfile/NavBar/NavBar";
import ProfileHome from "./ProfileHome";
// Icons
import ProfileJob from "./ProfileJobs";
import ProfileRootSideBar from "../../../components/CleanerProfile/SideBar/ProfileRootSideBar";

function ProfileRoot() {
  return (
    <div className="relative">
      <NavBar />
      <div className="relative flex py-3 px-5 md:p-5 min-h-screen xl:px-52">
        <ProfileRootSideBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<ProfileHome />}></Route>
            <Route path="Home" element={<ProfileHome />}></Route>
            <Route path="Jobs" element={<ProfileJob />}></Route>
            <Route path="Chats" element={<h1>Chats</h1>}></Route>
          </Routes>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-center items-center h-20 border-t border-gray-200">
        <h1 className="text-gray-800">Bottom Navigation Bar</h1>
      </div>
      {/* ^ Bottom Bar */}
    </div>
  );
}

export default ProfileRoot;

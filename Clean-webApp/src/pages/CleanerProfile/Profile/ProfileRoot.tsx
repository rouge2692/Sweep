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
    <div>
      <NavBar />
      <div className="flex py-3 px-5 md:p-5 min-h-screen">
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
    </div>
  );
}

export default ProfileRoot;

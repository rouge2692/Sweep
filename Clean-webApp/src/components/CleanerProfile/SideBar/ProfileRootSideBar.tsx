// React
import { useNavigate } from "react-router-dom";
// Icons
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { FaChartArea } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

function ProfileRootSideBar() {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="hidden bg-pink-700 py-4 md:flex md:flex-col justify-between rounded-xl sm:h-3/5 lg:h-4/5">
        <div className="md:mx-6">
          <div className="mt-4">
            <div className="hover:bg-white rounded-full transition-colors duration-200">
              <FaHome
                onClick={() => navigate("Home")}
                className="text-white cursor-pointer lg:size-6 hover:text-pink-700"
              >
                Home
              </FaHome>
            </div>
          </div>
          <div className="border-b-2 border-white rounded-full my-8"></div>
          <div className="mt-4">
            <IoPersonSharp
              onClick={() => navigate("Jobs")}
              className="text-white cursor-pointer lg:size-6"
            >
              Home
            </IoPersonSharp>
          </div>
          <div className="mt-8">
            <FaClipboardList
              onClick={() => navigate("Jobs")}
              className="text-white cursor-pointer lg:size-6"
            >
              Home
            </FaClipboardList>
          </div>
          <div className="mt-8">
            <IoIosChatbubbles
              onClick={() => navigate("Chats")}
              className="text-white cursor-pointer lg:size-6"
            >
              Home
            </IoIosChatbubbles>
          </div>
          <div className="mt-8">
            <FaChartArea
              onClick={() => navigate("Chats")}
              className="text-white cursor-pointer lg:size-6"
            >
              Home
            </FaChartArea>
          </div>
        </div>

        <div className="mb-4 md:mx-6">
          <FaGear
            onClick={() => navigate("Chats")}
            className="text-white cursor-pointer lg:size-6"
          >
            Home
          </FaGear>
        </div>
      </div>
    </div>
  );
}

export default ProfileRootSideBar;

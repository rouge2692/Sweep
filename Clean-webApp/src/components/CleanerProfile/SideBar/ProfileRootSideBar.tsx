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
        <div className="md:mx-3">
          <div className="mt-4">
            <div className="hover:bg-white p-3 rounded-full transition-colors duration-200 cursor-pointer  text-white  hover:text-pink-600">
              <FaHome onClick={() => navigate("Home")} className="lg:text-2xl">
                Home
              </FaHome>
            </div>
          </div>
          <div className="border-b-2 border-white rounded-full my-6"></div>
          <div className="mt-4">
            <div className="hover:bg-white text-white cursor-pointer hover:text-pink-600 p-3 rounded-full transition-colors duration-200">
              <IoPersonSharp
                onClick={() => navigate("Jobs")}
                className="lg:text-2xl"
              >
                Home
              </IoPersonSharp>
            </div>
          </div>
          <div className="mt-4">
            <div className="hover:bg-white text-white cursor-pointer hover:text-pink-600 p-3 rounded-full transition-colors duration-200">
              <FaClipboardList
                onClick={() => navigate("Jobs")}
                className="lg:text-2xl"
              >
                Home
              </FaClipboardList>
            </div>
          </div>
          <div className="mt-4">
            <div className="hover:bg-white text-white cursor-pointer hover:text-pink-600 p-3 rounded-full transition-colors duration-200">
              <IoIosChatbubbles
                onClick={() => navigate("Chats")}
                className="lg:text-2xl"
              >
                Home
              </IoIosChatbubbles>
            </div>
          </div>
          <div className="mt-4">
            <div className="hover:bg-white text-white cursor-pointer hover:text-pink-600 p-3 rounded-full transition-colors duration-200">
              <FaChartArea
                onClick={() => navigate("Chats")}
                className="lg:text-2xl"
              >
                Home
              </FaChartArea>
            </div>
          </div>
        </div>

        <div className="mb-4 mx-3">
          <div className="hover:bg-white text-white cursor-pointer hover:text-pink-600 p-3 rounded-full transition-colors duration-200">
            <FaGear onClick={() => navigate("Chats")} className=" lg:text-2xl ">
              Home
            </FaGear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileRootSideBar;

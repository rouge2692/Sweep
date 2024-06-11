import { FaImages, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiGlobeBold } from "react-icons/pi";
import { HiMiniCheckBadge } from "react-icons/hi2";

function ProfileHomeHeader() {
  return (
    <div className="flex flex-col h-1/2">
      {/* Header Title and Profile Pics */}
      <div className="rounded-xl flex flex-col sm:flex-row items-center sm:items-start sm:h-1/2 xl:h-3/5">
        {/* Profile Pics */}
        <div className="shadow-md rounded-xl mx-auto h-36 sm:h-full sm:mx-5 w-10/12 md:w-7/12 md:mx-0 flex justify-center items-center">
          <FaImages className="text-slate-300 text-6xl" />
        </div>
        {/* ^ Profile Pics */}
        {/* Title and Badges */}
        <div className="my-4 md:mt-0 md:ml-5 w-full sm:w-7/12 flex flex-col justify-between h-full">
          <div className="flex flex-col">
            {/* Title */}
            <div className="flex items-center justify-center sm:justify-start">
              <h1 className="font-bold text-slate-600 text-xl xl:text-3xl">
                SuperFast Cleaners
              </h1>
              <HiMiniCheckBadge className="text-pink-600 text-xl xl:text-3xl ml-1" />
            </div>
            {/* ^ Title */}
            {/* Badges */}
            <div className="sm:mt-1 mt-3">
              <h1 className="text-slate-600 text-sm lg:text-base">BADGES</h1>
              <h1 className="text-slate-600 text-sm lg:text-base">World</h1>
            </div>
            {/* Badges */}
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-2 mt-3 sm:mt-0">
            <div>
              <FaPhoneAlt className="text-slate-600 sm:text-md xl:text-xl" />
              <MdEmail className="text-slate-600 sm:text-md xl:text-xl mt-2" />
              <PiGlobeBold className="text-slate-600 sm:text-md xl:text-xl mt-2" />
            </div>
          </div>
          {/* ^ Contact */}
        </div>
        {/* Title and Badges */}
      </div>
      {/* ^ Header Profile Pics */}
      {/* Header Content */}
      <div className="flex flex-grow rounded-xl shadow-md p-3 sm:mt-3">
        <h1 className="text-slate-600 text-sm lg:text-base font-bold">
          Upcoming Jobs:
        </h1>
        <table></table>
      </div>
      {/* ^ Header Content */}
    </div>
  );
}

export default ProfileHomeHeader;

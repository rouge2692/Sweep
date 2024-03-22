import { useEffect, useState } from "react";
import NavBar from "../../components/JobPosting/NavBar/NavBar";
import { Link } from "react-router-dom";
import { _fetchService } from "../../connections/ServiceFetch";

function JobService() {
  const [response, setResponse] = useState<{ [key: string]: string }[]>([]);

  useEffect(() => {
    _fetchService().then((data) => {
      setResponse(data);
    });
  }, []);
  return (
    <>
      <NavBar />
      <section className="relative items-center flex flex-col">
        {/* Header */}
        <div className="w-full justify-center items-center flex flex-col">
          {/* Title */}
          <div className="flex justify-center items-end">
            <h1 className="font-semibold text-4xl text-center my-2 mx-5 mt-10">
              What can we help you with?
            </h1>
          </div>
          {/* ^Title */}

          {/* Next */}
          {response.length > 0 && (
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
        <div className="flex- flex-wrap">
          <div className="border p-3 rounded-2xl border-gray-300 hover:scale-110 transition-transform duration-200 shadow-lg flex flex-col items-center justify-center">
            <h1>img</h1>
            <h1 className="text-lg font-bold">Service</h1>
            <h2 className="text-white bg-teal-600 p-2 rounded-lg">
              Description
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default JobService;

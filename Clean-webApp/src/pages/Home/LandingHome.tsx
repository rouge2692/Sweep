import { useNavigate } from "react-router-dom";
import {
  postHandleJobCreation,
  refreshCustomerJobs,
} from "../../connections/HandleJobCreation";
import { useEffect, useState } from "react";
import { getDataTemp } from "../../connections/DataTemps";
import NavBar from "../../components/global/NavBar/NavBar";
import { _fetchService } from "../../connections/ServiceFetch";
import ServicePoster from "../../components/JobServices/ServicePoster";

const testJob = "testJob";
const testCustomer = "testCustomer";

function LandingHome() {
  // Initialize Navigate
  const navigate = useNavigate();

  // Get Data
  const [stagedJobData, setStagedJobData] = useState({});
  useEffect(() => {
    getDataTemp("ST01").then((data) => {
      setStagedJobData(data);
    });
  }, []);
  useEffect(() => {
    console.log(stagedJobData);
    refreshCustomerJobs(testCustomer);
  }, [stagedJobData]);

  const [serviceData, setServiceData] = useState<{ [key: string]: any }[]>([]);
  useEffect(() => {
    _fetchService().then((data) => {
      setServiceData(data);
    });
  }, []);

  return (
    <div>
      {/* Nav */}
      <NavBar />
      {/* ^ Nav */}
      {/* Header */}
      <h1 className="sm:hidden text-center text-pink-600 font-extrabold font-logo text-8xl">
        Sweep
      </h1>
      <section className="bg-herobg sm:bg-heromdbg bg-cover md:bg-cover bg-center bg-no-repeat py-32 sm:py-48">
        {/* bg-[url('../../../src/assets/MobileHeroBanner.png')] */}
        <h1 className="hidden sm:block text-center text-pink-600 font-extrabold font-logo text-8xl">
          Sweep
        </h1>
        <div className="flex justify-center">
          <input
            type="text"
            className="border border-black rounded-full p-3 mr-1 md:w-1/2"
            placeholder="Find a Task or Cleaner"
          />
          <button
            onClick={() => {
              postHandleJobCreation(
                {
                  ...stagedJobData,
                  ST01D1001: testJob,
                  ST01D1003: testCustomer,
                },
                "newJobHash"
              ).then((data) => {
                navigate(`/JourneyService/${data.response}`);
              });
            }}
            className="bg-pink-600 p-3 rounded-full text-white font-bold ml-1"
          >
            Post Job
          </button>
        </div>
      </section>
      {/* ^ Header */}
      {/* Mobile Service Carosel */}
      <section className="sm:hidden">
        <div className="flex justify-between items-center px-5">
          <h1 className="font-bold">Services</h1>
          <h1 className="underline text-sm text-gray-600">All Services</h1>
        </div>
        <div className="flex overflow-scroll">
          {serviceData.map((item, index) => {
            return (
              <div
                onClick={() => {
                  postHandleJobCreation(
                    {
                      ...stagedJobData,
                      ST01D1001: testJob,
                      ST01D1003: testCustomer,
                      ST01D1008: item.SP01D1001,
                    },
                    "newJobHash"
                  ).then((data) => navigate(`/JourneyStart/${data.response}`));
                }}
                key={index}
                className="mx-1 mt-2 mb-2"
              >
                <div className="border rounded-full bg-yellow-600 p-5">img</div>
                <h1 className="text-center text-xs mt-1">{item.SP01D1001}</h1>
              </div>
            );
          })}
        </div>
      </section>
      {/* ^ Mobile Service Carosel */}
      {/* Tablet and Computer Service */}
      <section className="hidden md:block">
        {/* Service Selection */}
        <div>
          <h1 className="text-center font-bold py-5 text-6xl">Services</h1>
        </div>
        <div className="flex flex-wrap justify-center mb-24">
          {serviceData.map((item, index) => (
            <ServicePoster
              title={item.SP01D1001}
              descript={item.SP01D1009}
              key={index}
              job={testJob}
              customer={testCustomer}
              dataTemp={stagedJobData}
              service={item.SP01D1002}
              // st01_D1002=""
            />
          ))}
        </div>
        {/* ^ Service Selection */}
      </section>
      {/* ^ Tablet and Compeyer Service */}
    </div>
  );
}

export default LandingHome;

// React
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Connections
import {
  postHandleJobCreation,
  refreshCustomerJobs,
} from "../../connections/HandleJobCreation";
import { getDataTemp } from "../../connections/DataTemps";
import { _fetchService } from "../../connections/ServiceFetch";
//Components
import ServicePoster from "../../components/JobServices/ServicePoster";
import NavBar from "../../components/LandingHome/NavBar/NavBar";
import { TbBrandAirbnb } from "react-icons/tb";
import FlowStep from "../../components/LandingHome/MatchFlow/FlowStep";

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

  const headers = ["House 🏡", "AirBnb", "Office 🏢", "Condo 🏤"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % headers.length);
    }, 3000); // Change header every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [headers.length]);

  return (
    <div className="h-screen">
      {/* Nav */}
      <NavBar />
      {/* ^ Nav */}
      {/* Header */}
      <div className="sm:hidden flex flex-col items-center bg-herobg bg-cover bg-top h-1/2">
        <h1 className="sm:hidden text-center text-pink-600 font-extrabold font-logo text-8xl py-7">
          Sweep
        </h1>
        <div className="flex flex-row">
          <h1>1</h1>
          <h1>2</h1>
          <h1>3</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start sm:h-3/4">
        <div className="flex-col flex w-full lg:w-3/5 items-center h-full">
          <h1 className="hidden sm:block text-pink-600 font-extrabold font-sans text-8xl mx-10 my-5 p-5 rounded-lg">
            sweep
          </h1>
          <div className="hidden sm:flex sm:flex-row p-5">
            <FlowStep
              stepNum={1}
              stepDescrip="Pick a Property"
              stepImage="step1_LandingHome"
            />
            <FlowStep
              stepNum={2}
              stepDescrip="Select Rooms and Tasks"
              stepImage="step2_LandingHome"
            />
            <FlowStep
              stepNum={3}
              stepDescrip="Arange Location and Time"
              stepImage="step3_LandingHome"
            />
          </div>
        </div>

        <div className="hidden w-full lg:w-2/5 p-3 lg:flex h-full items-center justify-center">
          <div className="bg-white p-5 md:p-10 rounded-2xl shadow-2xl md:w-5/6 border border-slate-300">
            <div className="mb-5 p-1">
              <h1 className="text-3xl lg:text-6xl font-sans font-bold text-pink-600 mb-1">
                Find Cleaners
              </h1>
              <h1 className="text-3xl lg:text-6xl font-sans font-bold mb-2">
                for your
              </h1>
              {headers.map((header, index) => (
                <div
                  key={index}
                  style={{ display: index === activeIndex ? "flex" : "none" }}
                  className="flex flex-row items-center"
                >
                  <h1 className="text-3xl lg:text-6xl font-sans font-bold mb-1">
                    {header}
                  </h1>
                  <div>
                    {header == "AirBnb" && (
                      <TbBrandAirbnb className="text-pink-600 size-10 sm:size-16" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-5 p-1">
              <h1 className="font-semibold">
                Match with cleaners based on your property type, cleaning tasks
                need done, and your availiablity and location.
              </h1>
            </div>

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
              className="bg-pink-600 p-3 m-1 rounded-lg text-white font-bold animate-wiggle animate-infinite"
            >
              Start Here
            </button>
          </div>
        </div>
      </div>

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

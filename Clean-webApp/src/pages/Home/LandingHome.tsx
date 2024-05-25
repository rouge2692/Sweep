// React
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

//Connections
import { refreshCustomerJobs } from "../../connections/HandleJobCreation";
import { getDataTemp } from "../../connections/DataTemps";
import { _fetchService } from "../../connections/ServiceFetch";

//Components
import ServicePoster from "../../components/JobServices/ServicePoster";
import NavBar from "../../components/LandingHome/NavBar/NavBar";
// import { TbBrandAirbnb } from "react-icons/tb";
import FlowStep from "../../components/LandingHome/MatchFlow/FlowStep";
import StartHere from "../../components/LandingHome/StartHere/StartHere";
import MbStartHere from "../../components/LandingHome/StartHere/MbStartHere";

const testJob = "testJob";
const testCustomer = "testCustomer";

function LandingHome() {
  // Initialize Navigate
  // const navigate = useNavigate();

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
    <div className="h-screen">
      {/* Nav */}
      <NavBar />
      {/* ^ Nav */}
      {/* Mobile Header */}
      <div className="md:hidden flex flex-col items-center h-1/2 p-2 bg-white">
        <h1 className="text-center text-pink-600 font-extrabold text-6xl md:text-8xl py-2">
          sweep
        </h1>
        <MbStartHere
          stagedJobData={stagedJobData}
          testCustomer={testCustomer}
          testJob={testJob}
        />
        <div className="flex flex-row">
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
      {/* ^ Mobile Header */}

      <div className="flex flex-col lg:flex-row items-start lg:h-3/4 bg-white">
        <div className="flex-col flex w-full lg:w-3/5 items-center h-full">
          <h1 className="hidden md:block text-pink-600 font-extrabold font-sans text-8xl mx-10 py-3">
            sweep
          </h1>
          <div className="hidden">
            <MbStartHere
              stagedJobData={stagedJobData}
              testCustomer={testCustomer}
              testJob={testJob}
            />
          </div>
          <div className="hidden md:flex md:flex-row p-5">
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

        <div className="hidden w-full lg:w-2/5 p-3 lg:flex h-full bg-white items-center justify-center">
          <StartHere
            stagedJobData={stagedJobData}
            testCustomer={testCustomer}
            testJob={testJob}
          />
        </div>
      </div>

      {/* ^ Header */}
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

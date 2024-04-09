import { useFetcher, useNavigate } from "react-router-dom";
import {
  postHandleJobCreation,
  refreshCustomerJobs,
} from "../../connections/HandleJobCreation";
import { useEffect, useState } from "react";
import { getDataTemp } from "../../connections/DataTemps";
import NavBar from "../../components/global/NavBar/NavBar";
import { _fetchService } from "../../connections/ServiceFetch";

const testJob = "testJob";
const testCustomer = "testCustomer";

function LandingHome() {
  //Initialize Navigate
  const navigate = useNavigate();

  // Get Data
  const [stagedJobData, setStagedJobData] = useState({});
  useEffect(() => {
    getDataTemp("ST01").then((data) => {
      setStagedJobData(data);
    });
    refreshCustomerJobs(testCustomer);
  }, []);
  useEffect(() => {
    console.log(stagedJobData);
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
      {/* ^Nav */}
      {/* Header */}
      <section className="flex justify-center bg-gray-500 py-24">
        <input
          type="text"
          className="border rounded-full p-3 mr-1"
          placeholder="Find a Task or Cleaner"
        />
        <button
          onClick={() => {
            postHandleJobCreation({
              ...stagedJobData,
              D1001: testJob,
              D1003: testCustomer,
            }).then((data) => {
              navigate(`/JourneyStart/${data.response}`);
            });
          }}
          className="bg-teal-600 p-3 rounded-full text-white font-bold ml-1"
        >
          Post Job
        </button>
      </section>
      {/* ^ Header */}
      {/* Mobile Service Carosel */}
      <section>
        <div className="flex justify-between items-center px-5 mt-3">
          <h1 className="font-bold">Services</h1>
          <h1 className="underline text-sm text-gray-600">All Services</h1>
        </div>
        <div className="flex overflow-scroll">
          {serviceData.map((item, index) => {
            return (
              <div className="mx-1 mt-4 mb-2">
                <div
                  key={index}
                  className="border rounded-full bg-yellow-600 p-5"
                >
                  img
                </div>
                <h1 className="text-center text-xs mt-1">{item.Service}</h1>
              </div>
            );
          })}
        </div>
      </section>
      {/* ^ Service Carosel */}
    </div>
  );
}

export default LandingHome;

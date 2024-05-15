import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import NavBar from "../../components/JobPosting/NavBar/NavBar";
import ServicePoster from "../../components/JobServices/ServicePoster";

// Connections
import { _fetchService } from "../../connections/ServiceFetch";
import { getJobCreationTemp } from "../../connections/HandleJobCreation";

function JobService() {
  const { st01_D1002 } = useParams();

  const [serviceData, setServiceData] = useState<{ [key: string]: string }[]>(
    []
  );
  useEffect(() => {
    _fetchService().then((data) => {
      setServiceData(data);
    });
  }, []);

  const [stagedJobData, setStagedJobData] = useState<{ [key: string]: string }>(
    {}
  );
  useEffect(() => {
    getJobCreationTemp(st01_D1002).then((data) => {
      setStagedJobData(data);
    });
    // refreshCustomerJobs(stagedJobData.ST01D1003);
  }, []);

  return (
    <>
      <NavBar />
      <section className="relative items-center flex flex-col">
        {/* Header */}
        <div className="w-full justify-center items-center flex flex-col">
          {/* Title */}
          <div className="flex justify-center items-end">
            <h1 className="font-semibold text-4xl text-center m-5">
              What can we help you with?
            </h1>
          </div>
          {/* ^Title */}
        </div>
        {/* Header */}
        {/* Service Selection */}
        <div className="flex flex-wrap justify-center mb-24">
          {serviceData.map((item, index) => (
            <ServicePoster
              title={item.SP01D1001}
              descript={item.SP01D1009}
              key={index}
              job={stagedJobData.ST01D1001}
              customer={stagedJobData.ST01D1003}
              dataTemp={stagedJobData}
              service={item.SP01D1002}
              // st01_D1002={stagedJobData.ST01D1002}
            />
          ))}
        </div>
        {/* ^ Service Selection */}
      </section>
    </>
  );
}

export default JobService;

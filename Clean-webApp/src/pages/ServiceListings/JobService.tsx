import { useEffect, useState } from "react";

// Components
import NavBar from "../../components/JobPosting/NavBar/NavBar";
import ServicePoster from "../../components/JobPosting/JobServices/ServicePoster";

// Connections
import { _fetchService } from "../../connections/ServiceFetch";
import { db } from "../../config/firestore";
import { collection, getDocs } from "firebase/firestore";

function JobService() {
  const [response, setResponse] = useState<{ [key: string]: string }[]>([]);

  const [fireResponse, setFireResponse] = useState([]);
  const [temp, setTemp] = useState({});

  const getFireServices = async () => {
    const querySnapshot = await getDocs(collection(db, "SP03_Services"));
    const serv = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTemp(serv);
  };

  useEffect(() => {
    getFireServices();
    _fetchService().then((data) => {
      setResponse(data);
    });
  }, []);

  useEffect(() => {
    console.log(temp);
  }, [temp]);

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
          {response.map((item, index) => (
            <ServicePoster
              title={item.Service}
              descript={item.Description}
              key={index}
              route={item.Route}
            />
          ))}
        </div>

        {/* Service Selection */}
      </section>
    </>
  );
}

export default JobService;

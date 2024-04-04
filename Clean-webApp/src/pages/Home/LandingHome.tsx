import { Link, useNavigate } from "react-router-dom";
import {
  getJobCreationTemp,
  postHandleJobCreation,
} from "../../connections/HandleJobCreation";
import { useEffect, useState } from "react";
import { getDataTemp } from "../../connections/DataTemps";

function LandingHome() {
  //Initialize Navigate
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
  }, [stagedJobData]);

  const [stagedJobHash, setStagedJobHash] = useState("no_log_sorry");
  useEffect(() => console.log(stagedJobHash), [stagedJobHash]);

  const testJob = "testJob";
  const testCustomer = "testCustomer";

  return (
    <button
      onClick={() => {
        postHandleJobCreation({
          ...stagedJobData,
          D1001: testJob,
          D1003: testCustomer,
        }).then((data) => {
          setStagedJobHash(data.response);
          console.log(stagedJobData);
          navigate(`/JourneyStart/${data.response}`);
        });
      }}
    >
      JOB
    </button>
  );
}

export default LandingHome;

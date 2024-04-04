import NavBar from "../../components/JobPosting/NavBar/NavBar";

function JourneyFinal() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timeOfDay = [
    "Early Morning (5am - 7am)",
    "Morning (7am - 11am)",
    "Afternoon (12pm - 4pm)",
    "Evening (4pm - 8pm)",
    "Night (9pm - 12am)",
    "Overnight (12am - 4am)",
  ];
  return (
    <>
      <NavBar />
      <section className="items-center flex flex-col">
        {/* Title */}
        <div className="h-1/5 flex flex-col justify-center items-center">
          <h1 className="font-semibold text-4xl mb-2">
            We just need to "Iron" out a few more details
          </h1>
          <h2 className="text-left w-full italic">--Pun intended</h2>
        </div>

        {/* ^Title */}

        {/* Form */}
        <div className="bg-white p-5 m-5 w-1/2 shadow-lg border">
          <form className="w-1/2">
            {/* Ava */}
            <div className="m-5">
              <h1 className="font-bold">Availability</h1>
              <div className="flex flex-row">
                <div className="mx-2">
                  <h2 className="mt-1">Days</h2>
                  <select name="days" id="days" className="p-2">
                    {daysOfWeek.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                    <option>Sunday</option>
                  </select>
                </div>
                <div className="mx-2">
                  <h2 className="mt-1">Time of Day</h2>
                  <select name="timeday" id="timeday" className="p-2">
                    {timeOfDay.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            {/* Ava */}
            <div className="m-5">
              <h1 className="font-bold">Postal Code</h1>
              <input className="border-black border text-lg p-2"></input>
            </div>
            <div className="m-5">
              <h1 className="font-bold">Email</h1>
              <input className="border-black border text-lg p-2"></input>
            </div>
            <div className="m-5">
              <h1 className="font-bold">Phone Number</h1>
              <input className="border-black border text-lg p-2"></input>
            </div>
          </form>
        </div>
        {/* Form */}
      </section>
    </>
  );
}

export default JourneyFinal;

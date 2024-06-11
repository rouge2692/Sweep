const sweepServer = "http://99.79.64.241:8080";

// Sweep Server
export const fetchService = async () => {
  try {
    const resp = await fetch(sweepServer + "/getServices", {
      mode: "cors",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const _fetchService = async () => {
  try {
    const resp = await fetch(sweepServer + "/getSP01Services", {
      mode: "cors",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchProperties = async (SP02D1002: string) => {
  try {
    const resp = await fetch(
      sweepServer + "/getSP02ServicesProps/" + SP02D1002,
      {
        mode: "cors",
      }
    );
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchPropBuilds = async (SP03D1007: any) => {
  try {
    const resp = await fetch(sweepServer + "/getSP03PropBuilds/" + SP03D1007, {
      mode: "cors",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchSerRooms = async (SP05D1016: any) => {
  try {
    const resp = await fetch(sweepServer + "/getSP05SerRooms/" + SP05D1016, {
      mode: "cors",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchTasks = async () => {
  try {
    const resp = await fetch(sweepServer + "/getSPXTaskList", {
      mode: "cors",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchRegions = async () => {
  try {
    const resp = await fetch(sweepServer + "/getCities", {
      mode: "cors",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

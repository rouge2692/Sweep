const sweepServer = "http://localhost:8080";

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

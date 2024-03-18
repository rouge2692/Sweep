const sweepServer = "http://localhost:8080";

// Sweep Server
export const _fetchData = async () => {
  try {
    const resp = await fetch(sweepServer + "/getRooms", {
      mode: "cors",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

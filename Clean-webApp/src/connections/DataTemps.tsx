const sweepServer = "http://localhost:8080";

export const getDataTemp = async (a = "") => {
  try {
    const resp = await fetch(sweepServer + "/getDataTemp/" + a, {
      mode: "cors",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

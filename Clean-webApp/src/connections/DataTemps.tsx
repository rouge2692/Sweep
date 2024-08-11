// const sweepServer = "http://99.79.64.241:8080";
const sweepServer = "http://192.168.1.25:8080";

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

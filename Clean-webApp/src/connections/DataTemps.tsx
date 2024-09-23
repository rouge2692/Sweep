// const sweepServer = "http://99.79.64.241:8080";
// const sweepServer = "http://192.168.1.25:8080";
// const sweepServer = "http://172.20.10.13:8080"; // HotSpot
// const sweepServer = "http://10.88.111.3:8080";
// const sweepServer = "http://172.16.65.178:8080";
// const sweepServer = "http://192.168.0.135:8080"; // Sentimental
// const sweepServer = "http://192.168.0.173:8080"; // 22Side
const sweepServer = "http://192.168.0.172:8080"; // Sep23 22Side

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

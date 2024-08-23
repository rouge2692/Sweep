// const sweepServer = "http://99.79.64.241:8080";
// const sweepServer = "http://192.168.1.25:8080"; //Moms Home
// const sweepServer = "http://172.20.10.13:8080";
const sweepServer = "http://10.88.111.3:8080";

export const postProfcuen = async (a = {}) => {
  try {
    const pack = await fetch(sweepServer + "/postSP00Profcuenta", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(a),
    });
    return await pack.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// const sweepServer = "http://99.79.64.241:8080";
// const sweepServer = "http://192.168.1.25:8080"; // Moms Home
// const sweepServer = "http://172.20.10.13:8080"; // HotSpot
// const sweepServer = "http://10.88.111.3:8080";
// const sweepServer = "http://172.16.65.178:8080";
// const sweepServer = "http://192.168.0.135:8080"; // Sentimental
// const sweepServer = "http://192.168.0.173:8080"; // 22Side
const sweepServer = "http://192.168.0.172:8080"; // Sep23 22Side

//inital creation - hard coded db
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

//temp creation - volatile db
export const postNewCuenta = async (a = {}) => {
  try {
    const pack = await fetch(sweepServer + "/handleNewCuenta", {
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

// get account info
export const getCuenta = async (ST02D1002 = "") => {
  try {
    const resp = await fetch(sweepServer + "/getprofcuenta/" + ST02D1002, {
      mode: "cors",
    });
    return await resp.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const postCities = async (st02D1002 = "", a: any) => {
  try {
    const pack = await fetch(sweepServer + "/CitiesSPXST02/" + st02D1002, {
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

export const postProps = async (st02D1002 = "", a: any) => {
  try {
    const pack = await fetch(
      sweepServer + "/profCuentaProperties/" + st02D1002,
      {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(a),
      }
    );
    return await pack.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

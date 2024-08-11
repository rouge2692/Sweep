// const sweepServer = "http://99.79.64.241:8080";
const sweepServer = "http://192.168.1.25:8080";

export const postCuenta = async (a = {}) => {
    try {
      const pack = await fetch(sweepServer, {
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
const sweepServer = "http://localhost:8080";

export const postHandleJobCreation = async (a = {}, D1002: any) => {
  try {
    const pack = await fetch(sweepServer + `/handleJobCreation/${D1002}`, {
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

export const getJobCreationTemp = async (D1002 = "") => {
  try {
    const resp = await fetch(sweepServer + `/handleJobCreation/${D1002}`, {
      mode: "cors",
      method: "GET",
    });
    // const resp = await fetch(url + "/_readonhand", { mode: "cors" });
    return await resp.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const refreshCustomerJobs = async (D1003 = "") => {
  try {
    const pack = await fetch(sweepServer + `/refreshST01`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(D1003),
    });
    return await pack.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

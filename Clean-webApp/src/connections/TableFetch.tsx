const apiServer = "http://127.0.0.1:8080";
const sweepServer = "http://localhost:5555";

// Sweep Server
export const _fetchData = async () => {
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

// bells Server
export const _fetchTable = async () => {
  const resp = await fetch(apiServer + "/_tableView", { mode: "cors" });
  return await resp.json();
};

export const fetchTable = async () => {
  const resp = await fetch(apiServer + "/tableView", { mode: "cors" });
  return await resp.json();
};

export async function fetchVisible(param: string, paramb: string[]) {
  if (param == "GET") {
    const resp = await fetch(apiServer + "/tableVisible", { mode: "cors" });
    return await resp.json();
  }
  if (param == "POST") {
    const resp = await fetch(apiServer + "/tableVisible", {
      method: param,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paramb),
      mode: "cors",
    });
    return await resp.json();
  }
}

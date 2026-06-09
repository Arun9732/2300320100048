const axios = require("axios");

const DEPOT_URL = "http://4.224.186.213/evaluation-service/depots";

async function fetchDepotData() {
  const response = await axios.get(DEPOT_URL, {
    headers: {
      Authorization: process.env.TOKEN,
    },
  });

  return response.data;
}

module.exports = {
  fetchDepotData,
};

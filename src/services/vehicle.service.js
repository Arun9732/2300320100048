const axios = require("axios");

async function fetchVehicles() {
    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/vehicles",
        {
            headers: {
                Authorization: process.env.TOKEN
            }
        }
    );

    return response.data;
}

module.exports = { fetchVehicles };
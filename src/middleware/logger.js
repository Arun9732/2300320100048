const axios = require("axios");

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/logs",
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: process.env.TOKEN
                }
            }
        );

        return response.data;

    } catch (error) {
        console.log("Logger Error:", error.response?.data || error.message);
    }
}

module.exports = Log;
const axios = require("axios");

async function getToken() {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
            {
                email: "arun23b0101157@abes.ac.in",
                name: "Arun kumar",
                rollNo: "2300320100048",
                accessCode: "cXuqht",
                clientID: "cb188c3e-2cee-4908-9986-28407b413e62",
                clientSecret: "estyUHfgjtpGckKc"
            }
        );

        console.log(response.data);

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
}

getToken();
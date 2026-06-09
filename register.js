const axios = require("axios");

async function register() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",
      {
        email: "arun23b0101157@abes.ac.in",
        name: "Arun Kumar",
        mobileNo: "9911599732",
        githubUsername: "Arun9732",
        rollNo: "2300320100048",
        accessCode: "cXuqht"
      }
    );

    console.log(response.data);

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

register();
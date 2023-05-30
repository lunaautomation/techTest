const axios = require("axios");

const getRequest = (url) => {
  try {
    return axios.get(url);
  } catch (e) {
    console.error("error occured when sending GET request", e);
    throw e;
  }
};

module.exports = {
  getRequest,
};

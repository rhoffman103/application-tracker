import axios from "axios";

export default {
    // Add a user to the database
  addUser: function(userData) {
    console.log("register new user request");
    console.log(userData);
    return axios.post("/api/user", userData);
  }, 

  login: function(userData) {
    console.log("login user request");
    console.log(userData);
    return axios.post("/api/v1/login", userData);
  },

  logout: () => {
    return axios.get("/api/v1/logout");
    },

  // Get current User
  getUser: function() {
    return axios.get("/api/v1/user");
  },

  checkRegisteredUsernames: function(key) {
    return axios.post(`/api/v1/usernamesearch/`, key);
  },

  checkRegisteredEmails: function(key) {
    return axios.post(`/api/v1/emailsearch/`, key);
  }
}
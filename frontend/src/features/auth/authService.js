import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://merngoalappbola.herokuapp.com", //http://localhost:5000
});

const API_URL = "/api/users/";

// Register user
const register = async (userData) => {
  const response = await axiosInstance.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axiosInstance.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// logout user
const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

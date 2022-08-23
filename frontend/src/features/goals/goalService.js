import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://merngoalappbola.herokuapp.com", //http://localhost:5000
});

const API_URL = "/api/goals/";

// Create a goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axiosInstance.post(API_URL, goalData, config);

  return response.data;
};

// Get all user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axiosInstance.get(API_URL, config);

  return response.data;
};

// Delete user goals
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axiosInstance.delete(API_URL + goalId, config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
};

export default goalService;

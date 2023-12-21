import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const LoginServices = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default LoginServices;

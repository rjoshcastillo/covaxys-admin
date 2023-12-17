import axios from "axios";

const BASE_URL = "http://192.168.0.102:3000/api";

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

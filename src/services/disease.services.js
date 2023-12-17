import axios from "axios";

const BASE_URL = "http://192.168.0.102:3000/api";

const DiseaseServices = {
  getDiseases: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-diseases`);
      return response.data;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
  },

  addDisease: async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-disease`, data);
      return response.data;
    } catch (error) {
      console.error('Error adding disease:', error);
      throw error;
    }
  },

  deleteDisease: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-disease?id=${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting disease with id of "${id}":`);
      throw error;
    }
  },

  getDiseaseByName: async (name) => {
    try {
      const response = await axios.get(`${BASE_URL}/get-disease?name=${name}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching disease by name "${name}":`);
      throw error;
    }
  },
};

export default DiseaseServices;

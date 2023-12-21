import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;


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
      console.error("Error adding disease:", error);
      throw error;
    }
  },

  deleteDisease: async (id) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/delete-disease?id=${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error deleting disease with id of "${id}":`);
      throw error;
    }
  },

  updateDisease: async (id, updatedData) => {
    try {
      const response = await axios.put(`${BASE_URL}/update-disease`, {
        id,
        ...updatedData,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating disease:", error);
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

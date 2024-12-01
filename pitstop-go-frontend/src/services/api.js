import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Adjust according to your backend.

export const fetchStations = async (query) => {
  try {
    const response = await axios.post(`${API_URL}/search`, { query });
    return response.data;
  } catch (error) {
    console.error("Error fetching stations:", error);
    throw error;
  }
};

// TODO: add types
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// TODO: add types
export const fetchData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/data`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
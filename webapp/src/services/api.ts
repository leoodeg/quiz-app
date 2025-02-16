/* Note: Conditional requirement for prefix '/api' is due to nginx
identification from UI to API this is for improvement */

const API_BASE_URL = import.meta.env.VITE_API_URL;
const FORMATTED_API_BASE_URL = API_BASE_URL ? `${API_BASE_URL}/api/data` : "http://localhost:5000/data"

// TODO: add types
export const fetchData = async () => {
  try {
    const response = await fetch(FORMATTED_API_BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};



// src/apis/userApi.js
export const getAllUserProfiles = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/details/personal-details'); // Adjust the URL as needed
  
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.data; // Assuming the user data is inside `data.data`
    } catch (error) {
      console.error("An error occurred while fetching user data:", error);
      return null;
    }
  };
  
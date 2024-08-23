
import axios from "axios";

const backendUrl = "http://localhost:8080/api/v1/details";



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

  



  export const saveUser = async (userData, image) => {
    try {
      const formData = new FormData();
  
      // Convert image to base64 string
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        const base64Image = reader.result;
        formData.append('profileImage', base64Image);
      };
  
      formData.append('userData', JSON.stringify(userData));
  
      const response = await axios.post(`${backendUrl}/personal-details`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error("Failed to save user", error);
      throw error; // Re-throw error for handling in the component
    }
  };


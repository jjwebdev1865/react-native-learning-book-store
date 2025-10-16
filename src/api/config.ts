import axios from "axios";
import { Alert } from "react-native";

const endpointUrl = "https://68ee7c4fdf2025af7803dc4f.mockapi.io/books";

export const getBooksList = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(endpointUrl);
    onSuccess && onSuccess(response);
  } catch (error) {
    console.error("Error fetching books:", error);
    onError && onError(error);
  }
};

export const getBookById = async ({ onSuccess, onError }) => {
  try {
    const response = await axios.get(`${endpointUrl}/1`);
    console.log("response", JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response);
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    onError && onError(error);
  }
};

export const deleteBookById = async ({ onSuccess, onError, itemId }) => {
  try {
    const response = await axios.delete(`${endpointUrl}/${itemId}`);
    console.log("response", JSON.stringify(response.data, null, 3));
    Alert.alert("Book deleted successfully");
    onSuccess && onSuccess(response);
  } catch (error) {
    console.error("Error deleting book by ID:", error);
    onError && onError(error);
  }
};

export const createBook = async ({ onSuccess, onError, body }) => {
  try {
    const response = await axios.post(endpointUrl, body);
    console.log("response", JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response);
  } catch (error) {
    console.error("Error creating book:", error);
    onError && onError(error);
  }
};

export const updateBook = async ({ onSuccess, onError, body, id }) => {
  try {
    const response = await axios.put(`${endpointUrl}/${id}`, body);
    console.log("response", JSON.stringify(response.data, null, 3));
    onSuccess && onSuccess(response);
  } catch (error) {
    console.error("Error creating book:", error);
    onError && onError(error);
  }
};

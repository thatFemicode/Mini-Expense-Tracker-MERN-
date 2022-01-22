import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: 'https://nbablogapp.herokuapp.com/',
});
export const fetchTransactions = () => API.get("/transactions");
export const createTransaction = (newPost) =>
  API.post("/transactions", newPost);
export const delTransaction = (id) => API.delete(`/transactions/${id}`);

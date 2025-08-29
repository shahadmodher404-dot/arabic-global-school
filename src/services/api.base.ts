import axios from "axios";

export const API = axios.create({
    baseURL: "",
    timeout: 10000,
});

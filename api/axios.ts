import axios from "axios";
import { BASE_URL } from "@/constants/api";

export const _axios = axios.create({
  baseURL: BASE_URL,
});

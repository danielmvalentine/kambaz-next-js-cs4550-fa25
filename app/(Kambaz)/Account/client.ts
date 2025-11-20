import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const USERS_API = `${HTTP_SERVER}/api/users`;

const axiosWithCredentials = axios.create({
  baseURL: USERS_API,
  withCredentials: true,
});

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post("/signin", credentials);
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post("/signup", user);
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.get("/profile");
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put("/profile", user);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post("/signout");
  return response.data;
};
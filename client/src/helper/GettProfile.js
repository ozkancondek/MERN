import axios from "axios";

export const fetchuser = async () => {
  const response = await axios.get("http://localhost:5000/api/profile");
  return response?.data;
};

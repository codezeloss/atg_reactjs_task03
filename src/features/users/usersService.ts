import axios from "axios";
import { base_url } from "../../utils/base_url.ts";

const getUsers = async () => {
  const response = await axios.get(`${base_url}users/`);
  return response.data;
};

const getUser = async (id: string) => {
  const response = await axios.get(`${base_url}users/${id}`);
  return response.data;
};

const usersService = {
  getUsers,
  getUser,
};
export default usersService;

import { urlConfig } from "../../config";
import { apiGet } from "./_https.service";

const { apiUrl } = urlConfig;
const apiEndpoint = apiUrl + "users";

export const getAllUsers = async (options = {}) => {
  return await apiGet(`${apiEndpoint}`, { ...options });
};

export const getUserById = async (userId: string) => {
  return await apiGet(`${apiEndpoint}/${userId}`);
};

export const suspendUserById = async (userId: string, options = {}) => {
  return await apiGet(`${apiEndpoint}/${userId}/suspend`, { ...options });
};

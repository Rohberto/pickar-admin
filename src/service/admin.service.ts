import { urlConfig } from "../../config";
import { apiGet, apiPost } from "./_https.service";

const { apiUrl } = urlConfig;
const apiEndpoint = apiUrl + "auth";

export const getAdminDetails = async () => {
  return await apiGet(`${apiEndpoint}/me`);
};

export const createAdminAccount = async () => {
  return await apiPost(`${apiEndpoint}/create`);
};

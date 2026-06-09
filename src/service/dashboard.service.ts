import { urlConfig } from "../../config";
import { apiGet } from "./_https.service";

const { apiUrl } = urlConfig;
const apiEndpoint = apiUrl + "dashboard";

export const getDashboardData = async (options = {}) => {
  return await apiGet(`${apiEndpoint}`, { ...options });
};

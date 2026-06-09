import { urlConfig } from "../../config";
import { apiGet } from "./_https.service";

const { apiUrl } = urlConfig;
const apiEndpoint = apiUrl + "payments";

export const getPaymentData = async (options = {}) => {
  return await apiGet(`${apiEndpoint}`, { ...options });
};

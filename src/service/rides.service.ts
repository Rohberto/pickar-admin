import { urlConfig } from "../../config";
import { apiGet } from "./_https.service";

const { apiUrl } = urlConfig;
const apiEndpoint = apiUrl + "deliveries";

export const getAllRides = async (options = {}) => {
  return await apiGet(`${apiEndpoint}`, { ...options });
};
export const getRideById = async (rideId: string) => {
  return await apiGet(`${apiEndpoint}/${rideId}`);
};

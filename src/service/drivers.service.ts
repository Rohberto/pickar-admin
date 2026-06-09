import { urlConfig } from "../../config";
import { apiGet, apiPatch } from "./_https.service";

const { apiUrl } = urlConfig;
const apiEndpoint = apiUrl + "drivers";

export const getAllDrivers = async (options = {}) => {
  return await apiGet(`${apiEndpoint}`, { ...options });
};

export const getDriverById = async (driverId: string) => {
  return await apiGet(`${apiEndpoint}/${driverId}`);
};

export const updateDriverApplication = async (
  driverId: string,
  options = {},
) => {
  return await apiPatch(`${apiEndpoint}/${driverId}/approval`, {
    ...options,
  });
};

export const suspendDriverById = async (driverId: string, options = {}) => {
  return await apiPatch(`${apiEndpoint}/${driverId}/suspend`, { ...options });
};

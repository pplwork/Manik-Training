const API_ROOT = "http://localhost:3000";

export const APIUrls = {
  login: () => `${API_ROOT}/auth/login`,
  signup: () => `${API_ROOT}/auth/signup`,
  fetchApartments: () => `${API_ROOT}/apartments`,
  createApartment: () => `${API_ROOT}/apartments`,
  changeApartment: (appId) => `${API_ROOT}/apartments/${appId}`,
};

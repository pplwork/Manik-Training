const API_ROOT = "http://192.168.1.6:3000";

export const APIUrls = {
  login: () => `${API_ROOT}/auth/login`,
  signup: () => `${API_ROOT}/auth/signup`,
  fetchApartments: () => `${API_ROOT}/apartments`,
  fetchFilterApartments: (Price, Rooms, size) =>
    `${API_ROOT}/apartments?sizeMin=${size[0]}&sizeMax=${size[1]}&PriceMin=${
      Price[0] * 1000
    }&PriceMax=${Price[1] * 1000}&RoomsMin=${Rooms[0]}&RoomsMax=${Rooms[1]}`,
  createApartment: () => `${API_ROOT}/apartments`,
  changeApartment: (appId) => `${API_ROOT}/apartments/${appId}`,
  deleteApartment: (appId) => `${API_ROOT}/apartments/${appId}`,
  fetchUser: (email) => `${API_ROOT}/users/${email}`,
  updateUser: (id) => `${API_ROOT}/users/${id}`,
  deleteUser: (id) => `${API_ROOT}/users/${id}`,
};

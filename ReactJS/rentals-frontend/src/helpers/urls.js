// const API_ROOT = "https://rentals-backend-app.herokuapp.com";
const API_ROOT = "http://localhost:3000";

export const APIUrls = {
  login: () => `${API_ROOT}/auth/login`,
  signup: () => `${API_ROOT}/auth/signup`,
  logout: () => `${API_ROOT}/auth/logout`,
  fetchApartments: (offset) =>
    `${API_ROOT}/apartments?offset=${offset}&limit=5`,
  fetchFilterApartments: (Price, Rooms, size, offset) =>
    `${API_ROOT}/apartments?sizeMin=${size[0]}&sizeMax=${size[1]}&PriceMin=${
      Price[0] * 1000
    }&PriceMax=${Price[1] * 1000}&RoomsMin=${Rooms[0]}&RoomsMax=${
      Rooms[1]
    }&offset=${offset || 0}&limit=5`,
  createApartment: () => `${API_ROOT}/apartments`,
  changeApartment: (appId) => `${API_ROOT}/apartments/${appId}`,
  deleteApartment: (appId) => `${API_ROOT}/apartments/${appId}`,
  fetchUser: (email) => `${API_ROOT}/users/${email}`,
  updateUser: (id) => `${API_ROOT}/users/${id}`,
  deleteUser: (id) => `${API_ROOT}/users/${id}`,
};

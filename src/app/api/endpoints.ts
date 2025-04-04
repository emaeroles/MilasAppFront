const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const ENDPOINTS = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/user`,
  },
  KIOSCOS: {
    GET_ACTIVES: (userId: string) => `${BASE_URL}/kiosco/${userId}/get-actives`,
  },
};

export default ENDPOINTS;

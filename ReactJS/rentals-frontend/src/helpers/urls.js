const API_ROOT = 'http://localhost:3000';

export const APIUrls = {
    login:()=>`${API_ROOT}/auth/login`,
    signup:()=>`${API_ROOT}/auth/signup`
}
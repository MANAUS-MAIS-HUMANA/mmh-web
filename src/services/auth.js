import jwt from 'jsonwebtoken';

export const TOKEN_KEY = "@token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
        return false;
    }

    const decodedToken = jwt.decode(token);
    if (!decodedToken) {
        return false;
    }

    const now = new Date();
    const isExpired = now.getTime() > decodedToken.exp * 1000;

    return !isExpired;
}

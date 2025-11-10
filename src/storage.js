export const STORAGE_KEY = "users_db";
export const AUTH_KEY = "auth_user";

export const loadUsers = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
export const saveUsers = (users) => localStorage.setItem(STORAGE_KEY, JSON.stringify(users));

export const setAuth = (email) => localStorage.setItem(AUTH_KEY, JSON.stringify({ email }));
export const getAuth = () => JSON.parse(localStorage.getItem(AUTH_KEY) || null);
export const clearAuth = () => localStorage.removeItem(AUTH_KEY);

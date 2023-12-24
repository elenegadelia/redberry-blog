export const API_BASE = `${process.env.NEXT_PUBLIC_APP_API_ENDPOINT}/api`;

export const AUTH_LOGIN = `${API_BASE}/login`;

export const FETCH_CATEGORIES = `${API_BASE}/categories`;

export const CREATE_BLOG = `${API_BASE}/blogs`;
export const FETCH_BLOGS = `${API_BASE}/blogs`;
export const FETCH_BLOG = (id: number) => `${API_BASE}/blogs/${id}`;

export const FETCH_TOKEN = `${API_BASE}/token`;

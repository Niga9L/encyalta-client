import axios from 'axios';

const api = axios.create({
  baseURL: '/api/v1',
});

export const endpoints = {
  login: (): string => `auth/login`,
};

export { api };

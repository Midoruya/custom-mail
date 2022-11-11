import { api as axios } from 'boot/axios';

async function login(email: string, password: string) {
  const response = await axios.post('/auth/login', {
    mail: email,
    password: password,
  });
  return response.data;
}

async function register(email: string, password: string) {
  const response = await axios.post('/auth/register', {
    mail: email,
    password: password,
  });
  return response.data;
}

export default {
  login,
  register,
};

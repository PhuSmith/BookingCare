import axios from '../axios';

const handleLoginApi = (email, password) => {
  return axios.post('/api/login', { email, password });
};

export const getAllUsers = (id) => {
  return axios.get(`/api/get-all-users?id=${id}`);
};

export const createNewUserService = (data) => {
  return axios.post('/api/create-new-user', data);
};

export const deleteUserService = (id) => {
  return axios.delete('/api/delete-user', { data: { id } });
};

export const editUserService = (data) => {
  return axios.put('/api/edit-user', data);
};

export const getAllCodeService = (inputType) => {
  return axios.get(`/api/allcode?type=${inputType}`);
};

export default handleLoginApi;
